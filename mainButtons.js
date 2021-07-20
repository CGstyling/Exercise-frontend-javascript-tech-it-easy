//Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!

//2b- uitverkochte tv
function sold1 () {
let tv = "";
    const soldOutTV = inventory.filter((soldOut) => {
        return soldOut.originalStock === soldOut.sold;
    })
    if ( soldOutTV ) {
        tv = JSON.stringify(soldOutTV);
    }
    return tv
}
console.log(sold1())

//2c - ambilight
function alight() {
    let string = "";
    const ambilight = inventory.filter((light) => {
        return light.options.ambiLight;
    })
    string = JSON.stringify(ambilight);
    return string;
}
console.log(alight());

//2d - laag naar hoog
function sort() {
    let string = "";
    priceTV.sort((a, b) => {
        return a - b;
    })
    string = priceTV.join(" ")
    return string;
}
console.log(sort());








