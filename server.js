const express = require('express')
const routes = require('./routes')

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)
app.listen(port, () => {
    console.log(`Server has start at ${port}`)
})