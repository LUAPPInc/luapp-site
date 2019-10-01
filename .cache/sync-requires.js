const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/mnt/d/Projetos/Luapp/Site/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/mnt/d/Projetos/Luapp/Site/src/pages/index.tsx")))
}

