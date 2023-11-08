// 1. u rentre value
// 2. pc choisie son value
// .. algo comparer
// 4. gagner / perdu/ egalité

function emilli() {
    let utilisateur_choix = "";
    let pc_choix = "";
    const choix = ["pierre", "papier", "ciseaux"];
    let result = "pas définie";

    while( utilisateur_choix === "" || !choix.includes(utilisateur_choix) ) {
        utilisateur_choix = prompt("Faitez un choix ?");
    }
   
    pc_choix = choix[Math.floor(Math.random() * 3)];
    console.log(`Utilisateur choix: ${utilisateur_choix}`);
    console.log(`Pc choix: ${pc_choix}`);

    if(utilisateur_choix === pc_choix) {
        result = "égalité";
        // console.log(result);
        alert(result);
        return;
    } 

    if(utilisateur_choix === "pierre") {
        if(pc_choix === "papier") {
            result = "perdu";
        } else {
            result = "gagné";
        }
    } else if(utilisateur_choix === "papier") {
        if(pc_choix === "pierre") {
            result = "gagné";
        } else {
            result = "perdu";
        }
    } else {
        if(pc_choix === "pierre") {
            result = "perdu";
        } else {
            result = "gagné";
        }
    }

    // console.log(result);
    alert(result);
}

emilli();