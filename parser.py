
import re
import json
import os

def parse_p1(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split Questions and Answers
    parts = re.split(r'解答と解説', content)
    q_part = parts[0]
    a_part = parts[1] if len(parts) > 1 else ""

    questions = []
    
    # Parse Questions lines
    # Format: 
    # (1) Q text
    # 1. opt1 / 2. opt2 / 3. opt3 / 4. opt4 (sometimes "opt1 / 2. opt2...")
    
    lines = q_part.split('\n')
    current_q = None
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Start of Question (1) ...
        m_q = re.match(r'^\((\d+)\)\s+(.*)$', line)
        if m_q:
            q_num = int(m_q.group(1))
            q_text = m_q.group(2)
            current_q = {"id": f"m1_{q_num}", "type": "choice", "q": q_text, "cat": "模擬 大問1"}
            questions.append(current_q)
            continue
        
        # Options
        if current_q and 'a' not in current_q:
            # Try to match options
            # They are slash separated: "since / 2. for / 3. during / 4. when"
            # Sometimes "1. " is missing at start, usually implicitly 1.
            
            # Normalize: replace "1. ", "2. ", etc with just split char
            # But the text might contain numbers.
            # Best way: split by " / "
            opts = line.split(' / ')
            # Clean up "2. ", "3. " prefixes
            clean_opts = []
            for opt in opts:
                opt = re.sub(r'^\d+\.\s*', '', opt)
                clean_opts.append(opt)
            
            if len(clean_opts) == 4:
                current_q['a'] = clean_opts
        
    # Parse Answers
    # Format:
    # (1) 
    # 1
    #  (since)：過去の起点。 (2) ...
    # This is tricky because of newlines.
    
    # Let's normalize key info
    # Find patterns like (num) \n ans_num \n (ans_word)：explanation
    
    # Regex for answer block
    # We can iterate through the text looking for (num)
    
    # Strategy: Remove all newlines to process as stream? No, structure is line-based.
    
    # Let's simple scan.
    block_pattern = re.compile(r'\((\d+)\)\s*\n\s*(\d)\s*\n\s*\((.*?)\)：(.*?)(?=\(\d+\)|$)', re.DOTALL)
    # Actually the text has (num) then next line num.
    
    # Let's normalize whitespace
    a_text = a_part
    
    # Find all matches
    # The regex needs to be loose about whitespace
    # pattern: (N) \s* M \s* (WORD)：EXP
    matches = re.findall(r'\((\d+)\)\s*\n\s*(\d)\s*\n\s*\((.*?)\)[：:](.*?)(?=\(\d+\)|\Z)', a_text, re.DOTALL)
    
    ans_map = {}
    for m in matches:
        q_num = int(m.group(1))
        ans_idx = int(m.group(2)) - 1 # 0-indexed
        correct_word = m.group(3).strip()
        exp = m.group(4).strip()
        
        ans_map[q_num] = {"correct": ans_idx, "exp": exp}

    # Merge
    final_data = []
    for q in questions:
        q_num = int(q['id'].split('_')[1])
        if q_num in ans_map:
            q['correct'] = ans_map[q_num]['correct']
            q['exp'] = ans_map[q_num]['exp']
            final_data.append(q)
        else:
            # Fallback if parsing failed
            # print(f"Missing answer for {q_num}")
            pass
            
    return final_data

def parse_p2(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = re.split(r'解答とポイント', content)
    q_part = parts[0]
    a_part = parts[1] if len(parts) > 1 else ""

    questions = []
    lines = q_part.split('\n')
    current_q = None

    for line in lines:
        line = line.strip()
        if not line: continue
        
        m_q = re.match(r'^\((\d+)\)\s+(.*)$', line)
        if m_q:
            q_num = int(m_q.group(1))
            jp_text = m_q.group(2)
            current_q = {"id": f"m2_{q_num}", "type": "scramble", "jp": jp_text, "cat": "模擬 大問2"}
            questions.append(current_q)
            continue
            
        if current_q and 'words' not in current_q:
            # Format: I am ( forward / looking / moving / to ) to a new house.
            # Extract fixed parts and words
            m_s = re.match(r'(.*)\(\s*(.*)\s*\)(.*)', line)
            if m_s:
                fixed_pre = m_s.group(1).strip()
                words_str = m_s.group(2).strip()
                fixed_post = m_s.group(3).strip()
                
                words = [w.strip() for w in words_str.split('/')]
                current_q['fixed'] = [fixed_pre, fixed_post]
                current_q['words'] = words

    # Parse Answers
    # (1) 
    # looking forward to moving
    #  (look forward to ~ing: 〜を楽しみに待つ)
    
    matches = re.findall(r'\((\d+)\)\s*\n\s*(.*?)\s*\n\s*\((.*?)\)(?=\(\d+\)|\Z)', a_part, re.DOTALL)
    
    ans_map = {}
    for m in matches:
        q_num = int(m.group(1))
        correct = m.group(2).strip()
        exp = m.group(3).strip()
        ans_map[q_num] = {"correct": correct, "exp": exp}
        
    final_data = []
    for q in questions:
        q_num = int(q['id'].split('_')[1])
        if q_num in ans_map:
            q['correct'] = ans_map[q_num]['correct']
            q['exp'] = ans_map[q_num]['exp']
            final_data.append(q)
            
    return final_data

def parse_p3(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = re.split(r'解答と解説', content)
    q_part = parts[0]
    a_part = parts[1] if len(parts) > 1 else ""
    
    questions = []
    
    # P3 questions are multi-line.
    # Split by (N)
    # We can use regex split but keep delimiter
    
    q_tokens = re.split(r'^\((\d+)\)\s+', q_part, flags=re.MULTILINE)
    # q_tokens[0] is header
    # q_tokens[1] is '1', q_tokens[2] is text for q1, q_tokens[3] is '2', ...
    
    for i in range(1, len(q_tokens), 2):
        q_num = int(q_tokens[i])
        block = q_tokens[i+1]
        
        # Block contains conversation and options.
        # Options are on the last line usually? Or separate lines?
        # Typically:
        # A: ...
        # B: ...
        # 1. ... / 2. ...
        
        block_lines = block.strip().split('\n')
        
        # Conversation is everything until the options line.
        # Options line starts with "1. "
        conv_lines = []
        options = []
        
        for line in block_lines:
            line = line.strip()
            if line.startswith('1. '):
                # This is options
                # 1. opt1 / 2. opt2 ...
                parts_o = re.split(r'\s+/\s+\d+\.\s+', line)
                # First part includes "1. "
                parts_o[0] = re.sub(r'^1\.\s+', '', parts_o[0])
                options = [p.strip() for p in parts_o]
            else:
                conv_lines.append(line)
        
        q_text = "\n".join(conv_lines).strip()
        
        questions.append({
            "id": f"m3_{q_num}",
            "type": "choice",
            "q": q_text,
            "a": options, 
            "cat": "模擬 大問3"
        })

    # Answers
    # (1) 
    # 2
    # ：Aの "Anything else?"...
    
    matches = re.findall(r'\((\d+)\)\s*\n\s*(\d)\s*\n\s*[:：](.*?)(?=\(\d+\)|\Z)', a_part, re.DOTALL)
    
    ans_map = {}
    for m in matches:
        q_num = int(m.group(1))
        ans_idx = int(m.group(2)) - 1
        exp = m.group(3).strip()
        ans_map[q_num] = {"correct": ans_idx, "exp": exp}
        
    final_data = []
    for q in questions:
        q_num = int(q['id'].split('_')[1])
        if q_num in ans_map:
            q['correct'] = ans_map[q_num]['correct']
            q['exp'] = ans_map[q_num]['exp']
            final_data.append(q)
            
    return final_data

data = {}
try:
    data['mockP1Data'] = parse_p1('raw_p1.txt')
    data['mockP2Data'] = parse_p2('raw_p2.txt')
    data['mockP3Data'] = parse_p3('raw_p3.txt')
    
    # Save to file
    with open('mock_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    print("Success: Generated mock_data.json")
    print(f"P1 counts: {len(data['mockP1Data'])}")
    print(f"P2 counts: {len(data['mockP2Data'])}")
    print(f"P3 counts: {len(data['mockP3Data'])}")

except Exception as e:
    print(f"Error: {e}")
