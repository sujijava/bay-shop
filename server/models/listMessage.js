import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
  Id: String,
  Title: String,
  Price: Number,
  Category: String,
  Description: String,
  Image: String,
})

var ListMessage = mongoose.model('ListMessage', listSchema)

export default ListMessage
