function FormValidation(){
    //allert()

    var fullname = document.js_form.fullname;
    var email = document.js_form.email;


 

     if (!email.value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email.value.match("")) {
        email.nextElementSibling.style.display = "block";
        email.style.border = "1px solid #f00";
        return false
     }else{
        email.nextElementSibling.style.display = "none";
        email.style.border = "1px solid transparent";
     }


     
    }