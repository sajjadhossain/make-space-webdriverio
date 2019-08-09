module.exports = {
  inputs: {
    name: 'input[name="name"]',
    phone: 'input[name="phone"]',
    zip: 'input[name="zip"]',
    bins: 'input[name="bin"]',
    address: 'input[name="address_pretty"]',
    cardNumber: 'input[id="js-cc-number"]',
    expDate: 'input[id="js-cc-exp-date"]',
    cvcCode: 'input[id="js-cc-cvc"]',
    nameOnCard: 'input[id="js-cc-name"]',
    accountPhone: '//*[@id="js-phone"]',
    accountEmail: '//*[@id="js-email"]'
  },
  buttons: {
    submit: 'button[type="submit"]',
    walkInCloset: '//*[@id="ms-booking"]/div/div/section/div[1]/div/article[1]/div[3]/button',
    continue: '//*[@id="ms-booking"]/div/div/section/div[1]/div/article[2]/form/div/div[2]/button',
    confirmBins: '//*[@id="ms-booking"]/div/div/div[3]/div[1]/button',
    details: [
      '//*[@id="ms-booking"]/div/div/div/div[1]/div[1]/div[3]/div[1]',
      '//*[@id="ms-booking"]/div/div/div/div[1]/div[2]/div[3]/div[2]',
      '//*[@id="ms-booking"]/div/div/div/div[1]/div[3]/div[3]/div[2]',
      '//*[@id="ms-booking"]/div/div/div/div[1]/div[4]/div[3]/div[2]',
      '//*[@id="ms-booking"]/div/div/div/div[1]/div[5]/div[3]/div[2]'
    ],
    continueToAppointment: '//*[@id="ms-booking"]/div/div/div/div[2]/button',
    august302019: '//*[@id="ui-datepicker-div"]/table/tbody/tr[5]/td[6]/a',
    duringTheDay: '//*[@id="ms-booking"]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]',
    continueToShipping: '//*[@id="ms-booking"]/div/div/button',
    continueToBilling: '//*[@id="ms-booking"]/div/div/section[2]/button',
    continueToReview: '//*[@id="booking-billing"]/article/input',
    confirmAppointment: '//*[@id="booking-confirm"]/div/article/div/div/div[4]/input',
    done: '//*[@id="js-submit-inventory"]/div/div[2]/button',
    closeModal: '//*[@id="referral-promo-modal"]/div[1]/span'
  },
  radios: {
    sameAsAppointmentAddress: '//*[@id="ms-booking"]/div/div/form/div[3]/label/span[1]',
    notApartOfArmedForces: '//*[@id="booking-confirm"]/div/div/div[2]/div[2]/div/div/label[2]/div',
    agreeToTermsAndService: '//*[@id="booking-confirm"]/div/article/div/div/div[3]/label/div'
  },
  checkboxes: {
    dresser: '//*[@id="booking-inventory"]/div[1]/div/div[3]/div/ul/li[1]/div/div',
    washerDryer: '//*[@id="booking-inventory"]/div[1]/div/div[3]/div/ul/li[67]/div/div'
  },
  containers: {
    allPlans: '.all-plans-container',
    appointmentMonth: '//*[@id="dashboard"]/section[1]/div/section[2]/article[3]/div/div/div[1]/div[1]/p[2]/span[1]',
    appointmentDay: '//*[@id="dashboard"]/section[1]/div/section[2]/article[3]/div/div/div[1]/div[1]/p[2]/span[2]',
    appointmentTimeSlot: '//*[@id="dashboard"]/section[1]/div/section[2]/article[3]/div/div/div[1]/div[1]/p[2]/span[4]'
  }
}
