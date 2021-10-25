const nextTranslate = require('next-translate');

module.exports = {
    images:{
        domains:['fakestoreapi.com']
    },
    env:{
    },
    ...nextTranslate()
}