import babel from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import html from "@web/rollup-plugin-html";

export default {
  input: "src/index.html",
  output: {
    name: "myModules",
    dir: "build",
    // file: "main.min.js",
    format: "iife",
    // sourcemap: "inline",
  },
  plugins: [
    html({
      minify: true,
    }),
    babel({ babelHelpers: "bundled" }),
    process.env.NODE_ENV === "production" && uglify(),
  ],
};
