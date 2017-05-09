import Vue from 'vue'
import {
  MdBackdrop,
  MdButton,
  MdCore,
  MdIcon,
  MdLayout,
  MdList,
  MdSidenav,
  MdTabs,
  MdToolbar,
  MdWhiteframe
} from 'vue-material'
import 'vue-material/dist/components/mdCore/index.css'
import 'vue-material/dist/components/mdBackdrop/index.css'
import 'vue-material/dist/components/mdButton/index.css'
import 'vue-material/dist/components/mdIcon/index.css'
import 'vue-material/dist/components/mdLayout/index.css'
import 'vue-material/dist/components/mdList/index.css'
import 'vue-material/dist/components/mdSidenav/index.css'
import 'vue-material/dist/components/mdTabs/index.css'
import 'vue-material/dist/components/mdToolbar/index.css'
import 'vue-material/dist/components/mdWhiteframe/index.css'

Vue.use(MdCore)
Vue.use(MdBackdrop)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdLayout)
Vue.use(MdList)
Vue.use(MdSidenav)
Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdWhiteframe)

const baseTheme = {
  primary: {
    color: 'grey',
    hue: 900
  },
  accent: 'red'
}

Vue.material.registerTheme('default', baseTheme)

Vue.material.registerTheme('alternative', {
  ...baseTheme,
  accent: 'white'
})
