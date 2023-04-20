function loadData() {
    const url = "http://127.0.0.1:5501/assets/data.json";
    const response = fetch(url)
        .then((response) => {
            /*VALIDACION RESPUESTA RECURSO*/
            if (response.ok) {
                console.log("response.text:", response.text);
                return response.text();
            } else {
                console.log("response.status ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /*LECTURA DE LA DATA JSON*/
            console.log("Datos: ", data);
            const objJson = JSON.parse(data);
            var cards = "";
            for (i = 0; i < objJson.length; i++) {
                console.log("_________________");
                console.log("Codigo: ", objJson[i].codigo);
                console.log("Titulo: ", objJson[i].titulo);
                console.log("Imagen: ", objJson[i].imagen);
                console.log("Descripcion :", objJson[i].descripcion);
                cards = `     ${cards}
                <div class="col-sm">
                <div id="card-${objJson[i].codigo}" class="card my-4" style="width: 18rem">
                <img src="${objJson[i].imagen}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${objJson[i].tituloCard} title</h5>
                    <p class="card-text"> ${objJson[i].descripcion}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div> `;
            }
            
            //OBTENCION DE LA ETIQUETA MEDIANTE JAVASCRIPT//
            var cardsHTML = document.getElementById("cards");
            //SOBREESCRIBIR TAG CARDS. CON INFORMACION GENERADA
            //EN EL CICLO FOR, MEDIANTE LA LECTURA DE UN DATA .JSON//
            cardsHTML.innerHTML = cards;
        })
        .catch((err) => {
            /*CAPTURA DE ERRORES*/
            console.error("ERROR", err.message);
        });
}
loadData();
