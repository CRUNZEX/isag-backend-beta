const helloHome = (req, res) => {
    res.send('Hello World')
}

const getName = (req, res) => {
    res.send({
        "starusCode": 200,
        "message": {
            "name": "James",
            "surname": ":D",
            "IsagMember": true
        }
    })
}

module.exports = { 
    helloHome,
    getName 
}