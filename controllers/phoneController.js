const e = require('express');
const models =require('../models/index');
//list
exports.index = async (req , res) =>{
 const phones =  await models.phone.findAll();
  res.status(200).json({
    data:phones,
  })
}
//C
exports.create = async (req , res) =>{
  const post = {
    phonenumber: req.body.phonenumber,
    owner: req.body.owner,
    status: req.body.status,
  }
 await models.phone.create(post).then(result  =>{
    res.status(201).json({
      data:result,
      message:"Created.",
    })

  }).catch(error =>{
    res.status(500).json({
      message:"Failed.",
    })
  })
 }

//R
exports.show = async (req , res) =>{
  const id = req.params.id;
  const findbyID =  await models.phone.findByPk(id)
  if(findbyID == null){
    res.status(400).json({
      message:"No id has been found."
    })
  }else{
    res.status(200).json({
      data:findbyID,
    })
  }
 }
//U
 exports.update = async (req , res) =>{
  const id =req.params.id
 const data = {
   phonenumber: req.body.phonenumber,
   owner: req.body.owner,
   status: req.body.status,
 }
await models.phone.update(data,{where:{id:id}}).then(
   res.status(200).json({
     message:"updated.",
     data:data
   })
 ).catch(error =>{
   res.status(500).json({
     message:"Update failed.",
     error:error
   })
 })
}
//D
 exports.destroy = async (req , res) =>{

  const id = req.params.id;
  await models.phone.destroy({
    where:{
      id:id,
    },
  }).then(result =>{
   if(result==1){
    res.status(200).json({
      message:"Deleted"
    })
   }else{
    res.status(500).json({
      message:"Failed"
    })
   }
  })

 }


 