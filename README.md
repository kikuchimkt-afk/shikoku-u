# 四国大学 英語入試対策アプリ

四国大学の英語入試を完全対策するWebアプリケーションです。

## 🌐 サイト構成

| URL | ファイル | 内容 |
|-----|----------|------|
| `/` | index.html | トップページ（ナビゲーション） |
| `/app` | app.html | メインアプリ（問題演習） |
| `/dashboard` | dashboard.html | 入試分析ダッシュボード |

## 📚 収録コンテンツ

- **過去問 53問**（大問1〜4すべて収録）
- **模擬試験 200問**（大問1形式100問、大問2形式50問、大問3形式50問）
- **全問詳細解説付き**
- **苦手問題自動記録機能**

## 🚀 Vercelへのデプロイ手順

### 1. GitHubリポジトリの作成

```bash
cd "c:\Users\makoto\Documents\アプリ開発\Shikoku-U"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shikoku-u-english.git
git push -u origin main
```

### 2. Vercelでデプロイ

1. [Vercel](https://vercel.com) にログイン
2. 「Add New Project」をクリック
3. GitHubリポジトリを選択
4. 「Deploy」をクリック

### 3. デプロイ完了！

デプロイ後、以下のURLでアクセス可能：
- `https://your-project.vercel.app/` - トップページ
- `https://your-project.vercel.app/app` - 問題演習
- `https://your-project.vercel.app/dashboard` - 分析ダッシュボード

## 📁 ファイル構成

```
Shikoku-U/
├── index.html       # トップページ
├── app.html         # メインアプリ（問題演習）
├── dashboard.html   # 入試分析ダッシュボード
├── exam_data.js     # 問題データ（使用しない場合あり）
├── vercel.json      # Vercel設定
├── .gitignore       # Git除外設定
└── README.md        # このファイル
```

## 🔧 ローカル開発

ブラウザで `index.html` を直接開くだけで動作します。

## 📄 ライセンス

© 2026 四国大学英語入試対策アプリ
