import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as getters from './getters'
import overview from './modules/overview'
import error from './modules/error'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  // getters,
  modules: {
    overview,
    error
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
