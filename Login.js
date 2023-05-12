function Login(event){

    event.preventDefault();
    // alert("working")

    var f_useremail = document.getElementById("flipkart_useremail").value;
    console.log(f_useremail, "f_useremail")
    var f_userpassword = document.getElementById("flipkart_userpassword").value;
    console.log(f_userpassword, "f_userpassword");

    var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_user"));
    console.log(flipkart_storage, "flipkart_storage")

    var flag = false; 
    var flipkart_current_user;

    for(var i=0; i < flipkart_storage.length; i++){
        if(flipkart_storage[i].f_email === f_useremail && flipkart_storage[i].f_password === f_userpassword){
            flipkart_current_user = flipkart_storage[i];
            flag = true;
        }
    }
    console.log(flag, "true");
    
    if(flag){
        // var flipkart_current_user = {};
        // flipkart_current_user["flipkart_current_user"] = f_useremail;
        // console.log(flipkart_current_user, "flipkart_current_user");
        localStorage.setItem("current_user", JSON.stringify(flipkart_current_user));
        document.getElementById("flipkart_useremail").value = "";
        document.getElementById("flipkart_userpassword").value = "";
        window.location.href = "/index.html";
        alert("login successfully");
    }
    else{
        document.getElementById("flipkart_useremail").value = "";
        document.getElementById("flipkart_userpassword").value = "";
        alert("your credential details are incorrect");
    }
}