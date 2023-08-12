const express = require('express');
const router = express.Router();
const stripe = require('stripe')(sk_test_51NcUkQAnz3HMErBgfcvhRlDs0u7AzHqBGFfuErIvomvSjl7gJBdkyiUBNiOKvnSKGQ2qe6e5pVHGdSjCKcyz7FTw00zZt7fDuD);

router.get('/', async (req, response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'pkr',
            product_data: {
              name: 'Room',
            },
            unit_amount: 200000 * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4000/?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:4000',
    });

    response.redirect(session.url);
  } catch (error) {
    console.log(error);
    response.status(500).send('An error occurred');
  }
});

module.exports = router;