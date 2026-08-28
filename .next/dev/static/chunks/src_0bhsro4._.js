(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/features/map/MapClientComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapClientComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filiais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/filiais.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function MapUpdater({ activeBranch, filteredBranches }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const hasActiveBranchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapUpdater.useEffect": ()=>{
            if (activeBranch) {
                hasActiveBranchRef.current = true;
                map.flyTo([
                    activeBranch.lat,
                    activeBranch.lng
                ], 13.5, {
                    animate: true,
                    duration: 2,
                    easeLinearity: 0.25
                });
                return;
            }
            if (filteredBranches.length > 0) {
                const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(filteredBranches.map({
                    "MapUpdater.useEffect.bounds": (branch)=>[
                            branch.lat,
                            branch.lng
                        ]
                }["MapUpdater.useEffect.bounds"]));
                map.flyToBounds(bounds.pad(0.18), {
                    animate: true,
                    duration: 2.4,
                    padding: [
                        22,
                        22
                    ],
                    maxZoom: 8,
                    easeLinearity: 0.3
                });
                hasActiveBranchRef.current = false;
                return;
            }
            map.setView([
                -19.6,
                -47.15
            ], 7, {
                animate: true,
                duration: 1.6
            });
            hasActiveBranchRef.current = false;
        }
    }["MapUpdater.useEffect"], [
        activeBranch,
        filteredBranches,
        map
    ]);
    return null;
}
_s(MapUpdater, "M3EmkU4BkIR/xo54+GZ0s87VaE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapUpdater;
function ZoomListener({ onZoomChange }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
        zoomend: {
            "ZoomListener.useMapEvents": (event)=>{
                onZoomChange(event.target.getZoom());
            }
        }["ZoomListener.useMapEvents"]
    });
    return null;
}
_s1(ZoomListener, "Ld/tk8Iz8AdZhC1l7acENaOEoCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c1 = ZoomListener;
function MapClientComponent() {
    _s2();
    const [activeBranchId, setActiveBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentZoom, setCurrentZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const markerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const filteredBranches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapClientComponent.useMemo[filteredBranches]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filiais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filiais"]
    }["MapClientComponent.useMemo[filteredBranches]"], []);
    const activeBranch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filiais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filiais"].find((branch)=>branch.id === activeBranchId);
    const visibleBranches = filteredBranches.length > 0 ? filteredBranches : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filiais$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filiais"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapClientComponent.useEffect": ()=>{
            if (!activeBranchId) {
                return;
            }
            const marker = markerRefs.current[activeBranchId];
            if (marker) {
                window.setTimeout({
                    "MapClientComponent.useEffect": ()=>{
                        marker.openPopup();
                    }
                }["MapClientComponent.useEffect"], 180);
            }
        }
    }["MapClientComponent.useEffect"], [
        activeBranchId,
        currentZoom
    ]);
    const getSidebarTitle = (branch)=>{
        const cityLabel = branch.cidade.split('-')[0].trim();
        const branchLabel = branch.nome.trim();
        if (!cityLabel) return branchLabel || 'Unidade';
        if (!branchLabel) return cityLabel;
        const normalizedCity = cityLabel.toLowerCase();
        const normalizedBranch = branchLabel.toLowerCase();
        if (branchLabel.toLowerCase() === 'csc') {
            return `${cityLabel} CSC`;
        }
        if (normalizedBranch === normalizedCity || normalizedBranch.includes(normalizedCity)) {
            return cityLabel;
        }
        return `${cityLabel} ${branchLabel}`;
    };
    const createIcon = (isActive)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
            className: `custom-marker ${isActive ? 'active-marker' : ''}`,
            html: '<div class="marker-pin"></div>',
            iconSize: [
                30,
                42
            ],
            iconAnchor: [
                15,
                42
            ],
            popupAnchor: [
                0,
                -35
            ]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "map-container-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-sidebar-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-kicker",
                                children: "Geoprocessamento Visual"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Unidades Hortsoy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Encontre a filial mais próxima de você"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-overview",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            visibleBranches.length,
                                            " unidades"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: activeBranch ? activeBranch.cidade : 'Visão regional'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            activeBranchId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "reset-map-btn",
                                onClick: ()=>{
                                    const marker = markerRefs.current[activeBranchId];
                                    if (marker) {
                                        marker.closePopup();
                                    }
                                    setActiveBranchId(null);
                                },
                                style: {
                                    marginTop: '10px',
                                    width: '100%',
                                    padding: '8px',
                                    backgroundColor: '#f1f5f9',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    color: '#475569',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    transition: 'all 0.2s'
                                },
                                children: "Mostrar todas as filiais"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "branches-scroll-list",
                        "data-lenis-prevent": "true",
                        onWheel: (event)=>event.stopPropagation(),
                        onTouchMove: (event)=>event.stopPropagation(),
                        children: [
                            filteredBranches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `branch-card ${activeBranchId === branch.id ? 'active' : ''}`,
                                    onClick: ()=>setActiveBranchId(branch.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: getSidebarTitle(branch)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                branch.endereco
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, branch.id, true, {
                                    fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)),
                            filteredBranches.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: 'center',
                                    color: '#94a3b8',
                                    marginTop: '20px'
                                },
                                children: "Nenhuma unidade encontrada."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-view",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                    center: [
                        -19.6,
                        -47.15
                    ],
                    zoom: 7,
                    minZoom: 4,
                    zoomSnap: 0.1,
                    maxBounds: [
                        [
                            -90,
                            -180
                        ],
                        [
                            90,
                            180
                        ]
                    ],
                    maxBoundsViscosity: 1.0,
                    scrollWheelZoom: true,
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUpdater, {
                            activeBranch: activeBranch,
                            filteredBranches: filteredBranches
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZoomListener, {
                            onZoomChange: setCurrentZoom
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            noWrap: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        visibleBranches.map((branch)=>{
                            const showTooltip = !activeBranchId && currentZoom <= 9;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                ref: (marker)=>{
                                    markerRefs.current[branch.id] = marker;
                                },
                                position: [
                                    branch.lat,
                                    branch.lng
                                ],
                                icon: createIcon(activeBranchId === branch.id),
                                eventHandlers: {
                                    click: ()=>setActiveBranchId(branch.id)
                                },
                                children: [
                                    showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        permanent: true,
                                        direction: "bottom",
                                        offset: [
                                            0,
                                            8
                                        ],
                                        className: "marker-tooltip",
                                        children: getSidebarTitle(branch)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                        closeButton: false,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "popup-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: getSidebarTitle(branch)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "popup-body",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            marginBottom: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: branch.endereco
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: branch.link,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "btn-route",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                size: 14,
                                                                style: {
                                                                    display: 'inline',
                                                                    marginBottom: '-2px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Abrir no Maps"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, branch.id, true, {
                                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUpdater, {
                            activeBranch: activeBranch,
                            filteredBranches: filteredBranches
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/map/MapClientComponent.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s2(MapClientComponent, "sXfk0DDYYkeCv1rkchoKa7ndq90=");
_c2 = MapClientComponent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MapUpdater");
__turbopack_context__.k.register(_c1, "ZoomListener");
__turbopack_context__.k.register(_c2, "MapClientComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/map/MapClientComponent.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/features/map/MapClientComponent.tsx [app-client] (ecmascript)"));
}),
"[project]/src/data/filiais.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filiais",
    ()=>filiais
]);
const filiais = [
    {
        id: 1,
        nome: 'CSC',
        cidade: 'Uberaba - MG',
        lat: -19.74674029577659,
        lng: -47.93915410279788,
        endereco: 'AV. SANTOS DUMONT, 130',
        link: 'https://maps.app.goo.gl/fyeeoFGsbZKB9XEu6'
    },
    {
        id: 2,
        nome: 'Santa Juliana',
        cidade: 'Santa Juliana - MG',
        lat: -19.309723882362004,
        lng: -47.53408813068095,
        endereco: 'AV. JOAQUIM HONORIO DA SILVA, 20',
        link: 'https://maps.app.goo.gl/4M9MvdKPrLpbiegs5'
    },
    {
        id: 3,
        nome: 'Patrocínio',
        cidade: 'Patrocínio - MG',
        lat: -18.94758276124383,
        lng: -47.01414452883512,
        endereco: 'AV. FARIA PEREIRA, 4677',
        link: 'https://maps.app.goo.gl/fFhios9dDTEe1Wwd8'
    },
    {
        id: 4,
        nome: 'Ibiá',
        cidade: 'Ibiá - MG',
        lat: -19.501366202940318,
        lng: -46.5500492,
        endereco: 'AV. BARTOLOMEU RIBEIRO DE PAIVA, 934',
        link: 'https://maps.app.goo.gl/bH4tTTLZPDqEQ3yx8'
    },
    {
        id: 5,
        nome: 'Araxá',
        cidade: 'Araxá - MG',
        lat: -19.575693180359735,
        lng: -46.954577357670225,
        endereco: 'AV. JOSE ANANIAS AGUIAR, 5835',
        link: 'https://maps.app.goo.gl/jyxtBeDQN77QFJgi9'
    },
    {
        id: 6,
        nome: 'São Gotardo',
        cidade: 'São Gotardo - MG',
        lat: -19.353443401392177,
        lng: -46.130930584407984,
        endereco: 'ROD. MG 235, 590 KM 88',
        link: 'https://maps.app.goo.gl/DzJVgHy9Hn5GhFxR8'
    },
    {
        id: 7,
        nome: 'Iraí de Minas',
        cidade: 'Iraí de Minas - MG',
        lat: -18.987639853586494,
        lng: -47.4699099962926,
        endereco: 'AV. SETE DE SETEMBRO, 285',
        link: 'https://maps.app.goo.gl/XsR3rL4tbc8ddQkc9'
    },
    {
        id: 8,
        nome: 'Patos de Minas',
        cidade: 'Patos de Minas - MG',
        lat: -18.6206581049706121,
        lng: -46.5117439,
        endereco: 'AV. PRESIDENTE TANCREDO NEVES, 540',
        link: 'https://maps.app.goo.gl/6iEMCYAjG8WmN2um9'
    },
    {
        id: 9,
        nome: 'Coromandel',
        cidade: 'Coromandel - MG',
        lat: -18.483346130629013,
        lng: -47.202062399999996,
        endereco: 'AV. GOVERNADOR ISRAEL PINHEIRO, 691',
        link: 'https://maps.app.goo.gl/uLiejz5g2PWbLsmy6'
    },
    {
        id: 10,
        nome: 'Uberaba',
        cidade: 'Uberaba - MG',
        lat: -19.773565592758338,
        lng: -47.93589340970933,
        endereco: 'AV. DEP. JOSE MARCUS CHEREM, 1020',
        link: 'https://maps.app.goo.gl/X86d192AibphuJ1a6'
    },
    {
        id: 11,
        nome: 'Passos',
        cidade: 'Passos - MG',
        lat: -20.73928087976301,
        lng: -46.59562507116487,
        endereco: 'ROD. MG - 050, 628',
        link: 'https://maps.app.goo.gl/jfV4bCUmtXbEnFar9'
    },
    {
        id: 12,
        nome: 'Carmo do Rio Claro',
        cidade: 'Carmo do Rio Claro - MG',
        lat: -20.970523827095946,
        lng: -46.130458600000004,
        endereco: 'RUA PADRE PENTEADO, 15',
        link: 'https://maps.app.goo.gl/woF4xVQtqCUPomfw9'
    },
    {
        id: 13,
        nome: 'Piumhi',
        cidade: 'Piumhi - MG',
        lat: -20.46166500023169,
        lng: -45.968429945872074,
        endereco: 'RUA PADRE ABEL, 1396',
        link: 'https://maps.app.goo.gl/S1g5TkkesmQRLTJC7'
    },
    {
        id: 14,
        nome: 'Bambuí',
        cidade: 'Bambuí - MG',
        lat: -20.017331749704148,
        lng: -45.9855067,
        endereco: 'RUA ALZIRA TORRES, 681',
        link: 'https://maps.app.goo.gl/a9BcQQsscCR7VptF6'
    },
    {
        id: 15,
        nome: 'Conceição das Alagoas',
        cidade: 'Conceição das Alagoas - MG',
        lat: -19.93211132022286,
        lng: -48.377358,
        endereco: 'AV. JOAO MARQUES DE OLIVEIRA, 527',
        link: 'https://maps.app.goo.gl/Y1KbwHgJAwynPrJt9'
    },
    {
        id: 16,
        nome: 'Sacramento',
        cidade: 'Sacramento - MG',
        lat: -19.872176921154335,
        lng: -47.43103069814453,
        endereco: 'RUA MARIO DE SANTI, 280',
        link: 'https://maps.app.goo.gl/wvqYYikGG1nqZBHm6'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0bhsro4._.js.map