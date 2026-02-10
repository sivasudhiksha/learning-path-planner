// Toggle cards
function showLogin() {
    document.getElementById("loginCard").classList.remove("hidden");
    document.getElementById("registerCard").classList.add("hidden");
}

function showRegister() {
    document.getElementById("registerCard").classList.remove("hidden");
    document.getElementById("loginCard").classList.add("hidden");
}

// LOGIN
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    fetch("../../server/api/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            window.location.href = "home.html";
        } else {
            alert(data.message);
        }
    })
    .catch(() => alert("Server error"));
}

// REGISTER
function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    fetch("../../server/api/register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        if (data.status === "success") {
            showLogin();
        }
    })
    .catch(() => alert("Server error"));
}
