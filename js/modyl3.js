МАСИВИ
Завдання
Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange".

const fruits = ["apple", "plum", "pear", "orange"];



Завдання
Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = 'peach';
fruits[3] = 'banana';
console.log(fruits); // ["apple", "peach", "pear", "banana"]


Завдання
Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта.Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

function getOrderQuantity(order) {
  return order.length;
}

// Перевірка функції:
console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // 4
console.log(getOrderQuantity(["apple", "banana"])); // 2
console.log(getOrderQuantity(["apple", "banana", "pear"])); // 3
console.log(getOrderQuantity([])); // 0


Завдання
Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
перший елемент - це індекс останнього елементу у масиві array
другий елемент - це значення останнього елементу у масиві array


function getLastElementMeta(array) {
    // Отримуємо індекс останнього елемента масиву
    const lastIndex = array.length - 1;

    // Отримуємо значення останнього елемента масиву
    const lastElement = array[lastIndex];

    // Повертаємо новий масив із індексом та значенням останнього елемента
    return [lastIndex, lastElement];
}

Завдання
Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

function getExtremeElements(array) {
    // Отримуємо перший елемент масиву
    const firstElement = array[0];

    // Отримуємо останній елемент масиву
    const lastElement = array[array.length - 1];

    // Повертаємо новий масив із двох елементів
    return [firstElement, lastElement];
}
//Як це працює:
//array[0] отримує перший елемент масиву.
//array[array.length - 1] знаходить останній елемент масиву.
//[firstElement, lastElement] створює новий масив із цих двох елементів.

console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]