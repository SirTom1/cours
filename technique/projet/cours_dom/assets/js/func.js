let id1 = document.getElementById('section1');

id1.onclick = function(){
    alert(id1.innerHTML);
    // alert(id1.innerText);

}
/*
id1.addEventListener("click", function(){

    alert(id1);
})

*/
let span = document.getElementsByTagName('span');
span[0].onclick = function(){
  alert(span[0].innerHTML)
}
/*
span[0].addEventListener("click", function(){

    alert(span[0].innerHTML);
})

*/

let lesdiv = document.getElementsByClassName('lesDiv');


// for(let i = 0; i < lesdiv.length; i++) {

//   (function(index) {

// lesdiv[index].onclick = function() {
//     alert(lesdiv[index].innerHTML)
//   }
  
//   })(i);
// }

for (let i = 0; i < lesdiv.length; i++) {

  lesdiv[i].onclick = function(){
    alert(lesdiv[i].innerHTML)
    // alert(this.innerHTML)

  }
}

/*------*/

let p = document.querySelectorAll('p');


// for(let i = 0; i < p.length; i++) {

//   (function(index) {

// p[index].onclick = function() {
//     alert(p[index].innerHTML)
//   }
  
//   })(i);
// }

for (let i = 0; i < p.length; i++) {

  p[i].onclick = function(){
    alert(p[i].innerHTML)
    if(i === 0){
      p[i].style.color = "blue";
    } else{
      p[i].style.color = "red";
    }
        // alert(this.innerHTML)
  }
}
/* ----------------  */ 
// let tablo = ['blue' , "yellow", "pink", "pink" , "purple"]


// let article = document.querySelectorAll('article');


// for (let i = 0; i < article.length; i++) {

//   article[i].onclick = function(){
//     let rand = Math.floor(Math.random()*5)
//     alert(article[i].innerHTML)
//       article[i].style.color = tablo[rand];
//         // alert(this.innerHTML)
//   }
// }


// by daniel
console.log(randomColor)
const buttons =  document.querySelectorAll(".exo")
// by daniel
// queryselectorALL pour selectioner tout les element et les
// parcourir avec un for
for (const button of buttons) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    button.addEventListener('click', function(event) {
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
    button.style.color = "#" + randomColor;
    })
    /* le nombre 16777215 sont noir et blanc et  nous pouvons convertir en
        fffff
    */
   // math random renvoie un nombre flotant entre 0 et 1
   // pour convertir les nombre en utilise math.floor
   //et toString pour le convertir
   // explication exo =)
   // by daniel
}

let google = document.getElementById('google');

google.href = 'https://mtxserv.com/fr/';