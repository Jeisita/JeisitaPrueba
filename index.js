import express from 'express';

const port = process.env.PORT || 9000; //Constantre en javascript, 
//se da tener de un archivo llamado proccess, las lineas significan "o si no encuentra"

const app = express(); //Se crea una constante para express, objeto de tipo express


app.get("/", (req, res) =>{ //Con el servidor express empieza a trabajar con get
    res.send("Bienvenidos a mi primera API");
});


app.listen(port, () => //Se llama el objeto de tipo express, llamo el método listen
    console.log(`El servidor está escuchando el puerto ${port}`)//requiere dos parámetros, el puerto 
);

//Hasta acá ya está funcionando el servidor
