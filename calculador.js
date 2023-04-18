const express = require("express");

const app = express();

const mat = require("mathjs")

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    return res.sendFile(`${__dirname}/index.html`)
})

//declaro un objeto para capturar las dimensiones de las matrices
const dimensiones = {}

// Capturo las deimensiones de las matrices
app.post("/constructor", (req, res)=>{
  
    dimensiones.fila2Columna1 = req.body.columnaMatriz1; 

    dimensiones.fila1 = req.body.filaMatriz1;

    dimensiones.columna2 = req.body.columnaMatriz2;

    //Para verificar muestro por consola los datos capturado
  
    console.log(`Datos capturados ${JSON.stringify(dimensiones)}`);

    return;
})



app.post("/capturar", (req, res)=>{
    const matrices = req.body;
    
   return res.json({result: mat.multiply(mat.matrix(matrices.matriz1), mat.matrix(matrices.matriz2))})
    
})

app.listen(4050, ()=>console.log("Listo para los chismes"))