# mm-knapsack-problem

Wykorzystanie programowania dynamicznego do rozwiązania zagadnienia optymalizacyjnego jakim jest problem plecakowy.

## Lista plików

* `index.html` - Aplikacja internetowa przezentująca działania algorytmu na przykładzie problemu plecakowego.
* `algorithm.js` - Kod źródłowy klasy obsługującej algorytm oraz klasy, której obiekty są jednym z parametrów wejściowych algorytmu.
* `style.css` - Opis formy prezentacji (wyglądu) aplikacji.
* `vue.min.js` - Framework wspomagający komunikację pomiędzy logiką aplikacji a warstwą prezentacji.
* `README.md` - Ten dokument.

## Instukcja działania

1. Uruchomnienie index.html.
2. Wypełnienie pól formularza.
3. Wciśnięcie przycisku `Oblicz optymalną wartość`
   i/lub "Oblicz najbardziej optymalne ułożenie rzeczy".

albo

1. Uruchomienie skryptu algorythm.js.
2. Dodanie do skryptu danych wejściowych.
3. Utworzenie obiektu problemu plecakowego.
4. Wywołanie metody `calculateOptimal()`, która zwróci wartość optymalną plecaka
   lub 'calculateOrder()' która zwróci optymalne ułożenie rzeczy w plecaku.

Przykład

```js
/* user input */
const capacity = 23;
const elements = [
    // KnapsackElement(weight, value)
    new KnapsackElement(1, 2),
    new KnapsackElement(3, 10),
    new KnapsackElement(2, 7)
];
/* function call */
const kp = new KnapsackProblem(elements, capacity);
kp.calculateOptimal();
kp.calculateOrder();
console.log('Optymalna wartość plecaka:', kp.optimalValue);
console.log('Optymalne ułożenie rzeczy', kp.order);
// return: Optymalna wartość plecaka: 80
//
// 0: (2) ["7", 2]
// 1: (2) ["10", 3]
// 2: (2) ["2", 1]
// 3: (2) ["Pusta przestrzeń", 17]
```

Aplikacja dostępna jest także pod adresem
* https://uek-pro.github.io/mm-knapsack-problem (aplikacja)
* https://github.com/uek-pro/mm-knapsack-problem (kod źródłowy)