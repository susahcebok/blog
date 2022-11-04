let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let btncp = document.getElementById("btncp");

function generatePass() {
    let chars =
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    let passLength = 20;
    let password = "";

    for (let i = 0; i < passLength; i++)
        password += chars[Math.floor(Math.random() * chars.length)];

    return password;
}
btn.addEventListener("click", () => {
    pass.value = generatePass();
});

btncp.addEventListener("click", () => {
    if (pass.value != "") {
        navigator.clipboard.writeText(pass.value);
        pass.classList.add("active");
        setTimeout(() => {
            pass.classList.remove("active");
        }, 1000);
    }
});

// copy
susahcebokCop("Password Generator", "#999");
