const boom = require('boom')
const { findByIdAndDelete } = require('../model/Product')

const genericCrud = (model) =>({
    async get ({params : {id}}) {
        try{
            const item = await model.findById(id)
            return item
        }catch(err){
            throw boom.boomify(err)

        }

    },
    async getAll () {
        try{
            const item = await model.find()
            return item
        }catch(err){
            throw boom.boomify(err)

        }
    },
    async create () {
        try{
            const item = new model(body)
            const newItem = await model.save()
            return newItem
        }catch(err){
            throw boom.boomify(err)

        }
    },
    async update ({params : {id}, body}) {
        try{
            const item = await model.findByIdAndUpdate(id, body, {new:true})
            return item
        }catch(err){
            throw boom.boomify(err)

        }
    },
    async delete ({params: {id}}) {
        try{
            await findByIdAndDelete(id)
            return {status: 'OK', message:'Продукт удален'}
        }catch(err){
            throw boom.boomify(err)

        }
    }

})

module.exports = genericCrud