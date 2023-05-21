export const useUser = defineStore('user',{
   state: () => {
      return {
        email: '',
        name:'',
        userType:'',
        token:'',
        isLoggedIn:false,
        profileId:''
      }
    },
    persist: {
      storage: persistedState.localStorage,
    },

}
)