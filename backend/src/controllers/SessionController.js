// index , show , store , update , destroy

const User = require('../models/User');

module.exports = {
    async store(req , res){
        const { email } = req.body;
     
        let user = await User.findOne({ email });

        
        if(!user){
            user = await User.create({ email });
        }
        
        return res.json(user);
    },

    async show (req,res){
        //const { user_id } = req.headers;
        
        const user = await User.find();

        return res.json(user);
    },
    async delete (req,res){
        const { user_id } = req.headers;
        

        const user = await User.deleteOne({ "_id": user_id});

        return res.json(user);
    }
};