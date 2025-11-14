# 型定義の配置ルール

## 基本

型は使う場所で決める。迷ったらそのファイル内。

---

## 配置場所

### 1. そのファイルだけで使う
→ **ファイル内に書く**
```tsx
// NewsCard.tsx
type Props = { news: News }

export const NewsCard = ({ news }: Props) => {
  // ...
}
```

---

### 2. microCMS関連
→ **microcms.ts に書く**
```typescript
// _libs/microcms.ts
export type Member = { ... }
export type News = { ... }
```

---

### 3. 複数ファイルで使う共通の型
→ **types.ts に書く**
```typescript
// _libs/types.ts
export type SlugPageProps = PageProps
```

---

## 迷ったら
```
microCMS関連 → microcms.ts
複数で使う → types.ts
1箇所だけ → そのファイル内
```
