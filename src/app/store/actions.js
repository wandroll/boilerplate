import * as types from './mutations'

const actions = {
  myAction: ({ commit }) => {
    commit(types.MUTATION_NAME)
  }
}
export default actions
