const mongoose = require('mongoose');
const uri = "mongodb+srv://intern:intern@cluster0.jkg4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionDb = mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
}, (err, client) => {
      if (err) return console.error(err)
      console.log('Connected to Database')
})

module.exports.connectionDb = async function connectionDb() {
      let connectors = await connectionDb

      return connectors
}

export default connectionDb