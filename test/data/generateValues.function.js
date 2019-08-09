const generateValues = () => {
  let randomName
  let randomPhoneNumber
  let randomEmail

  randomName = Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(9)
  randomPhoneNumber = '1' + Math.floor(Math.random() * 9000000000)
  randomEmail = Math.random().toString(36).substring(7) + '@' + Math.random().toString(36).substring(7) + '.com'

  return {
    randomName,
    randomPhoneNumber,
    randomEmail
  }
}

module.exports = generateValues
