import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  uri,
  maximumScreenSpaceError
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcGraphicsTileset',
  props: {
    ...show,
    ...uri,
    ...maximumScreenSpaceError
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TilesetGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
