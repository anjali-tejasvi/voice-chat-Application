class AuthController {
    sendOtp(req,res){
        res.send("Hello from otp route")
    }
}

module.exports = new AuthController();
