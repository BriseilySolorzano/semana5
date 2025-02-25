class MiElemento extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const descripcion = document.createElement('p');
        descripcion.textContent = "El turismo es una excelente manera de explorar nuevas culturas, conocer personas y descubrir paisajes impresionantes. Planifica tu próximo viaje y vive una experiencia inolvidable.";
        
        const boton = document.createElement('a');
        boton.textContent = "Descubre más";
        boton.href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjkr_a-qd-LAxU6STABHfPnDToQFnoECBcQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fmiturelsalvador%2F%3Flocale%3Did%26hl%3Daf&usg=AOvVaw3cxesUVPATZ6pKJNONbV78&opi=89978449";
        boton.target = "_blank";
        boton.classList.add("boton-enlace");

        const style = document.createElement('style');
        style.textContent = `
            div {
                border: 2px solid #000;
                padding: 20px;
                margin: 10px;
                text-align: center;
                background-color: #f0f0f0;
                border-radius: 5px;
            }
            .boton-enlace {
                display: inline-block;
                background-color: rgb(76, 106, 175);
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 10px;
            }
            .boton-enlace:hover {
                background-color: rgb(69, 84, 160);
            }
            p {
                font-size: 16px;
                color: #333;
            }
        `;

        container.appendChild(descripcion);
        container.appendChild(boton);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define('mi-elemento', MiElemento);

document.getElementById("transporte").addEventListener("click", function() {
    this.querySelector("p").textContent = ".....................";
});

document.getElementById("horarios").addEventListener("mouseover", function() {
    this.querySelector("p").textContent = ".......";
});