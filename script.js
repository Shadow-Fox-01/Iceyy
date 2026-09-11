function scrollToFlavors() {
    document
        .getElementById("flavors")
        .scrollIntoView({
            behavior: "smooth"
        });
}

document
    .getElementById("orderForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        document.getElementById("orderMessage").innerHTML =
            "✅ Thank you! Your order has been received.";

        this.reset();
    });