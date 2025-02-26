// script.js
function translatePhrase() {
    const inputPhrase = document.getElementById('inputPhrase').value.toLowerCase();
    const outputTranslation = document.getElementById('outputTranslation');

    // Пример базы данных фразеологизмов
    const phraseDictionary = {
  "break the ice": "Делать первый шаг",
    "piece of cake": "Пустячное дело",
    "hit the nail on the head": "Попасть в самую точку",
    "let the cat out of the bag": "Выдать секрет",
    "burn the midnight oil": "Работать допоздна",
    "spill the beans": "Проговориться",
    "cost an arm and a leg": "Стоить целое состояние",
    "kick the bucket": "Отправиться на тот свет",
    "when pigs fly": "После дождичка в четверг",
    "barking up the wrong tree": "Искать не там, где нужно",

    // Дополнительные фразеологизмы
    "beat around the bush": "Ходить вокруг да около",
    "bite the bullet": "Стиснуть зубы",
    "blessing in disguise": "Не было бы счастья, да несчастье помогло",
    "burn bridges": "Разрушать взаимоотношения",
    "call it a day": "Закончить на сегодня",
    "cut corners": "Экономить на качестве",
    "devil's advocate": "Адвокат дьявола",
    "every cloud has a silver lining": "Нет худа без добра",
    "fit as a fiddle": "В полном здравии",
    "get out of hand": "Выходить из-под контроля",
    "hit the sack": "Идти спать",
    "it's not rocket science": "Это не высшая математика",
    "let sleeping dogs lie": "Не буди лихо, пока оно тихо",
    "miss the boat": "Упустить возможность",
    "no pain, no gain": "Без труда не вытащишь и рыбку из пруда",
    "on the ball": "Быть в курсе дела",
    "pull someone's leg": "Подшучивать над кем-то",
    "see eye to eye": "Быть на одной волне",
    "sit on the fence": "Сидеть на двух стульях",
    "the best of both worlds": "И вашим, и нашим",
    "the last straw": "Последняя капля",
    "throw in the towel": "Сдаваться",
    "under the weather": "Чувствовать себя неважно",
    "you can't judge a book by its cover": "Внешность обманчива",
    "add fuel to the fire": "Подливать масла в огонь",
    "burn the candle at both ends": "Работать на износ",
    "cry over spilled milk": "Лить слезы над тем, что уже случилось",
    "hit the hay": "Идти спать",
    "let the chips fall where they may": "Пусть будет, как будет",
    "put all your eggs in one basket": "Ставить всё на одну карту"
    };

    if (phraseDictionary[inputPhrase]) {
        outputTranslation.textContent = phraseDictionary[inputPhrase];
    } else {
        outputTranslation.textContent = "Перевод не найден. Попробуйте другой фразеологизм.";
    }
}
