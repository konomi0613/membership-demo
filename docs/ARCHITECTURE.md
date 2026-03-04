# システム構成

## 全体構成

```
Next.js（フロントエンド）
  ↓
Netlify（デプロイ）← 無料・商用OK
  ↓
microCMS（コンテンツ管理）
  ├─ 講座
  ├─ カテゴリ
  ├─ お知らせ
  └─ メンバー紹介
  ↓
Supabase（認証・データベース）← 無料
  ├─ Auth（認証機能）
  │   ├─ ログイン/ログアウト
  │   ├─ 会員登録
  │   └─ パスワード変更
  └─ Database（PostgreSQL）
      ├─ users（ユーザー情報）
      ├─ profiles（プロフィール）
      ├─ enrollments（受講履歴）
      ├─ progress（進捗管理）
      └─ subscriptions（プラン情報）
  ↓
Stripe（決済）← 無料（手数料のみ）
  ├─ Stripe Checkout
  ├─ Webhook（プラン更新）
  └─ サブスクリプション管理
  
```

---

## 使用技術
```
フロントエンド：
- Next.js 16
- TypeScript
- CSS Modules / Tailwind CSS

バックエンド：
- Supabase（認証・DB）
- microCMS（コンテンツ）

決済：
- Stripe

デプロイ：
- Netlify

```

## 技術選定の理由

### microCMS
非エンジニアでも講座コンテンツを管理できるよう、HeadlessCMSを採用

### Supabase
- PostgreSQL ベースで拡張性が高い
- 認証機能が標準装備
- Next.jsとの相性が良い

### Netlify
- 無料プランで商用利用可能
- 小規模案件に最適
- 大規模化時はVercel移行を検討

### Stripe
- 日本での決済に対応
- Webhookで自動化
- テストモード充実
