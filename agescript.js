var response = "";
        var age = Number(prompt("What is your age? ", ""));

        if (age > 40 && age < 50)
        {
            alert("You qualify for the Tier One Rate")
        }
        else if (age > 49 && age < 60)
        {
            alert("Your qualfiy for the Tier Two Rate")
        }
        
        else if (age > 60)
        {
            alert("You qualify for the Tier Three rate")
        }
        else
        {
            alert("You qualify for the reduced rate ")
        }
        alert("Thank you");