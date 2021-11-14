
//   var email = document.getElementById("email");
//   var error = document.getElementById("error");
//   var psw = document.getElementById("psw");
//   var pderror = document.getElementById("pderror");

// function validate(){
  
//     var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
//     if(regexp.test(email.value))
//     {
//         error.innerHTML="valid";
//         error.style.color="green";
//         return true;
//     }
//     else{
//         error.innerHTML="please enter a valid emailID";
//         error.style.color="red";
//          return false;
//         }
//    }

// main function
   function validate(){
    this.emailvalidation();
     return this.passwordvalidation();
    
}
    //    function for validating email id
    function emailvalidation(){
        var email = document.getElementById("email");
        var error = document.getElementById("error");
      var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
      if(regexp.test(email.value))
      {
          error.innerHTML="Valid email address!";
          error.style.color="green";
        
          return true;
      }
      else{
          error.innerHTML="*Invalid email address*";
          error.style.color="red";
           return false;
          }

        }
        // function for validating password
           function passwordvalidation(){
            var psw = document.getElementById("psw");
            var pderror = document.getElementById("pderror");
             var decimal=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
         if(decimal.test(psw.value)) 
          { 
          pderror.innerHTML="password is corrrect!";
          pderror.style.color="green";
          return true;
          }
          else
          { 
          pderror.innerHTML="*password incorrect*"
          pderror.style.color="red";
          return false;
          }
           
        }  
   