const dataBase = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

dataBase.then(async db => {
    // inserir dados
   await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Lar das meninas",
    description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",

    images: [
        "http://127.0.0.1:5500/images/home.jpg",

        "https://source.unsplash.com/random?id=2",
    ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horário de visitas Das 8h até 18h",
    open_on_weekends:"1"
   });
    
    //consultar dados
   //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   //console.log(selectedOrphanages);
})