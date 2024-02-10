const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type require'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'Blood Group is Required'],
        enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
    },
    quantity:{
        type:Number,
        require:[true,'Blood Quantity is requared']
    },
    email: {
        type: String,
        required: [true, "Donar Email is Required"],
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organisation is required']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === 'out';
        }
    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventoryType === 'in';
        },
    },

},
{timestamps:true}
);

module.exports = mongoose.model('Inventory',inventorySchema)