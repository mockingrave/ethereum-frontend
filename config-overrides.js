// const webpack = require("webpack");
// const { override, addExternalBabelPlugin } = require("customize-cra");
// const nodeExternals = require("webpack-node-externals");
//
// const webpackConfig = (config) => {
//   config.resolve.fallback = {
//     url: require.resolve("url"),
//     buffer: require.resolve("buffer"),
//     http: require.resolve("stream-http"),
//     fs: false,
//   };
//
//   config.plugins.push(
//     new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
//       const mod = resource.request.replace(/^node:/, "");
//       if (mod === "buffer") {
//         resource.request = "buffer";
//       }
//       if (mod === "stream") {
//         resource.request = "readable-stream";
//       }
//     })
//   );
//
//   config.module.rules = config.module.rules.map((rule) => {
//     if (rule.oneOf) {
//       return {
//         ...rule,
//         oneOf: rule.oneOf.map((oneOfRule) => {
//           if (oneOfRule.loader && oneOfRule.loader.includes("babel-loader")) {
//             return {
//               ...oneOfRule,
//               options: {
//                 ...oneOfRule.options,
//                 sourceType: 'unambiguous',
//               },
//             };
//           }
//           return oneOfRule;
//         }),
//       };
//     }
//     return rule;
//   });
//
//   return config;
// };
//
// module.exports = {
//     webpack: override(
//         webpackConfig,
//         addExternalBabelPlugin("transform-async-to-promises"),
//         (config) => {
//             config.externals = [
//                 ...(config.externals || []),
//                 nodeExternals({
//                     allowlist: ["fs"],
//                 }),
//             ];
//             return config;
//         }
//     ),
// };
