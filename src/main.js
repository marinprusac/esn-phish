const express = require('express')

const PORT = 3000
const app = express()


app.get('/account/change-password', (req, res) => {
    res.send("Whoops!")
    console.log(req.ip)
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})