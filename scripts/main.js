

document.addEventListener("DOMContentLoaded", (event) => {
    const user = document.getElementsByClassName('fa-user')[0];
    const userdd = document.getElementsByClassName('userdropdown')[0];
    const cart = document.getElementsByClassName('fa-cart-shopping')[0];
    const cartdd = document.getElementsByClassName('cartdropdown')[0];
    const service = document.getElementsByClassName('fa-headset')[0];
    const servicedd = document.getElementsByClassName('servicedropdown')[0];


    user.addEventListener("mouseover", function() {
        document.getElementById('userdropdown').style.display = "block";
        console.log("show");
    })

    user.addEventListener("mouseout", function() {
        document.getElementById('userdropdown').style.display = "none";
    })

    userdd.addEventListener("mouseover", function() {
        document.getElementById('userdropdown').style.display = "block";
        console.log("show");
    })

    userdd.addEventListener("mouseout", function() {
        document.getElementById('userdropdown').style.display = "none";
    })

    cart.addEventListener("mouseover", function() {
        document.getElementById('cartdropdown').style.display = "block";
        console.log("show");
    })

    cart.addEventListener("mouseout", function() {
        document.getElementById('cartdropdown').style.display = "none";
    })

    cartdd.addEventListener("mouseover", function() {
        document.getElementById('cartdropdown').style.display = "block";
        console.log("show");
    })

    cartdd.addEventListener("mouseout", function() {
        document.getElementById('cartdropdown').style.display = "none";
    })

    service.addEventListener("mouseover", function() {
        document.getElementById('servicedropdown').style.display = "inline-flex";
        console.log("show");
    })

    service.addEventListener("mouseout", function() {
        document.getElementById('servicedropdown').style.display = "none";
    })

    servicedd.addEventListener("mouseover", function() {
        document.getElementById('servicedropdown').style.display = "inline-flex";
        console.log("show");
    })

    servicedd.addEventListener("mouseout", function() {
        document.getElementById('servicedropdown').style.display = "none";
    })
});