---
title: 'ブログコンテンツをセッションコンテンツに置き換え'
description: 'src/content/blogのファイルを削除し、src/content/sessionsのファイルがブログとして表示されるように変更'
sessionDate: '2024-05-21'
---

# セッションサマリ

このセッションでは、Astroベースのブログサイトで`src/content/blog`以下のファイルを削除し、`src/content/sessions`のファイルがブログとして表示されるように変更しました。コンテンツコレクションの参照を更新し、ブログ関連のコンポーネントが`sessions`コレクションを使用するように修正しました。

## キーアクティビティ

- `src/content/blog`内のファイルを削除
- `src/pages/blog/index.astro`を更新して`sessions`コレクションを使用するよう変更
- `src/pages/blog/[...slug].astro`を更新して`sessions`コレクションを使用するよう変更
- `src/layouts/BlogPost.astro`を更新して`sessions`コレクションの型を使用するよう変更
- `src/pages/rss.xml.js`を更新して`sessions`コレクションを使用するよう変更
- `src/pages/index.astro`の参照を更新
- `src/pages/about.astro`を更新して`sessionDate`フィールドを使用するよう変更

## 挑戦と解決方法

- **フィールド名の違い**: `blog`コレクションでは`pubDate`フィールドを使用していたが、`sessions`コレクションでは`sessionDate`フィールドを使用している。`BlogPost.astro`で分割代入を使用して`sessionDate: pubDate`とマッピングすることで解決。
- **ビルドエラー**: `about.astro`ページが`pubDate`を使用していたため、ビルド時に`Cannot read properties of undefined (reading 'toISOString')`エラーが発生。`pubDate`を`sessionDate`に変更して解決。

## 見出されたパターン

- Astroのコンテンツコレクション間の移行パターン
- フィールド名の違いを解決するための分割代入パターン
- URLパスを変更せずにコンテンツソースを変更するパターン

## 将来の発展

- セッション固有のレイアウトやスタイルの追加
- セッションコンテンツに特化したフィルタリングや検索機能の実装
- セッションタグやカテゴリの導入
