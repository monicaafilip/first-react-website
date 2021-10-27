import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {  // needed for bakend but for now we are just testing it on frontend only
    console.log(token);
    alert('Payment Succesful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jn1VoIEQOqpQJMsAmkbuUoZvPMiV2bG7eppQkHsnL2ESRU6GzGNhosVvtY054kSCRsDpmYTYZliWjspaE62ysJ300vCgFDS13';

    return (
        <StripeCheckout
        label='Pay Now'
        name='eCommerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'  
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;