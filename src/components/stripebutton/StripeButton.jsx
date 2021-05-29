import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HOexBDgqKqB4HCuuPcxc4KcL7xH0AAQdm4Ynp47R9OToboSHAynj6LWwDemWzyaAxhuYBPPAlsg5AyfwGs7RGVw00XeDbHMAK";

  const onToken = (token) => {
    console.log("token ", token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="E-store.co"
      stripeKey={publishableKey}
      shippingAddress
      billingAddress={false}
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Give Money"
      token={onToken}
    />
  );
};

export default StripeButton;
