const app = new Vue({
    el:'#app',
    data:{

        titulo:'listado de tareas',
        tareas:[],
        nuevaTarea:'',

    },

    methods: {

        agregarTarea(){
            //console.log('diste click ', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            });
            this.nuevaTarea="";
            localStorage.setItem('gym-vue', JSON.stringify (this.tareas));
            
        },
        cambioEstado(index){
          //console.log("Diste click", index);
          this.tareas[index].estado=true;
          localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        
        },
        borrar(index){
            //console.log("clickborrar", index);
            this.tareas.splice(index,1);
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        }
    },

    created:function(){
        let datosDB = JSON.parse (localStorage.getItem('gym-vue'));
        if(datosDB==null){
            this.tareas=[];
        } else {
            this.tareas = datosDB;
        }
    }

})