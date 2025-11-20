# デプロイ方法

## 選定: Netlify

### 理由
- 無料プランで商用利用可能
- 小規模サイトに最適
- Webhook対応

### Vercel との比較
| 項目 | Netlify | Vercel |
|------|---------|--------|
| 費用 | 無料 | $20/月 |
| 商用利用 | ✅ | Pro以上 |
| ISR | ⚠️ 不完全 | ✅ 完全 |

小規模サイトのためコスト優先で Netlify を選定。
大規模化時は Vercel への移行を検討。

## コスト

### 完全無料（デモ・小規模案件）
- Netlify：無料プラン
- Supabase：無料プラン（50,000 MAU/月）
- Stripe：テストモード無料、本番は手数料のみ
- microCMS：無料プラン

### 注意点
- Supabase：1週間アクセスなしで自動停止（再起動無料）
- Netlify：100GB帯域/月（超過後従量課金）

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