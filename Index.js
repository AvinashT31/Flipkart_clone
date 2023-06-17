// window.onload = function () {

//     var divFromHTML = document.getElementById("flipkart-section");
//     console.log(divFromHTML, "divFromHTML");

//     var seller_product = JSON.parse(localStorage.getItem("seller_product"));
//     console.log(seller_product, "seller_product");

//     array = [];

//     for (var i=0; i<seller_product.length; i++) {
//         array += `<div onclick='opensinglepage(${JSON.stringify(seller_product[i])})' class="flipkart-section-one"><div class="display_image"><img src="${seller_product[i].seller_product_image}" /></div>
//                 <div class = "content">
//                 <p>${seller_product[i].seller_product_name}</p>
//                 <p>₹${seller_product[i].seller_product_price}</p><button>Add To Cart</button></div></div>`
//     }
//     divFromHTML.innerHTML = array;
//     console.log(array, "araay")

// }

function opensinglepage(prop){
    // alert("working");
    var singleproduct = JSON.stringify(prop);
    // console.log(x, "hey");

    window.location.href = "/Singlepage.html";
    localStorage.setItem("f_current_product", singleproduct);    
}