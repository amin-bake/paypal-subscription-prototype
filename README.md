# Paypal SDK Subscription Integration

This is a dummy application with only a PayPal SDK on the frontend. The repository has all the necessary code needed to achieve that. Follow the steps below to get it running on your local hosts. Happy Coding! 

## Dependencies

_Step 1_ Copy the package.json files' content and save.

_step 2_ Then on your terminal install all the project dependencies by running `npm install`.

## Create .env file

Create a `.env` file and make sure it has the following variables:

```
PAYPAL_CLIENT_ID= Your_Client_ID
PAYPAL_CLIENT_SECRET= Your_Secret
PLAN_ID= Your_Plan_ID

```

## PayPal Credentials

_Step 1_ Go to PayPal's Developer Dashboard and create an account or use your existing PayPal account to log in. 

_Step 2_ After a successfull login navigate to _'Apps & Credentials'_ tab and click.

_Step 3_ Under _'Rest API apps'_ use the default application or create your own.

_Step 4_ Ignore the default app and create your own by clicking the 'Create App' button on the right side below the navigation bar.

_Step 5_ Edit the app name and give it a relevant name, Type select "Merchant" to accept payments.

_Step 6_ Below, a Sandbox Account username will be auto-generated for you (don't worry about copying it), and click "Create App".

## PayPal Environment Variables

_Step 1_ Copy the _'Client ID'_ and the _'Secret'_ values from your created app and add them to your `.env` file.

_Step 2_ For the _'Plan ID'_ , right-click on _"Business Dashboard"_ on top next to you profile name an and click _'Open link on new tab'_. 

_Step 3_ Create a new PayPal Business account or use an existing one to log in.

_Step 4_ After logging navigate to the navigate back and hover over _"Pay & Get Paid"_ and under _"Accept Payments"_ select _"Subscriptions"_.

_Step 5_ Click on _"Subscription Plans"_ and it will take you to the dashboard where you can view your existing plans. Click _"Create Plan"_, either use an existing product or create a new product.

_Step 6_ Create a product by giving it a suitable name, a relevant product description, product ID (optional, if left empty one will be generated), the product type, and industry category, (optional) you can also add the product -age and image `url`.

_Step 7_ Click _"Next"_ and select the desired type of subscription you would like to offer, give the plan a name and description, and click _"Next"_.

_Step 8_ Define pricing for the subscription plan and click next then _"Turn ON plan"_.

_Step 9_ (optional) You can use the GUI to select how the PayPal Buttons will look, a relevant code will be generated or You can use the Paypal Integration Builder to generate relevant code and the different files needed for each framework implementation. 

_Step 10_ After finishing the previous step it will automatically take you to the _"Manage subscriptions"_ dashboard. Here, click on the desired plan, copy the _"Plan ID"_, and add it to your `.env` file.


## Testing 

If you would like to test the PayPal integration, you can use Sandbox Accounts for these. 

### Accessing & Creating SandBox Credentials

1. Log in to your _Developer Account_
2. Navigate to _Testing Tools_
3. Create two accounts for _Personal Account_ and the other for a _Business Account_. You will be using the business one to collect subscription money, while the personal account shall be used to make the payments for those testing transactions.
5. Know that real PayPal payments can be received too.


#### Thank you.
