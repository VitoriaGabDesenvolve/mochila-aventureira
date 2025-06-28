const express = require("express")
const app = express()
const routerItens  = require("./routes/itemRouter")
app.use(express.json())

const port = 3030

app.use("/", routerItens)

app.listen(port, () => {
    console.log(`server iniciado na porta ${port}`)
})