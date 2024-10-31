let pionono = document.getElementById("pion")
pionono.addEventListener("click", modalPion)
function modalPion() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Pionono"
    text.innerHTML = "Precio: $8000"
    text2.innerHTML = "Variedades: Jamón & Queso; Roquefort & Oliva; Roquefort & Nueces; Cheddar & Miel; Pollo & Verduras"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let panCasero = document.getElementById("pancas")
panCasero.addEventListener("click", modalPancas)
function modalPancas() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Pan Casero"
    text.innerHTML = "Precio: $3000"
    text2.innerHTML = "Variedades: N/A"
   
    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let tortilla = document.getElementById("torti")
tortilla.addEventListener("click", modalTorti)
function modalTorti() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tortillas"
    text.innerHTML = "Precio: $3000 (8 un.)"
    text2.innerHTML = "Variedades: Con/sin especias"
    
    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let pizzeta = document.getElementById("pizze")
pizzeta.addEventListener("click", modalPizzeta)
function modalPizzeta() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Pizzeta"
    text.innerHTML = "Precio: $5000 (5 un.)"
    text2.innerHTML = "Variedades: N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let tapas = document.getElementById("tapa")
tapas.addEventListener("click", modalTapas)
function modalTapas() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tapas"
    text.innerHTML = "Precio: $2000 (12 un.)"
    text2.innerHTML = "Variedades: N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let sanguche = document.getElementById("sanmi")
sanmi.addEventListener("click", modalSanmi)
function modalSanmi() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Sánguches de Miga"
    text.innerHTML = "Precio: $1500 c/u"
    text2.innerHTML = "Variedades: Jamón y Queso"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let torta = document.getElementById("torta")
torta.addEventListener("click", modalTorta)
function modalTorta() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Torta"
    text.innerHTML = "Precio: $11500 p/kg"
    text2.innerHTML = "Variedades: Bizcochuelo de Chocolate, de Vainilla. Rellenos varios; cremas varias, dulce de leche, frutas, mermelada, ganache, frutos secos"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let dona = document.getElementById("dona")
dona.addEventListener("click", modalDona)
function modalDona() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Donas"
    text.innerHTML = "Precio: $8000 (12 un.)"
    text2.innerHTML = "Variedades: Bañadas en Chocolate ó Azúcar"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let alfajor = document.getElementById("ALF")
alfajor.addEventListener("click", modalAlfajor)
function modalAlfajor() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Alfajor de Maicena"
    text.innerHTML = "Precio: $600 ($6500 la docena)"
    text2.innerHTML = "Variedades: N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let alfajorNuez = document.getElementById("alfNuez")
alfajorNuez.addEventListener("click", modalNuez)
function modalNuez() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Alfajor con Nueces"
    text.innerHTML = "Precio: $700 ($7000 la docena)"
    text2.innerHTML = "Variedades: N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let alfajorBanado = document.getElementById("alfBano")
alfajorBanado.addEventListener("click", modalBano)
function modalBano() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Alfajor Bañado"
    text.innerHTML = "Precio: $800 ($7500 la docena)"
    text2.innerHTML = "Variedades: Chocolate Negro ó Blanco"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let kaboom = document.getElementById("boom")
kaboom.addEventListener("click", modalBOMB)
function modalBOMB() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Torta Bomba"
    text.innerHTML = "Precio: $9500"
    text2.innerHTML = "Variedades: N/A"
    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let toffee = document.getElementById("toffee")
toffee.addEventListener("click", modalToffee)
function modalToffee() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tarta Toffee"
    text.innerHTML = "Precio: $18000"
    text2.innerHTML = "Variedades: N/A"
    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let coco = document.getElementById("coco")
coco.addEventListener("click", modalCoco)
function modalCoco() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tarta de Coco"
    text.innerHTML = "Precio: $19000"
    text2.innerHTML = "Variedades N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let lemonPie = document.getElementById("tartaLim")
