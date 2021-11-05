import { createStore } from "vuex"

// import * as actions from './actions';
// import * as getters from './getters';
// import * as mutations from './mutations';

const store = createStore({
  state: {
    searchResult: null,
    loading: false
  },
  mutations: {
    updateSearchResult (state, payload) {
      state.searchResult = payload
    },
    startLoading (state) {
      state.loading = true
    },
    endLoading (state) {
      state.loading = false
    }
  }
})

export default store
