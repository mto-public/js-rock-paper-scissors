let buttons = document.getElementsByTagName("button");

for(let button of buttons) {
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Code to be executed when the button is clicked
        // alert(this.getAttribute('data-value'));
        emilli(this.getAttribute('data-value')) ;
    });
}


function emilli(utilisateur_choix) {
    // let utilisateur_choix = "";
    let pc_choix = "";
    const choix = ["pierre", "papier", "ciseaux"];
    let result = "pas définie";

    // while( utilisateur_choix === "" || !choix.includes(utilisateur_choix) ) {
    //     utilisateur_choix = prompt("Faitez un choix ?");
    // }
   
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

// emilli();

// =====================================================


