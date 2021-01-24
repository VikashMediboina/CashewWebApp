const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Line 1


const userDetailsSchema = {
    phoneNo: {
        unique: true,
        required: [true, 'Required field'],
        type: Number,
    },
    admin: {
        type: Boolean,
    },
    cashewAdmin: {
        type: Boolean,
    },
    token: {
        type: String,
    },
    details: {
        emailId: {
            required: [true, 'Required field'],
            type: String,
            unique: true
        },
        password: {
            required: [true, 'Required field'],
            type: String,
        },
        name: {
            required: [true, 'Required field'],
            type: String,
        },
        phoneNo: {
            required: [true, 'Required field'],
            type: Number,
            unique: true
        },
        companyType: {
            required: [true, 'Required field'],
            type: String,
        },
        companyName: {
            required: [true, 'Required field'],
            type: String,
        },
        city: {
            required: [true, 'Required field'],
            type: Array,
        },
        district: {
            required: [true, 'Required field'],
            type: Array,
        },
        state: {
            required: [true, 'Required field'],
            type: Array,
        },
        country: {
            required: [true, 'Required field'],
            type: Array,
        },
        pinCode: {
            required: [true, 'Required field'],
            type: Number,
        },
        image: {
            // required: [true, 'Required field'],
            type: String,
        }
    },
    date: {
        type: String,
    },
    costs: [{

        W210: {
            type: Number,
        },
        W240: {
            type: Number,
        },
        W320: {
            type: Number,
        },
        W400: {
            type: Number,
        },
        JH: {
            type: Number,
        },
        AM: {
            type: Number,
        },
        KK: {
            type: Number,
        },
        K: {
            type: Number,
        },
        LWP: {
            type: Number,
        },
        BBP: {
            type: Number,
        },
        DJH: {
            type: Number,
        },
        DK: {
            type: Number,
        },
        YDW: {
            type: Number,
        },
        Y240: {
            type: Number,
        },
        Y320: {
            type: Number,
        },
    }]
}

