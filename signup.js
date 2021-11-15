

// main function
function signupvalidate()
{

 emailvalidation();
 phonenumber();
return  passwordvalidation();

    // return checkpassword();
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
        // function for validating phonenumber
        function phonenumber()
            {
                var pnumber = document.getElementById("pnumber");
                var pnumerror = document.getElementById("pnumerror");
            
          var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          if(phoneno.test(pnumber.value))
             {
                pnumerror.innerHTML="valid phone number!"  
                pnumerror.style.color="green";
               return true;      
             }
           else
             {
                pnumerror.innerHTML="*Invalid number*"
                pnumerror.style.color="red";
                return false;
             }
        }
//  function for confirming password

// function checkpassword()
// {
//     var cpsw = document.getElementById("cpsw").value;
//     var cmpderror = document.getElementById("cmpderror");
//     // var psw = document.getElementById("psw").value;
//     console.log(cpsw,psw);

//     if(psw==cpsw)
//     {
//         cmpderror.innerHTML="match";
//     }
//     else
//         {
//           cmpderror.innerHTML="dosen't match";
//         }
          
//     }

   