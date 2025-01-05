import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutPayment';

const stripePromise = loadStripe("pk_test_51QdPwdE9PHzzjLWhHpaYZFb0JlyOBTeN0IgHsvXkmOeYA7cGujWsnd9tj6b3FB5kSsKUpUpsknciYnUZBfnw8gX900aBu7FENt");


const PaymentPage = (props) => {

  const options = {
    mode: 'payment',
    amount: 100,
    currency: 'jpy',
    // Fully customizable with appearance API.
    appearance: {
        theme: 'flat'
    },
  }



  return (
    <div>
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm {...props} />
        </Elements>
    </div>
  )
}

export default PaymentPage