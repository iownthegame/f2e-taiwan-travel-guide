import { createStore } from "vuex"

// import * as actions from './actions';
// import * as getters from './getters';
// import * as mutations from './mutations';

const store = createStore({
  state: {
    loading: false,
    selectedCategory: '',
    selectedCity: '',
    menuType: 'sights',
    searchResults: [],
    modalVisible: false
  },
  mutations: {
    updateSelectedCity (state, payload) {
      state.selectedCity = payload
    },
    updateSelectedCategory (state, payload) {
      state.selectedCategory = payload
    },
    updateMenuType(state, payload) {
      state.menuType = payload
    },
    startLoading (state) {
      state.loading = true
    },
    endLoading (state) {
      state.loading = false
    },
    appendSearchResult (state, { data, type }) {
      state.searchResults = [
        ...state.searchResults,
        { data, type }
      ]
    },
    resetSearchResults (state) {
      state.searchResults = []
    },
    setModalVisible (state, visible) {
      state.modalVisible = visible
    }
  }
})

export default store
