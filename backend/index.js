const cors = require("cors"); 
const express = require("express"); 
require("dotenv").config(); 
 
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
 
const app = express(); 
 
// Middlewares here 
app.use(express.json()); 
app.use(cors()); 
 
// Routes here 
app.post('/create-checkout-session', async (req, res) => {
    const { price, plan } = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data:{
            currency:"inr",
            product_data:{
                name:plan
            },
            unit_amount:price*100,
            
        } ,
        quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://www.youtube.com/`,
      cancel_url: `https://www.google.com/`,
    });
  
    res.send( {url:session.url});
  });

app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 
 
// Listen 
app.listen(8000, () => { 
  console.log("Server started at port 8000"); 
});