const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')
const config = require('./config');
const erroresStripe = require('./erroresStripe');

const app = express();

const stripe = new Stripe(config.privateApiKey);


app.use(cors());

app.use(express.json());

app.post('/procesarpago', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/pagoexitoso',
    cancel_url: 'http://localhost:3000/cesta',
  });

  res.send(session)
});

app.listen(3001)