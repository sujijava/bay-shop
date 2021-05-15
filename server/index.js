import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import listRoutes from './routes/lists.js'
import path from 'path'

const app = express()
const __dirname = path.resolve()

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))
app.use(cors())

app.use('/server/cart', listRoutes)

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

const CONNECTION_URI =
  process.env.CONNECTION_URL ||
  'mongodb+srv://dbUser:susieoh@cluster0.dhawv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port`)))
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false)
