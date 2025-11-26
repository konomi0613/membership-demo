# 認証状態の取得パターン

## 現在の実装方針

**パターン1: 各コンポーネントで直接取得**
```typescript
// Server Componentで必要な箇所ごとに取得
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
```

### 採用理由
- 認証チェック箇所が3箇所程度で少ない
- シンプルで理解しやすい
- 1人開発なので統一ルール不要

---

## 移行を検討するタイミング

### パターン2: Layoutで取得してPropsで渡す
**検討条件:**
- 同一ページ内で10回以上認証チェックが必要
- パフォーマンス問題が顕在化

### パターン3: ヘルパー関数を作る
**検討条件:**
- 認証チェック箇所が6箇所以上
- 複雑なロジック（ロール管理、権限チェック）が必要
- チーム開発開始

---

## 実装例

### パターン1（現在）
```typescript
// Header.tsx
async function Header() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return <nav>{user ? <LogoutButton /> : <LoginButton />}</nav>
}
```

### パターン3（将来の参考）
```typescript
// app/_libs/auth.ts
export async function getCurrentUser() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// 使う側
import { getCurrentUser } from '@/app/_libs/auth'
async function Header() {
  const user = await getCurrentUser()
}
```

---

## 認証チェック可能な場所

| 場所 | 使用可否 |
|------|---------|
| Server Component | ✅ |
| Server Actions | ✅ |
| API Route | ✅ |
| Client Component | ❌ |

---

## 参考

- Supabaseはキャッシュが効くため、複数回呼び出しても大きな問題はない
- 早すぎる最適化は避け、必要になったら移行する方針