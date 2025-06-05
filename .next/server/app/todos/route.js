const CHUNK_PUBLIC_PATH = "server/app/todos/route.js";
const runtime = require("../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_next_dist_007d2e1a._.js");
runtime.loadChunk("server/chunks/[root-of-the-server]__3e81b0c8._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/todos/route/actions.js [app-rsc] (server actions loader, ecmascript)", CHUNK_PUBLIC_PATH);
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/app/todos/route.js [app-route] (ecmascript)\" } [app-route] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/app/todos/route.js [app-route] (ecmascript)\" } [app-route] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
