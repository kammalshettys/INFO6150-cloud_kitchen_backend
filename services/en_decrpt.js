var bcrypt = require('bcryptjs');

const encrypt = async (password)=>{
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

const checkPassword = async(password,hashPassword)=>{
    const passwordCheck=  await bcrypt.compare(password, hashPassword);
    console.log(passwordCheck)

    return passwordCheck;
}


module.exports = {
    encrypt: encrypt,
    checkPassword : checkPassword
};