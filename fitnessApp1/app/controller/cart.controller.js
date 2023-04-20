const cartModel = require("../../database/models/cart.model")
const Helper = require("../helper")
class Cart{
    static add = async(req,res)=>{
        try{
            const cartData = new cartModel(req.body)
            await cartData.save()
            Helper.resHandler(res, 200, true, cartData, "cart added successfull")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error Adding data")
        }
        }
        // ***************************
    static all = async(req,res)=>{
        try{
            const cartData = await cartModel.find()
                Helper.resHandler(res, 200, true, cartData, "all  in cart")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Errorin all data")
            }
        }
        // ***************************
        static single = async(req,res)=>{
            try{
                const cartData = await cartModel.findById(req.params.id)
                Helper.resHandler(res, 200, true, cartData, "cart  single featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error featch data")
            }
        }
        // *************************
        static delAll = async(req,res)=>{
            try{
                await cartModel.deleteMany()
                Helper.resHandler(res, 200, true, {}, "data deleted")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error deleted data")
            }
        }
        // *****************************
        static delSingle = async(req,res)=>{
            try{
                const cartData = await cartModel.findByIdAndDelete(req.params.id)
                Helper.resHandler(res, 200, true, cartData, "cart featched")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error del single data")
            }
        }
        // **********************************
        static editSingle = async(req,res)=>{
            try{
                const cartData = await cartModel.findById(req.params.id)
                for(let key in req.body){
                    cartData[key]= req.body[key]
                }
                await cartData.save()
                Helper.resHandler(res, 200, true, cartData, "carts edited")
            }
            catch(e){
                Helper.resHandler(res, 500, false, e.message, "Error edited data")
            }
        }
}

module.exports = Cart