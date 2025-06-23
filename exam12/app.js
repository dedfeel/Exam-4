let express = require("express")

let server = express()

let PORT = 8000

server.use(express.json())

server.listen(PORT, ()=>{
    console.log(`Server is working on ${PORT} port`);
    
})


let cars = [
  { id: 1, model: 'Toyota Camry', owner: 'Айбек' },
  { id: 2, model: 'Hyundai Sonata', owner: 'Аружан' },
  { id: 3, model: 'Kia Sportage', owner: 'Нұржан' }
];

server.get('/cars', (req, res)=>{
    res.json(cars)
})


server.get('/cars/:id', (req,res)=>{
    let carID = req.params.id
    let car = cars.find((pt)=>pt.id == carID)

    if(car){
        return res.status(200).json({
            message: "car found!",
            data: car
        })
    }else{
        return res.status(404).json({
            message: "404 Not found"
        })
    }
})




server.post('/cars', (req, res)=>{
    let {model, owner } = req.body
    if(model && owner){
        cars.push({
            id: cars.length +1,
            model,
            owner
        })

        res.status(201).json({message:"201 Created"})
    }else{
        res.status(400).json({message:"400 Bad Request"})
    }
})


server.get('/car/sort', (req, res) => {
    let { model, owner, sort } = req.query;

    let result = [...cars]; 

   
    if (model) {
        result = result.filter(car => car.model.toLowerCase().includes(model.toLowerCase()));
    }

    if (owner) {
        result = result.filter(car => car.owner.toLowerCase() === owner.toLowerCase());
    }

    if (sort === 'asc') {
        result.sort((a, b) => a.model.localeCompare(b.model));
    } else if (sort === 'desc') {
        result.sort((a, b) => b.model.localeCompare(a.model));
    }

    res.json(result);
});
