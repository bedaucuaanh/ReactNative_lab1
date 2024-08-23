///Mark and John are trying to compare their BMI (Body Mass Index), which is
///calculated using the formula:
///BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

/// 1. Store Mark's and John's mass and height in variables
/// 2. Calculate both their BMIs using the formula (you can even implement both versions)
///3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var markHigherBMI = false;

var bmi = (weight, height) => {
    return weight / height ** 2
}

if (bmi(massMark, heightMark) >= bmi(massJohn, heightJohn)) {
    markHigherBMI = true;
} else {
    markHigherBMI = false;
}

if (markHigherBMI) {
    console.log("Mark has a higher BMI than John")
} else {
    console.log("Mark has a lower BMI than John")
}