
### Ionic 5 Angular Shopping Cart with Stripe payment 

Clone and run npm install, If you wish to update to the latest Ionic **delete** the `node_modules` and run below,

```
npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
```

## Install the Stripe (cordova) plugin not for Capacitor 

```
ionic cordova plugin add cordova-plugin-stripe
npm install --save @ionic-native/stripe
```

## Stripe (Test) Key

**/src/payments/payments.page.ts**

```
  this.stripe.setPublishableKey('pk_test_xxxxxxxxxxx');
```

## Preview 

![Ionic 5 Angular Shopping Cart with Stripe payment](/screenshot/screenshot.png)


