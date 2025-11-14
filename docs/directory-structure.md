# ディレクトリ構成

## 概要
Next.js App Routerのルートグループを使用し、公開ページ・認証ページ・会員ページを分離。

## 構成
```
app/
├── (public)/           # 公開ページ
│   ├── page.tsx        # トップ（/）
│   ├── pricing/        # 料金プラン（/pricing）
│   └── layout.tsx
│
├── (auth)/             # 認証ページ
│   ├── login/          # ログイン（/login）
│   ├── signup/         # 会員登録（/signup）
│   └── layout.tsx
│
├── (member)/           # 会員限定ページ
│   ├── dashboard/      # ダッシュボード（/dashboard）
│   ├── courses/        # 講座（/courses/[slug]）
│   ├── categories/     # カテゴリ（/categories）
│   ├── profile/        # プロフィール（/profile）
│   ├── _components/    # 会員ページ内の共通コンポーネント
│   └── layout.tsx      # 認証チェック実施
│
├── _components/        # 全体の共通コンポーネント
├── _libs/              # ユーティリティ（microCMS等）
├── _styles/            # グローバルCSS
└── _constants/         # 定数
```

## ルール

### ページ固有のコンポーネント
各ページ配下の `_components/` に配置
```
dashboard/
├── page.tsx
└── _components/
    └── RecentCourses.tsx
```

### 複数ページで使う共通コンポーネント
- 会員ページ内のみ → `(member)/_components/`
- 全体で使う → `_components/`

### CSS Modules
コンポーネント・ページと同階層に配置
```
dashboard/
├── page.tsx
└── page.module.css
```

---

## 共通コンポーネントの配置

### 小規模（5個以下）：フラット配置
```
_components/
├── Pagination.tsx
├── Pagination.module.scss
├── NewsCard.tsx
└── NewsCard.module.scss
```

### 中規模以上（10個以上）：フォルダで分ける
```
_components/
├── Pagination/
│   ├── Pagination.tsx
│   └── Pagination.module.scss
└── NewsCard/
    ├── NewsCard.tsx
    └── NewsCard.module.scss
```

**判断基準：**
- 最初はフラット配置
- 10個超えたらフォルダ化を検討