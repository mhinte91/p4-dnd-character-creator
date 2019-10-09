const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://mike123:mike123@dnd-character-creator-v2pen.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at port ${db.port}`);
});
