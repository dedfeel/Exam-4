let silteme  = "https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7"
let btn = document.getElementById('btn')
let qwestions = document.getElementById('title')



async function fetchData() {
    try{
        let user = await fetch(silteme)
        if(!user.ok){
        throw new Error("Деректер алынбады");
          
        }
        let data = await user.json()
        console.log(data);
        
        let qwix = Math.floor(Math.random() * data.record.tasks.length)
        
        

        console.log(qwix);
        
        
        btn.addEventListener("click", function(){
            qwestions.textContent = data.record.tasks[Math.floor(Math.random() * data.record.tasks.length)].title
        })



    }catch(err){
        console.error(err); 
        
    }
}


fetchData()

