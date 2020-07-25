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
      }
    },


    mutations: {

    },


    state: {
        User: {
            email: '',
            password: ''
        },
    },


    getters: {

    }
}