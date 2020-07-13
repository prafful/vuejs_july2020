new Vue({
    el:"#vueapp",
    data:{
       name: "Prafful Daga",
       location: "Chennai" ,
       homepage:"https://vuejs.org/",
       websitehtml:"<a href='https://vuejs.org/'>Vue.JS</a>"
    },
    methods:{
        welcome: function(me){
            return "Hello from Vue.JS!!!! It is " 
                        + me + ". Have fun, " 
                        + this.name
        }
    }
})