//HERMIER evan
/**VARIABLES
 *******************/

// tableau contenant mes meals par default
const meals = ["Omelette au fromage",
    "Salade de pâtes au thon",
    "tomate et maïs",
    "Pomme de terre farcie aux lardons et brocoli",
    "Mousse au chocolat simplissime express",
    "Pizza au poulet et fromage",
    "Velouté froid à la betterave et feta",
    "Gratin de gnocchis tomate et basilic",
    "Riz au lait",
    "Banana split"]
/**FONCTIONS
 *******************/

//affiche notre tableau de base sur la page html
function showmeals() {

    //la variable html va stocker le contenu que nous allons injecter dans le html
    //compteur qui affiche le nombre de plats present dans le tableau.
    let html = `<h3>Il y a ${meals.length} meals au menu</h3>`
    //on ouvre la ul...
    html += `<ul>`
    //on boucle sur notre tableau de plats et on injecte chaque element du tableau dans une li
    for (let i = 0; i < meals.length; i++) {
        html += `<li>${meals[i]}</li>`;
    }
    //on referme notre ul
    html += `</ul>`
    //on injecte le contenu de la variable dans la page HTML a l'interieur de la div --#meals
    document.querySelector("#meals").innerHTML = html;

}
// fonction qui gere l'ajout des plats
function addMeal() {
    //on stock dans une variable, le contenu du champ de text , en minuscule, sans les espaces.
    let newMeal = document.querySelector("input[type='text']").value.toLowerCase().trim()

    //si le champ de saisis est vide on signal l'utilisateur
    if (newMeal.length == 0) {

        alert("Le champ de saisis est vide !")

    } else {// la saisis n'est pas vide , on continue

        // on mets en majuscule la premiere lettre de la saisis pour un rendu plus coherent
        newMeal = newMeal[0].toUpperCase() + newMeal.substring(1)
        // on verifie si notre nouveau plat est deja present dans notre tableau, pour cela :
        // on stock l'index potentiel du nouveau plat.
        let isCopy = meals.indexOf(newMeal)
        if (isCopy >= 0) {//l'index est superieur ou egale a zero , le plat est deja present , on averti donc l'utilisateur
            alert("Ce plat est deja present dans votre liste !")
        } else {// sinon ... on ajoute le nouveau plat , toujours en avertissant l'utilisateur.
            meals.push(newMeal)
            alert(`Votre plat : ${newMeal} a bien été ajouté !`)
        }
    }

    // on vide le champ de saisis 
    document.querySelector("form").reset()
    // puis on affiche a nouveau notre liste de plat dans la page HTML.
    showmeals()
}
/**CODE PRINCIPALE
 *******************/

//s'execute une fois le HTML chargé
document.addEventListener("DOMContentLoaded", function () {
    //on affiche notre liste de plat dans la page HTML.
    showmeals();
    //creation de l'evenement qui , au click appeleras la fonction qui ce chargera d'ajouter un nouveau plat
    document.querySelector("input[type='button']").addEventListener("click", addMeal);
});