
var dog = {
    name: " ",
    age: 0,
    weight: 0
}

var inputName = String(prompt("What is your dogs name? ", ""));

var inputAge = Number(prompt("What is your dog's age? ", ""));

var inputWeight = Number(prompt("What is your dog's weight? ", ""));

dog.name = inputName;
dog.age = inputAge;
dog.weight = inputWeight;

var outInfo = "Your dog's name is " + dog.name + ". \n"  +
            "Your dog is " + dog.age + " years old" + ". \n" +
            "Your dog weighs " + dog.weight + " pounds. ";



alert(outInfo);
//output.innerHTML = outInfo;
