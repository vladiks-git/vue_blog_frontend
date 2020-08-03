export default {
    actions: {
      async addUser(ctx,user){
          try {
              const response = await fetch('http://localhost:3000/user/registration', {
                  method: 'POST',
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(user)
              })
              const test = await response.json()
              console.log(test)
          }catch (e) {
              console.log(e)
          }
      },

      // async login(ctx, user){
      //     try{
      //         const response = await fetch('http://localhost:3000/user/login', {
      //             method: 'POST',
      //             headers: {"Content-Type": "application/json"},
      //             body: JSON.stringify(user)
      //         })
      //         const result = await response.json()
      //         console.log(result.auth)
      //          if(!result.auth){
      //              ctx.commit('changeIsRegister', false)
      //          }else {
      //              localStorage.setItem('user', result.user)
      //              localStorage.setItem('jwt', result.token)
      //          }
      //     }catch (e) {
      //         console.log(e)
      //     }
      // }
    },


    mutations: {
        // changeIsRegister(state, payload){
        //     state.isRegister = payload
        // }
    },


    state: {
        isRegister: true
    },


    getters: {
        // getIsRegister(state){
        //     return state.isRegister
        // }
    }
}