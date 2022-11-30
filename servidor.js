const http = require('http')
const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor HTTP escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`Error en server ${error}`));

app.get('/', (req,res) => {
    res.send('<h1 style="color:blue">Bienvenidos al servidor Express</h1>')
})

const lista = fs.readFileSync('./productos.txt', 'utf-8')
const productos = JSON.parse(lista);
let productosLength = productos.length;

function Random(max)
{
    return Math.floor(Math.random() * max);
}

let random = Random(productosLength);

app.get('/productos', (req,res) => {
    res.send(productos)
})

const listaRandom = fs.readFileSync('./productos.txt', 'utf-8')
const productoRandom = JSON.parse(listaRandom);


app.get('/productoRandom', (req,res) => {
    res.send(productos[random])
})

