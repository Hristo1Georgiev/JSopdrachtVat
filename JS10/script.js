//Functions calling functions: exercise

//Hey kiddo
const myAge = (age) => {
    if (age >= 18) {
        return true;
    }
};
const greeting = (age) => {
    const age1 = myAge(age);
    if (age1) {
        return "Hello there"
    } else {
        return "Hey kiddo"
    }
};
console.log(greeting(10));


//VAT calculations

// VAT exercise 1
const prise = (baseprise, vatPersentige) => {
    const priseVat = baseprise * vatPersentige;
    const totalPrise = priseVat + baseprise;
    const result = totalPrise;
    return result;
};
console.log(prise(200, 0.21))

//VAT exercise 2
const prise1 = (totalPrise1, vatPersentige1) => {
    const baseprise1 = totalPrise1 / vatPersentige1;
    const priseVat1 = totalPrise1 - baseprise1;
    const result1 = [baseprise1, priseVat1];
    return result1;
};
console.log(prise1(1210, 1.21))

