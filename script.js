function goToApply() {
    window.location.href = "apply.html";
}

function goHome() {
    window.location.href = "index.html";
}

function submitForm() {
    let name = document.getElementById("name").value;

    if (!name) {
        document.getElementById("error").innerText = "Fill required fields";
        return;
    }

    window.location.href = "success.html";
}