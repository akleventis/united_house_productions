require('dotenv').config()

const express = require("express");
const app = express();

// JSON parser
app.use(express.json());

// Cors
const cors = require("cors");
app.use(cors());

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, {priceInCents: 2000, name: "T-Shirt (s)"}],
  [2, {priceInCents: 2000, name: "T-Shirt (m)"}],
  [3, {priceInCents: 2000, name: "T-Shirt (l)"}],
  [4, {priceInCents: 2000, name: "T-Shirt (xl)"}],
  [5, {priceInCents: 1500, name: "Bucket Hat"}],
])

app.post('/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name 
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: item.quantity
        }
      }),
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    })
    res.json({ url: session.url })
  } catch (e) {
    // console.log(req.body)
    res.status(500).json({error: e.message})
  }
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
