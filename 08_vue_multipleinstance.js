var one = new Vue({
    el:'#onevueapp',
    data:{
        message: "One Vue"
    }
})


var two = new Vue({
    el:'#twovueapp',
    data:{
        message: "Two Vue"
    },
    methods:{
        changeMessageOne:function(){
            one.message = "New Message"
        }
    }
})

alert()
one.message = "Anyone can update message!!!!"