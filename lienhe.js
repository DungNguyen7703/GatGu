function submitForm() {
   
    var fullNameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var messageInput = document.getElementById("message");

    var fullName = fullNameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var message = messageInput.value;

    var emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        alert("Vui lòng nhập địa chỉ email gmail hợp lệ");
        return;
    }

  
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Vui lòng nhập số điện thoại hợp lệ");
        return;
    }

    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = "Bạn đã gửi tin nhắn thành công";

    fullNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
}
