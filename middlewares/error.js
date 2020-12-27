const AppError = require('../utils/errorResponse');
const error = (err,req, res, next) => {
    // Loggin the error stack 
    console.log(err.stack.red)

    let error = {...err};
    error.message = err.message;

    // Mongoose bad ObjectID 
    if(err.name === 'CastError'){
        const message = `The ${err.value} is not found!`
        error = new AppError(message, 404);
    }

    // Mongoose Duplicate Key
    if(err.code === 11000){
        const message = `${err.keyValue.name} is already used. Please use another one!`;
        error = new AppError(message,400)
    }

    // Mongoose Validation Erro
    if(err.name === 'ValidatorError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new AppError(message, 400)
    }

    // Res with error
    res.status(error.statusCode || 500).json({
        Success: false,
        Message: error.message || 'Server Error'
    })
}

module.exports = error; 