function autenticacion() {
    const contrasena = document.getElementById("passwordInput").value;

    fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: contrasena })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            document.getElementById("auth").style.display = "none";
            document.getElementById("content").style.display = "block";
        } else {
            alert("Contraseña incorrecta");
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Hubo un error con el servidor.");
    });
}
