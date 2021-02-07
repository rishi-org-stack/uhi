
const component_app  = new Vue({
    el:"#app",
    data:{
        newtodo:"",
        heading:"TODO",
        id:0,
        todos :[],
        completed :false,
        all:[],
        left:0 
    },
    methods:{
        modify(){
            this.id++
            let ntodo = {
                ID : this.id,
                Text:this.newtodo,
                Completed :this.completed
            }
            this.todos.push(ntodo)
            this.left = this.todos.length;
            this.newtodo=''
        },
        deletecompleted(){
            if (this.todos.length>2 ||  this.todos.length<2){
                this.todos.forEach(element => {
                    if (element.Completed === true){
                        let index = this.todos.indexOf(element,1)
                        this.todos.splice(index,1)
                    }
                });
            }
            if (this.todos.length ==2){
                if (this.todos[0].Completed ==true){
                    this.todos.splice(0,1)
                }
                if (this.todos[1].Completed ==true){
                    this.todos.splice(1,1)
                }
            }
        },

    }
})

// const form_component = new Vue({
//     el:'#form1',
//     data:{
//         newtodo:"jiha mai hu khalnayak"
//     },
//     methods:{
//         modify(){
//             console.log(form_component.$data.newtodo);
//         }        changestatus():{
            
     //   }
//     }
// })

const changestatus = (vari)=>{
    if (vari.Completed==false){
        vari.Completed=true
    }
}