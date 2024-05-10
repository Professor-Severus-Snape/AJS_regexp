# Домашнее задание к лекции «Регулярные выражения»

## Важно:
1. Код должен проходить ESLint без ошибок.
2. Unit-тесты должны обеспечивать 100% покрытие тестируемых функций и классов по строкам.

---

## Никнеймы

### Легенда

Вы проанализировали логи вашей игры и заметили, что многие пользователи используют «мусорные» логины и различные непонятные символы не только в никнеймах, но и в именах. Необходимо с этим что-то делать! 

### Описание

Реализуйте класс `Validator` с методом `validateUsername`, который проверяет имя пользователя с помощью регулярных выражений на соответствие следующим правилам:
1. Допустимы только латинские буквы, цифры, символы тире `-` и нижнего подчёркивания `_`;
2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.

---

## Телефоны (задача со звёздочкой)

### Легенда

Вам поручили подумать над тем, чтобы реализовать очистку вводимых номеров телефонов в любом формате (например, как на Госуслугах) и приведения к единому формату: +7xxxxxxxxxx (где вместо x - цифры).

Вам нужно подумать, какой инструмент использовать и выбрать оптимальное решение (не факт, что оно уместится в одну строку).

### Описание

Ваша функция должна работать следующим образом:
* 8 (927) 000-00-00 -> +79270000000
* +7 960 000 00 00 -> +79600000000
* +86 000 000 0000 -> +860000000000

В последнем номере нет ошибки, это Китай. А первые два - РФ.