const choix = ["pierre", "papier", "ciseaux"];
let buttons = document.getElementsByTagName("button");
let user_score = 0;
let pc_score = 0;
let max = 4;

for(let button of buttons) {
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        let utilisateur_choix = this.getAttribute('data-value');
        let pc_choix = choix[Math.floor(Math.random() * 3)];

        let result = emilli(utilisateur_choix, pc_choix) ;
        document.getElementById("resultat").innerHTML = result;
        document.querySelector(".utilisateur_choix").innerHTML = `You: ${utilisateur_choix}`;
        document.querySelector(".pc_choix").innerHTML = `PC: ${pc_choix}`;

        document.querySelector("#user_score").innerHTML = `You: ${user_score}`;
        document.querySelector("#pc_score").innerHTML = `PC: ${pc_score}`;

        if( user_score + pc_score === 1) {
            document.getElementById("resultatFinal").innerHTML = "";
        }

        if( user_score + pc_score >= max) {
            if(user_score > pc_score) {
                document.getElementById("resultatFinal").style.color = "green";
                document.getElementById("resultatFinal").innerHTML = "Vous avez gagné !!!";
            } else if(user_score < pc_score) {
                document.getElementById("resultatFinal").style.color = "red";
                document.getElementById("resultatFinal").innerHTML = "Vous avez perdu !!!";
            } else {
                document.getElementById("resultatFinal").style.color = "orange";
                document.getElementById("resultatFinal").innerHTML = "C'est égalité!!!";
            }
            user_score = 0;
            pc_score = 0;
        }
    });
}


function emilli(utilisateur_choix, pc_choix) {
    // let utilisateur_choix = "";
    // let pc_choix = "";
    
    let result = "";

    if(utilisateur_choix === pc_choix) {
        result = "égalité";
        return result;
    } 

    if(utilisateur_choix === "pierre") {
        if(pc_choix === "papier") {
            result = "perdu";
            pc_score++;
        } else {
            result = "gagné";
            user_score++;
        }
    } else if(utilisateur_choix === "papier") {
        if(pc_choix === "pierre") {
            result = "gagné";
            user_score++;
        } else {
            result = "perdu";
            pc_score++;
        }
    } else {
        if(pc_choix === "pierre") {
            result = "perdu";
            pc_score++;
        } else {
            result = "gagné";
            user_score++;
        }
    }

    return result;
}


// =====================================================


