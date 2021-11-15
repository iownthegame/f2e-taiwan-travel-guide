import { createStore } from "vuex"

import Api from '../api/tourism';

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
  },
  actions: {
    search({ commit, state }) {
      commit('resetSearchResults')
      commit('startLoading')

      if (!state.selectedCity) {
        commit('appendSearchResult', {
          type: 'cities'
        })
      }

      if (state.selectedCategory === 'sights' || (state.selectedCategory === '' && state.menuType === 'sights')) {
        Api.getScenicSpot(
          state.selectedCity
        ).then((response) => {
          // console.log(response.data)
          commit('endLoading')
          commit('appendSearchResult', {
            data: response.data,
            type: 'sights'
          })
        }).catch((error) => {
          console.log(error)
          commit('endLoading')
        })
      }

      if (state.selectedCategory === 'activities' || (state.selectedCategory === '' && state.menuType === 'sights')) {
        Api.getActivity(
          state.selectedCity
        ).then((response) => {
          // console.log(response.data)
          commit('endLoading')
          commit('appendSearchResult', {
            data: response.data,
            type: 'activities'
          })
        }).catch((error) => {
          console.log(error)
          commit('endLoading')
        })
      }

      if (state.selectedCategory === 'restaurants' || (state.selectedCategory === '' && (state.menuType === 'sights' || state.menuType === 'rooms'))) {
        Api.getRestaurant(
          state.selectedCity
        ).then((response) => {
          // console.log(response.data)
          commit('endLoading')
          commit('appendSearchResult', {
            data: response.data,
            type: 'restaurants'
          })
        }).catch((error) => {
          console.log(error)
          commit('endLoading')
        })
      }

      if (state.selectedCategory === 'rooms' || (state.selectedCategory === '' && (state.menuType === 'sights' || state.menuType === 'rooms'))) {
        Api.getHotel(
          state.selectedCity
        ).then((response) => {
          // console.log(response.data)
          commit('endLoading')
          commit('appendSearchResult', {
            data: response.data,
            type: 'rooms'
          })
        }).catch((error) => {
          console.log(error)
          commit('endLoading')
        })
      }
    }
  }
})

export default store
