

var Tabla = 
{
    data:[],

    setData:function(Data)
    {
        Tabla.data = Data;
    },

    clear:function()
    {
        $("#table-body").html("");
    },

    listAll:function()
    {
        Tabla.clear();
        for(var i = 0; i < Tabla.data.length; i++)
        {
            $("#table-body").append(Tabla.assamble(Tabla.data[i]));
        }
    },

    assamble:function(Data)
    {
        return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
            '</div>';
    },
    
    filtroMarca:function()
    {
        Tabla.clear();
        var input = document.getElementById("IDMarca").value;
        if(input == "")
        {
            Tabla.listAll();
        }
        for(var i = 0; i < Tabla.data.length; i++)
        {
            if(Tabla.data[i].brand == input)
            {
                $("#table-body").append(Tabla.assamble(Tabla.data[i]));
            }
        }
    },

    filtroUbicacion:function()
    {
        Tabla.clear();
        var input = document.getElementById("IDUbicacion").value;
        if(input == "")
        {
            Tabla.listAll();
        }
        for(var i = 0; i < Tabla.data.length; i++)
        {
            if(Tabla.data[i].location == input)
            {
                $("#table-body").append(Tabla.assamble(Tabla.data[i]));
            }
        }
    },

    filtroFecha:function()
    {
        Tabla.clear();
        var input = document.getElementById("IDFecha").value;
        if(input == "")
        {
            Tabla.listAll();
        }
        for(var i = 0; i < Tabla.data.length; i++)
        {
            if(Tabla.data[i].lunch == input)
            {
                $("#table-body").append(Tabla.assamble(Tabla.data[i]));
            }
        }
    },

    filtroPrecio:function()
    {
        Tabla.clear();
        var input = document.getElementById("IDPrecio").value;
        if(input == "")
        {
            Tabla.listAll();
        }
        for(var i = 0; i < Tabla.data.length; i++)
        {
            if(Tabla.data[i].price == input)
            {
                $("#table-body").append(Tabla.assamble(Tabla.data[i]));
            }
        }
    },
}

$("#action1").on("click", function()
{
    Tabla.filtroMarca();
})
$("#action2").on("click", function()
{
    Tabla.filtroUbicacion();
})
$("#action3").on("click", function()
{
    Tabla.filtroFecha();
})
$("#action4").on("click", function()
{
    Tabla.filtroPrecio();
})

