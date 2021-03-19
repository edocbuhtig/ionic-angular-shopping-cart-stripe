
### Ionic 5 Angular Shopping Cart with Stripe payment 

Clone and run npm install, If you wish to update to the latest Ionic **delete** the `node_modules` and run below,

```
ng update @angular/core @angular/cli
npm install @ionic/angular-toolkit@latest
```

## Install the Stripe (cordova) plugin not for Capacitor 

```
ionic cordova plugin add cordova-plugin-stripe
npm install --save @ionic-native/stripe
```

## Ionic Native (peer dependency issue fix)

```
npm WARN @ionic-native/stripe@5.31.1 requires a peer of @ionic-native/core@^5.1.0 but none is installed. You must install peer dependencies yourself.
```

You need to install manually as below

```
npm i @ionic-native/core
```

## Install Stripe for Capacitor 

Make sure your Ionic project is integrated with Capacitor and not Cordova

```
npm install cordova-plugin-stripe
npm install @ionic-native/stripe
ionic cap sync
```

## Stripe (Test) Key

**/src/payments/payments.page.ts**

```
  this.stripe.setPublishableKey('pk_test_xxxxxxxxxxx');
```

## Preview 

![Ionic 5 Angular Shopping Cart with Stripe payment](/screenshot/screenshot.png)


