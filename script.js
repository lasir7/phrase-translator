// script.js
function translatePhrase() {
    const inputPhrase = document.getElementById('inputPhrase').value.toLowerCase();
    const outputTranslation = document.getElementById('outputTranslation');

    // Пример базы данных фразеологизмов
    const phraseDictionary = {
        "break the ice": "Ломать лёд",
        "piece of cake": "Проще простого",
        "hit the nail on the head": "Попасть в точку",
        "let the cat out of the bag": "Выпустить кота из мешка",
        "burn the midnight oil": "Гореть на работе",
        "spill the beans": "Выдать секрет",
        "cost an arm and a leg": "Стоить целое состояние",
        "kick the bucket": "Сыграть в ящик",
        "when pigs fly": "Когда рак на горе свистнет",
        "barking up the wrong tree": "Искать не там, где нужно"
    };

    if (phraseDictionary[inputPhrase]) {
        outputTranslation.textContent = phraseDictionary[inputPhrase];
    } else {
        outputTranslation.textContent = "Перевод не найден. Попробуйте другой фразеологизм.";
    }
}