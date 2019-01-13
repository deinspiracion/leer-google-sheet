const vue = new Vue({
    el:'#app',
    data:{
        listaDatos : []
    },
    created(){
        this.getLista()
    },
    methods:{
        recargar(){
            console.log("recargando");
            
            this.getLista()
        },
        getLista(){

            fetch("https://content-sheets.googleapis.com/v4/spreadsheets/1UuZgZaGKNkze5_M2sqqT6LDXKhuweolnuPI8nFuM-vE/values/A2:AZ100?access_token=AIzaSyBvHAmDDnhA_kiJN7nQD7G7OVk4w1-qmCU&key=AIzaSyBvHAmDDnhA_kiJN7nQD7G7OVk4w1-qmCU").then((lista)=>{
                
                return lista.json()
                
            }).then((valores)=>{

                this.listaDatos = valores.values

            }).catch(err=>{

                console.log(err);
                
            })
        }
        
    }

})