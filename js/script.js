<button id = "checkout"> Checkout </button>

    <script>
      var stripe = Stripe(  //Stripe Account Required
        "pk_test_51Q3jOrKX8wHzXtrCMDgSQado7mQdHGLWsfYuTEfrKjD94O7nsnz4wyHp9TXbu9Ym9WXjzdWvZJXUEBnbxtHsb9QX00R6SbisQr"
      );

      document.getElementById("checkout").addEventListener("click", function(){
      stripe.redirectToCheckout({
        lineItems:[{
         price: "price_1Q3ja7KX8wHzXtrCbUndNU5i",
         quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "https://www.google.com/",
      cancelUrl: "https://www.twitter.com/",


      })
      .then(function(result){
        
      });
      })
    </script>