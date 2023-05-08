console.log("ciao");
const { createApp } = Vue

createApp({
    data() {
        return {
            
            titolo: "Buon giorno Vue",
            img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            titoloClasse:"red",

        }
    },
    methods: {
      
    }
}).mount('#app');
