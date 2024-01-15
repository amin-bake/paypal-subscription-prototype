import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

function App() {
  const initialOptions = {
    "client-id": "ASmh1c7E-yDvAoulrcZeCI5JpXPmWLQoX5aOSsfGeJl3gLoRogPkVMusLPyA-97vgwsT-Rh0Tdb9WuCG",
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
    "vault": "true",
    "intent":"subscription"
  };

  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "pill",
            color:'blue' ,//change the default color of the buttons
            layout: "vertical" //default value. Can be changed to horizontal
            // label: 'subscribe',
            // tagline: 'true'
          }}
          createSubscription={async () => {
            try {
              const response = await fetch("/api/paypal/create-subscription", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAction: "SUBSCRIBE_NOW" }),
              });
              const data = await response.json();
              if (data?.id) {
                setMessage(`Successful subscription...`);
                return data.id;
              } else {
                console.error(
                  { callback: "createSubscription", serverResponse: data },
                  JSON.stringify(data, null, 2),
                );
                // (Optional) The following hides the button container and shows a message about why checkout can't be initiated
                const errorDetail = data?.details?.[0];
                setMessage(
                  `Could not initiate PayPal Subscription...<br><br>${
                    errorDetail?.issue || ""
                  } ${errorDetail?.description || data?.message || ""} ` +
                    (data?.debug_id ? `(${data.debug_id})` : ""),
                  { hideButtons: true },
                );
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Subscription...${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            /*
              No need to activate manually since SUBSCRIBE_NOW is being used.
              Learn how to handle other user actions from our docs:
              https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions_create
            */
            if (data.orderID) {
              setMessage(
                `You have successfully subscribed to the plan. Your subscription id is: ${data.subscriptionID}`,
              );
            } else {
              setMessage(
                `Failed to activate the subscription: ${data.subscriptionID}`,
              );
            }
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default App;
