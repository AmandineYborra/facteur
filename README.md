# facteur
Un facteur fait sa tournée...
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
