

function peticion(url, functionDone, functionFail)
{
    $.ajax({
        type : "get",
        url:url,
        dataType:"json",
    })
    .done(function(data){
        functionDone(data);
    })
    .fail(function(err){
        functionFail(err);
    })
}

function functionFail(err)
{
    console.log('Error')
}