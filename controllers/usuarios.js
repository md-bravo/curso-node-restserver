const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}