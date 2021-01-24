const express = require('express');
const costs = express.Router();
const userModel = require('../models/register');
const costsModel = require('../models/costs');
const token = require('../utilities/token')
costs.post("/addCost", (req, res, next) => {
    let data = token.verifyToken(req.body.token)
    if (data) {
        if (data.name === "TokenExpiredError") {
            let error = new Error("Please Login Again For Securite Reasons")
            error.status = 300
            throw (error)
        }
        else if (data.cashewAdmin) {
            let date = (new Date().getDate()) + "-" + (new Date().getMonth()) + "-" + (new Date().getFullYear())
            let countryCosts = {
                id: data.country + " " + date,
                place: data.country,
                date: date,
                placeType: 'CO',
                areaCosts: req.body.costs
            }
            let stateCosts = {
                stateName: data.state,
                placeType: 'ST',
                areaCosts: req.body.costs
            }
            let districtCosts = {
                districtName: data.district,
                placeType: 'DI',
                areaCosts: req.body.costs
            }
            let cityCosts = {
                cityName: data.city,
                placeType: 'CI',
                areaCosts: req.body.costs
            }
            return costsModel.appendPlaces(countryCosts, stateCosts, districtCosts, cityCosts).then((responseFrommCosts) => {
                return userModel.appendCosts(data.phoneNo, req.body.costs).then((resUser) => {
                    if (resUser.nModified) {
                        return res.json(responseFrommCosts)
                    }
                    else {
                        let error = new Error("Technical error try after some time")
                        err.status = 404
                        throw error
                    }
                }).catch((err) => {
                    next(err)
                })
            }
            ).catch((err) => {
                next(err)
            })
        }
        else {
            res.json({ message: "Please verify Your phone no By calling us 9100556285 or you will get call within 24 hrs" })
        }
    }
})
costs.post("/getCosts", (req, res, next) => {
    return costsModel.getAllPlaceCosts().then((data) => {
        return res.json(data)
    }).catch((err) => {
        next(err)
    })
})
costs.post("/getUserCosts", (req, res, next) => {
    let data = token.verifyToken(req.body.token)
    if (data) {
        if (data.name === "TokenExpiredError") {
            let error = new Error("Please Login Again For Securite Reasons")
            error.status = 300
            throw (error)
        }
        else if (data.cashewAdmin) {
            return userModel.getCosts(data.phoneNo).then(resP => {
                return res.json(resP)
            }).catch(err => {
                next(err)
            })


        }
        else {
            res.json({ message: "Please verify Your phone no By calling us 9100556285 or you will get call within 24 hrs" })
        }
    }
})
module.exports = costs
