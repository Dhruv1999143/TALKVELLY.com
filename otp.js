// OTP Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("verifyOtpBtn").addEventListener("click", () => {
        const otp = document.getElementById("otpInput").value;
        if (otp) {
            alert("OTP verified: " + otp);
            // Logic for OTP verification
        } else {
            alert("Please enter OTP.");
        }
    });
});