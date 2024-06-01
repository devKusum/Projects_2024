

function VerifyName(){
    var UserName = document.getElementById("UserInput").value;
    var error = document.getElementById("error");
    if(UserName==kusum){
        error.innerHTML = "User Name Taken - Try Another".fontcolor('red').bold().italics();
    } else {
        error.innerHTML = "User Name Available".fontcolor('green');
    }
    if (UserName.length==0) {
        error.innerHTML =" Name is required..".fontcolor('red')
      }
      if(UserName.length<4)
        {
            error.innerHTML = "Name is too short min 5 chars".fontcolor('yellow')
        }
        if(UserName.charCodeAt(0)>=65 && UserName.charCodeAt(0)<=90){
            error.innerHTML = "";
        } else  {
            error.innerHTML = "Name must start with Uppercase letter".fontcolor('red');
        }

      
}

function LoginClick(){
    
    var UserName = document.getElementById("UserInput").value ;
    var Password = document.getElementById("PswrdInput").value;
     if(UserName =="" || Password=="")
        {
            alert("plz fill both fields");
            return false;
        }
        else {
            document.write(`<h3>Your form has been submitted <br> and all the details are below </h3> <br> UserName:${UserName} <br> Password:${Password}  <br>`);
            return true;
          }

}


