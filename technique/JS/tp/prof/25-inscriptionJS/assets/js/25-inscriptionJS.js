let harry = {

    pseudo : "Harry",
    age : "19",
    email :"hp@poudlard.fr",
}

let hermione = {

    pseudo : "Hermione",
    age : "20",
    email :"hg@poudlard.fr",
}

let neville = {

    pseudo : "Neville",
    age : "20",
    email :"nl@poudlard.fr",
}

let ronald = {

    pseudo : "Ronald",
    age : "21",
    email :"rw@poudlard.fr",
}
let enter = document.getElementById('enter');

// 
let pseudo = document.getElementById('pseudo')
let age = document.getElementById('age')
let email = document.getElementById('email')
let password = document.getElementById('password'); 
//
enter.addEventListener("click", function(e) {
    console.log("Désolé ! preventDefault() ne vous laissera pas cocher ceci.");
    e.preventDefault();

    if(1 == 0){

        enter.removeAttribute("disabled");
        console.log("Salut")
        let news = {
    
            pseudo : pseudo,
            age : age,
            email : email,
        }
    
        console.log(news)
    }

    
  }, false);


console.log(harry);
console.log(hermione);
console.log(neville);
console.log(ronald);

