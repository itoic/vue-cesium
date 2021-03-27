(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{FA2i:function(s,a,e){"use strict";e.r(a);var t=e("JFUb"),r=Object(t.a)({data:function(){return{appearance:{},geometryInstances:{},positions:[{lng:100.1340164450331,lat:31.05494287836128},{lng:108.08821010582645,lat:31.05494287836128}]}},mounted:function(){this.$refs.polylineGround.createPromise.then((function(s){var a=s.Cesium,e=s.viewer,t=s.cesiumObject,r=a.BoundingSphere.fromPoints(t._positions);e.scene.camera.flyToBoundingSphere(r)}))},methods:{ready:function(s){var a=s.Cesium;s.viewer;this.appearance=new a.PolylineMaterialAppearance}}},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",[e("h1",[s._v("GroundPolylineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载贴地多段线几何体")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",[e("vc-geometry-polyline-ground",{ref:"polylineGround",attrs:{positions:s.positions,width:2}})],1)],1),s._v(" "),e("vc-provider-terrain-cesium"),s._v(" "),e("vc-layer-imagery",[e("vc-provider-imagery-arcgis-mapserver",{attrs:{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}})],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),s._m(3),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),e("hr")],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-geometry-polyline-ground")]),this._v(" 组件用于加载贴地或 3DTiles 多段线。需要作为 "),a("code",{pre:!0},[this._v("vc-instance-geometry")]),this._v(" 的子组件使用，只能挂载到 "),a("code",{pre:!0},[this._v("vc-primitive-polyline-ground")]),this._v("。")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polylineGround"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-arcgis-mapserver")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-arcgis-mapserver")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" }\n        ]\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polylineGround.createPromise.then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(") =>")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)\n        viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineMaterialAppearance()\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("positions")]),s._v(" "),e("td",[s._v("Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定表示线条的位置数组。 "),e("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),e("tr",[e("td",[s._v("width")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定线的宽度（像素）。")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。")])]),s._v(" "),e("tr",[e("td",[s._v("loop")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[s._v("false")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定折线是否首尾相连。")])]),s._v(" "),e("tr",[e("td",[s._v("arcType")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定线条类型。 "),e("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("参考官方文档： "),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html"}},[this._v("GroundPolylineGeometry")])])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);a.default=r.exports},pe2I:function(s,a,e){s.exports=e("FA2i")}}]);
//# sourceMappingURL=159.6dcb64417a498420e9d7.js.map