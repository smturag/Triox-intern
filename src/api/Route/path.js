import {
      Model
} from '../MongoDB/Schema'
import express from 'express'
import cors from 'cors'
const router = express.Router()
router.use(express.urlencoded({
      extended: true
}));
router.use(express.json())
const app = express()


//insert Data API
let postData = async function (req, res, next) {
      let dataInsert = new Model(req.body)
      console.log(dataInsert)
      try {
            let insertedData = await dataInsert.save()
            return res.json(insertedData)
      } catch (error) {
            res.send(err)
            console.log(err)

      }
}

//find Data All

const getAllData = async function (req, res, next) {
      try {
            let getData = await Model.find()
            res.send(JSON.stringify({
                  getData
            }))
      } catch (err) {
            res.send(JSON.stringify({
                  err
            }))
      }
}

//Get Data bye id

let getDataById = async function (req, res, next) {
      try {
            let getData = await Model.find({
                  productId: req.params.id
            })
            console.log('aa')
            res.send(JSON.stringify({
                  getData
            }))
      } catch (err) {
            res.send(JSON.stringify({
                  err
            }))
      }
}



export default router.post('/insert', postData).get('/findAll/', getAllData).get('/find/:id', getDataById)