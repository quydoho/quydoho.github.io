document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Chặn form reload trang

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra mật khẩu
    if (password !== confirmPassword) {
        alert("⚠️ Mật khẩu nhập lại không khớp!");
        return;
    }

    // Giả lập đăng ký thành công
    alert("🎉 Đăng ký thành công! Bạn có thể đăng nhập ngay.");
    window.location.href = "login.html"; // Chuyển đến trang đăng nhập
});