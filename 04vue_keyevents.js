new Vue({
    el:"#vueapp",
    data:{
       counter: 0
    },
    methods:{
        getName: function(){
            console.log("name " + this.counter++)
        },
        getScore: function(){
            console.log("score " + this.counter++)
        }
    }
})