// 1 tapsyrma


function tapsyrma() {
    let san1 = +prompt(` Birinshi sandy engiz`)
    let san2 = +prompt(`Ekinshi sandy engiz`)
    alert( ` qosu ${san1 + san2}
 azai ${san1 - san2} 
 kobeitu ${san1 * san2}
 bolu ${san1 /san2} ` )
    }
tapsyrma()





// 1. Тапсырма: Қарапайым калькулятор
// Пайдаланушыдан екі санды енгізу арқылы төрт негізгі математикалық операцияны орындау: қосу, алу, көбейту және бөлу.
// Тапсырманың талаптары:
// Пайдаланушыдан екі санды енгізуді сұрау.
// Егер пайдаланушы сан енгізбесе немесе дұрыс сан енгізбесе, "Қате енгізу!" деген хабарлама шығару.
// Қосындыны, айырманы, көбейтіндіні және бөліндіні есептеу.
// Қосымша талаптар:
// Пайдаланушыға дұрыс емес енгізулерді қайталауға мүмкіндік беру.
// Нәтижені экранға шығару

// 2 tapsyrma

function duken() {
    let zat = +prompt(`Zattardyn bagasy qansha`)
    let zhenildik1 = zat /10
    let zhenildik2 = zat /20
    let zhenildik3 = zat /30
    if( zat >=5000 && zat <10000){
        alert("Sizge 10 % zhenildik, " + zhenildik1 +  "Zattardyn baqasy"+ zat - zhenildik1)
    }else if( zat >=10000 && zat <20000){
        alert("Sizge 20 % zhenildik," + zhenildik2 +"Zattardyn baqasy" + zat - zhenildik2)
    }else if(zat >= 20000){
        alert("Sizge 30 % zhenildik,"+ zhenildik3+  "Zattardyn baqasy" + zat - zhenildik3)
    }else{
        alert("Sizge zhenildik zhoq zattardyn bagasy " + zat)
    }
}

duken()




// 2. Тапсырма: Супермаркеттің жеңілдіктері
//    Қолданушыдан заттың бағасын және қанша зат сатып алғысы келетінін сұраңыз.
// Егер заттың жалпы құны:
// 5000-нан асса, 10% жеңілдік жасалады.
// 10000-нан асса, 20% жеңілдік жасалады.
// 20000-нан асса, 30% жеңілдік жасалады.
// Соңғы төлемді жеңілдікпен есептеп, көрсетіңіз.