var contrasenaCorrecta = "f2420";
        function autenticacion() {
            var contrasena = document.getElementById("passwordInput").value;
            if (contrasena === contrasenaCorrecta) {
                document.getElementById("auth").style.display = "none";
                document.getElementById("content").style.display = "block";
            } else {
                window.location.href = "https://techzaa.getappui.com/techerror/error500-8.html";
            }
        }
        function openTab(event, tabName) {
            document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
            document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.classList.add("active");
        }