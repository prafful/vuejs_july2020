new Vue({
    el:"#vueapp",
    data:{
       counter: 0,
       name: '',
       score: 8,
       scoreA:0,
       scoreB:0
    },
    methods:{
        getName: function(){
            console.log(this.name)
        },
        getScore: function(){
            console.log(this.score)
        },
        addToScoreA: function(){
            console.log("scoreA")
            return this.scoreA+=this.score
        },
        addToScoreB: function(){
            console.log("scoreB")
            return this.scoreB+=this.score
        }
    },
    computed:{}
})