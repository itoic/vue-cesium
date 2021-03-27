(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{KZi6:function(t,s,e){t.exports=e("edK5")},edK5:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{appearance:null,geometryInstances:null,geometry:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:200,rectangle:{west:100.5,south:29.5,east:115.5,north:35.5}}},methods:{ready:function(t){this.cesiumInstance=t;var s=this.cesiumInstance,e=s.Cesium;s.viewer;this.geometryInstances=new e.GeometryInstance({geometry:new e.RectangleGeometry({rectangle:e.Rectangle.fromDegrees(this.rectangle.west,this.rectangle.south,this.rectangle.east,this.rectangle.north)})}),this.appearance=new e.MaterialAppearance({material:e.Material.fromType("Checkerboard",{repeat:new e.Cartesian2(20,6)}),materialSupport:e.MaterialAppearance.MaterialSupport.TEXTURED})},clicked:function(t){console.log(t)}}},r=e("JFUb"),v=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Primitive")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载普通图元")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-primitive",{attrs:{appearance:t.appearance,geometryInstances:t.geometryInstances},on:{click:t.clicked}})],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-primitive")]),this._v(" 用于加载普通图元，再通过它加载几何图形。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clicked"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":appearance")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appearance"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":geometryInstances")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"geometryInstances"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appearance")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geometryInstances")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geometry")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polygonHierarchy")]),t._v(": [\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("102.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("106.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("106.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("102.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" }\n        ],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("200")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rectangle")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("west")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100.5")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("south")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("east")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("115.5")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("north")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.5")]),t._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".geometryInstances = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.GeometryInstance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geometry")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.RectangleGeometry({\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rectangle")]),t._v(": Cesium.Rectangle.fromDegrees(\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rectangle.west,\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rectangle.south,\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rectangle.east,\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".rectangle.north\n            )\n          })\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.MaterialAppearance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material")]),t._v(": Cesium.Material.fromType("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Checkerboard'")]),t._v(", {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("repeat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian2("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("6.0")]),t._v(")\n          }),\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("materialSupport")]),t._v(": Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      },\n      clicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(e)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("geometryInstances")]),t._v(" "),e("td",[t._v("Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定用于渲染的几何体实例或者几何体实例集合。")])]),t._v(" "),e("tr",[e("td",[t._v("appearance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元的外观参数。")])]),t._v(" "),e("tr",[e("td",[t._v("depthFailAppearance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元在深度测试失败后的外观。")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元是否显示。")])]),t._v(" "),e("tr",[e("td",[t._v("modelMatrix")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元从模型坐标转换为世界坐标的 4 x 4 矩阵。")])]),t._v(" "),e("tr",[e("td",[t._v("vertexCacheOptimize")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否优化几何体顶点着色器之前和之后的缓存。")])]),t._v(" "),e("tr",[e("td",[t._v("interleave")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。")])]),t._v(" "),e("tr",[e("td",[t._v("compressVertices")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否压缩几何体顶点，压缩可以以节省内存。")])]),t._v(" "),e("tr",[e("td",[t._v("releaseGeometryInstances")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否保留图元对几何体实例的输入，不保留可以节省内存。")])]),t._v(" "),e("tr",[e("td",[t._v("allowPicking")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。")])]),t._v(" "),e("tr",[e("td",[t._v("cull")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否能被渲染器视锥体剔除。")])]),t._v(" "),e("tr",[e("td",[t._v("asynchronous")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元时异步加载还是同步加载。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowBoundingVolume")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定是否显示图元的边界球，用于调试使用。")])]),t._v(" "),e("tr",[e("td",[t._v("shadows")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定图元是否投射或接收来自每个光源的阴影。  "),e("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html"}},[this._v("Primitive")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("mousedown")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该图元上按下时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseup")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该图元上弹起时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标单击该图元时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("clickout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标单击该图元外部时触。")])]),t._v(" "),e("tr",[e("td",[t._v("dblclick")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标左键双击该图元时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mousemove")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该图元上移动时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseover")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标移动到该图元时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标移出该图元时触发。")])])])])}],!1,null,null,null);s.default=v.exports}}]);
//# sourceMappingURL=200.58eea4d5cde9f9d26fb4.js.map