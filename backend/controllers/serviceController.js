const {Service:ServiceModel} = require("../models/Services");

const serviceController = {

    create: async(req,res) =>{
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = await ServiceModel.create(service); // the "create" function comes from mongoose

            res.status(201).json({response, msg: "serviço criado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = serviceController;