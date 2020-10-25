import jsonData from '~/assets/OurBusiness.json'

// 状態管理
export const state = () => ({
  data: jsonData,
})

// getters
export const getters = {
  getAll: (state) => {
    // return state.json
    return state.data
  }
}