$("#action1").on("click",function(event){
    event.preventDefault();
    var peliID1 = $("#pelisTITLE").val();
       var peliID2 = $("#pelisDESC").val();
       var peliID3 = $("#pelisCAST").val();
       var peliID4 = $("#pelisGEN").val();
       var peliID5 = $("#pelisIMG").val();
       var peliID6 = $("#pelisSCORE").val();
       sendData({
           title: peliID1,
           description: peliID2,
           cast: peliID3,
           gender: peliID4,
           image: peliID5,
           score: peliID6,
       }) .then (succes,onError)
       function succes (response){
        $("#mensaje").append(
            "<p>" +response.msg + "</p>");
        $("#mensaje".show())}

    function onError(error){

    }
    
    console.log ();
});



function sendData(params){
    return $.ajax({
        method: "POST",
        url: "http://192.168.1.117:3000/peliculas",
        data: params
            
    });
}
 
$(function(){
    getAllFilms();
})

function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.117:3000/peliculas",
        method:"GET"
    }).then(siSuccess, siError);
    function siSuccess(response){
            pagina.setMovies(response);
            pagina.listAll();
        }
    function siError(err){
            console.log("Err")
            $("#Msj").html("<p>" + response.msg + "</p>");
            $("#Msj").show();
    }
}


var pagina = {
    
    pelis:[],

    clear:function(){
        $("#Content").html("");
    },

    setMovies:function(pelis){
        this.pelis = pelis;
    },

    listAll:function(){
        for(var i = 0; i < this.pelis.length; i++){
            $("#Content").append(this.assamble(this.pelis[i]));
        }
    },

    assamble:function(peliculas){
        return'<div class="ItemPelicula">' +
                '<img class="Cartelera" src="' + peliculas.poster + '"/>' +
                '<p>' + peliculas.title + '</p>' +
                '<p>' + peliculas.cast + '</p>' +
                '<p>' + peliculas.gender + '</p>' +
                '<p>' + peliculas.score + '</p>' +
            '</div>' +
        '</li>'
    },
}

