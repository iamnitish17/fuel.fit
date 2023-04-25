const User = require("../model/user");


module.exports.register = async (req, res, next) => {
  try {
    const { name,email,phone,age,plan,message } = req.body;

    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const user = await User.create({
      name,
      email,phone,age,plan,message
    });
  
    
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

