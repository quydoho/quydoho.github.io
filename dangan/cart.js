document.addEventListener("DOMContentLoaded", function () {
    let cartItems = [
        { id: 1, name: "Laptop Gaming", price: 25000000, quantity: 1, image: "laptop.jpg" },
        { id: 2, name: "Chuột Không Dây", price: 500000, quantity: 2, image: "mouse.jpg" }
    ];

    const cartTable = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout");
    const modal = document.getElementById("checkout-modal");
    const closeBtn = document.querySelector(".close");
    const confirmPaymentBtn = document.getElementById("confirm-payment");

    function renderCart() {
        cartTable.innerHTML = "";
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}₫</td>
                <td><input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity"></td>
                <td>${(item.price * item.quantity).toLocaleString()}₫</td>
                <td><button class="remove" data-index="${index}">❌ Xóa</button></td>
            `;

            cartTable.appendChild(row);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = totalPrice.toLocaleString() + "₫";
    }

    cartTable.addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity")) {
            let index = event.target.getAttribute("data-index");
            cartItems[index].quantity = parseInt(event.target.value);
            renderCart();
        }
    });

    cartTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove")) {
            let index = event.target.getAttribute("data-index");
            cartItems.splice(index, 1);
            renderCart();
        }
    });

    checkoutBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    confirmPaymentBtn.addEventListener("click", function () {
        let fullname = document.getElementById("fullname").value;
        let address = document.getElementById("address").value;
        let paymentMethod = document.getElementById("payment-method").value;

        if (fullname.trim() === "" || address.trim() === "") {
            alert("❗ Vui lòng nhập đầy đủ thông tin.");
        } else {
            alert(`✅ Thanh toán thành công!\n👤 Khách hàng: ${fullname}\n📍 Địa chỉ: ${address}\n💳 Hình thức: ${paymentMethod}`);
            modal.style.display = "none";
            cartItems = [];
            renderCart();
        }
    });

    renderCart();
});


/* Ấn mua ở Products chuyển sang Thanh toán */
 document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    function addToCart(product) {
        let existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push(product);
        }

        saveCart();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                id: this.getAttribute("data-id"),
                name: this.getAttribute("data-name"),
                price: parseInt(this.getAttribute("data-price")),
                image: this.getAttribute("data-image"),
                quantity: 1
            };

            addToCart(product);

            // Kiểm tra nếu nút này được nhấn trong trang sản phẩm thì chuyển sang cart.html
            if (window.location.pathname.includes("products.html")) {
                window.location.href = "cart.html";
            }
        });
    });
});