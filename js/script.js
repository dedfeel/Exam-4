// let ai = +prompt("1-12 deyin san engiziniz")
// let mezgil 
// switch(ai){
//     case  1:
//     case  2:
//     case  12:
//         mezgil =  "winter"
//         break;
//     case 3:
//     case 4:
//     case 5:
//         mezgil =  "Spring"
//         break;
//     case 6:
//     case 7:
//     case 8:
//         mezgil =  "Summer"
//         break;
//     case 9:
//     case  10:
//     case  11:
//         mezgil =  "Autumn"
//         break;
//     default:
//         alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
//         break;
// }

// alert("Ай:" + ai + "," + "  Маусым:" + mezgil )




// Пайдаланушыдан 1-ден 12-ге дейін сан енгізуді сұрау. Егер дұрыс сан енгізілсе, сол санға сәйкес ай мен маусымды
// шығару. Егер 0-ден төмен немесе 12-ден жоғары сан енгізілсе, қате хабарлама шығару.

//   Тапсырма шарты:
//      Егер 1-ден 12-ге дейінгі сан енгізілсе:
// 3, 4, 5 — "Spring"
// 6, 7, 8 — "Summer"
// 9, 10, 11 — "Autumn"
// 12, 1, 2 — "Winter"
//    Егер 0-ден төмен немесе 12-ден жоғары сан енгізілсе, "1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз" деген
// хабарлама шығару.



// 2 Тапсырма

// let a = prompt(" A sandy engiziniz")
// let b = prompt("b sanyn engiziniz")

// if(a > b){
//     alert("a sany b sanynan ulken")
// }else if(b > a){
//     alert("b sany a sanynan ulken")
// }else if(b = a){
//     alert("a sany b sanyna ten")
// }
// alert("a men b sanynyn ortasy:" + (+a + +b) / 2)



// 3 тапсырма

var san1 = +prompt("Birinshi sandy engiziniz")
var san2 = +prompt("Ekinshi sandy engiziniz")
var san3 = +prompt("ushinshi sandy engiziniz")

if(san1 > san2 && san2 > san3){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san1 - san3))
}else if(san1 > san3 && san3 > san2 ){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san1 - san2))
}else if(san2 > san1 && san1 > san3){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san2 - san3))
}else if(san2 > san3 && san3 > san1){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san2 - san1))
}else if(san3 > san2 && san2 > san1){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san3 - san1))
}else if(san3 > san1 && san1 > san2){
    alert("En ulken zhane en kishi sannyn aiyrmasy:" + +(san3 - san2))
}






// Қолданушыдан үш сан енгізуді сұрау. Сол сандардың арасынан ең үлкен және ең кіші санды табу,
// содан кейін олардың айырмасын көрсету.


// Тапсырма шарты:

// Қолданушы үш санды енгізеді.
// Ең үлкен және ең кіші санды табыңыз.
// Айырмасын есептеп, оны хабарлама ретінде шығарыңыз.
// Мысалы, "Ең үлкен және ең кішкентай санның айырмасы: бұл жерде екі саннын айырмасы болады".


// ЕСКЕРТУ! Жаңадан папка ашып, оны github-қа жариялау керек, және де сонын сілтемесін осы тапсырмаға жүктейміз!!!!
