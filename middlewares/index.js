const { creatingSchema } = require('../schemas');

module.exports.validateUser = async (req, res, next) => {
    try {
        await creatingSchema.validate(req.body);
        
        return next();
    } catch (error) {
        res.status(400).send(error.message);
    }
}