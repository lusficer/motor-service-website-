var userModel = require('./userModel.js')
var key = '123456789trytryrtyr'
var encryptor = require('simple-encryptor')(key)
const jwt = require('jsonwebtoken')

module.exports.createUserDBService = async (userDetails) => {
  try {
    const userModelData = new userModel({
      username: userDetails.username,
      fullname: userDetails.fullname,
      email: userDetails.email,
      isAdmin: userDetails.isAdmin,
      phoneNumber: userDetails.phoneNumber,
      dateOfBirth: userDetails.dateOfBirth,
      password: encryptor.encrypt(userDetails.password)
    })

    await userModelData.save()
    return true
  } catch (error) {
    console.error('Error creating user:', error)
    throw false
  }
}
module.exports.loginuserDBService = async (employeeDetails) => {
  try {
    const result = await userModel.findOne({ username: employeeDetails.username })
    console.log(result)
    if (result) {
      const decrypted = encryptor.decrypt(result.password)
      const accessToken = jwt.sign(
        {
          id: result.id,
          isAdmin: result.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '3d' }
      )
      if (decrypted === employeeDetails.password) {
        const resultEmployee = result._doc
        return {
          status: true,
          msg: 'Employee Validated Successfully',
          user: { ...resultEmployee, accessToken }
        }
      } else {
        throw { status: false, msg: 'Employee Validation Failed' }
      }
    } else {
      throw { status: false, msg: 'Invalid Employee Details' }
    }
  } catch (error) {
    console.error('Error during login:', error)
    throw { status: false, msg: 'Invalid Data' }
  }
}
