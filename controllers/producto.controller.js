const {response, request} = require('express');
const productos = [
    { id: 1, producto: 'Papa' },
    { id: 2, producto: 'Arroz' },
    { id: 3, producto: 'Café' },
  ]

const viewproducto = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};



const productoGet = (req = request, res = response) => {


    //ejemplo de respuesta tipo json
    res.status(200).send(
        productos
    );
}

module.exports={
    viewproducto,
    productoGet,
    
}