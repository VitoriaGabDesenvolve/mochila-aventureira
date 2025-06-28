const { listarTodosOsItens, detalharItem } = require("../services/itemService")


async function listarItens(req, res) {
    try {
        const itens = await listarTodosOsItens(); 
        if (itens.length() == 0 ){
            res.status(422).send("Sem itens cadastrados")
        } else {
            res.status(200).json(itens); 
        }
    } catch (error) {
        res.status(501).send(error.message)
    }
}

async function listarItem(req, res) {
    try {
        const id = req.params.id
        const item = await detalharItem(id)
        if (item.length == 0 ){
            res.status(422).send("item inexistente")
        } else {
            res.status(200).json(item)
        }
    } catch (error) {
        res.status(501).send(error.message)
    }
}

function criarItem(req, res) {
        try {
        res.send("criação de item")
    } catch (error) {
        res.status(501).send(error.message)
    }
}

function editarItem(req, res) {
        try {
        res.send("edição de item")
    } catch (error) {
        res.status(501).send(error.message)
    }
}

function deletarItem(req, res) {
        try {
        res.send("deletar item")
    } catch (error) {
        res.status(501).send(error.message)
    }
}

module.exports = {
    listarItens,
    listarItem,
    criarItem,
    editarItem,
    deletarItem
}