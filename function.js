function checkName() {
    var name = document.getElementById('txtName').value;
    if (name != '') {
        document.getElementById('errName').style.color = '';
        document.getElementById('txtName').style.borderColor = '';
        document.getElementById('txtName').style.backgroundColor = '';
        document.getElementById('errName').innerHTML = '';
        if (name.length < 5) {
            document.getElementById('errName').style.color = 'red';
            document.getElementById('txtName').style.borderColor = 'red';
            document.getElementById('txtName').style.backgroundColor = 'white';
            document.getElementById('errName').innerHTML = '(*) Vui lòng nhập đầy đủ họ và tên!';
        }
    } else {
        document.getElementById('errName').style.color = 'red';
        document.getElementById('txtName').style.borderColor = 'red';
        document.getElementById('txtName').style.backgroundColor = 'white';
        document.getElementById('errName').innerHTML = '(*) Vui lòng nhập họ tên!';
    }
}

function checkPhone() {
    var phone = document.getElementById('txtPhone').value;
    if (phone != '') {
        document.getElementById('errPhone').innerHTML = '';
        document.getElementById('errPhone').style.color = '';
        document.getElementById('txtPhone').style.borderColor = '';
        document.getElementById('txtPhone').style.backgroundColor = '';

        if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone) == false) {
            document.getElementById('errPhone').style.color = 'red';
            document.getElementById('txtPhone').style.borderColor = 'red';
            document.getElementById('txtPhone').style.backgroundColor = 'white';
            document.getElementById('errPhone').innerHTML = '(*) Vui lòng nhập số điện thoại chính xác!';
        }
    } else {
        document.getElementById('errPhone').style.color = 'red';
        document.getElementById('txtPhone').style.borderColor = 'red';
        document.getElementById('txtPhone').style.backgroundColor = 'white';
        document.getElementById('errPhone').innerHTML = '(*) Vui lòng nhập số điện thoại!';
    }
}

function checkAdd() {
    var add = document.getElementById('txtAdd').value;
    if (add != '') {
        document.getElementById('errAdd').style.color = '';
        document.getElementById('txtAdd').style.borderColor = '';
        document.getElementById('txtAdd').style.backgroundColor = '';
        document.getElementById('errAdd').innerHTML = '';
        if (add.length < 10) {
            document.getElementById('errAdd').style.color = 'red';
            document.getElementById('txtAdd').style.borderColor = 'red';
            document.getElementById('txtAdd').style.backgroundColor = 'white';
            document.getElementById('errAdd').innerHTML = '(*) Vui lòng nhập địa chỉ lớn hơn 10 ký tự';
        }
    } else {
        document.getElementById('errAdd').style.color = 'red';
        document.getElementById('txtAdd').style.borderColor = 'red';
        document.getElementById('txtAdd').style.backgroundColor = 'white';
        document.getElementById('errAdd').innerHTML = '(*) Vui lòng nhập địa chỉ công trình!';
    }
}

function checkEmail() {
    var email = document.getElementById('txtEmail').value;
    if (email != '') {
        document.getElementById('errEmail').innerHTML = '';
        document.getElementById('errEmail').style.color = '';
        document.getElementById('txtEmail').style.borderColor = '';
        document.getElementById('txtEmail').style.backgroundColor = '';

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
            document.getElementById('errEmail').style.color = 'red';
            document.getElementById('txtEmail').style.borderColor = 'red';
            document.getElementById('txtEmail').style.backgroundColor = 'white';
            document.getElementById('errEmail').innerHTML = '(*) Vui lòng nhập đúng địa chỉ Gmail!';
        }
    } else {
        document.getElementById('errEmail').style.color = 'red';
        document.getElementById('txtEmail').style.borderColor = 'red';
        document.getElementById('txtEmail').style.backgroundColor = 'white';
        document.getElementById('errEmail').innerHTML = '(*) Vui lòng nhập địa chỉ Gmail!';
    }
}

function checkMessage() {
    var message = document.getElementById('txtMessage').value;
    if (message != '') {
        document.getElementById('errMessage').innerHTML = '';
        document.getElementById('errMessage').style.color = '';
        document.getElementById('txtMessage').style.borderColor = '';
        document.getElementById('txtMessage').style.backgroundColor = '';
    } else {
        document.getElementById('errMessage').style.color = 'red';
        document.getElementById('txtMessage').style.borderColor = 'red';
        document.getElementById('txtMessage').style.backgroundColor = 'white';
        document.getElementById('errMessage').innerHTML = '(*) Vui lòng nhập nội dung!';
    }
}

function checkinfo() {
    var name = document.getElementById('txtName').value;
    var phonenum = document.getElementById('txtPhone').value;
    var add = document.getElementById('txtAdd').value;
    var lenght = document.getElementById('txtlenght').value;
    var width = document.getElementById('txtwidth').value;
    if (name == "" && phonenum == "" && add == "") {
        window.alert("Vui lòng nhập đầy đủ thông tin để nhận báo giá chi tiết!")
    } else {
        var result = lenght * width;
        document.getElementById("tongtien").innerHTML = result;
    }
}


function datatransfer() {
    var x = document.getElementById("form-1");
    var y = document.getElementById("form-2");
    x.style.display = "none";
    y.style.display = "block"
    var alu = document.getElementById('select-alu').value;
    document.getElementById('type').innerHTML = alu;
}
//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");
//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//Close Cart
closecart.onclick = () => {
    cart.classList.remove("active");
};

//Cart Working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Making Function
function ready() {
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}

//Add to Cart
var addCart = document.getElementsByClassName('add-cart');
for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);

    //Buy Button Work
    document.getElementsByClassName('btn-buy')[0].addEventListener("click", buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
    alert('Đơn hàng của bạn đã được gửi!');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    if (cartContent == "") {
        alert('Đơn hàng trống!')
    }
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }

    updatetotal();

}
//Remove Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

//Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = document.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Sản phẩm đã tồn tại trong giỏ hàng!");
            return;
        }
    }
    var cartBoxContent = `
<img src="${productImg}" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity" id="">
</div>
<i class="fa fa-trash cart-remove"></i>
`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}

//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("", ""));
        total = total + (price * quantity) * 1000000;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = parseFloat(total);
}