new Vue({
    el:'#vueapp',
    data:{
        friends:['obb', 'cas', 'bnp', 'owioh'],
        details:[
            {
                id:1,
                name:'obb',
                location:'chennai'
            },
            {
                id:2,
                name:'cas',
                location:'bengaluru'
            },
            {
                id:3,
                name:'owioh',
                location:'japan'
            },
            {
                id:4,
                name:'bnp',
                location:'mumbai'
            }
        ]
    },
    methods:{
        getMe: function(i){
            console.log(i)
            console.log(this.details[i])

        }
    }
})