const assert = require('assert')
const elements = require('../data/elements.checkout.fixtures')
const values = require('../data/values.checkout.fixtures')
const randomProfile = require('../data/generateValues.function')
const randomName = randomProfile().randomName
const randomPhoneNumber = randomProfile().randomPhoneNumber
const randomEmail = randomProfile().randomEmail

describe('Checkout with a Walk In Closet', () => {
  before(() => {
    browser.url('/')
  })
  it('Navigates to makespace on stage server', () => {
    const title = browser.getTitle()

    // Go to https://qa.mksp.co
    browser.url('/')
    // Assert that your on the right page
    assert.strictEqual(title, 'MakeSpace')
  })
  it('Gets quote', () => {
    const name = $(elements.inputs.name)
    const phone = $(elements.inputs.phone)
    const zip = $(elements.inputs.zip)
    const submit = $(elements.buttons.submit)

    // Enter “Test Test” as Full Name
    name.setValue(randomName)
    // Enter any 1 plus any 10 digits as Phone Number
    phone.setValue(randomPhoneNumber)
    // Enter 10038 as Zip code
    zip.setValue(values.inputs.zip)
    // Select “Get a quote”
    submit.click()
  })
  it('Navigates to book/storage', () => {
    const plansContainer = $(elements.containers.allPlans)

    // Wait for plans container
    plansContainer.waitForDisplayed(10000)
  })
  it('Select the “Walk In Closet” plan', () => {
    const walkInCloset = $(elements.buttons.walkInCloset)

    // Select the “Walk In Closet” plan
    walkInCloset.click()
    browser.pause(250)
  })
  it('Select “4” for the total number of bins', () => {
    const bins = $(elements.inputs.bins)
    const continueToServices1 = $(elements.buttons.continue)
    const continueToServices2 = $(elements.buttons.confirmBins)

    // Wait for bins container
    bins.waitForDisplayed(10000)

    // Select “4” for the total number of bins.
    bins.setValue(values.inputs.bins)
    browser.pause(250)

    // Continue to services
    continueToServices1.click()
    browser.pause(250)
    continueToServices2.click()
    browser.pause(250)

    // On the “Now let’s get some details” page select Yes, No, No, No, No
    for (let i = 0; i < elements.buttons.details.length; i += 1) {
      $(elements.buttons.details[i]).click()
      browser.pause(250)
    }

    // Continue to appointment
    browser.pause(250)
    $(elements.buttons.continueToAppointment).click()
  })
  it('Type in “123 William St” for Address and pick any date. Enter.', () => {
    const address = $(elements.inputs.address)
    const august302019 = $(elements.buttons.august302019)
    const duringTheDay = $(elements.buttons.duringTheDay)
    const continueToShipping = $(elements.buttons.continueToShipping)

    // Type in “123 William St” for Address and pick any date. Enter.
    address.setValue(values.inputs.address)
    browser.pause(250)
    browser.keys('\uE007')

    // Select August 30 2019
    august302019.click()
    browser.pause(250)
    // Select during the day
    duringTheDay.click()
    browser.pause(250)
    // Continue to shipping
    continueToShipping.click()
    browser.pause(250)
  })
  it('Type name and appointment info, then continue to billing.', () => {
    const name = $(elements.inputs.name)
    const phone = $(elements.inputs.phone)
    const continueToBilling = $(elements.buttons.continueToBilling)
    const sameAsAppointmentAddress = $(elements.radios.sameAsAppointmentAddress)

    // Enter “Test Test” as Full Name
    name.setValue(randomName)
    // Enter any 1 plus any 10 digits as Phone Number
    phone.setValue(randomPhoneNumber)
    // Check “My mailing address is the same as my appointment address.”
    sameAsAppointmentAddress.click()
    // Select “Continue to Billing”
    continueToBilling.click()
  })
  it('Type card info, then continue to Review.', () => {
    const nameOnCard = $(elements.inputs.nameOnCard)
    const cvcCode = $(elements.inputs.cvcCode)
    const expDate = $(elements.inputs.expDate)
    const cardNumber = $(elements.inputs.cardNumber)
    const continueToReview = $(elements.buttons.continueToReview)

    // For the credit card number use 4242 4242 4242 4242
    cardNumber.setValue(values.inputs.cardNumber)
    browser.pause(250)
    // Use any CVC number
    cvcCode.setValue(values.inputs.cvc)
    browser.pause(250)
    // Use any expiration date
    expDate.setValue(values.inputs.expirationDate)
    browser.pause(250)
    // Enter “Test Test” for Name On Card
    nameOnCard.setValue(randomName)
    browser.pause(250)
    // Select “Continue to Review”
    continueToReview.click()
  })
  it('Creates an account.', () => {
    const accountPhone = $(elements.inputs.accountPhone)
    const accountEmail = $(elements.inputs.accountEmail)
    const notApartOfArmedForces = $(elements.radios.notApartOfArmedForces)
    const agreeToTermsAndService = $(elements.radios.agreeToTermsAndService)
    const confirmAppointment = $(elements.buttons.confirmAppointment)

    // Enter any 1 plus any 10 digits as Phone Number
    accountPhone.setValue(randomPhoneNumber)
    browser.pause(250)
    // Enter any number of digits or letters @test.com as the Email Address
    accountEmail.setValue(randomEmail)
    browser.pause(250)
    // Select “I have read and agree to the MakeSpace Terms of Service”
    notApartOfArmedForces.click()
    browser.pause(250)
    agreeToTermsAndService.click()
    browser.pause(250)
    // Select “Confirm Appointment”
    confirmAppointment.click()
    browser.pause(250)
  })
  it('Selects Dresser and Washer/Dryer for Booking Inventory.', () => {
    const dresser = $(elements.checkboxes.dresser)
    const washerDryer = $(elements.checkboxes.washerDryer)
    const done = $(elements.buttons.done)

    // Select “Dresser (3 Drawer)” - 1
    dresser.click()
    browser.pause(250)
    // Select “Washer or Dryer” - 1
    washerDryer.scrollIntoView()
    browser.pause(250)
    washerDryer.click()
    browser.pause(250)
    // Select “Done”
    done.click()
    browser.pause(250)
  })
  it('Confirms the appointment date and time.', () => {
    const closeModal = $(elements.buttons.closeModal)
    const getAppointmentMonth = $(elements.containers.appointmentMonth).getText()
    const getAppointmentDay = $(elements.containers.appointmentDay).getText()
    const getAppointmentTimeSlot = $(elements.containers.appointmentTimeSlot).getText()

    // Wait for bins container
    closeModal.waitForDisplayed(10000)

    // CLose promo modal
    closeModal.click()

    // Confirm the appointment date and time.
    assert.strictEqual(getAppointmentMonth, values.inputs.month)
    assert.strictEqual(getAppointmentDay, values.inputs.day)
    assert.strictEqual(getAppointmentTimeSlot, values.inputs.timeSlot)
  })
})
