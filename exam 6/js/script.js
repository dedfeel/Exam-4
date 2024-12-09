let eShop = {
    name: "Elektronika Dukeni",
    phoneNumber: "8 707 707 7070",
    products: [
        {productName: "Apple 11",
        category: "Elektronika",
        price: 200000,
        stock: 10
        },
        {productName: "Apple 12",
        category: "E-sim",
        price: 250000,
        stock: 10
        },
        {productName: "Apple 13",
        category: "Elektronika",
        price: 300000,
        stock: 15
        },
        {productName: "Apple 14",
        category: "E-sim",
        price: 400000,
        stock: 30
        },
        {productName: "Apple 15",
        category: "dualSim",
        price: 450000,
        stock: 20
        },
        
    ],
    changeShopName:function(){ // san ozgertu
        let newNameDuken = prompt("Duken atauyn ozgertiniz")
        console.log("Duken aty ozgerdi, atu:", eShop.name.unshift = newNameDuken );
    },
    changePhoneNumber:function(){
        let newNameDukenNumber = prompt("Duken nomerin ozgertiniz")
        console.log("Duken nomeri ozgerdi, nomer:", eShop.phoneNumber.unshift = newNameDukenNumber  );
    },
    listProductNames() {
        alert(`Barlyq onim atauy \n ${eShop.products[0].productName} \n ${eShop.products[1].productName} \n${eShop.products[2].productName} \n${eShop.products[3].productName} \n${eShop.products[4].productName}`)
    },
    addProduct(){
        let newProductName = prompt("Qosatyn produkttyn atyn zhaz , ")
        let newProductCategory = prompt("Qosatyn produkttyn cotegoriasyn zhaz")
        let newProductPrice= prompt("Qosatyn produkttyn bagasyn zhaz")
        let newProductStock = prompt("Sany qansha")
        console.log( newProductName =  eShop.products.pop , newProductCategory =  eShop.products.pop, newProductPrice =  eShop.products.pop, newProductStock =  eShop.products.pop, );
        
    }

}
eShop.changeShopName()
eShop.changePhoneNumber()
eShop.listProductNames()
eShop.addProduct()




// 1-Тапсырма: E-Shop Объектісін Құру
// Келесі құрылымдағы eShop объектісін жасаңыз:
// - name (жол): Дүкеннің атауы.
// - phoneNumber (жол): Дүкеннің телефон нөмірі.
// - products (объектілер массиві (бастапқы массивта 5 түрлі тауар болу керек)):     
// Әрбір өнімнің сипаттамалары:
//   - productName (жол): Өнімнің атауы.
//   - category (жол): Өнім тиесілі категория (үш түрлі категория болу керек).
//   - price (сан): Өнімнің бағасы.
//   - stock (сан): Қоймадағы саны.

// 2-Тапсырма: Дүкен Атауын Өзгерту
// changeShopName() функциясын жазыңыз, ол пайдаланушыдан жаңа атауды prompt() арқылы сұрайды және дүкен атауын жаңартады. 

// 3-Тапсырма: Телефон Нөмірін Өзгерту
// changePhoneNumber() функциясын жазыңыз, ол пайдаланушыдан жаңа телефон нөмірін prompt() арқылы сұрайды және оны жаңартады, егер де пайдаланушы енгізу жолын бос қалдырса, осыған дейін тұрған нөмір қала береді.

// 4-Тапсырма: Өнімдердің Атауын Шығару
// listProductNames() функциясын жазыңыз, ол барлық өнімдердің атауын alert() арқылы тізім ретінде көрсетеді.

// 5-Тапсырма: Жаңа Өнім Қосу
// addProduct() функциясын жазыңыз, ол пайдаланушыдан өнімнің атауын, бағасын, санын және категориясын prompt() (өнім атауын, бағасын, санын және категориясын бөлек-бөлек сұрайды) арқылы сұрайды және оны products массивіне қосады.
// 6-Тапсырма: Категорияға Жеңілдік Жасау
// applyDiscountToCategory() функциясын жазыңыз, ол пайдаланушыдан жеңілдік жасауға арналған категорияны сұрайды және сол категорияға жататын барлық өнімдерге бағаны төмендетеді.
// Бірінші prompt() арқылы категория атауын сұрайды
// Екінші prompt() арқылы жеңілдік сұрайды
