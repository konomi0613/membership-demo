# WordPressテーマ開発講座 会員システム

オンライン講座の会員向けプラットフォームのデモサイトです。
講座の視聴、進捗管理機能を実装しています。

## デモURL
https://membershipdemo.netlify.app/

### Basic認証情報
- **ユーザー名**: `admin`
- **パスワード**: `demo2025`

## 主な機能
- 会員登録・ログイン
- 講座コンテンツの視聴
- 学習進捗の管理

詳細は [FEATURES.md](./docs/FEATURES.md) を参照

## 使用技術

### フロントエンド
- Next.js 16（App Router）
- TypeScript
- CSS Modules（SCSS）/ Tailwind CSS

### バックエンド
- Supabase（認証・DB）
- microCMS（コンテンツ管理）

### デプロイ
- Netlify

## ディレクトリ構成

詳細は [directory-structure.md](./docs/directory-structure.md) を参照

## ローカル開発

### 必要条件

- Node.js 18.18.0 以上
- npm

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/konomi0613/membership-demo.git
cd membership-demo

# 依存パッケージをインストール
npm install

# 環境変数を設定
cp .env.example .env.local
```

`.env.local` を編集し、各サービスの値を設定してください。

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase プロジェクトURL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon Key | Yes |
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン | Yes |
| `MICROCMS_API_KEY` | microCMS API キー | Yes |
| `NEXT_PUBLIC_SITE_URL` | サイトURL（認証コールバック用） | Yes |
| `BASIC_AUTH_ENABLED` | Basic認証の有効化（`true` / `false`） | No |
| `BASIC_AUTH_USER` | Basic認証ユーザー名 | No |
| `BASIC_AUTH_PASSWORD` | Basic認証パスワード | No |

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でアクセスできます。

### その他のコマンド

```bash
npm run build   # プロダクションビルド
npm run start   # プロダクションサーバー起動
npm run lint    # ESLint 実行
```

## ドキュメント
- [全体構成](./docs/ARCHITECTURE.md)
- [デプロイ方法](./docs/DEPLOYMENT.md)
- [本番環境での考慮事項](./docs/PRODUCTION.md)

## 技術的な工夫
- Server Actions でバリデーション実装
- CSS Modules と Tailwind を適材適所で使い分け
- microCMS と Supabase でデータを分離管理

## 今後の拡張予定
- [ ] Stripe 決済連携（有料プラン管理）
- [ ] ソーシャルログイン
- [ ] 管理者ダッシュボード