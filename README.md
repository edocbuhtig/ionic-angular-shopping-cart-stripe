
### Ionic 5 shopping cart using stripe payment 

Clone and run npm install, If you wish to update to the latest Ionic **delete** the `node_modules` and run below,

```
npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
```

## Install the Strip cordova plugin 

```
ionic cordova plugin add cordova-plugin-stripe
npm install --save @ionic-native/stripe@4
```

## Stripe (Test) Key

**/src/payments/payments.page.ts**

```
  this.stripe.setPublishableKey('pk_test_xxxxxxxxxxx');
```

## Preview 

![Ionic 5 shopping cart using stripe payment](/screenshot/screenshot.png)


