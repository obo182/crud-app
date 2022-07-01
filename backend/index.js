import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserRoute from "./routes/UserRoute"

const port = 3000
const app = express()
mongoose.connect('mongodb://localhost:27017/db_belajar_crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Mongoose server up and running...'))

app.use(cors())
app.use(express.json())
app.use(UserRoute)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Server is running')
})

