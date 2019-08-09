# make-space-webdriverio

[Test](test/specs/checkout.walkInCloset.spec.js)

# Requirements

1. Install NodeJS Go to [downloads](https://nodejs.org/en/download/).
2. `git clone https://github.com/sajjadhossain/make-space-webdriverio.git`
3. `cd make-space-webdriverio && npm install`, make sure Dev Dependancies are installed.

# Run Tests

* `./node_modules/.bin/wdio makeSpace.checkout.conf.js`
* Response should look something like:
  ```js
  ------------------------------------------------------------------
  [chrome  mac os x #0-0] Spec: /Users/sajjadhossain/Desktop/interview-preparation/make-space-webdriverio/test/specs/checkout.walkInCloset.spec.js
  [chrome  mac os x #0-0] Running: chrome on mac os x
  [chrome  mac os x #0-0]
  [chrome  mac os x #0-0] Checkout with a Walk In Closet
  [chrome  mac os x #0-0]    ✓ Navigates to makespace on stage server
  [chrome  mac os x #0-0]    ✓ Gets quote
  [chrome  mac os x #0-0]    ✓ Navigates to book/storage
  [chrome  mac os x #0-0]    ✓ Select the “Walk In Closet” plan
  [chrome  mac os x #0-0]    ✓ Select “4” for the total number of bins
  [chrome  mac os x #0-0]    ✓ Type in “123 William St” for Address and pick any date. Enter.
  [chrome  mac os x #0-0]    ✓ Type name and appointment info, then continue to billing.
  [chrome  mac os x #0-0]    ✓ Type card info, then continue to Review.
  [chrome  mac os x #0-0]    ✓ Creates an account.
  [chrome  mac os x #0-0]    ✓ Selects Dresser and Washer/Dryer for Booking Inventory.
  [chrome  mac os x #0-0]    ✓ Confirms the appointment date and time.
  [chrome  mac os x #0-0]
  [chrome  mac os x #0-0] 11 passing (32.7s)


  Spec Files:	 1 passed, 1 total (100% completed) in 00:01:38
  ```

# Video

<video src="makeSpace.checkout.test.mov" width="320" height="200" controls preload></video>
