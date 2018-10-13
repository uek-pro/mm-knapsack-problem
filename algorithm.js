/* main.js file */

/* class definitions */

/**
 * Klasa reprezentująca element plecaka.
 */
class KnapsackElement {
    /**
     * Tworzenie elementu plecaka.
     * @param {number} weight - Waga elementu.
     * @param {number} value - Wartość elementu.
     */
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
    };
}

/**
 * Klasa reprezentująca obiekt problemu plecakowego.
 */
class KnapsackProblem {
    constructor(elements, capacity) {
        this.elements = elements;
        this.elementsCount = this.elements.length;
        this.capacity = capacity + 1;
        this.optimalValue = -1;
        this.results = null;
    };
    calculateOptimal() {
        // Przedstawiona metoda nie daje informacji, który podzbiór elementów jest rozwiązaniem
        this.results = new Array(this.capacity).fill(0);

        for (let i = 0; i < this.capacity; i++) { // i - capacity counter

            for (let j = 0; j < this.elementsCount; j++) { // j - element index

                if (this.elements[j].weight <= i) {

                    if (this.results[i - this.elements[j].weight] + this.elements[j].value > this.results[i]) {

                        this.results[i] = this.results[i - this.elements[j].weight] + this.elements[j].value     
                    }
                }
            }
        }

        console.log('Wartości:', this.results);
        return this.optimalValue = this.results[this.results.length - 1];
    };
};

/* user input */

const capacity = 23;
const elements = [
    new KnapsackElement(1, 2),
    new KnapsackElement(3, 10),
    new KnapsackElement(2, 7),
    new KnapsackElement(3, 5)
];


/* function call */

const kp = new KnapsackProblem(elements, capacity);
kp.calculateOptimal(); 

console.log('Optymalna wartość plecaka:', kp.optimalValue);