new Vue({
    el:'#vue-app',
    data:{
        score:8,
        x: 0,
        y: 0
    },
    methods:{
        increment: function(inc){
            this.score+=inc
        },
        decrement: function(dec){
            this.score-=dec
        },
        updateCoordinate: function(event){
            console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        }, 
        check: function(){
            console.log("click event for <a>")
            alert("Hello!!!!")
        }
    }
})