/* FUNCION DE MODAL AMERICAS */
let ModalAmerica = document.getElementById("btn-america")
ModalAmerica.addEventListener("click",ShowAmerica)

let CloseModalAmerica = document.getElementById("btm-closeAmerica")
CloseModalAmerica.addEventListener("click",CloseAmerica)

function ShowAmerica(){
    let MAmerica = document.getElementById("ModalAmerica")
    MAmerica.classList.add("d-flex")
}

function CloseAmerica(){
    let MAmerica = document.getElementById("ModalAmerica")
    MAmerica.classList.remove("d-flex")
}

/* MODAL PUERTO CANCUN*/
let ModalPuerto = document.getElementById("btn-puerto")
ModalPuerto.addEventListener("click",ShowPuerto)

let CloseModalPuerto = document.getElementById("btm-closePuerto")
CloseModalPuerto.addEventListener("click",ClosePuerto)

function ShowPuerto(){
    let MPuerto = document.getElementById("ModalPuerto")
    MPuerto.classList.add("d-flex")
}

function ClosePuerto(){
    let MPuerto = document.getElementById("ModalPuerto")
    MPuerto.classList.remove("d-flex")
}

/* MODAL PLAZA FORUM */
let ModalForum = document.getElementById("btn-forum")
ModalForum.addEventListener("click",ShowForum)

let CloseModalForum = document.getElementById("btm-closeForum")
CloseModalForum.addEventListener("click",CloseForum)

function ShowForum(){
    let MForum = document.getElementById("ModalForum")
    MForum.classList.add("d-flex")
}

function CloseForum(){
    let MForum = document.getElementById("ModalForum")
    MForum.classList.remove("d-flex")
}

/* MODAL PLAZA ISLA */
let ModalIsla = document.getElementById("btn-isla")
ModalIsla.addEventListener("click",ShowIsla)

let CloseModalIsla = document.getElementById("btm-closeIsla")
CloseModalIsla.addEventListener("click",CloseIsla)

function ShowIsla(){
    let MIsla = document.getElementById("ModalIsla")
    MIsla.classList.add("d-flex")
}

function CloseIsla(){
    let MIsla = document.getElementById("ModalIsla")
    MIsla.classList.remove("d-flex")
}

/* MODAL PLAZA KUKULCAN */
let ModalKukulcan = document.getElementById("btn-kukulcan")
ModalKukulcan.addEventListener("click",ShowKukulcan)

let CloseModalKukulcan = document.getElementById("btm-closeKukulcan")
CloseModalKukulcan.addEventListener("click",CloseKukulcan)

function ShowKukulcan(){
    let MKukulcan = document.getElementById("ModalKukulcan")
    MKukulcan.classList.add("d-flex")
}

function CloseKukulcan(){
    let MKukulcan = document.getElementById("ModalKukulcan")
    MKukulcan.classList.remove("d-flex")
}

/* MODAL PLAZA CARACOL */
let ModalCaracol = document.getElementById("btn-caracol")
ModalCaracol.addEventListener("click",ShowCaracol)

let CloseModalCaracol = document.getElementById("btm-closeCaracol")
CloseModalKukulcan.addEventListener("click",CloseKukulcan)

function ShowCaracol(){
    let MCaracol = document.getElementById("ModalCaracol")
    MCaracol.classList.add("d-flex")
}

function CloseCaracol(){
    let MCaracol = document.getElementById("ModalCaracol")
    MCaracol.classList.remove("d-flex")
}