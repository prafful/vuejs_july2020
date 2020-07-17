/* var myobject = {
    name:'OBB'
}
 */

Vue.component('mycomponent', {
    template:`<span>
                <h1>I am multiline. I am using backtick.
                Hello from component!!!!</h1>
                <br>
                Hello, {{name}}
                <button v-on:click="updateName">Update Name</button>
               </span> 
                `,
    data:function(){
        return {
                name:'OBB'
            }
    }, 
    methods:{
        updateName: function(){
            this.name = "OBBO"
        }
    }
    
})


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

