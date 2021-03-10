const plats = ["Omelette au fromage",
    "Salade de pâtes au thon",
    "tomate et maïs",
    "Pomme de terre farcie aux lardons et brocoli",
    "Mousse au chocolat simplissime express",
    "Pizza au poulet et fromage",
    "Velouté froid à la betterave et feta",
    "Gratin de gnocchis tomate et basilic",
    "Riz au lait",
    "Banana split"]

//affiche notre tableau de base sur la page html
function saveContact() {
    let saisie = document.querySelector("input[type='text']").value;
    if (saisie.length == 0) {
        alert("Aucune saisie n'a été ajoutée")
    } else {
        plats.push(saisie)
        alert("Saisie ajoutée")
    }
    display();
}

function display() {

    let menu = `<h3>Il y a ${plats.length} plats au menu</h3>`;
    menu += `<ul>`;
    for (let i = 0; i < plats.length; i++) {
        menu += `<li>${plats[i]}</li>`;
    }
    menu += `</ul>`
    document.querySelector("#meals").innerHTML = menu;
}

document.addEventListener("DOMContentLoaded", function () {
    display();
    document.querySelector("input[type='button']").addEventListener("click", saveContact);

});