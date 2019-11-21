# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">Vue 2.x components for CesiumJS. Load Cesium built package or other third-party packages which are built on Cesium.</p>

[![npm](https://img.shields.io/npm/v/vue-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-cesium.png)](http://packagequality.com/#?package=vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/zouyaoji/vue-cesium/badge.svg?branch=master)](https://coveralls.io/github/zouyaoji/vue-cesium?branch=master)
## Languages

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## Links

- [Documentation](https://zouyaoji.top/vue-cesium)
- [Official Demo](https://sandcastle.cesium.com/)
- [More examples](https://github.com/zouyaoji/vue-cesium-demo)
- [Documentation-v1](https://zouyaoji.top/vue-cesium-v1)

## Get Start

`VueCesium` using the built CesiumJS library. You can use online, local, official native libraries or third-party libraries built on Cesium depending on your project needs.

[Developed components](https://github.com/zouyaoji/vue-cesium/blob/master/src/utils/nameClassMap.js).

In the gradual improvement...

### Installation

```bash
npm i --save vue-cesium
```

### Initialization

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// Vue-Cesium will load Cesium.js from `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
})
```

### Usage

```vue
<template>
  <div class="viewer">
    <vc-viewer> </vc-viewer>
  </div>
</template>

<style>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

## TODOS

- Add more components
- ...

## Contributing

[Contributing Guide](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, zouyaoji <370681295@qq.com>

## Reference

Two good projects: [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map) and [vuelayers](https://github.com/ghettovoice/vuelayers/).
