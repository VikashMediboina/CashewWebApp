const collection = require('../utilities/connection')
costs = {}
findAverage = (intialCost, intialN, nowCost) => {
    if (((Number(nowCost) - Number(intialCost)) <= 1001) && ((Number(nowCost) - Number(intialCost)) >= -1001) && Number(nowCost) !== 0) {
        return (((Number(intialCost) * intialN) + Number(nowCost)) / (intialN + 1)).toFixed(2)
    }
    else {
        return intialCost
    }
}

statePlace = (statesArray, state) => {
    for (let i = 0; i < statesArray.length; i++) {
        if (statesArray[i].stateName === state) {
            return { statearray: statesArray[i], indexState: i, returnValue: true }
        }
    }
    return { returnValue: false }
}
districtPlace = (districtArray, district) => {
    for (let i = 0; i < districtArray.length; i++) {
        if (districtArray[i].districtName === district) {
            return { districtarray: districtArray[i], indexState: i, returnValue: true }
        }
    }
    return { returnValue: false }
}
cityPlace = (cityArray, city) => {
    for (let i = 0; i < cityArray.length; i++) {
        if (cityArray[i].cityName === city) {
            return { cityArray: cityArray[i], indexState: i, returnValue: true }
        }
    }
    return { returnValue: false }
}
createAverageData = (areaCosts, costs) => {
    let areaCosts1 = {
        W210: findAverage(areaCosts.W210, areaCosts.W210n, costs.W210),
        W210n: (Number(areaCosts.W210) - Number(costs.W210) <= 1001) && (Number(areaCosts.W210) - Number(costs.W210) >= -1001) && (Number(costs.W210) !== 0) ? areaCosts.W210n + 1 : areaCosts.W210n,
        W240: findAverage(areaCosts.W240, areaCosts.W240n, costs.W240),
        W240n: (Number(areaCosts.W240) - Number(costs.W240) <= 1001) && (Number(areaCosts.W240) - Number(costs.W240) >= -1001) && (Number(costs.W240) !== 0) ? areaCosts.W240n + 1 : areaCosts.W240n,
        W320: findAverage(areaCosts.W320, areaCosts.W320n, costs.W320),
        W320n: (Number(areaCosts.W320) - Number(costs.W320) <= 1001) && (Number(areaCosts.W320) - Number(costs.W320) >= -1001) && (Number(costs.W320) !== 0) ? areaCosts.W320n + 1 : areaCosts.W320n,
        W400: findAverage(areaCosts.W400, areaCosts.W400n, costs.W400),
        W400n: (Number(areaCosts.W400) - Number(costs.W400) <= 1001) && (Number(areaCosts.W400) - Number(costs.W400) >= -1001) && (Number(costs.W400) !== 0) ? areaCosts.W400n + 1 : areaCosts.W400n,
        JH: findAverage(areaCosts.JH, areaCosts.JHn, costs.JH),
        JHn: (Number(areaCosts.JH) - Number(costs.JH) <= 1001) && (Number(areaCosts.JH) - Number(costs.JH) >= -1001) && (Number(costs.JH) !== 0) ? areaCosts.JHn + 1 : areaCosts.JHn,
        AM: findAverage(areaCosts.AM, areaCosts.AMn, costs.AM),
        AMn: (Number(areaCosts.AM) - Number(costs.AM) <= 1001) && (Number(areaCosts.AM) - Number(costs.AM) >= -1001) && (Number(costs.AM) !== 0) ? areaCosts.AMn + 1 : areaCosts.AMn,
        KK: findAverage(areaCosts.KK, areaCosts.KKn, costs.KK),
        KKn: (Number(areaCosts.KK) - Number(costs.KK) <= 1001) && (Number(areaCosts.KK) - Number(costs.KK) >= -1001) && (Number(costs.KK) !== 0) ? areaCosts.KKn + 1 : areaCosts.KKn,
        K: findAverage(areaCosts.K, areaCosts.Kn, costs.K),
        Kn: (Number(areaCosts.K) - Number(costs.K) <= 1001) && (Number(areaCosts.K) - Number(costs.K) >= -1001) && (Number(costs.K) !== 0) ? areaCosts.Kn + 1 : areaCosts.Kn,
        LWP: findAverage(areaCosts.LWP, areaCosts.LWPn, costs.LWP),
        LWPn: (Number(areaCosts.LWP) - Number(costs.LWP) <= 1001) && (Number(areaCosts.LWP) - Number(costs.LWP) >= -1001) && (Number(costs.LWP) !== 0) ? areaCosts.LWPn + 1 : areaCosts.LWPn,
        BBP: findAverage(areaCosts.BBP, areaCosts.BBPn, costs.BBP),
        BBPn: (Number(areaCosts.BBP) - Number(costs.BBP) <= 1001) && (Number(areaCosts.BBP) - Number(costs.BBP) >= -1001) && (Number(costs.BBP) !== 0) ? areaCosts.BBPn + 1 : areaCosts.BBPn,
        DJH: findAverage(areaCosts.DJH, areaCosts.DJHn, costs.DJH),
        DJHn: (Number(areaCosts.DJH) - Number(costs.DJH) <= 1001) && (Number(areaCosts.DJH) - Number(costs.DJH) >= -1001) && (Number(costs.DJH) !== 0) ? areaCosts.DJHn + 1 : areaCosts.DJHn,
        DK: findAverage(areaCosts.DK, areaCosts.DKn, costs.DK),
        DKn: (Number(areaCosts.DK) - Number(costs.DK) <= 1001) && (Number(areaCosts.DK) - Number(costs.DK) >= -1001) && (Number(costs.DK) !== 0) ? areaCosts.DKn + 1 : areaCosts.DKn,
        YDW: findAverage(areaCosts.YDW, areaCosts.YDWn, costs.YDW),
        YDWn: (Number(areaCosts.YDW) - Number(costs.YDW) <= 1001) && (Number(areaCosts.YDW) - Number(costs.YDW) >= -1001) && (Number(costs.YDW) !== 0) ? areaCosts.YDWn + 1 : areaCosts.YDWn,
        Y240: findAverage(areaCosts.Y240, areaCosts.Y240n, costs.Y240),
        Y240n: (Number(areaCosts.Y240) - Number(costs.Y240) <= 1001) && (Number(areaCosts.Y240) - Number(costs.Y240) >= -1001) && (Number(costs.Y240) !== 0) ? areaCosts.Y240n + 1 : areaCosts.Y240n,
        Y320: findAverage(areaCosts.Y320, areaCosts.Y320n, costs.Y320),
        Y320n: (Number(areaCosts.Y320) - Number(costs.Y320) <= 1001) && (Number(areaCosts.Y320) - Number(costs.Y320) >= -1001) && (Number(costs.Y320) !== 0) ? areaCosts.Y320n + 1 : areaCosts.Y320n,
    }
    return areaCosts1
}


