const daysOfWeek = ["Nicolas", "55", true, "Seoul"];


const nicoInfo = {
    name : "Nico", 
    age : 33,
    gender : "Male",
    isHandsome : true,
    favMovies : ["Along the gods","LOTR", "Oldboy"],
    favFood : [
        {
            name:"Kimchi",
            fatty:false
        }, 
        {
            name:"Cheese burger", 
            fatty:true 
        }
    ]
}
console.log(nicoInfo.gender);

nicoInfo.gender = "Female"

console.log(nicoInfo.gender);
