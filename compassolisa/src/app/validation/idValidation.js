const mongoose = require('mongoose');

module.exports = async (req, res, next) => {
    try {
        const error = await mongoose.Types.ObjectId.isValid(req.params.id);
        if (!error) throw error
        return next();
    } catch (error) {
        return res.status(400).json("Id diferente do Padrão");
    }
}