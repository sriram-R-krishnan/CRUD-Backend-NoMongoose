const {  ObjectId } = require('mongodb');


// create one item
const createItem = (req,res)=>{
    db.collection('data').insertOne({ name : "davis" })
    res.json({status : "success"})

}

// get all items
const getAllItems =async (req,res)=>{
    let allDatas =await db.collection('data').find({}).toArray()
    res.send(allDatas)
}


//get One Item
const getOneItem =async (req,res)=>{
    const { id: taskID } = req.params
    let oneData = await db.collection('data').findOne({ _id:new ObjectId(taskID) })
    res.json(oneData)
}


// delete one item
const deleteItem = async (req,res)=>{
    const { id: taskID } = req.params
    let oneData = await db.collection('data').deleteOne({ _id:new ObjectId(taskID) })
    res.json(oneData)
}

// update one item
const updateItem = async (req,res)=>{
    const { id: taskID } = req.params
    let oneData = await db.collection('data').findOneAndUpdate({ _id:new ObjectId(taskID) },{ $set: {name : "santhosh arumugasamy"} })
    res.json(oneData)
}

module.exports ={ createItem , getAllItems , getOneItem , deleteItem , updateItem}