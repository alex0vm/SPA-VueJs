const app = new Vue({
  el: "#app",
  data: {
    titulo: "listado de tareas",
    tareas: [],
    nuevaTarea: "",
    modificacion:"",
    contador:0
  },

  methods: {
    agregarTarea() {
      //console.log('diste click ', this.nuevaTarea);
      if (!this.nuevaTarea) {
        alert("Ingresa una tarea");
      } else {
        this.contador++
        this.tareas.push({
          nombre: this.nuevaTarea,
          estado: false,
        });
      }
      this.nuevaTarea = "";
      localStorage.setItem("my-vue", JSON.stringify(this.tareas));
    },
    cambioEstado(index) {
      //console.log("Diste click", index);
      if(this.tareas[index].estado == false){
      this.tareas[index].estado = true;
      this.contador--}
       
      localStorage.setItem("my-vue", JSON.stringify(this.tareas));
    },
    borrar(index) {
      //console.log("clickborrar", index);
      if (this.tareas[index].estado == false) {
      this.contador--
      }
      this.tareas.splice(index, 1);
      localStorage.setItem("my-vue", JSON.stringify(this.tareas));
    },
    editar(index){
      //console.log("click", index)
      this.tareas.splice(index, 1, { nombre:this.modificacion, estado:false });
      this.modificacion="";
      
      localStorage.setItem("my-vue", JSON.stringify(this.tareas));
    }
  },

  created: function () {
    let datosDB = JSON.parse(localStorage.getItem("my-vue"));
    if (datosDB == null) {
      this.tareas = []
    } else {
      this.tareas = datosDB;
    }
  },

  computed:{
    color(){
      return {
        'bg-success':this.contador <= 10,
        'bg-warning':this.contador > 10 && this.contador < 20,
        'bg-danger' :this.contador >= 20
      }
    }
  }
});
