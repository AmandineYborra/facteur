# facteur
Un facteur fait sa tournée...

Vous allez découvrir la notion de POO à travers un didacticiel concret se terminant par un exercice. La question de la POO s'aborde sur deux axes :

    La conception : rechercher une correspondance entre les objets du monde réel (sujet de l'exercice) et les objets à créer dans le programme (le virtuel). On parle également de design, de modélisation.
    La technique : création, manipulation des objets dans le code du langage de programmation choisi.

Le facteur fait sa tournée. Comment représenter cette problématique dans du code ? Dans un premier temps il faut chercher à identifier les acteurs (tout types d'acteurs : personnes, choses, concepts...) et les actions qui ont une place importante dans la réalisation de sa tournée c'est à dire sans lesquelles la tâche à effectuer ne pourrait être réalisable. Lors de sa tournée le facteur dépose les courriers dans des boîtes aux lettres.

Commençons par modéliser un des acteurs objets découverts : la boîte aux lettres

let bal = {}

Voilà on a créé un objet en Javascript ! Mais vu d'ici il ne semble pas faire grand chose... A quoi sert notre boîte aux lettres ?

    A y déposer du courrier
    A le stocker en attendant qu'on le retire après la dure journée de formation ! 😉
    Et évidemment à le retirer

Comment cela se représente t-il ?

let bal = {
    courriers: [],
    deposerCourrier: function(courrier){...},
    retirerCourrier: function(){...}
}

Mais vous allez dire : "ce n'est pas du Javascript ça ??" Et bien oui et non.. Nous avons utilisé un littéral initialisateur au format Json Ce qu'il faut savoir c'est qu'en Javascript il y a plusieurs façons de créer un objet. Bien que nous utiliserons principalement les initialisateurs voici comment peut également s'écrire l'exemple ci-dessus.

let bal = new Object();
bal.courriers = [];
bal.deposerCourrier = function(courrier){...};
bal.retirerCourrier = function(){...};

Vous ferez votre choix entre l'une et l'autre façon d'écrire. Comment utilise t-on un objet ? Comment accède t-on a ses propriétés ? Comment appelle t-on ses méthodes ?

bal.courriers
bal.deposerCourrier(courrierx)

Utiliser les objets.

Premier exercice 👍

Compléter le code ci-dessus pour déposer et retirer le courrier de la boîte aux lettres. Maintenant que nous avons modélisé notre premier objet, revenons à la conception. Le facteur doit délivrer un courrier à une adresse mais ce n'est pas la boîte aux lettres qui a une adresse, c'est l'habitation. Le facteur dépose le courrier dans la boîte aux lettres d'une habitation sise à une adresse. Un nouvel objet vient d'apparaître, modélisons le :

let habitation = {
    adresse:"Chemin des développeurs",
    bal: {
        courriers: [],
        deposerCourrier: function(courrier){...},
        retirerCourrier: function(){...}
         }
}

Le problème maintenant est que si nous devons modéliser les maisons d'un village, il faudrait dupliquer 200 fois ce code en changeant l'adresse. Le développeur étant un fainéant devant l'éternel il a inventé un système pour créer plus simplement les objets à partir d'un modèle.

function Habitation(adresse){
    this.adresse = adresse;
    this.bal = {
        courriers: [],
        deposerCourrier: function(courrier){...},
        retirerCourrier: function(){...}
    }
}
maison1 = new Habitation("Chemin des développeurs");
maison2 = new Habitation("Route de Castelnau");
[...]

De cette manière lorsque l'on instancie une maison à partir du modèle Habitation cette maison possède une boîte aux lettres.
