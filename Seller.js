function AddTheProduct(event){

    event.preventDefault();
    alert("working");

    var seller_product_name = document.getElementById("product_name").value;
    console.log(seller_product_name, "seller_product_name")
    var seller_product_image = document.getElementById("product_image_URL").value;
    console.log(seller_product_image, "seller_product_image")
    var seller_product_price = document.getElementById("product_price").value;
    console.log(seller_product_price, "seller_product_price")

    var seller = ({seller_product_name:seller_product_name , seller_product_image: seller_product_image, seller_product_price: seller_product_price })

    var seller_storage = JSON.parse(localStorage.getItem("seller_product")) || [];
    console.log(seller_storage, "seller_storage");
    seller_storage.push(seller);

    localStorage.setItem("seller_product", JSON.stringify(seller_storage));
    document.getElementById("product_name").value = "";
    document.getElementById("product_image_URL").value ="";
    document.getElementById("product_price").value = "";
    alert("product added successfully");
   
}

