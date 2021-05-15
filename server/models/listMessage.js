import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
  Id: String,
  Title: String,
  Price: Number,
  Category: String,
  Image: String,
  Qty: Number,
})

var ListMessage = mongoose.model('ListMessage', listSchema)

export default ListMessage
