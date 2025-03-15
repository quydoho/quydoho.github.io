document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Chặn form reload trang

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Kiểm tra tài khoản (giả lập)
    if (email === "admin@example.com" && password === "123456") {
        alert("🎉 Đăng