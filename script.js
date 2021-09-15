//Pop-up à l'ouverture de la page

alert("Wahouuu !")

//Exercice 1

function canYouVote(age) {
  if (age >= 18) {
    if (age >= 21) {
      console.log("Vous pouvez voter et être élu président !");
    }
    else {console.log("Vous pouvez voter");
    }
  }
  else {
     console.log("Vous ne pouvez pas voter");
  }
}

console.log(canYouVote(5));
console.log(canYouVote(18));
console.log(canYouVote(21));
console.log(canYouVote(81));


//Changer la couleur (de noir en rouge ou inversement) d'un paragraphe
//lorsque l'on clique dessus.
//$(this) précise le seul paragraphe ayant reçu le clic.

$(document).ready(function() {

	$("p").on("click", function() {
		// if ($(this).hasClass("red")) {
		// 	$(this).removeClass("red");
		// }
		// else {
		// 	$(this).addClass("red");
		// }
		// Fonction équivalente d'add/remove de classe :
		$(this).toggleClass("red");
	});
});


//Exercice 2
//Récupérer les 10 premiers titres de film de la page 
//https://www.imdb.com/chart/top

// for (var i = 0; i < 10; i++){
//   console.log($("td.titleColumn>a").get(i).innerHTML);
// }; 

// Variante : avec .text
// for (var i = 0; i < 10; i +=1) {
// 	console.log($(".titleColumn a")[i].text);
// };


//Exercice 3
//Masquer icon Androïd
// $(document).ready(function() {
	$(".fab").click(function() {
			$(this).toggle();
		});
// });

//Masquer le logo lewagon sur la page
//https://www.lewagon.com/fr
//Ne fonctionne pas... pourquoi ?
//document.querySelector("img.navbar__logo").style.display="none";

//Mettre le logo en vert.
//Avec JQuery et un "kit-navigateur" qui va chercher la couleur opposée :
//$(".navbar__logo").css("-webkit-filter","hue-rotate(150deg)");

