// Liste d'énigmes (ajoutez vos propres énigmes ici)
const enigmas = [
    "Dans la jungle tu attendras, \n un 5 ou un 8 te délivrera.",
    "Besoin d’un coup de main, elles arrivent tout de suite, \n elles vont vous aider, chacune en a huit.",
    "Retiens cet enseignement : \n un coup annule parfois le précédent.",
    "Un chasseur venu de sauvages contrées \n fait de toi un enfant apeuré.",
    "Ses crocs sont tranchants, il aime votre goût. Mieux vaut prendre vos jambes à votre cou.",
    "Elles vivent la nuit, mieux vaut s’enfuir. \n Ces choses ailées ne font pas rire.",
    "Une loi de Jumanji a été violée. \n Encore plus que votre pion vous reculerez.",
    "À chaque pleine lune et en toutes saisons, \n il y aura la mousson.",
    "Une piqûre et on se gratte, \n on éternue, on se contracte.",
    "Prenez garde où vous posez les pieds à présent, \n plus que le sable le sol est mouvant.",
    "Elles poussent plus vite que le bambou \n prenez garde ou elles se jetterons sur vous…",
    "N’allez pas croire qu’il s’agit du tonnerre. \n Rester là vous coûterait très cher.",

    // "Qu'est-ce qui a des dents mais ne peut pas manger ?",
    // "Je suis pris sans être demandé. Qu'est-ce suis-je ?",
    // "Plus on en prend, plus on en laisse. Qu'est-ce ?",
    // Ajoutez d'autres énigmes
];

function generateEnigma() {
    // Sélectionne une énigme aléatoire
    const randomIndex = Math.floor(Math.random() * enigmas.length);
    const randomEnigma = enigmas[randomIndex];

    // Affiche l'énigme sur la page
    document.getElementById("enigma").innerText = randomEnigma;
}
