const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//CREATE INVENTORY
const createInventoryController = async (req,res) =>{
    try {
        const {email,inventoryType}=req.body;
        //validation
        const user = await userModel.findOne({email})

        if(!user) throw "User Not Found";

        if(inventoryType === "in" && user.role !== 'donar') {
            throw new Error("Not a donar account");
        }

        if(inventoryType === 'out' && user.role !== 'hospital') {
            throw new Error("Not a Hospital account");
        }
        //save record
       
        const inventory = new inventoryModel(req.body);
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:"New Blood Record Added",
        });
     
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message: 'Error in create Inventory API',
            error
        })
        
    }
}

module.exports = {createInventoryController}