costs.getAllPlaceCosts = () => {
    let date = (new Date().getDate()) + "-" + (new Date().getMonth()) + "-" + (new Date().getFullYear())
    return collection.placeCostsSchemaPro().then(collection => {
        return collection.find({ date: date }, {}).then(data => {
            if (data.length) {
                return data
            }
            else {
                var d = new Date();
                d.setDate(d.getDate() - 1);
                let date = (d.getDate()) + "-" + (d.getMonth()) + "-" + (d.getFullYear())
                return collection.find({ date: date }, {}).then(data1 => {
                    if (data1.length) {
                        return data1
                    }
                    else {
                        var d = new Date();
                        d.setDate(d.getDate() - 2);
                        let date = (d.getDate()) + "-" + (d.getMonth()) + "-" + (d.getFullYear())
                        return collection.find({ date: date }, {}).then(data2 => {
                            return data2
                        }).catch(error => {
                            let err = new Error("sorry some technical error")
                            err.status = 406
                            throw err
                        })
                    }
                }).catch(error => {
                    let err = new Error("sorry some technical error")
                    err.status = 406
                    throw err
                })
            }
        }).catch(error => {
            let err = new Error("sorry some technical error")
            err.status = 406
            throw err
        }).catch(err => {
            throw err
        })
    })
}
costs.appendPlaces = (country, state, district, city) => {
    let data = {
        id: country.id,
        country: country.place,
        date: country.date,
        placeType: country.placeType,
        areaCosts: country.areaCosts,
        state: [{
            stateName: state.stateName,
            areaCosts: state.areaCosts,
            placeType: state.placeType,
            district: [{
                districtName: district.districtName,
                areaCosts: district.areaCosts,
                placeType: district.placeType,
                city: [{
                    cityName: city.cityName,
                    areaCosts: city.areaCosts,
                    placeType: city.placeType,
                }]
            }]
        }]
    }
    return collection.placeCostsSchemaPro().then(collection => {
        return collection.find({ id: country.id }).then(countryFindRES => {
            if (countryFindRES.length) {
                return collection.find({ id: country.id, country: country.place }).then(countryresponse => {
                    if (countryresponse.length) {
                        let countryAreaCosts = createAverageData(countryresponse[0].areaCosts, country.areaCosts)
                        return collection.updateOne({ id: country.id }, { areaCosts: countryAreaCosts }).then(countryUpdateRes => {
                            if (countryUpdateRes.nModified === 1) {
                                // return collection.find({ state: { $elemMatch: { stateName: state.stateName } } }, { "state.$.district": 1 }).then(stateresponse => {
                                let stateResponse = statePlace(countryresponse[0].state, state.stateName)
                                if (stateResponse.returnValue) {
                                    let stateAreaCosts = createAverageData(stateResponse.statearray.areaCosts, state.areaCosts)
                                    return collection.updateMany({ id: country.id, state: { $elemMatch: { stateName: state.stateName } } }, {
                                        $set: {
                                            'state.$.areaCosts': stateAreaCosts
                                        }
                                    }, { upsert: true, new: true }).then((res) => {
                                        if (res.nModified === 1) {
                                            let districtResponse = districtPlace(stateResponse.statearray.district, district.districtName)
                                            if (districtResponse.returnValue) {
                                                let districtAreaCosts = createAverageData(districtResponse.districtarray.areaCosts, district.areaCosts)
                                                return collection.updateMany({ id: country.id, state: { $elemMatch: { district: { $elemMatch: { districtName: district.districtName } } } } }, {
                                                    $set: {
                                                        'state.$[i].district.$[j].areaCosts': districtAreaCosts
                                                    }
                                                }, { arrayFilters: [{ "i.stateName": state.stateName }, { "j.districtName": district.districtName }], upsert: true, new: true }).then((res) => {
                                                    if (res.nModified === 1) {

                                                        let cityResponse = cityPlace(districtResponse.districtarray.city, city.cityName)
                                                        if (cityResponse.returnValue) {
                                                            let cityAreaCosts = createAverageData(cityResponse.cityArray.areaCosts, city.areaCosts)
                                                            return collection.updateOne({
                                                                id: country.id,
                                                                state: {
                                                                    $elemMatch: {
                                                                        district: {
                                                                            $elemMatch: { city: { $elemMatch: { cityName: city.cityName } } }
                                                                        }
                                                                    }
                                                                },
                                                            },
                                                                {
                                                                    $set: {
                                                                        'state.$[i].district.$[j].city.$[k].areaCosts': cityAreaCosts
                                                                    }
                                                                }, { arrayFilters: [{ "i.stateName": state.stateName }, { "j.districtName": district.districtName }, { "k.cityName": city.cityName }], multi: true, upsert: true, new: true }).then((res) => {
                                                                    if (res.nModified === 1) {
                                                                        return { message: "sucessfully  inserted" }
                                                                    }
                                                                    else {
                                                                        let err = new Error("sorry some technical error")
                                                                        err.status = 406
                                                                        throw err
                                                                    }
                                                                }).catch((error) => {
                                                                    let err = new Error("sorry some technical error")
                                                                    err.status = 406
                                                                    throw err
                                                                })
                                                        }
                                                        else {
                                                            return collection.updateOne({
                                                                id: country.id,
                                                                state: { $elemMatch: { district: { $elemMatch: { districtName: district.districtName } } } },
                                                            },
                                                                {
                                                                    $push: {
                                                                        'state.$[i].district.$.city': data.state[0].district[0].city[0]
                                                                    }
                                                                }, { arrayFilters: [{ "i.stateName": state.stateName }], upsert: true, new: true }).then((res) => {
                                                                    if (res.nModified === 1) {
                                                                        return { message: "sucessfully  inserted" }
                                                                    }
                                                                    else {
                                                                        let err = new Error("sorry some technical error")
                                                                        err.status = 406
                                                                        throw err
                                                                    }
                                                                }).catch((error) => {
                                                                    let err = new Error("sorry some technical error")
                                                                    err.status = 406
                                                                    throw err
                                                                })
                                                        }
                                                    }
                                                    else {
                                                        let err = new Error("sorry some technical error")
                                                        err.status = 406
                                                        throw err
                                                    }
                                                }).catch((error) => {
                                                    let err = new Error("sorry some technical error")
                                                    err.status = 406
                                                    throw err
                                                })
                                            }
                                            else {
                                                return collection.updateOne({
                                                    id: country.id,
                                                    state: { $elemMatch: { stateName: state.stateName } },
                                                },
                                                    {
                                                        $push: {
                                                            'state.$.district': data.state[0].district[0]
                                                        }
                                                    }, { upsert: true, new: true }).then((res) => {
                                                        if (res.nModified === 1) {
                                                            return { message: "sucessfully  inserted" }
                                                        }
                                                        else {
                                                            let err = new Error("sorry some technical error")
                                                            err.status = 406
                                                            throw err
                                                        }
                                                    }).catch((error) => {
                                                        let err = new Error("sorry some technical error")
                                                        err.status = 406
                                                        throw err
                                                    })

                                            }
                                        }
                                        else {
                                            let err = new Error("sorry some technical error")
                                            err.status = 406
                                            throw err
                                        }
                                    }).catch((error) => {
                                        let err = new Error("sorry some technical error")
                                        err.status = 406
                                        throw err
                                    })
                                }
                                else {
                                    return collection.updateMany({ id: country.id, country: country.place }, {
                                        $push: {
                                            state: data.state[0]
                                        }
                                    }, { upsert: true, new: true }).then((res) => {
                                        if (res.nModified === 1) {
                                            return { message: "sucessfully  inserted" }
                                        }
                                        else {
                                            let err = new Error("sorry some technical error")
                                            err.status = 406
                                            throw err
                                        }
                                    }).catch((err) => {
                                        let error = new Error("sorry some technical error", err)
                                        error.status = 406
                                        throw error
                                    })
                                }
                                // })
                            }
                            else {
                                let error = new Error("sorry some technical error in insertion")
                                error.status = 406
                                throw error
                            }
                        }).catch((err) => {
                            let error = new Error("sorry some technical error", err)
                            error.status = 406
                            throw error
                        })

                    }
                    else {
                        return collection.insertMany(data).then((res) => {

                            return { message: "sucessfully inserted" }

                        }).catch((error) => {
                            let err = new Error("sorry some technical error")
                            err.status = 406
                            throw err
                        })

                    }
                }).catch(err => {
                    throw (err)
                }
                )
            }
            else {
                return collection.insertMany(data).then((res) => {

                    return { message: "sucessfully inserted" }

                }).catch((error) => {
                    let err = new Error("sorry some technical error")
                    err.status = 406
                    throw err
                })
            }
        }).catch(err => {
            throw (err)
        }
        )
    })
}
module.exports = costs