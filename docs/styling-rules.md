# スタイリング方針

## 使い分け

### 概要
- Tailwindは詳細度が高いため、最後の微調整に使用
- CSS Modulesで基本スタイルを定義
- グローバルCSSはベースのみ

### グローバルCSS（`_styles/globals.css`）
- リセットCSS
- CSS変数
- Header/Footer

### CSS Modules（`*.module.css`）
- ページ固有のスタイル
- 複雑なスタイル（3行以上）
- ホバーエフェクト等のインタラクション

**推奨事項：**
- ✅ クラス名はキャメルケース（`.welcomeSection`）
- ✅ CSS変数を活用（`var(--color-main)`）
- ✅ ネストは2階層まで

### Tailwind CSS
- 余白（`m-`, `p-`, `gap-`）
- flex/grid配置
- 微調整
- 簡単な条件分岐スタイル


## 迷ったら
```
スタイルは複雑？（3行以上、複数プロパティ）
  ├─ YES → CSS Modules
  └─ NO → 下へ

複数箇所で使う？
  ├─ YES（Header, Footerなど） → グローバルCSS
  └─ NO → 下へ

余白・配置だけ？
  ├─ YES → Tailwind
  └─ NO → CSS Modules
```