const register = async (req,res) =>{
    try {
        res.send("register")
    } catch (err) {
        res.status(500).send("something went wrong!")
    }
}
const login = async (req,res) =>{
    try {
        res.send("login")
    } catch (err) {
        res.status(500).send("something went wrong!")
    }
}
const logout = async (req,res) =>{
    try {
        res.send("logout")
    } catch (err) {
        res.status(500).send("something went wrong!")
    }
}
export {register,login,logout}