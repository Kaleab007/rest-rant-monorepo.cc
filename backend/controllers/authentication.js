const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { where } = require('sequelize/types')

const { User } = db

router.post('/', async (req, res) => {
    let user = await user.findOne({
   where: { email :req.body.email}
})
if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {res.status(404).json ({
    message: `Could not find a user with the provided username and password`
})
}else

 res.json({User})
})

module.exports = router
