(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"0Nlc":function(e,t,s){"use strict";s.r(t);var r={data:function(){return{url:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",options:[{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",label:"tileset one"},{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json",label:"tileset two"}]}},methods:{ready:function(e){this.cesiumInstance=e;e.Cesium,e.viewer},readyPromise:function(e){var t=this.cesiumInstance,s=t.Cesium;t.viewer.zoomTo(e,new s.HeadingPitchRange(0,-.5,2*e.boundingSphere.radius))},allTilesLoaded:function(){console.log("All tiles are loaded")},initialTilesLoaded:function(){console.log("Initial tiles are loaded")},loadProgress:function(e,t){0!==e||0!==t?console.log("Loading: requests: "+e+", processing: "+t):console.log("Stopped loading")},tileFailed:function(e){console.log("An error occurred loading tile: "+e.url),console.log("Error: "+e.message)},tileLoad:function(e){console.log("A tile was loaded.")},tileUnload:function(e){console.log("A tile was unloaded from the cache.")},tileVisible:function(e){}}},a=s("JFUb"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("Cesium3DTileset")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-primitive-tileset",{attrs:{url:e.url},on:{readyPromise:e.readyPromise,initialTilesLoaded:e.initialTilesLoaded,allTilesLoaded:e.allTilesLoaded,loadProgress:e.loadProgress,tileFailed:e.tileFailed,tileLoad:e.tileLoad,tileUnload:e.tileUnload,tileVisible:e.tileVisible}})],1),e._v(" "),s("div",{staticClass:"demo-tool"},[s("span",[e._v("Switch Source")]),e._v(" "),s("md-select",{attrs:{placeholder:"Switch Source"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},e._l(e.options,(function(t){return s("md-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),1)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-tileset")]),this._v(" component is used to load a 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load a Cesium3DTileset with "),t("code",{pre:!0},[this._v("vc-primitive-tileset")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-tileset")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":url")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"url"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@readyPromise")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"readyPromise"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@initialTilesLoaded")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"initialTilesLoaded"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@allTilesLoaded")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"allTilesLoaded"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@loadProgress")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"loadProgress"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@tileFailed")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tileFailed"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@tileLoad")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tileLoad"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@tileUnload")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tileUnload"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@tileVisible")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"tileVisible"')]),e._v("\n      >")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-tileset")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"demo-tool"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("Switch Source"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"url"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("placeholder")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Switch Source"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-option")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-for")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"item in options"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":key")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"item.value"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":value")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"item.value"')]),e._v(">")]),e._v("\n          {{item.label}}\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-option")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-select")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("url")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("options")]),e._v(": [\n          {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("value")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'tileset one'")]),e._v("\n          },\n          {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("value")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json'")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("label")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'tileset two'")]),e._v("\n          }\n        ]\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n      },\n      readyPromise(tileset) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.HeadingPitchRange("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.0")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-0.5")]),e._v(", tileset.boundingSphere.radius * "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2.0")]),e._v("))\n      },\n      allTilesLoaded() {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'All tiles are loaded'")]),e._v(")\n      },\n      initialTilesLoaded() {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Initial tiles are loaded'")]),e._v(")\n      },\n      loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("if")]),e._v(" (numberOfPendingRequests === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(" && numberOfTilesProcessing === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(") {\n          "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Stopped loading'")]),e._v(")\n          "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v("\n        }\n\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Loading: requests: '")]),e._v(" + numberOfPendingRequests + "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("', processing: '")]),e._v(" + numberOfTilesProcessing)\n      },\n      tileFailed(error) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'An error occurred loading tile: '")]),e._v(" + error.url)\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Error: '")]),e._v(" + error.message)\n      },\n      tileLoad(tile) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'A tile was loaded.'")]),e._v(")\n      },\n      tileUnload(tile) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'A tile was unloaded from the cache.'")]),e._v(")\n      },\n      tileVisible(tile) {}\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("url")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v("The url to a tileset JSON file.")])]),e._v(" "),s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Determines if the tileset will be shown.")])]),e._v(" "),s("tr",[s("td",[e._v("modelMatrix")]),e._v(" "),s("td",[e._v("Matrix4")]),e._v(" "),s("td",[e._v("Matrix4.IDENTITY")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A 4x4 transformation matrix that transforms the tileset's root tile.")])]),e._v(" "),s("tr",[s("td",[e._v("shadows")]),e._v(" "),s("td",[e._v("ShadowMode")]),e._v(" "),s("td",[e._v("ShadowMode.ENABLED")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines whether the tileset casts or receives shadows from each light source.")])]),e._v(" "),s("tr",[s("td",[e._v("maximumScreenSpaceError")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("16")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The maximum screen space error used to drive level of detail refinement.")])]),e._v(" "),s("tr",[s("td",[e._v("maximumMemoryUsage")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("512")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The maximum amount of memory in MB that can be used by the tileset.")])]),e._v(" "),s("tr",[s("td",[e._v("cullWithChildrenBounds")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Whether to cull tiles using the union of their children bounding volumes.")])]),e._v(" "),s("tr",[s("td",[e._v("cullRequestsWhileMoving")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Don't request tiles that will likely be unused when they come back because of the camera's movement. This optimization only applies to stationary tilesets.")])]),e._v(" "),s("tr",[s("td",[e._v("cullRequestsWhileMovingMultiplier")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("60.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling.")])]),e._v(" "),s("tr",[s("td",[e._v("preloadWhenHidden")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them.")])]),e._v(" "),s("tr",[s("td",[e._v("preloadFlightDestinations")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Preload tiles at the camera's flight destination while the camera is in flight.")])]),e._v(" "),s("tr",[s("td",[e._v("preferLeaves")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Prefer loading of leaves first.")])]),e._v(" "),s("tr",[s("td",[e._v("dynamicScreenSpaceError")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Reduce the screen space error for tiles that are further away from the camera.")])]),e._v(" "),s("tr",[s("td",[e._v("dynamicScreenSpaceErrorDensity")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("0.00278")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Density used to adjust the dynamic screen space error, similar to fog density.")])]),e._v(" "),s("tr",[s("td",[e._v("dynamicScreenSpaceErrorFactor")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("4.0")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A factor used to increase the computed dynamic screen space error.")])]),e._v(" "),s("tr",[s("td",[e._v("dynamicScreenSpaceErrorHeightFalloff")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("0.25")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A ratio of the tileset's height at which the density starts to falloff.")])]),e._v(" "),s("tr",[s("td",[e._v("progressiveResolutionHeightFraction")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.3")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load.")])]),e._v(" "),s("tr",[s("td",[e._v("foveatedScreenSpaceError")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.")])]),e._v(" "),s("tr",[s("td",[e._v("foveatedConeSize")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.1")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect.")])]),e._v(" "),s("tr",[s("td",[e._v("foveatedMinimumScreenSpaceErrorRelaxation")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.")])]),e._v(" "),s("tr",[s("td",[e._v("foveatedInterpolationCallback")]),e._v(" "),s("td",[e._v("Function")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError")])]),e._v(" "),s("tr",[s("td",[e._v("foveatedTimeDelay")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.2")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.")])]),e._v(" "),s("tr",[s("td",[e._v("skipLevelOfDetail")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Optimization option. Determines if level of detail skipping should be applied during the traversal.")])]),e._v(" "),s("tr",[s("td",[e._v("baseScreenSpaceError")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("1024")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail.")])]),e._v(" "),s("tr",[s("td",[e._v("skipScreenSpaceErrorFactor")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("16")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load.")])]),e._v(" "),s("tr",[s("td",[e._v("skipLevels")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("1")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped.")])]),e._v(" "),s("tr",[s("td",[e._v("immediatelyLoadDesiredLevelOfDetail")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded.")])]),e._v(" "),s("tr",[s("td",[e._v("loadSiblings")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal.")])]),e._v(" "),s("tr",[s("td",[e._v("clippingPlanes")]),e._v(" "),s("td",[e._v("ClippingPlaneCollection")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The ClippingPlaneCollection used to selectively disable rendering the tileset.")])]),e._v(" "),s("tr",[s("td",[e._v("classificationType")]),e._v(" "),s("td",[e._v("ClassificationType")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations.")])]),e._v(" "),s("tr",[s("td",[e._v("ellipsoid")]),e._v(" "),s("td",[e._v("Ellipsoid")]),e._v(" "),s("td",[e._v("Ellipsoid.WGS84")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The ellipsoid determining the size and shape of the globe.")])]),e._v(" "),s("tr",[s("td",[e._v("pointCloudShading")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting.")])]),e._v(" "),s("tr",[s("td",[e._v("imageBasedLightingFactor")]),e._v(" "),s("td",[e._v("Cartesian2")]),e._v(" "),s("td",[e._v("new Cartesian2(1.0, 1.0)")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.")])]),e._v(" "),s("tr",[s("td",[e._v("lightColor")]),e._v(" "),s("td",[e._v("Cartesian3")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The color and intensity of the sunlight used to shade models.")])]),e._v(" "),s("tr",[s("td",[e._v("luminanceAtZenith")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.2")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.")])]),e._v(" "),s("tr",[s("td",[e._v("sphericalHarmonicCoefficients")]),e._v(" "),s("td",[e._v("Array")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.")]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("specularEnvironmentMaps")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.")])]),e._v(" "),s("tr",[s("td",[e._v("backFaceCulling")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("debugHeatmapTilePropertyName")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other's specified variable value.")])]),e._v(" "),s("tr",[s("td",[e._v("debugFreezeFrame")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Determines if only the tiles from last frame should be used for rendering.")])]),e._v(" "),s("tr",[s("td",[e._v("debugColorizeTiles")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, assigns a random color to each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugWireframe")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, render's each tile's content as a wireframe.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowBoundingVolume")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, renders the bounding volume for each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowContentBoundingVolume")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, renders the bounding volume for each tile's content.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowViewerRequestVolume")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, renders the viewer request volume for each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowGeometricError")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, draws labels to indicate the geometric error of each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowRenderingStatistics")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowMemoryUsage")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowUrl")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. When true, draws labels to indicate the url of each tile.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html"}},[this._v("Cesium3DTileset")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),s("tr",[s("td",[e._v("allTilesLoaded")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate that all tiles that meet the screen space error this frame are loaded. The tileset is completely loaded for this view.This event is fired at the end of the frame after the scene is rendered.")])]),e._v(" "),s("tr",[s("td",[e._v("initialTilesLoaded")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate that all tiles that meet the screen space error this frame are loaded. This event is fired once when all tiles in the initial view are loaded.This event is fired at the end of the frame after the scene is rendered.")])]),e._v(" "),s("tr",[s("td",[e._v("loadProgress")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate progress of loading new tiles. This event is fired when a new tile is requested, when a requested tile is finished downloading, and when a downloaded tile has been processed and is ready to render.The number of pending tile requests, numberOfPendingRequests, and number of tiles processing, numberOfTilesProcessing are passed to the event listener.This event is fired at the end of the frame after the scene is rendered.")])]),e._v(" "),s("tr",[s("td",[e._v("tileFailed")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate that a tile's content failed to load.If there are no event listeners, error messages will be logged to the console.")])]),e._v(" "),s("tr",[s("td",[e._v("tileLoad")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate that a tile's content was loaded.The loaded Cesium3DTile is passed to the event listener.")])]),e._v(" "),s("tr",[s("td",[e._v("tileUnload")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("The event fired to indicate that a tile's content was unloaded.The unloaded Cesium3DTile is passed to the event listener.This event is fired immediately before the tile's content is unload")])]),e._v(" "),s("tr",[s("td",[e._v("tileVisible")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("This event fires once for each visible tile in a frame. This can be used to manually style a tileset.The visible Cesium3DTile is passed to the event listener.")])]),e._v(" "),s("tr",[s("td",[e._v("mousedown")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse is pressed on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseup")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse bounces on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("clickout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Touch when the mouse clicks outside the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseover")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves out of the primitive.")])])])])}],!1,null,null,null);t.default=i.exports},xl0T:function(e,t,s){e.exports=s("0Nlc")}}]);
//# sourceMappingURL=97.4e5e2cef51b06e367100.js.map