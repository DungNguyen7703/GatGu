// Xử lý khi form được submit
let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password1"); 
  let confirmPassword = document.getElementById("password2"); 

  if (password.value !== confirmPassword.value) {
      window.alert('Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!');
  } else {
      console.log("Email:", email.value);
      console.log("Mật khẩu:", password.value);
      console.log("Xác nhận mật khẩu:", confirmPassword.value);
      // Hiển thị thông báo thành công và chuyển hướng đến index.html
      window.alert('Đăng ký thành công!');
      window.location.href = 'index.html';
  }
});
