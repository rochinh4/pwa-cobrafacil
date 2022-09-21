module.exports = function (api) {
  api.cache(true);
  return {
      presets: ["babel-preset-expo"],
      plugins: [
          [
              "module-resolver",
              {
                  root: ["./src"],
                  extensions: [".js", ".jsx", ".ts", ".tsx"],
                  alias: {
                      "@assets": "./src/assets",
                      "@components": "./src/components",
                      "@config": "./src/config",
                      "@hooks": "./src/hooks",
                      "@pages": "./src/pages",
                      "@routes": "./src/routes",
                      "@screens": "./src/screens",
                      "@services": "./src/services",
                      "@style": "./src/style",
                      "@utils": "./src/utils",
                  },
              },
          ],
      ],
  };
};
