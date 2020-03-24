const Spot = require('../models/Spot');

module.exports = {
    async show (req,res){
        const { user_id } = req.headers;
        
        const spots = await Spot.find({ user: user_id});

        return res.json(spots);
    },
/*
    async delete (req,res){
        const { user_id } = req.headers;
        

        const spots = await Spot.deleteOne({ "_id": user_id});

        return res.json(spots);
    }*/
}