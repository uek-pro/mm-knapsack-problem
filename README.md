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
3. Wciśnięcie przycisku `Oblicz optymalną wartość`.

albo

1. Uruchomienie skryptu algorythm.js.
2. Dodanie do skryptu danych wejściowych.
3. Utworzenie obiektu problemu plecakowego.
4. Wywołanie metody `calculateOptimal()`, która zwróci wartość optymalną plecaka.

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
console.log('Optymalna wartość plecaka:', kp.optimalValue);
// return: Optymalna wartość plecaka: 80
```

Aplikacja dostępna jest także pod adresem
* https://uek-pro.github.io/mm-knapsack-problem (aplikacja)
* https://github.com/uek-pro/mm-knapsack-problem (kod źródłowy)