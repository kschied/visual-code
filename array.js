
function range(max){
    var retVal = [];
    for ( var i = 0; i < max; i++){
        retVal.push(i * 2);
    }

    return retVal;
}

//alert(range(5));
output.innerHTML = range(5);