lemonPie.addEventListener("click", modalLim)
function modalLim() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tarta de Limón"
    text.innerHTML = "Precio: $16000"
    text2.innerHTML = "Variedades: N/A"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let peachPie = document.getElementById("tartaDur")
peachPie.addEventListener("click", modalDur)
function modalDur() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Tarta de Durazno"
    text.innerHTML = "Precio: $18000"
    text2.innerHTML = "Variedades: N/A"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let tortaHojal = document.getElementById("hojal")
tortaHojal.addEventListener("click", modalHojal)
function modalHojal() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Rogel"
    text.innerHTML = "Precio: $18000"
    text2.innerHTML = "Variedades: N/A"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let miniHojal = document.getElementById("miniHojal")
miniHojal.addEventListener("click", modalMini)
function modalMini() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Rogelitos"
    text.innerHTML = "Precio: $900"
    text2.innerHTML = "Variedades: N/A"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let brownBricks = document.getElementById("brown")
brownBricks.addEventListener("click", modalBrown)
function modalBrown() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Brownie"
    text.innerHTML = "Precio: $800 ($9000 la docena)"
    text2.innerHTML = "Variedades: Con/sin nueces ó trozos de chocolate"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let budin = document.getElementById("budin")
budin.addEventListener("click", modalBudin)
function modalBudin() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Budín"
    text.innerHTML = "Precio: $3600"
    text2.innerHTML = "Variedades: Frutos secos, fruta deshidratada, "


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let frola = document.getElementById("pastfro")
frola.addEventListener("click", modalPastfro)
function modalPastfro() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Pastafrola"
    text.innerHTML = "Precio: $7000"
    text2.innerHTML = "Variedades: Membrillo, Batata, Dulce de leche"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let galleta = document.getElementById("gall")
galleta.addEventListener("click", modalGall)
function modalGall() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Galletas"
    text.innerHTML = "Precio: $2500 (20 un.)"
    text2.innerHTML = "Variedades: Limón, Vainilla, Marmoladas, Frutos secos"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let galletaBanada = document.getElementById("gallBano")
galletaBanada.addEventListener("click", modalGallbano)
function modalGallbano() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Galletas Bañadas"
    text.innerHTML = "Precio: $3000 (12 un.)"
    text2.innerHTML = "Variedades: Chocolate blanco ó negro"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let pepa = document.getElementById("pepa")
pepa.addEventListener("click", modalPepa)
function modalPepa() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Pepas"
    text.innerHTML = "Precio: $2700 (20 un.)"
    text2.innerHTML = "Variedades: Membrillo, Batata, Dulce de Leche, Bañadas"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let galletaAlf = document.getElementById("gallAlf")
galletaAlf.addEventListener("click", modalGallALF)
function modalGallALF() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Galletas Alfajor"
    text.innerHTML = "Precio: $500 ($5500 12 un.)"
    text2.innerHTML = "Variedades: Dulce de Leche ó Ganache"

    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let maria = document.getElementById("magda")
maria.addEventListener("click", modalMagda)
function modalMagda() {
    let prodmod = document.getElementById("moedal")
    let title = document.getElementById("titleprod")
    let text = document.getElementById("textprod")
    let text2 = document.getElementById("textprod2")
    prodmod.style.display = "block"

    title.innerHTML = "Magdalenas"
    text.innerHTML = "Precio: $4000 (12 un.)"
    text2.innerHTML = "Variedades: Vainilla, Mandarina, Limón, Chocolate, Marmolada, Frutos Secos, Chips de Chocolate"


    ok.onclick = function () {
        prodmod.style.display = "none";
    }
}

let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault;
})

let butt = document.getElementById("send")

function sentWow() {
    send.onclick = function () {
        var sentBelow = document.getElementById("titleC")
        let mess = "<p style='color:green'>¡Su solicitud ha sido envidada!</p>"
        sentBelow.insertAdjacentHTML("afterend", mess)
    }
}

butt.addEventListener("click", sentWow);