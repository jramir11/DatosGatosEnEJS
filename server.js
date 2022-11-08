
//const { Console } = require("console");
let express = require("express");
let app = express();

//para referencia imagenes, js , html y estilos  estaticos , uno en cada carpeta
app.use(express.static(__dirname+'/public'));
//carpeta views interpretyados con EJS
app.set('views',__dirname+'/views');
//se establece motor de vistas de express con EJS
app.set('view engine','ejs');

var gatos_array = [
        {id:0,
        img:"/img/gato1.jpeg", 
        name: "Michis", 
        comidafavorita: "pescado",
        edad:3, 
        actividades:["saltar","dormir"]},

        {id:1,
        img:"/img/gato2.jpeg", 
        name: "Hercules", 
        comidafavorita: "tallarines",
        edad:8, 
        actividades:["dormir","arañar"]}, 
        
        {id:2,
        img:"/img/gato3.jpeg", 
        name: "Tony", 
        comidafavorita: "atun",
        edad:5, 
        actividades:["dormir"]}
    ];

//lamada principal aplicacion inicial gatos.ejs, se envia array_gatos
app.get("/gatos",function (request,response) {
    response.render("gatos",{gatos: gatos_array});
})

//lamada a detalle_gatos, rescata el id elegido segun click en la imagen
//rescata id de array elegido en gatos.ejs
app.get("/gatos/:id",function (request, response){
    let id=request.params.id;   //equivalentes a la anterior para 1 solo valor
    let recibido=gatos_array[id];
    response.render("detallegatos", {gatos: recibido});       //llama a detalle_gatos con el objeto de datos del id
    
})


// //lamada a detalle_gatos, rescata el id elegido segun click en la imagen
// //rescata id de array elegido en gatos.ejs
// app.get('/gatos/:id',function (request, response){
//   console.log("2222");
//     const {id}=request.params;  //desestructuracion, para enviar multiples datos en un objeto
//     //const id=request.params.id;   //equivalentes a la anterior para 1 solo valor
//     let gato;
//     for (i=1;i<gatos_array.length;i++){
//         if (gatos_array[i].id == id){     //busca en array el id elegido
//             gato=gatos_array[i];
//             break;  }
//     }
//     response.render("detalle_gatos", {"gato": gato});       //llama a detalle_gatos con el objeto de datos del id
    
// })




//siempre al final
app.listen(8001,function(){
    console.log("escuchando en puerto 8001 la pagina http://localhost:8001/gatos");
})
