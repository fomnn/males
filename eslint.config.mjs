// eslint.config.mjs
import antfu from "@antfu/eslint-config";
import oxlint from "eslint-plugin-oxlint";
// export default antfu({
//   typescript: true,
//   vue: true,
//   stylistic: {
//     quotes: "double",
//     semi: true,
//   },
// });

export default [
  ...await antfu({
    typescript: true,
    vue: true,
    stylistic: {
      quotes: "double",
      semi: true,
    },
    rules: {
      "node/prefer-global/process": "off",
      "no-restricted-globals": "off",
    },
  }),
  oxlint.configs["flat/recommended"],
];
