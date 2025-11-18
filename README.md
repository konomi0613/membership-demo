# WordPressテーマ開発講座 会員システム

オンライン講座の会員向けプラットフォームのデモサイトです。
講座の視聴、進捗管理、プラン管理機能を実装しています。

## デモURL
https://your-demo.netlify.app

## 主な機能
- 会員登録・ログイン
- 講座コンテンツの視聴
- 学習進捗の管理
- 無料/有料プラン管理

詳細は [FEATURES.md](./docs/FEATURES.md) を参照

## 使用技術

### フロントエンド
- Next.js 15（App Router）
- TypeScript
- CSS Modules / Tailwind CSS

### バックエンド
- Supabase（認証・DB）
- microCMS（コンテンツ管理）
- Stripe（決済）

### デプロイ
- Netlify

## ドキュメント
- [全体構成](./docs/ARCHITECTURE.md)
- [デプロイ方法](./docs/DEPLOYMENT.md)
- [本番環境での考慮事項](./docs/PRODUCTION.md)

## 技術的な工夫
- Server Actions でバリデーション実装
- CSS Modules と Tailwind を適材適所で使い分け
- microCMS と Supabase でデータを分離管理

## 今後の拡張予定
- [ ] ソーシャルログイン
- [ ] 管理者ダッシュボード