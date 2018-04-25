var users = [
  {
    name:"Mario",
    lastname:"Dross",
    age:67,
    city:"Atlantic City",
    children:["amarillo","violeta","azul"] , 
  }, 
  {
    name:"Javier",
    lastname:"Durazno",
    age:7,
    city:"BS AS",
    children:["kaka","jeje"] , 
  },  
  {
    name:"Facundo",
    lastname:"Dross",
    age:22,
    city:"Miami",
    children:["cucumelo","javier","flor"]  ,
  },  
  {
    name:"Pepe",
    lastname:"Lehpu",
    age:90,
    city:"Rosario",
    children:["juan","pepito","animal"],  
  },  
  {
    name:"Karlos",
    lastname:"Oruga",
    age:55,
    city:"Atlantic City",
    children:["maaaaarta","jeenny","yeshikha"],  
  }  
]
for(var i=0;i<users.lenght;i++){
console.log(users[i] .name+ +users[i] .lastname + +"tiene"+ users[i] .children +"hijos")    
}
console.log();

function nombres (valA,valB){
  return valA+", "+valB;
}

function assamble(user){
  return user.lastname+" "+user.name+", tiene "+user.age+", vive en "+user.city+", sus hijos son "+user.children
}

function listUsersByAgeLimit(ageLimit)  
{
for(var i=0;i<users.length;i++)
  {
  if(users[i].age<=ageLimit)
  console.log(assamble(users[i]))
  }
}