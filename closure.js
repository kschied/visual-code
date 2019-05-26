
let app = (function() {
    let carId = 123;
    let getID = function(){
        return carId;
    }
    return {getId: getId};
})();

console.log(app.getId());