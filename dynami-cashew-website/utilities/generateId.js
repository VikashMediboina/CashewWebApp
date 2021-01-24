const collection = require('./connection')
generateID = {}

generateID.generate = (phoneNo, emailId) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.find({}).sort({ id: -1 }).limit(1).then((response) => {
            return collection.find({ "details": { "emailId": emailId } }, {}).then(data => {
                console.log(response, data, "ee", emailId)
                return Number((response[0].id) + 1)
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            let error = new Error("error in generating Id")
            err.status = 406
            throw error
        })
    })
        .catch(err => {
            if (err.status === 504) {
                throw err
            }
        })
}
module.exports = generateID