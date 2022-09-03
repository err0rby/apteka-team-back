const User = require('../models/User.model');
const Basket = require('../models/Basket.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.userController = {
    addUser: async (req, res) => {
        try {
            const { login, password } = req.body
            const hash = bcrypt.hashSync(password, 10);
            const user = await User.create({ login: login, password: hash });
            res.json(user)
        } catch (error) {
            res.json({ error: error + "asdasdasdasdas" })
        }
    },

    getUser: async (req, res) => {
        try {
            const data = await User.find().populate('basket')
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    login: async (req, res) => {
        try {
            const { login, password } = req.body;
            const candidate = await User.findOne({ login });
            if (!candidate) {
                return res.status(401).json('Неверный логин')
            }

            const valid = await bcrypt.compareSync(password, candidate.password);
            if (!valid) {
                return res.status(401).json('Неверный пароль')
            }

            const payload = {
                id: candidate._id,
                login: candidate.login
            }
            const name = candidate._id;

            const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: '24h'
            })
            res.json({token, name})

        } catch (error) {
            res.json(error)
        }
    }
}