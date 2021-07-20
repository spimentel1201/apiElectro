import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://epimentel:q1w2e3r4t5@@@cluster0.si6oy.mongodb.net/RestAPI_Electro?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))