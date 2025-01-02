// Hàm toggle để hiển thị/ẩn mật khẩu
function togglePassword(inputId) {
    const inputField = document.getElementById(inputId);
    const icon = inputField.nextElementSibling;

    if (inputField.type === "password") {
        inputField.type = "text"; // Hiển thị mật khẩu
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        inputField.type = "password"; // Ẩn mật khẩu
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

// Lắng nghe sự kiện submit của form đổi mật khẩu
document.getElementById('changePassForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Lấy giá trị của các trường mật khẩu
    const currentPassword = document.getElementById('current_pass').value;
    const newPassword = document.getElementById('new_pass').value;
    const confirmPassword = document.getElementById('confirm_new_pass').value;

    // Lấy mật khẩu hiện tại từ localStorage
    const storedPassword = localStorage.getItem('password');

    // Kiểm tra nếu mật khẩu hiện tại không đúng
    if (currentPassword !== storedPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Mật khẩu hiện tại không đúng!',
            text: 'Vui lòng nhập lại mật khẩu hiện tại chính xác.'
        });
    } else if (newPassword !== confirmPassword) {
        // Kiểm tra nếu mật khẩu mới và mật khẩu xác nhận không khớp
        Swal.fire({
            icon: 'error',
            title: 'Mật khẩu không khớp!',
            text: 'Mật khẩu mới và xác nhận mật khẩu không giống nhau. Vui lòng nhập lại.'
        });
    } else if (newPassword === currentPassword) {
        // Kiểm tra nếu mật khẩu mới trùng với mật khẩu hiện tại
        Swal.fire({
            icon: 'error',
            title: 'Mật khẩu mới không được trùng mật khẩu hiện tại!',
            text: 'Vui lòng nhập mật khẩu mới khác với mật khẩu hiện tại.'
        });
    } else {
        // Cập nhật mật khẩu mới trong localStorage
        localStorage.setItem('password', newPassword);

        // Thông báo thành công
        Swal.fire({
            icon: 'success',
            title: 'Đổi mật khẩu thành công!',
            text: 'Mật khẩu của bạn đã được thay đổi thành công.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Điều hướng về trang chủ sau khi thông báo thành công
            window.location.href = "Home.html"; // Thay thế bằng trang bạn muốn điều hướng
        });
    }
});
