const express = require('express');
const routing = express.Router();
const userData = require('../models/register');
const token = require('../utilities/token')
routing.post("/register", (req, res, next) => {

    // generateID.generate(req.body.phoneNo, req.body.emailId).then(id => {
    let userDetails = {
        cashewAdmin: false,
        admin: false,
        costs: [],
        phoneNo: req.body.phoneNo,
        details: req.body
    }
    return userData.register(userDetails).then(data => {
        return res.json({ data })
    }).catch(err => {
        next(err)
    })

    // }).catch(err => {
    //     next(err)

})
routing.post("/login", (req, res, next) => {
    return userData.login(req.body).then((data) => {
        if (data) {
            let details = {
                phoneNo: data.phoneNo,
                emailId: data.details.emailId,
                cashewAdmin: data.cashewAdmin,
                name: data.details.name,
                district: data.details.district[0],
                state: data.details.state[0],
                city: data.details.city[0],
                country: data.details.country[0],
                companyName: data.details.companyName
            }
            let tokens = token.generateToken(details)
            // .then((token) => {
            let wronManFullCashew
            if (details.cashewAdmin) {
                wronManFullCashew = "###@@@@@@&%cashew!J$&$&J@@@@@@##"
            }
            else {
                wronManFullCashew = "###@@@@@&%cashew!J$&$&@@@@@##"
            }
            return res.json({
                token: tokens,
                wronManFullCashew,
                phoneNo: details.phoneNo,
                name: details.name,
                district: details.district,
                state: details.state,
                city: details.city,
                country: details.country,
                company: details.companyName
            })
            // })
        }
        else {
            let error = new Error("User dosent exist please Register")
            error.status = 400
            throw (error)
        }
    }).catch(err => {
        next(err)
    })
})
routing.post("/adlogin", (req, res, next) => {
    return userData.login(req.body).then((data) => {
        if (data) {
            let details = {
                phoneNo: data.phoneNo,
                emailId: data.details.emailId,
                admin: data.admin,
                cashewAdmin: data.cashewAdmin,
                name: data.details.name,
                district: data.details.district[0],
                state: data.details.state[0],
                city: data.details.city[0],
                country: data.details.country[0],
                companyName: data.details.companyName
            }
            let tokens = token.generateToken(details)
            let wronManFullCashew
            if (details.admin) {
                wronManFullCashew = "###@@@@@@#$^%&%cashew!J$&$&KCDSJ@@@@@@##"
            }
            else {
                wronManFullCashew = "###@@@@@&%cashew!wwdsdsvssJ$&$&@@@@@##"
            }
            return res.json({
                token: tokens,
                wronManFullCashew,
                phoneNo: details.phoneNo,
                name: details.name,
                district: details.district,
                state: details.state,
                city: details.city,
                country: details.country,
                company: details.companyName
            })
        }
        else {
            let error = new Error("User dosent exist please Register")
            error.status = 400
            throw (error)
        }
    }).catch(err => {
        next(err)
    })
})
routing.post("/getUsers", (req, res, next) => {
    let data = token.verifyToken(req.body.token)
    if (data) {
        if (data.name === "TokenExpiredError") {
            let error = new Error("Please Login Again For Securite Reasons")
            error.status = 300
            throw (error)
        }
        else if (data.admin) {
            return userData.getUsersNotAsAdmin().then(usersNotAsAdminData => {
                return userData.getUsersAsAdmin().then(usersAsAdminData => {
                    return res.json({ usersNotAsAdminData: usersNotAsAdminData, usersAsAdminData: usersAsAdminData })
                }).catch(err => {
                    next(err)
                })
            }).catch(err => {
                next(err)
            })
        }
    }
})
routing.post("/updateUsers", (req, res, next) => {
    let data = token.verifyToken(req.body.token)
    if (data) {
        if (data.name === "TokenExpiredError") {
            let error = new Error("Please Login Again For Securite Reasons")
            error.status = 300
            throw (error)
        }
        else if (data.admin) {
            return userData.updateUsersNotAsAdmin(req.body.phoneNo).then(respUpdate => {
                if (respUpdate.nModified === 1) {
                    return userData.getUsersNotAsAdmin().then(usersNotAsAdminData => {
                        return userData.getUsersAsAdmin().then(usersAsAdminData => {
                            return res.json({ usersNotAsAdminData: usersNotAsAdminData, usersAsAdminData: usersAsAdminData })
                        }).catch(err => {
                            next(err)
                        })
                    }).catch(err => {
                        next(err)
                    })
                }
                else {
                    let error = new Error("Technical error try after some time")
                    err.status = 404
                    throw error
                }
            }).catch(err => {
                next(err)
            })

        }
    }
})
routing.post("/verify", (req, res, next) => {
    let data = token.verifyToken(req.body.token)
    return res.json({
        phoneNo: data.phoneNo,
        name: data.name,
        district: data.district,
        state: data.state,
        city: data.city,
        country: data.country,
        company: data.companyName
    })
})
module.exports = routing
