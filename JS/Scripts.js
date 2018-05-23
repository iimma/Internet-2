
function sumar5(val){
    return val+5;
}
sumar5();
console.log(sumar5(20));

function sumarL (valA,valB){
    return valA+valB;
}
sumarL(100,5);

function nombres (val1,val2){
    return val1+", "+val2;
}
nombres("Valen","Amenabar");

var users = [
{name:"Valen",
lastname:"Amenabar",
age:21,
city:"Rosario",
children:["Juan"]},
{name:"Ursula",
lastname:"Soer",
age:21,
city:"Rosario",
children:["Josefa","Pedro"]},
{name:"Milagro",
lastname:"Sala",
age:21,
city:"Rosario",
children:["Pablo"]},
{name:"Rei",
lastname:"Ayanami",
age:21,
city:"Rosario",
children:["Agustina"]},
{name:"Johan",
lastname:"Gomez",
age:21,
city:"Rosario",
children:["Imanol","Facundo"]}
]


var listUsers ={
    listAll: function(){
        for (var i=0; i<listUsers.users.length ; i++) {
            $("#usersTable tbody").append(listUsers.assamble(listUsers.users[i]))
        }
    },
    assamble: function(user){
        return  "<tr>"
        +"<td>"+user.Name+"</td>"
        +"<td>"+user.email+"</td>"
        +"<td>"+user.country+"</td>"
        +"<td>"+user.profile+"</td>"
        +"<td>"+user.age+"</td>"
        +"<td>"+user.phone+"</td>"
    +"</tr>"
    },
    listByAgeLimit: function (users, age) {
        for (var i=0; i<users.length; i++) {
            if (users[i].age<age)
            console.log (listUsers.assamble (users[i]));
        }
    },
    users: [],
    setUsers: function (users) {
        listUsers.users = users
    }
}

function listUsersByAgeLimit (agelimit){
    for (var i=0; i<users.length;i++){
        if (users[i].age <= agelimit){
        console.log(assamble(listUsers.users[i]));
        }
    }
    }

function toggieClass (){
    if ($("h1").hasClass("active")){
        $("h1").removeClass("active")
        $("h1").addClass("disabled")
    }
else {
    $("h1").removeClass("disabled")
    $("h1").addClass("active")
}
}

