const  mongoose  = require("mongoose");

//create schema   ( on l'a divisé sur deux étapes)
const schema=mongoose.Schema

const PersonSchema= new schema({

    name:{type:String, required: true},

    age: {type:Number},

    favoritFoods: {type:[String], required: true}

})

//export  (person remplace person schema)
module.exports =mongoose.model("person",PersonSchema) 