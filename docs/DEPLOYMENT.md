# デプロイ方法

## デプロイ前チェックリスト

### microCMS
- [ ] プレビューURLを `https://your-site.netlify.app` に変更

### Supabase
- [ ] 本番用プロジェクトの作成（オプション）
- [ ] RLSの確認

### Stripe
- [ ] テストモード → 本番モードに切り替え
- [ ] Webhook URLを本番URLに変更

### Netlify
- [ ] 環境変数を設定
- [ ] ビルドコマンド確認

## コスト

### 完全無料（デモ・小規模案件）
- Netlify：無料プラン
- Supabase：無料プラン（50,000 MAU/月）
- Stripe：テストモード無料、本番は手数料のみ
- microCMS：無料プラン

### 注意点
- Supabase：1週間アクセスなしで自動停止（再起動無料）
- Netlify：100GB帯域/月（超過後従量課金）