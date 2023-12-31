let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log("Email:", email.value);
  console.log("Password:", password.value);

  window.location.href = 'index.html'; 

  // Hiển thị thông báo đăng nhập thành công
  window.alert('Đăng nhập thành công!');
});



