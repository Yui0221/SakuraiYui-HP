// ブラウザ単体実行用: Next.js のコードが参照する process.env をスタブする。
// ds-entry.ts の最初の import として読み込まれ、他モジュールより先に実行される。
const g = globalThis as { process?: { env: Record<string, string | undefined> } };
if (!g.process) g.process = { env: { NODE_ENV: "production" } };
if (!g.process.env) g.process.env = { NODE_ENV: "production" };

export {};
