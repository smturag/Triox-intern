import express from 'express'
import cors from 'cors'
import  connection from './MongoDB/connection'
import router from './Route/path'
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.use('/api',router)

async function start(){
      return await app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })

}
start()
