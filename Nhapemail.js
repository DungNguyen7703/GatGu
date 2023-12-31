<script>
function validateEmail() {
    var emailInput = document.getElementById("emailInput").value;
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    if (!emailRegex.test(emailInput)) {
        alert("Vui lòng nhập vào địa chỉ email hợp lệ");
    } else {
        alert(" Bạn đã đăng ký thành công");
    }
}
</script>