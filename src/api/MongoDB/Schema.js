const mongoose = require('mongoose');
const Schema = mongoose.Schema

let insertSchema = new Schema({
      productId:{
            type:String,
            require: true
      },
      description:{
            type:String,
            require: true
      },
      value:{
            type:Number,
            require: true
      },
      av:{
            type:Number,
            require: true
      },
      cd:{
            type:Number,
            require: true
      },
      rd:{
            type:Number,
            require: true
      },
      sd:{
            type:Number,
            require: true
      },
      total:{
            type:Number,
            require: true
      }

})

export let Model = mongoose.model('insertData',insertSchema)