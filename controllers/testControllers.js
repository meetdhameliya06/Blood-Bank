const testController = (req,res) =>{
    res.status(200).send({
        message:"test routs.",
        success: true,
    });
};

module.exports={testController}