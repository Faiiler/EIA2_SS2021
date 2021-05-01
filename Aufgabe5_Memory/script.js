var L03_Memory;
(function (L03_Memory) {
    var splashscreen = document.querySelector("#splashscreen");
    var winscreen = document.querySelector("#winscreen");
    var winMessage = document.querySelector("#winmessage");
    var cardsContainer = document.querySelector("#cards-container");
    var cardTemplate = document.querySelector("#card-template");
    ;
    var time = document.querySelector("#time");
    var settingsForm = document.querySelector("#settingsForm");
    var startButton = document.querySelector("#startButton");
    var CARD_NAMES = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
    ];
    var CARD_SYMBOLS = [
        "club",
        "diamond",
        "heart",
        "spade"
    ];
    var CARD_COLORS = [
        "#540D6E",
        "#AA4596",
        "#EE4266",
        "#3BCEAC",
        "#0EAD69",
        "#6E9887",
        "#216869",
        "#123294",
        "#4C4C47",
        "#848FA5",
        "#F564A9",
        "#40531B",
        "#690375",
        "#DAA89B",
        "#CB429F",
        "#4A6C6F"
    ];
    var CARD_IMAGES = {
        "club": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 240">\n' +
            '  <title>club</title>\n' +
            '  <path d="M645,374a60,60,0,0,0,15-118.11,60,60,0,1,0-119.94,0,60,60,0,1,0,45,110V404H570a15,15,0,0,0,0,30h60a15,15,0,0,0,0-30H615V365.93A59.64,59.64,0,0,0,645,374Z" transform="translate(-495 -194)"/>\n' +
            '</svg>\n',
        "diamond": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.1 224">\n' +
            '  <title>diamond</title>\n' +
            '  <path d="M609.07,206.88a15,15,0,0,0-22.33.21l-85.37,97a15,15,0,0,0,0,19.82l85.37,97a15,15,0,0,0,22.33.22l88.73-97a15,15,0,0,0,0-20.25Z" transform="translate(-497.64 -202)"/>\n' +
            '</svg>\n',
        "heart": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 187.5">\n' +
            '  <title>heart</title>\n' +
            '  <path d="M555,219c-34.76,0-60,29-60,64.32,0,44.77,41.36,72.43,95.12,119.47a15,15,0,0,0,19.76,0C663.64,355.74,705,328.08,705,283.32,705,248,679.75,219,645,219c-17.74,0-33.22,7.79-45,22.6-11.78-14.81-27.26-22.6-45-22.6Z" transform="translate(-495 -219)"/>\n' +
            '</svg>\n',
        "spade": '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 243.75">\n' +
            '  <title>spade</title>\n' +
            '  <path d="M609.88,196a15,15,0,0,0-19.76,0C536.36,243,495,270.67,495,315.43c0,35.31,25.25,64.32,60,64.32A54.21,54.21,0,0,0,585,371v35H570a15,15,0,0,0,0,30h60a15,15,0,0,0,0-30H615V371a54.21,54.21,0,0,0,30,8.78c34.75,0,60-29,60-64.32C705,270.66,663.64,243,609.88,196Z" transform="translate(-495 -192.25)"/>\n' +
            '</svg>\n'
    };
    var CONTENT = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    var SHOW_CARD_DURATION = 2500;
    function getAllCardTypes() {
        var allCardTypes = [];
        for (var _i = 0, CARD_SYMBOLS_1 = CARD_SYMBOLS; _i < CARD_SYMBOLS_1.length; _i++) {
            var symbol = CARD_SYMBOLS_1[_i];
            for (var _a = 0, CARD_NAMES_1 = CARD_NAMES; _a < CARD_NAMES_1.length; _a++) {
                var name_1 = CARD_NAMES_1[_a];
                allCardTypes.push({
                    symbol: symbol,
                    name: name_1,
                    color: CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)]
                });
            }
        }
        return allCardTypes;
    }
    function selectCards(cardsToGenerate) {
        console.debug("Generating " + cardsToGenerate + " card pairs");
        var allCardTypes = getAllCardTypes();
        var contents = CONTENT.slice(0, CONTENT.length);
        var cards = [];
        for (var i = 0; i < cardsToGenerate; i++) {
            // https://stackoverflow.com/a/5915122
            var cardType = allCardTypes.splice(Math.floor(Math.random() * allCardTypes.length), 1)[0];
            var content = contents.splice(Math.floor(Math.random() * contents.length), 1)[0];
            cards.push({
                type: cardType,
                content: content
            });
        }
        return cards;
    }
    var cardStorage = {};
    function placeCards(cards) {
        var partialCards = [];
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) { //Alternativ auch for(let i = 0;i<cards.length;i++) { let card = cards[i];
            var card = cards_1[_i];
            partialCards.push({
                type: card.type,
                content: card.content
            });
            partialCards.push({
                type: card.type,
                content: card.content
            });
        }
        shuffle(partialCards);
        var cardCounter = 0;
        var _loop_1 = function (card) {
            var cardElement = cardTemplate.cloneNode(true);
            cardElement.id = "card" + cardCounter++;
            cardElement.classList.add("card");
            cardStorage[cardElement.id] = card;
            cardElement.querySelector(".card-icon-wrapper").innerHTML = CARD_IMAGES[card.type.symbol];
            cardElement.querySelector(".card-icon-wrapper>svg>path").style.fill = card.type.color;
            cardElement.querySelector(".card-name").innerHTML = card.type.name;
            cardElement.querySelector(".card-name").style.color = card.type.color;
            cardElement.querySelector(".card-text").innerHTML = card.content;
            cardElement.addEventListener("click", function () {
                onCardClick(cardElement, false);
            });
            cardsContainer.appendChild(cardElement);
        };
        for (var _a = 0, partialCards_1 = partialCards; _a < partialCards_1.length; _a++) {
            var card = partialCards_1[_a];
            _loop_1(card);
        }
        timeTimer = setInterval(function () {
            var now = Date.now();
            var duration = now - startTime;
            time.innerText = formatDuration(duration);
        }, 1000);
    }
    function selectAndPlaceCards() {
        var formData = new FormData(settingsForm);
        var cards = selectCards(parseInt(formData.get("cardCount")));
        var rootStyle = document.querySelector(":root").style;
        rootStyle.setProperty("--card-size", formData.get("cardSize") + "px");
        rootStyle.setProperty("--back-color", formData.get("bgColor"));
        rootStyle.setProperty("--background-color", formData.get("fBgColor"));
        rootStyle.setProperty("--text-color", formData.get("textColor"));
        rootStyle.setProperty("--text-font", formData.get("textFont"));
        placeCards(cards);
    }
    var startTime;
    var activePlayer = 0;
    var scores = [0, 0];
    var timeTimer;
    var inputLocked = false;
    var lastFlippedCard;
    var lastFlippedCardElement;
    function onCardClick(cardElement, isAiClick) {
        if (inputLocked) {
            return;
        }
        if (cardElement.classList.contains("flipped")) {
            return;
        }
        var card = cardStorage[cardElement.id];
        console.log("Card " + cardElement.id + " flipped by player " + activePlayer + "!");
        console.log(card);
        cardElement.classList.add("flipped");
        if (lastFlippedCard) {
            inputLocked = true;
            if (areCardsEqual(lastFlippedCard, card)) {
                console.log("Matching cards!");
                scores[activePlayer]++;
                var lastFlippedCardElementCopy_1 = lastFlippedCardElement;
                setTimeout(function () {
                    cardElement.classList.add("hidden");
                    lastFlippedCardElementCopy_1.classList.add("hidden");
                }, 800);
                lastFlippedCard = undefined;
                lastFlippedCardElement = undefined;
                setTimeout(function () {
                    inputLocked = false;
                }, 500);
            }
            else {
                console.log("Wrong cards!");
                setTimeout(function () {
                    unflipCard(cardElement);
                    unflipCard(lastFlippedCardElement);
                    lastFlippedCard = undefined;
                    lastFlippedCardElement = undefined;
                    setTimeout(function () {
                        inputLocked = false;
                    }, 500);
                }, SHOW_CARD_DURATION);
            }
        }
        else {
            lastFlippedCard = card;
            lastFlippedCardElement = cardElement;
        }
        updateScore();
    }
    function areCardsEqual(a, b) {
        return a.type.color === b.type.color && a.type.symbol === b.type.symbol && a.type.name === b.type.name;
    }
    function unflipCard(cardElement) {
        cardElement.classList.remove("flipped");
    }
    function updateScore() {
        console.log("Scores: " + scores);
        document.querySelector("#score0").innerHTML = "" + scores[0];
        var availableCards = document.querySelectorAll(".card:not(.flipped)");
        if (availableCards.length === 0) {
            console.log("I found no cards, I guess we're done!");
            var endTime = Date.now();
            var duration = endTime - startTime;
            if (scores[0] !== scores[1]) {
                winMessage.innerHTML = "You Win!<br/>" + formatDuration(duration);
            }
            clearTimeout(timeTimer);
            setTimeout(function () {
                winscreen.classList.add("visible");
                winscreen.style.display = "";
            }, 500);
        }
    }
    function start() {
        startTime = Date.now();
        document.querySelector("#top-container").style.display = "";
        document.querySelector("#bottom-container").style.display = "";
        document.querySelector(".splashscreen-button-container").style.display = "none";
        splashscreen.classList.add("hidden");
        setTimeout(function () {
            splashscreen.style.display = "none";
        }, 800);
        selectAndPlaceCards();
    }
    startButton.addEventListener("click", function (e) {
        e.preventDefault();
        start();
    });
    document.querySelector("#play-again-button").addEventListener("click", function () {
        window.location.reload();
    });
    function pad(str) {
        if (str.length === 1) {
            return "0" + str;
        }
        return str;
    }
    // https://stackoverflow.com/a/43466724/6257838
    function formatDuration(millis) {
        var seconds = millis / 1000;
        return [
            pad("" + Math.round(seconds / 60 % 60)),
            pad("" + Math.round(seconds % 60))
        ].join(":");
    }
    // Quelle: https://stackoverflow.com/a/6274381
    // Mischen der Karten
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
})(L03_Memory || (L03_Memory = {}));
//# sourceMappingURL=script.js.map