const placeSchema = {
    id: {
        type: String,
        unique: true,
        required: [true, 'Required field'],
    },
    country: {
        type: String,
        required: [true, 'Required field'],
    },
    date: {
        type: String,
        required: [true, 'Required field'],
    },
    placeType: {
        required: [true, 'Required field'],
        type: String,
    },
    areaCosts: {
        W210: {
            type: Number,
        },
        W210n: {
            type: Number,
        },
        W240: {
            type: Number,
        },
        W240n: {
            type: Number,
        },
        W320: {
            type: Number,
        },
        W320n: {
            type: Number,
        },
        W400: {
            type: Number,
        },
        W400n: {
            type: Number,
        },
        JH: {
            type: Number,
        },
        JHn: {
            type: Number,
        },
        AM: {
            type: Number,
        },
        AMn: {
            type: Number,
        },
        KK: {
            type: Number,
        },
        KKn: {
            type: Number,
        },
        K: {
            type: Number,
        },
        Kn: {
            type: Number,
        },

        LWP: {
            type: Number,
        },
        LWPn: {
            type: Number,
        },
        BBP: {
            type: Number,
        },
        BBPn: {
            type: Number,
        },
        DJH: {
            type: Number,
        },
        DJHn: {
            type: Number,
        },
        DK: {
            type: Number,
        },
        DKn: {
            type: Number,
        },
        YDW: {
            type: Number,
        },
        YDWn: {
            type: Number,
        },
        Y240: {
            type: Number,
        },
        Y240n: {
            type: Number,
        },
        Y320: {
            type: Number,
        },
        Y320n: {
            type: Number,
        },
    },
    state: [{
        stateName: {
            type: String,
        },
        placeType: {
            type: String,
        },
        areaCosts: {
            W210: {
                type: Number,
            },
            W210n: {
                type: Number,
            },
            W240: {
                type: Number,
            },
            W240n: {
                type: Number,
            },
            W320: {
                type: Number,
            },
            W320n: {
                type: Number,
            },
            W400: {
                type: Number,
            },
            W400n: {
                type: Number,
            },
            JH: {
                type: Number,
            },
            JHn: {
                type: Number,
            },
            AM: {
                type: Number,
            },
            AMn: {
                type: Number,
            },
            KK: {
                type: Number,
            },
            KKn: {
                type: Number,
            },
            K: {
                type: Number,
            },
            Kn: {
                type: Number,
            },

            LWP: {
                type: Number,
            },
            LWPn: {
                type: Number,
            },
            BBP: {
                type: Number,
            },
            BBPn: {
                type: Number,
            },
            DJH: {
                type: Number,
            },
            DJHn: {
                type: Number,
            },
            DK: {
                type: Number,
            },
            DKn: {
                type: Number,
            },
            YDW: {
                type: Number,
            },
            YDWn: {
                type: Number,
            },
            Y240: {
                type: Number,
            },
            Y240n: {
                type: Number,
            },
            Y320: {
                type: Number,
            },
            Y320n: {
                type: Number,
            },
        },
        district: [{
            districtName: {
                type: String,
            },
            placeType: {
                type: String,
            },
            areaCosts: {
                W210: {
                    type: Number,
                },
                W210n: {
                    type: Number,
                },
                W240: {
                    type: Number,
                },
                W240n: {
                    type: Number,
                },
                W320: {
                    type: Number,
                },
                W320n: {
                    type: Number,
                },
                W400: {
                    type: Number,
                },
                W400n: {
                    type: Number,
                },
                JH: {
                    type: Number,
                },
                JHn: {
                    type: Number,
                },
                AM: {
                    type: Number,
                },
                AMn: {
                    type: Number,
                },
                KK: {
                    type: Number,
                },
                KKn: {
                    type: Number,
                },
                K: {
                    type: Number,
                },
                Kn: {
                    type: Number,
                },

                LWP: {
                    type: Number,
                },
                LWPn: {
                    type: Number,
                },
                BBP: {
                    type: Number,
                },
                BBPn: {
                    type: Number,
                },
                DJH: {
                    type: Number,
                },
                DJHn: {
                    type: Number,
                },
                DK: {
                    type: Number,
                },
                DKn: {
                    type: Number,
                },
                YDW: {
                    type: Number,
                },
                YDWn: {
                    type: Number,
                },
                Y240: {
                    type: Number,
                },
                Y240n: {
                    type: Number,
                },
                Y320: {
                    type: Number,
                },
                Y320n: {
                    type: Number,
                },
            },
            city: [{
                cityName: {
                    type: String,
                },
                placeType: {
                    type: String,
                },
                areaCosts: {
                    W210: {
                        type: Number,
                    },
                    W210n: {
                        type: Number,
                    },
                    W240: {
                        type: Number,
                    },
                    W240n: {
                        type: Number,
                    },
                    W320: {
                        type: Number,
                    },
                    W320n: {
                        type: Number,
                    },
                    W400: {
                        type: Number,
                    },
                    W400n: {
                        type: Number,
                    },
                    JH: {
                        type: Number,
                    },
                    JHn: {
                        type: Number,
                    },
                    AM: {
                        type: Number,
                    },
                    AMn: {
                        type: Number,
                    },
                    KK: {
                        type: Number,
                    },
                    KKn: {
                        type: Number,
                    },
                    K: {
                        type: Number,
                    },
                    Kn: {
                        type: Number,
                    },

                    LWP: {
                        type: Number,
                    },
                    LWPn: {
                        type: Number,
                    },
                    BBP: {
                        type: Number,
                    },
                    BBPn: {
                        type: Number,
                    },
                    DJH: {
                        type: Number,
                    },
                    DJHn: {
                        type: Number,
                    },
                    DK: {
                        type: Number,
                    },
                    DKn: {
                        type: Number,
                    },
                    YDW: {
                        type: Number,
                    },
                    YDWn: {
                        type: Number,
                    },
                    Y240: {
                        type: Number,
                    },
                    Y240n: {
                        type: Number,
                    },
                    Y320: {
                        type: Number,
                    },
                    Y320n: {
                        type: Number,
                    },
                },
            }]
        }
        ]
    }]

}

let userDetailsSchemaPro = mongoose.Schema(userDetailsSchema, { collection: 'userDetails', timestamps: true })

let connection = {}

connection.userDetailsSchemaPro = () => {
    return mongoose.connect("mongodb://cashewonlineserve:zMxQNhYVZ1cs1qfFTK9ArWAdIidCGTgIH9vpOGRcXGm3HqNLgF0IfdmYMW0UT8JEDBO3tQubasFmxGiv56s98A==@cashewonlineserve.mongo.cosmos.azure.com:10255/cashewsOnline?ssl=true", { useNewUrlParser: true, autoIndex: true, useCreateIndex: true })
        .then((database) => {
            return database.model("userDetails", userDetailsSchemaPro)
        }).catch((error) => {
            let err = new Error("Could not connect to Database userDetailsSchemaPro")
            err.status = 504;
            throw err;
        })
}
let placeCostsSchemaPro = mongoose.Schema(placeSchema, { collection: 'costsPlaces', timestamps: true })


connection.placeCostsSchemaPro = () => {
    return mongoose.connect("mongodb://cashewonlineserve:zMxQNhYVZ1cs1qfFTK9ArWAdIidCGTgIH9vpOGRcXGm3HqNLgF0IfdmYMW0UT8JEDBO3tQubasFmxGiv56s98A==@cashewonlineserve.mongo.cosmos.azure.com:10255/cashewsOnline?ssl=true", { useNewUrlParser: true, autoIndex: true, useCreateIndex: true })
        .then((database) => {
            return database.model("costsPlaces", placeCostsSchemaPro)
        }).catch((error) => {
            let err = new Error("Could not connect to Database placeCostsSchemaPro")
            err.status = 504;
            throw err;
        })
}




module.exports = connection;
