let bal = {
  courrier : [],
  deposerCourrier : function(courrier) {
    this.courrier.push(courrier);
  },
  retirerCourrier : function(){
    this.courrier = [];
  }
}
let habitation = {
  adresse: "Chemin des développeurs",
  bal: {
    courrier: [],
    deposerCourrier: function(courrier){
      this.courrier.push(courrier);
    },
    retirerCourrier: function(){
      this.courrier = [];
    }
  }
}

function Habitation(adresse){
  this.adresse = adresse;
  this.bal = {
    courrier: [],
    deposerCourrier: function(courrier){
      this.courrier.push(courrier);
    },
    retirerCourrier: function(){
      this.courrier = [];
    },
  };
}
maison1 = new Habitation ("Chemin des développeurs");
maison2 = new Habitation ("Route de Castelnau");
maison3 = new Habitation ("St Just innondé");

function Courrier(destinataire, messages) {
  this.destinataire = destinataire;
  this.messages = messages;
}
lettre1 = new Courrier("Chemin des développeurs", "Cette semaine on fait du JSON");
lettre2 = new Courrier("Route de Castelnau", "La semaine prochaine on voit Ajax");
lettre3 = new Courrier("St Just innondé", "Pour cause de pluie");

var Array_maison = [maison1, maison2, maison3];
var Array_laPoste = [lettre1, lettre2, lettre3];
for (i = 0; i < Array_maison.length; i++) {
	for (j = 0; j < Array_laPoste.length; j++) {
		if (Array_laPoste[j].destinataire === Array_maison[i].adresse) {
			Array_maison[i].bal.deposerCourrier(Array_laPoste[j]);
		}
	}
}

console.log(maison1.bal.courrier);
console.log(maison2.bal.courrier);
console.log(maison3.bal.courrier);
