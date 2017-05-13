import Vue from 'vue'
import {
  MdAvatar,
  MdBackdrop,
  MdButton,
  MdCard,
  MdCore,
  MdIcon,
  MdLayout,
  MdList,
  MdMenu,
  MdSelect,
  MdSidenav,
  MdSpeedDial,
  MdSubheader,
  MdTabs,
  MdToolbar,
  MdWhiteframe
} from 'vue-material'
import 'vue-material/dist/components/mdAvatar/index.css'
import 'vue-material/dist/components/mdBackdrop/index.css'
import 'vue-material/dist/components/mdButton/index.css'
import 'vue-material/dist/components/mdCard/index.css'
import 'vue-material/dist/components/mdCore/index.css'
import 'vue-material/dist/components/mdIcon/index.css'
import 'vue-material/dist/components/mdLayout/index.css'
import 'vue-material/dist/components/mdList/index.css'
import 'vue-material/dist/components/mdMenu/index.css'
import 'vue-material/dist/components/mdSelect/index.css'
import 'vue-material/dist/components/mdSidenav/index.css'
import 'vue-material/dist/components/mdSpeedDial/index.css'
import 'vue-material/dist/components/mdSubheader/index.css'
import 'vue-material/dist/components/mdTabs/index.css'
import 'vue-material/dist/components/mdToolbar/index.css'
import 'vue-material/dist/components/mdWhiteframe/index.css'

Vue.use(MdCore)

Vue.use(MdAvatar)
Vue.use(MdBackdrop)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdLayout)
Vue.use(MdList)
Vue.use(MdMenu)
Vue.use(MdSelect)
Vue.use(MdSidenav)
Vue.use(MdSpeedDial)
Vue.use(MdSubheader)
Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdWhiteframe)

const baseTheme = {
  primary: {
    color: 'grey',
    hue: 900
  },
  accent: 'blue'
}

Vue.material.registerTheme('default', baseTheme)

Vue.material.registerTheme('alternative', {
  ...baseTheme,
  accent: 'white'
})
