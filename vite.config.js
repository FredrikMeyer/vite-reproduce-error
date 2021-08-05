// vite.config.js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import resolve from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import replace from "@rollup/plugin-replace";
import nodePolyfills from "rollup-plugin-polyfill-node";
import globals from "rollup-plugin-node-globals";
import polyfillNode from "rollup-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /* replace({
     *   "process.env": JSON.stringify(process.env),
     *   preventAssignment: true,
     * }), */
    reactRefresh(),
    /* polyfillNode(), */
    /* resolve({ browser: true, preferBuiltins: false }), */
    // json(),
    /* globals(), */
    /* builtins({ process: true }), */
    /* nodePolyfills(), */
    /* injectProcess(), */
  ],
  define: {
    /* global: JSON.stringify("window"), */
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      /* zlib: "browserify-zlib", */
      util: "util",
      http: "http-browserify",
      path: "path-browserify",
    },
  },
  optimizeDeps: {
    exclude: ["prismjs"],
  },
});
