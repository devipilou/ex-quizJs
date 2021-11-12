const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['napoleon', '1776', '395', 'ljubjana', '4,9'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultat h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    for(i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats){

    for (let a = 0; a < 5; a++){

        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }

    }
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];

}

function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes){
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = "✨ Vous y etes presque ! ✨";
            aideResultat.innerText = 'Rententez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = "✨ Encore un effort... 👀";
            aideResultat.innerText = 'Rententez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreurs 😭";
            aideResultat.innerText = 'Rententez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭";
            aideResultat.innerText = 'Rententez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = "👎 Bravo, t'en as même pas une seule de juste ! 👎";
            aideResultat.innerText = 'Jette toi sous le train !!';
            noteResultat.innerText = '0/5';
            break;
        default:
            titreResultat.innerText = 'Oups, cas innatendu';
    }
}

function couleursFonction(tabValBool){

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        }else{
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');
            
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');

            },500)

        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})