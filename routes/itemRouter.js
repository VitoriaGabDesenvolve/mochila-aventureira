const { Router } = require("express")
const router = Router()

const { listarItens, listarItem, criarItem, editarItem, deletarItem } = require("../controllers/itemController")

router.get("/", listarItens)
router.get("/id/:id", listarItem)
router.post("/", criarItem)
router.put("/id/:id", editarItem)
router.delete("/id/:id", deletarItem)

module.exports = router