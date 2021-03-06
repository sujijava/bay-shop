import express from 'express'
import ListMessage from '../models/listMessage.js'

const router = express.Router()

//method: get
//get all lists
export const getLists = async (req, res) => {
  ListMessage.find()
    .then((lists) => res.json(lists))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: get
//get a list
export const getList = async (req, res) => {
  ListMessage.findById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method:post
//add a list
export const addList = async (req, res) => {
  const Id = req.body.id
  const Title = req.body.title
  const Price = req.body.price
  const Category = req.body.category
  const Description = req.body.description
  const Image = req.body.image
  let Qty = 1

  const existingProductArr = await ListMessage.find({ Id: req.body.id })
  // console.log(existingProductArr)

  if (existingProductArr.length !== 0) {
    console.log(existingProductArr[0]._id)
    const deleted = await ListMessage.findByIdAndDelete(
      existingProductArr[0]._id
    )

    Qty = existingProductArr[0].Qty + 1
  }

  const newListMessage = new ListMessage({
    Id,
    Title,
    Price,
    Category,
    Description,
    Image,
    Qty,
  })

  newListMessage
    .save()
    .then(() => res.json(`${Title} added`))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: delete
//a list
//delete a list

export const deleteList = async (req, res) => {
  ListMessage.findByIdAndDelete(req.params.id)
    .then(() => res.json('A list deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
}

export default router
