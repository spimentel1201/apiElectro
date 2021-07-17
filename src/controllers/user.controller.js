import User from '../models/User'

export const createUser = (req,res) => {
    res.json({message: "Creando un usuario"})
}

export const getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}