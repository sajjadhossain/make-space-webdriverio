const makePhoneNumber = () => {
   var result           = ''
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 7; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
   }
   return '1347' + result
}
const generateValues = () => {
  let randomName
  let randomPhoneNumber
  let randomEmail

  randomName = Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(9)
  randomPhoneNumber = makePhoneNumber()
  randomEmail = Math.random().toString(36).substring(7) + '@' + Math.random().toString(36).substring(7) + '.com'

  return {
    randomName,
    randomPhoneNumber,
    randomEmail
  }
}

module.exports = generateValues
