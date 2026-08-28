(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/features/map/MapClientComponent.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_1a7rao2._.js",
  "static/chunks/src_0bhsro4._.js",
  {
    "path": "static/chunks/_0f3q1o0._.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)",
      "[project]/src/components/features/map/MapComponent.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_leaflet_dist_leaflet_css_1igg3k2._.single.css",
      "static/chunks/src_components_features_map_MapComponent_css_1igg3k2._.single.css"
    ]
  }
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/features/map/MapClientComponent.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);