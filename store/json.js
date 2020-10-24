import jsonData from '~/assets/OurBusiness.json'

export const state = () => ({
    data: jsonData,
  })
  
  // getters
  export const getters = {
    getAll (state) {
      return state.json
    },
    ...
  }