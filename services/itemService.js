const { getAllItens, getItem } = require("../models/itemModel");

function listarTodosOsItens() {
  return getAllItens();
}

function detalharItem(id) {
    return getItem(id)
}

module.exports = { listarTodosOsItens, detalharItem };
