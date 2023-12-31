let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // process and send to API
  window.location.href = 'index (1).html'; 

  // Hiển thị thông báo đăng nhập thành công
  window.alert('Đăng nhập thành công!');
});



