const collection = require('../utilities/connection')
userData = {}
userData.register = (data) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.insertMany(data).then((response) => {
            if (response) {
                return response
            } else {
                let err = new Error("Script insertion failed")
                err.status = 500
                throw new Error
            }
        })
    }).catch(error => {
        if (error.status === 504) {
            throw error
        }
        else {
            if (error.errors) {
                let err = new Error(error.errors.inStock.message + " inStock")
                err.status = 406
                throw err
            }
            else if (error.err) {
                if (error.err.errmsg) {
                    let err = new Error("User phone No already exists", error.err.errmsg)
                    err.status = 406
                    throw err

                }
            }
        }
    })
}
userData.login = (data) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.find({ phoneNo: data.phoneNo }).then((response) => {
            if (response[0].details.password === data.password) {
                return response[0]
            }
            else {
                let error = new Error("Entered Wrong PhoneNo or Password")
                err.status = 404
                throw error
            }
        }).catch(err => {
            let error = new Error("Entered Wrong PhoneNo or Password")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}
userData.appendCosts = (phoneNo, data) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        let date = (new Date().getDate()) + "-" + (new Date().getMonth()) + "-" + (new Date().getFullYear())
        return collection.updateOne({ phoneNo: phoneNo }, { costs: data, date: date }).then((response) => {
            return response
        }).catch(err => {
            let error = new Error("Technical error try after some time")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}
userData.getCosts = (phoneNo) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        let date = (new Date().getDate()) + "-" + (new Date().getMonth()) + "-" + (new Date().getFullYear())
        return collection.find({ date: date, phoneNo: phoneNo }, { costs: 1 }).then((response) => {
            return response
        }).catch(err => {
            let error = new Error("Technical error try after some time")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}

userData.getUsersNotAsAdmin = () => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.find({ cashewAdmin: false }, { "details.name": 1, "details.companyName": 1, "details.emailId": 1, "details.phoneNo": 1, "details.country": 1, "details.state": 1, "details.district": 1, "details.city": 1 }).then((response) => {
            return response
        }).catch(err => {
            let error = new Error("Technical error try after some time")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}
userData.getUsersAsAdmin = () => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.find({ cashewAdmin: true }, { "details.name": 1, "details.companyName": 1, "details.emailId": 1, "details.phoneNo": 1, "details.country": 1, "details.state": 1, "details.district": 1, "details.city": 1 }).then((response) => {
            return response
        }).catch(err => {
            let error = new Error("Technical error try after some time")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}
userData.updateUsersNotAsAdmin = (phoneNo) => {
    return collection.userDetailsSchemaPro().then((collection) => {
        return collection.updateOne({ phoneNo: phoneNo }, { cashewAdmin: true }).then((response) => {
            return response
        }).catch(err => {
            let error = new Error("Technical error try after some time")
            err.status = 404
            throw error
        })
    }).catch(err => {
        throw err
    })
}
module.exports = userData
