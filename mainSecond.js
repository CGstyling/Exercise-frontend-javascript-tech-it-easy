
// OPDR1
// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

//original stock geeft aan hoeveel exemplaren we nog op voorraad hebben van de 8 tv's
// geeft in een Array aan hoeveel OriginalStock er nog is.
const stock = inventory.map((stock) => {
    return stock.originalStock;
});
console.log(stock);

// Hoeveel zijn er verkocht?
const sold = inventory.map((stock) => {
    return stock.sold;
});
console.log(sold);

//functie om de stock en sold van elkaar af te trekkenen 1 cijfer mee te geven.
function sumArray() {
    let stockOfTv = [];

    for (let i = 0; i < Math.max(stock.length, sold.length); i++) {
        stockOfTv.push((stock[i] || 0) - (sold[i] || 0));
        if ( stockOfTv[i] === stockOfTv[i] ) {
            return  stockOfTv[i] + stockOfTv[i];
        }
    }
    return stockOfTv;
}
console.log(sumArray());

// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

const list = document.getElementById("list")
const listOfTvInventory = document.createElement("li");
listOfTvInventory.textContent = "De hoeveelheid exemplaren die nog verkocht moeten worden zijn: " + sumArray() + " stuks.";
listOfTvInventory.setAttribute("class", "Banaan");
list.appendChild(listOfTvInventory);

// OPDR 2
// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen
const tvType = inventory.map((inventorieType) => {
    return inventorieType.type;
});
console.log(tvType);

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

//ittereer over de array sold en ittereer over de array stock
//als daar 2 cijvers op dezelfde index nummer gelijk zijn aan elkaar
//stop dan het gehele object in een nieuwe array
//loop tot einde array
//stop en geef nieuw array weer.

const soldOutTV = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold;
})
console.log(soldOutTV);

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const ambilight = inventory.filter((light) => {
    return light.options.ambiLight;
})
console.log(ambilight);


// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

//eerste sorteer ik alle prijzen bijelkaar in een array
const priceTV = inventory.map((price) => {
    return price.price;
});
console.log(priceTV);

//sorteer de array
priceTV.sort((a, b) => {
    return a - b;
})
console.log(priceTV);

// OPDR 3
// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina

function sumOfTV () {
    const priceTVis = inventory.map((price1) => {
        return price1.price;
    });
    console.log(priceTVis);

    let sumTV = [];

    for (let i = 0; i < Math.max(priceTVis.length); i++) {
        sumTV.push((priceTVis[i] || 0));
        if ( priceTVis[i] === priceTVis[i] ) {
            return  sumTV + priceTVis[i];
        }
    }
    return sumTV;
}
console.log(sumOfTV());


// Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's.
function soldTvs() {
    const priceTVis = inventory.map((price1) => {
        return price1.price;
    });
    // console.log(priceTVis);

    let totalEuro = [];

    for (let i = 0; i < Math.max(stock.length, sold.length); i++) {
        totalEuro.push((priceTVis[i] || 0) * (sold[i] || 0));
        if ( totalEuro[i] === totalEuro[i] ) {
            return  totalEuro + totalEuro[i];
        }
    }
    return totalEuro;
}
console.log(soldTvs());

//Geef dit weer in het groen weer op de pagina
const list2 = document.getElementById("list")
const listOfTotalPrice = document.createElement("li");
listOfTotalPrice.textContent = "We hebben " + soldTvs() + " euro verdient tot nu toe.";
listOfTotalPrice.setAttribute("class", "aardbei");
list.appendChild(listOfTotalPrice);

// OPDR 4
// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

const list3 = document.getElementById("list")
const tvType1 = document.createElement("li");
tvType1.textContent = "Het eerste Tv- Type is: " + tvType[0] + "van de Phillips 4K tv";
tvType1.setAttribute("class", "appel");
list.appendChild(tvType1);

const list4 = document.getElementById("list")
const tvType2 = document.createElement("li");
tvType2 .textContent = "De tweede Tv- Type is: " + tvType[1] + "van de Nikkei smart tv";
tvType2 .setAttribute("class", "bramen");
list.appendChild(tvType2 );

// OPDR 5
// We gaan één van de twee tv's van de vorige opdracht weergeven in het volgende format:

// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
//type, name brand

function joinProperties () {
    let properties = inventory.map(function (obj) {
        return( obj.brand + " " +  obj.name + " " + obj.type).toString();
    })
   return properties;
}
console.log(joinProperties()[1]);


// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

function creatPrice() {
    let price = inventory.map(function (obj) {
        return "€" + obj.price.toString();
    })
    return price;
}

console.log(creatPrice()[1]);

// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.

let tvSize = inventory.map((size) => {
    return size.availableSizes;
});

function sumOfSize (tvSize) {

    let stringWithAllSizes = "";
    for (let i = 0; i < tvSize.length ; i++) {
        let size = Math.floor(tvSize[i] * 2.54);
        stringWithAllSizes = stringWithAllSizes + tvSize[i] + " inch " + "(" + size + " cm" + ")";
    }
    return stringWithAllSizes;
}

console.log(sumOfSize(tvSize[0]));

// Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

// creeer element
const page = document.createElement(`p`)
//zet er iets in
let newline = "\r\n";
page.textContent = joinProperties()[1] + newline +  creatPrice()[1] + newline + sumOfSize(tvSize[1])
//sla referentie op in een container
const tvInfo = document.getElementById("page");
//zet het in de dom
tvInfo.appendChild(page);


// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

// function generateTInformation () {
//     for (let i = 0; i < inventory.length ; i++) {
//         console.log(joinProperties(inventory)[i] + newline + creatPrice(inventory)[i] + newline + sumOfSize(tvSize[i]))
//     }
// }
//
// (generateTInformation(inventory));

function generateTInformation () {

    for (let i = 0; i < inventory.length ; i++) {
        const allInfo = document.createElement(`p`);
        let newline = "\r\n";
        allInfo.textContent = joinProperties(inventory)[i] + newline + creatPrice(inventory)[i] + newline + sumOfSize(tvSize[i])
        const tvInfo = document.getElementById("all-Info");
        tvInfo.appendChild(allInfo);
    }
}

(generateTInformation(inventory));

// BONUS
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!









