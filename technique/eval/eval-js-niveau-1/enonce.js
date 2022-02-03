


/*
 1. créer une variable de chaque type primitif et les afficher dans la console
 */

let bool = false;
let nb = 12;
let str = "hello";


/* 2. déclarer et définir trois variables numériques.

- Si elles sont toutes égales, écrire : « Les trois variables sont identiques. »
- Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales. »
- Sinon, écrire : « Les trois variables sont différentes. »
*/


// let un;
// let deux;
// let trois;

// un = 1;
// deux = 1;
// trois = 1;

// if( un == deux && deux == trois){
//     console.log("les trois variables son de valeurs égales")
// }else if(un == deux || deux == trois || trois == un){
//     console.log('deux des variables sont de valeurs égales.')
// }else{
//     console.log('Les trois variables sont différentes')
// }


/* 3.
Etape 1 - créer les variables suivantes :

    num qui contient le nombre 255
    txt qui contient la chaîne de caractère 255
    bin qui contient la valeur booléenne vraie
    flt qui contient la valeur 7,23

Etape 2 - créer les variables suivantes :

    Appliquez à num l'opérateur d'incrémentation
    Concaténez à la chaîne txt la chaîne " est ici une chaîne de caractères"
    Inversez la valeur logique de bin
    Ajoutez à flt la valeur contenue dans num

*/


// let num = 255;
// let txt = "255";
// let bin = true;
// let flt = "7.23";

// console.log(num , txt , bin , flt);

// num++;
// txt += " est ici une chaîne de caractères";
// bin = false;
// flt = flt + num;

// console.log(num , txt , bin , flt);

/* 4. créer les variables suivantes :

    num qui contient le nombre 23
    txt qui contient la chaîne de caractère 33
    Affichez le résultat de txt + num avec la commande console.log( txt + num );
    Affichez le résultat de num + txt
*/



// let num = 23;
// let txt = "33";
// console.log(txt + num);
// console.log(num + txt);



/*
Ce programme met en évidence (sélectionner les propositions qui sont exactes) :
    1- que la variable txt a été traitée comme un nombre
    2- que la variable num a été traitée comme une chaîne de caractères
    3- que le langage JavaScript réalise des conversions automatiques
    4- qu'il est dangereux de faire des opérations avec des variables de types différents
    5- qu'il faut explicitement écrire les conversions dans le script pour ne pas avoir de mauvaises surprises
    6- que le langage JavaScript est faiblement typé
    7- que le langage JavaScript est fortement typé
 */
// 2 - 3 - 4 - 5 - 6

 // 4-5 // en js ||  "1" + "1" = 11;  && 1 + 1 = 2; 

/* 5. créer les variables suivantes :
    num qui contient le nombre 23
    txt qui contient la chaine de caractère 33
    tmp qui contient le nombre 0

Convertir la chaîne contenue dans txt en nombre et mettre le résultat dans tmp

Ajouter à num le contenu de tmp

Afficher le résultat dans la console
 */

// let num = 23; 
// let txt = "33";
// let tmp = 0;

// let convertie = parseInt(txt); 
// console.log(typeof(convertie));

// tmp += convertie;

// num += tmp;


// console.log(num, tmp);





/* 6. Reprenez l'exercice précédent mais sans la variable tmp.

Créer les variables suivantes :
    num qui contient le nombre 23
    txt qui contient la chaine de caractère 33

Convertir la chaîne contenue dans txt en nombre et ajouter à num

Afficher le résultat dans la console
 */



// let num = 23; 
// let txt = "33";

// let convertie = parseInt(txt); 
// console.log(typeof(convertie));

// num += convertie;
// console.log(num);





/* 7. Créez un tableau qui se nomme tablo et qui contient 1, 2 et 3

Accédez au 2ème élément du tableau tablo et rangez la valeur dans une variable nommée item

Remplacez le 2ème élément du tableau par le nombre 5

Ajoutez une ligne de code qui ajoute la valeur 13 à la fin du tableau

 */

// let tablo = [1, 2, 3];

// console.log(tablo);


// let item = tablo[1];
// console.log(item);

// tablo.splice(1, 1, [5]);

// tablo.push(13);  

// console.log(tablo);





/* 8. Ecrivez une fonction nommée isTooLong qui :

    prend une chaîne de caractères comme argument
    renvoie vrai dans une boîte de dialogue si la longueur de la chaîne dépasse 10 caractères
    renvoie faux dans une boîte de dialogue dans les autres cas

    appelez la fonction pour la tester et affichez chaque résultat
 */

function isTooLong(){
    if(isNaN(str) && str.length > 10){
        alert(true)
    }else{
        false
    }
}

isTooLong('Tester tous est affreux');




/* 9. Créez un tableau qui contient les prénoms des élèves d'EDEN School Paris

Affichez dans la page la liste des élèves.
 */


let ES = ["Daniel" , "Nathan", "Mathias", "Tom", "Jonas", "Killian", "Melchior", "Brice", "Hugo", "Leny"];

document.write('<ul>');
for(let i = 0; i < ES.length ;i++){

document.write('<li>' + ES[i] +'</li>');
}
document.write('</ul>');



/* 10. Demandez à l'utilisateur d'indiquer la saison

Ecrivez le script qui affichera la phrase correctement
Ex : 'printemps' => 'Nous sommes au printemps'
     'été' => 'Nous sommes en été'
N'oubliez pas de gérer les erreurs de saisie
 */


function saison(){

let quelle = prompt('Veuillez indiquez la saison (printemps ; été ; hiver ; automne');

if(quelle = "printemps"){
    alert('Nous sommes au Printemps');
}else if (quelle = "été" ){
    alert('Nous sommes en été');
} else if(quelle = "hiver" ) {
    alert('Nous sommes en Hiver')
} else if (quelle = "automne" ) {
    alert('Nous sommes en Automne')
} else{
    alert('Le text que vous avez mis ne correspond pas ')
}

}



/* CORECTED BY ME
 let saison = ["été", "printemps", "hiver", "automne"];

let a = prompt('Nous sommes en quelle saison ? ( ' + saison + " )").toLowerCase();


  if(a === saison[0]){
    alert('Nous sommes en ' + saison[0]);
  }else   if(a === saison[1]){
    alert('Nous sommes au ' + saison[1]);
  }else   if(a === saison[2]){
    alert('Nous sommes en ' + saison[2]);
  }else   if(a === saison[3]){
    alert('Nous sommes en ' + saison[3]);
  }else{
  alert('Tu a mal ecris')
}
*/


//
// let a = prompt('azsq');
// if ( !isNaN(a)){

// }