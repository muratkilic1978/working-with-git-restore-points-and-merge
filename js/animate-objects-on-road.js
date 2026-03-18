"use strict";

// Her opbygger vi vores JS-Datastruktur med Array indeholdende JS Objekter
const carInfo = [
    {
        className: "car1",
        carBrand: "Ford",
        carModel: "Mustang",
        releaseYear: 1974,
        color: "red",
        fuelType: "Diesel"
    },
    {
        className: "car2",
        carBrand: "Volvo",
        carModel: "242 Series",
        releaseYear: 1982,
        color: "blue",
        fuelType: "Diesel"

    },
    {
        className: "car3",
        carBrand: "Volkswagen",
        carModel: "Passat",
        releaseYear: 1979,
        color: "blue",
        fuelType: "Diesel"
    }
];

// Venter med at kører JS koden indtil hele DOM'en er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // finder tooltip id attributten fra DOM og gemmer i en variabel
    const tooltip = document.getElementById("tooltip");

    // Funktion der viser tooltip med bilinfo
    function showTooltip(html) {

        // Tjekker om tooltip-elementet eksisterer i DOM'en
        if (tooltip) {
            // Indsætter tekst i tooltip elementet
            tooltip.innerHTML = html;
            // Gør tooltip elementet synlig med css-klassen - is-visble
            tooltip.classList.add("is-visible");

            // Sætter en timer til at skjule tooltip element efter 8 sek.
            setTimeout( function() {
                // fjerner CSS-klassen fra tooltip element - is-visible efter 8 sek
                tooltip.classList.remove("is-visible");
            },8000);
        }
    }
    // Gennemløber ale bil-objekter i carInfo JS-Datastrukturen
    carInfo.forEach((car) => {
        // Finder alle DOM-elementer med den aktuelle bil class attribut-navn (f.eks. car1, car2, car3)
        document.querySelectorAll("." + car.className).forEach((elem) => {
            // Tilføjer en addEvenListener til hvert element hvor musen føres henover (mouseover)
            elem.addEventListener("mouseover", () => {
                // Opretter en HTML-blok indeholdende bilens detaljer
                const carDetails = `
                
                <strong>Brand:${car.carBrand}</strong><br>
                Model: ${car.carModel}<br>
                Release Year: ${car.releaseYear}<br>
                Color: ${car.color}<br>
                Fuel Type: ${car.fuelType}
                `;
                showTooltip(carDetails);
            });
        });
    });




    /* Hente Alle DOM-elementer */

    const getRedCar = document.querySelector("#redcar");
    const getBlueCar = document.querySelector("#blueCar");
    const getPoliceCar = document.querySelector("#policeCar");
    const sun = document.querySelector(".sun");
    const scene = document.querySelector(".scene");

    /* Oprette lydobjekter */

    const soundRedCar = new Audio();
    soundRedCar.src = "../sound/red-car-sound";
    const soundPoliceCar = new Audio();
    soundPoliceCar.src = "../sound/police-car-sound.wav";
    const soundBlueCar = new Audio();
    soundBlueCar.src = "../sound/blue-car-sound.wav";

    /* Tjeck om den røde bil (getRedCar) med ID attributten "redcar" findes i DOM'en */
    if (getRedCar) {
        getRedCar.addEventListener("click", () => {
            soundRedCar.play();
        });
    }

    /* Tjeck om den Politibilen (getPoliceCar) med ID attributten "policecar" findes i DOM'en */
    if (getPoliceCar) {
        getPoliceCar.addEventListener("click", () => {
            soundPoliceCar.play();
        });
    }

    /* Tjeck om den blå bil (getBlueCar) med ID attributten "bluecar" findes i DOM'en */
    if (getBlueCar) {
        getBlueCar.addEventListener("click", () => {
            soundBlueCar.play();
        });
    }

    if (sun && scene) {
        sun.addEventListener("click", () => {
            scene.classList.toggle("night");
        });

    }


});



    