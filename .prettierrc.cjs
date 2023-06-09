/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./apps/frontend/tailwind",
}
