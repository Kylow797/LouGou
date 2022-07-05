<script>
      function FormValidation() {
      
      var fullname = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      var description = document.getElementById("description").value;
      var orderNumber = /^[0-9A-Za-z]{6}-[0-9A-Za-z]{6}$/.test(document.getElementById("orderNumber").value)
      var productNumber = /^[0-9A-Za-z]{5}-[0-9A-Za-z]{1}$/.test(document.getElementById("product").value)

      if (fullname && email && description){
          document.getElementById("fullname").style.border = "";
          document.getElementById("email").style.border = "";
          document.getElementById("description").style.border = "";
          
          if(orderNumber && productNumber) {
              alert("Thank You For Contacting Us ! ");
              document.getElementById("orderNumber").style.border = "";
              document.getElementById("product").style.border = "";
            }

        } else if ((fullname && !email && !description) || 
          (!fullname && !email && description) || 
          (!fullname && email && !description) || 
          (fullname && email && !description) || 
          (!fullname && email && description) || 
          (!fullname && !email && !description)){
            alert("Please Enter All Information");
            document.getElementById("fullname").style.border = "1px solid red";
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("description").style.border = "1px solid red";

            if ((orderNumber && !productNumber) || 
            (!orderNumber && !productNumber) || 
            (!orderNumber && productNumber))
            {
              document.getElementById("orderNumber").style.border = "1px solid red";
              document.getElementById("product").style.border = "1px solid red";
              alert("Please Check Order Number and Product Number");
            } 
        }
    }
</script>
