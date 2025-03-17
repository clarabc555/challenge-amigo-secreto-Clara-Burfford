        const inputAmigo = document.getElementById("amigo");
        const listaAmigo = [];
        const ulListaAmigos = document.getElementById("listaAmigos");
        const ulResultado = document.getElementById("resultado");

        function agregarAmigo() {
            if (!inputAmigo.value.trim()) {
                alert("Por favor, agrega un nombre.");
            }

            // Agregar al array
            listaAmigo.push(inputAmigo.value.trim());

            // Agregar al HTML
            const ol = document.createElement("ol");
            ol.textContent = inputAmigo.value.trim();
            ulListaAmigos.appendChild(ol);

            // Limpiar input
            inputAmigo.value = "";
        }

        function sortearAmigo() {
            if (listaAmigo.length === 0) {
                alert("No hay amigos para sortear, agrega amigos.");
            }

            const random = Math.floor(Math.random() * listaAmigo.length);
            const amigoSecreto = listaAmigo[random];

            ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
        }