Завданя 
Використовуючи два console.log() напиши код, який виведе в консоль інструментів розробника два значення: рядок "Jacob Mercer" та число 26.

console.log("Jacob Mercer")
console.log(26)


Завданя 
За допомогою ключового слова const оголоси дві змінні: productName - для зберігання назви товару, pricePerItem - для зберігання ціни за одиницю товару.
При оголошенні змінних надай їм наступні значення:
назва товару - рядок "Droid";
ціна за одиницю товару - число 2000.

const username = "Mango";
const productName = "Droid"; 
const pricePerItem = "2000";


Завданя 
Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

let productName = "Droid";
productName = "Repair droid";
let pricePerItem = 2000;
pricePerItem = 3500;

// Change code below this line




Завданя 
Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
topSpeed - число 160
distance - число 617.54
login - рядок "mango935"
isOnline - буль true
isAdmin - буль false


const topSpeed = 160; // Змінна для збереження максимальної швидкості
const distance = 617.54; // Змінна для збереження дистанції
const login = "mango935"; // Змінна для збереження логіну
const isOnline = true; // Змінна, яка позначає, чи користувач онлайн
const isAdmin = false; // Змінна, яка позначає, чи є користувач адміністратором

Завданя 
Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару, а orderedQuantity - кількість одиниць товару в замовленні.

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

Завданя 
Заміни у виразах стандартні математичні оператори на комбіновані оператори присвоєння з додаванням, відніманням, множенням і діленням відповідно.

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;



Завданя 
Оголоси змінну message. Використовуючи конкатенацію рядків, задай їй наступне значення — рядок привітання користувача зі зверненням по імені. Ім'я зберігається в змінній username.
Повідомлення привітання має виглядати так: "Welcome Poly!", де Poly — це значення змінної username.Зверни увагу, що пробіл має відноситися до рядка "Welcome "

const username = "Poly";
const message = "Welcome " + username + "!";


Завданя 
Оголоси змінну message і запиши в неї повідомлення про покупку.

Це буде рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits", де

<назва товару> — це значення змінної productName
<ціна товару> — це значення змінної pricePerItem
Використовуй синтаксис шаблонних рядків. Уникай зайвих символів (пробілів, коми або крапки, що не передбачені вмістом рядка).

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

Завданя 
Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
pricePerDroid - ціна одного дроїда, значення 800
orderedQuantity - кількість дроїдів у замовленні, значення 6
deliveryFee - вартість доставки, значення 50
totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits`;
console.log(message);
// Виведе: You ordered droids worth 4850 credits

Завданя 
Змінна username зберігає рядок з іменем користувача.Оголоси змінну message та за допомогою синтаксису шаблонних рядків доповни код так, щоб в ній зберігався рядок наступного формату: "Username <name> is <length> characters long", в якому < name > це ім'я користувача зі змінної username, а <length> це його довжина.

const username = "Poly";
const message = `Username ${username} is ${username.length} characters long`;


Завданя 
Додай код, який записує у змінні наступні значення:
courseTopicLength - довжина рядка
firstElement - перший символ рядка
lastElement - останній символ рядка(використовуй змінну courseTopicLength)

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length; // Довжина рядка
const firstElement = courseTopic[0]; // Перший символ
const lastElement = courseTopic[courseTopicLength - 1]; // Останній символ
console.log(courseTopicLength); // 21
console.log(firstElement); // "J"
console.log(lastElement); // "s"

Завданя 
Оголоси змінну isAdult та задай їй результат перевірки значення змінної age.Використай оператори порівняння та доповни код так, щоб значенням isAdult було true, якщо вік користувача більше або дорівнює 18 та false, якщо менше 18.

const age = 16;
const isAdult = age >= 18;

Завданя 
Оголоси змінну isValid і задай їй значенням результат перевірки рівності паролей в змінних correctPassword і userPassword.
Якщо паролі співпадають (сувора рівність), значення isValid має бути true
Якщо паролі не співпадають, значення isValid має бути false

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = userPassword === correctPassword;
console.log(isValid);


Завданя 
Змінна value містить величину у вигляді рядка, що складається з числової частини та одиниці виміру. Наприклад, 24.5px, 14cm, 20.3vh тощо.
Оголоси змінну numerical і доповни код таким чином, щоб:
Якщо це можливо, значенням змінної numerical буде число з плаваючою крапкою, що утворилось з рядка змінної value
В іншому випадку, значенням numerical буде NaN.

const value = "24.5px";
let numerical = parseFloat(value);
// Якщо parseFloat не зміг виділити число, результат буде NaN
console.log(numerical);


Завданя 
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - результат множення кількості товарів на ціну одного.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}