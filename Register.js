 function Register(event){

    event.preventDefault();
    // alert("working");

    var f_username = document.getElementById("flipkart_username").value;
    console.log(f_username, "f_username");
    var f_usernumber = document.getElementById("flipkart_usernumber").value;
    console.log(f_usernumber, "f_usernumber");
    var f_useremail = document.getElementById("flipkart_useremail").value;
    console.log(f_useremail, "f_useremail");
    var f_userpassword = document.getElementById("flipkart_userpassword").value;
    console.log(f_userpassword, "f_userpassword");

    var f_userDatainfo = ({f_name: f_username, f_number: f_usernumber, f_email: f_useremail, f_password:f_userpassword});

    var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_user")) || [];
    console.log(flipkart_storage, "flipkart_storage");

    var flag = false;

    for(var i = 0; i<flipkart_storage.lnegth; i++){
        if(flipkart_storage[i].email === f_useremail){
            flag = true;
        }
    }

    // console.log(flag, "true");
    if(flag){
        alert("email is already present");
    }
    else if(f_username.length < 1 && f_usernumber.length < 1 && f_useremail.length < 1 && f_userpassword.length < 1){
        alert("must fill all field");
    }
    else if(f_usernumber.length < 10){
        alert("number should be 10 digit");
    }
    else if(f_userpassword.length < 8){
        alert("password must have 8 digit");
    }
    else{
        flipkart_storage.push(f_userDatainfo);
        localStorage.setItem("flipkart_user",JSON.stringify(flipkart_storage));
        document.getElementById("flipkart_username").value = "";
        document.getElementById("flipkart_usernumber").value = "";
        document.getElementById("flipkart_useremail").value = "";
        document.getElementById("flipkart_userpassword").value = "";
        window.location.href = "/Login.html";
        alert("register successfully");
    }


}