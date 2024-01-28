const 

len3Words = [ "act",  "add",  "air",  "all",  "and",  "are",  "bad",  "bed",  "big",  "buy",  "can",  "car",  "cat",  "cow",  "cut",  "dad",  "day",  "did",  "dig",  "dog",  "eat",  "end",  "eye",  "far",  "few",  "fly",  "for",  "fun",  "gas",  "get",  "god",  "got",  "gun",  "had",  "ham",  "has",  "hat",  "her",  "him",  "his",  "hit",  "hot",  "ice",  "its",  "job",  "law",  "lie",  "man",  "mud",  "new",  "not",  "now",  "off",  "oil",  "old",  "one",  "our",  "out",  "own",  "pay",  "pig",  "put",  "rat",  "red",  "run",  "sad",  "say",  "sea",  "see",  "she",  "sit",  "six",  "son",  "sun",  "tap",  "tax",  "tea",  "ten",  "the",  "top",  "two",  "use",  "war",  "was",  "way",  "wet",  "who",  "why",  "win",  "yes",  "you" ],
len5Words = [ "above",  "alien",  "alone",  "angry",  "apple",  "aware",  "black",  "blind",  "bored",  "brave",  "bread",  "brown",  "chair",  "clean",  "dance",  "dirty",  "drink",  "early",  "earth",  "eight",  "first",  "fruit",  "funny",  "giant",  "goose",  "green",  "happy",  "heavy",  "hippo",  "horse",  "house",  "inner",  "juice",  "large",  "laugh",  "legal",  "light",  "local",  "loose",  "magic",  "money",  "moral",  "mouse",  "mouth",  "movie",  "music",  "night",  "nurse",  "ocean",  "other",  "outer",  "pizza",  "plain",  "plant",  "proud",  "quick",  "quiet",  "radio",  "right",  "river",  "robot",  "rough",  "round",  "royal",  "salty",  "seven",  "sheep",  "shirt",  "short",  "silly",  "sleep",  "small",  "smile",  "snake",  "solid",  "sorry",  "sound",  "spare",  "steep",  "still",  "storm",  "super",  "sweet",  "table",  "thank",  "there",  "thick",  "think",  "three",  "tiger",  "tired",  "toast",  "total",  "tough",  "train",  "upper",  "usual",  "valid",  "watch",  "water",  "whale",  "wheel",  "white",  "woman",  "write",  "wrong",  "young",  "zebra" ],
len7Words = [ "balloon",  "bedroom",  "bicycle",  "blanket",  "camping",  "chicken",  "concert",  "cooking",  "crayons",  "cupcake",  "dancing",  "dolphin",  "firefly",  "fireman",  "giraffe",  "glasses",  "healthy",  "helping",  "journal",  "jumping",  "kitchen",  "leaving",  "library",  "mermaid",  "monster",  "netflix",  "pancake",  "penguin",  "playing",  "popcorn",  "rainbow",  "reading",  "running",  "sharing",  "singing",  "smiling",  "student",  "sunburn",  "sunrise",  "talking",  "teacher",  "thirsty",  "twitter",  "unicorn",  "weekday",  "weekend",  "winning",  "working",  "writing",  "yawning",  "youtube" ],
lenRndWords = [ "above",  "act",  "add",  "air",  "alien",  "all",  "alone",  "and",  "angry",  "apple",  "are",  "arriving",  "artist",  "astronaut",  "autumn",  "aware",  "backpack",  "bad",  "ball",  "balloon",  "banana",  "bank",  "baseball",  "basketball",  "bathroom",  "bed",  "bedroom",  "beer",  "bicycle",  "big",  "bike",  "bird",  "birthday",  "bitter",  "black",  "blanket",  "blind",  "blue",  "boat",  "body",  "book",  "bookmark",  "bored",  "bouncing",  "brave",  "bread",  "breakfast",  "brown",  "bubble",  "building",  "butterfly",  "buy",  "cake",  "camera",  "camping",  "can",  "car",  "castle",  "cat",  "chair",  "chicken",  "chocolate",  "city",  "clean",  "cleaning",  "climbing",  "coffee",  "cold",  "come",  "computer",  "concert",  "cookie",  "cooking",  "cow",  "crayon",  "crayons",  "creating",  "cupcake",  "cut",  "dad",  "dance",  "dancer",  "dancing",  "day",  "designer",  "did",  "dig",  "dinosaur",  "dirty",  "discovering",  "do",  "doctor",  "dog",  "dolphin",  "door",  "down",  "download",  "dragon",  "drink",  "duck",  "early",  "earth",  "eat",  "eggs",  "eight",  "elephant",  "end",  "exploring",  "eye",  "face",  "facebook",  "far",  "fast",  "few",  "finishing",  "fire",  "firefighter",  "fireflies",  "firefly",  "fireman",  "firestorm",  "firetruck",  "firework",  "fireworks",  "first",  "fish",  "five",  "flashlight",  "flower",  "fly",  "food",  "foot",  "football",  "for",  "forest",  "four",  "fruit",  "fun",  "funny",  "game",  "gas",  "get",  "giant",  "giggling",  "giraffe",  "glasses",  "go",  "god",  "good",  "goose",  "got",  "green",  "guitar",  "gun",  "had",  "hair",  "ham",  "hand",  "happy",  "hard",  "has",  "hat",  "hate",  "head",  "healthy",  "heavy",  "helping",  "her",  "here",  "hiking",  "him",  "hippo",  "his",  "hit",  "home",  "horse",  "hospital",  "hot",  "house",  "hungry",  "ice",  "in",  "inner",  "instagram",  "internet",  "is",  "it",  "its",  "jacket",  "job",  "journal",  "juice",  "jumping",  "kangaroo",  "keyboard",  "kitchen",  "kitten",  "large",  "laugh",  "laughing",  "law",  "learning",  "leaving",  "legal",  "library",  "lie",  "life",  "light",  "lion",  "listen",  "local",  "long",  "look",  "loose",  "losing",  "loud",  "love",  "loving",  "magazine",  "magic",  "man",  "me",  "meat",  "mermaid",  "milk",  "money",  "monkey",  "monster",  "moon",  "moral",  "mountain",  "mouse",  "mouth",  "movie",  "mud",  "music",  "musician",  "my",  "netflix",  "new",  "newspaper",  "night",  "nine",  "no",  "nose",  "not",  "notebook",  "now",  "nurse",  "ocean",  "off",  "oil",  "old",  "on",  "one",  "open",  "orange",  "other",  "our",  "out",  "outer",  "own",  "painting",  "pancake",  "pancakes",  "park",  "password",  "pay",  "pencil",  "penguin",  "pig",  "pink",  "pirate",  "pizza",  "plain",  "planet",  "plant",  "play",  "playground",  "playing",  "policeman",  "popcorn",  "post",  "potato",  "proud",  "purple",  "put",  "puzzle",  "quick",  "quiet",  "radio",  "rain",  "rainbow",  "raindrop",  "rat",  "reader",  "reading",  "red",  "restaurant",  "right",  "river",  "robot",  "rough",  "round",  "royal",  "run",  "running",  "sad",  "salty",  "sandwich",  "say",  "scared",  "school",  "scientist",  "sea",  "see",  "seven",  "sharing",  "she",  "sheep",  "shirt",  "shop",  "shopping",  "short",  "sick",  "silly",  "singer",  "singing",  "sit",  "six",  "sleep",  "sleeping",  "sleepy",  "slow",  "small",  "smile",  "smiling",  "snake",  "sneakers",  "sneezing",  "snow",  "snowfall",  "snowflakes",  "snowstorm",  "soda",  "soft",  "solid",  "son",  "sorry",  "sound",  "sour",  "spaceship",  "spare",  "spinning",  "spring",  "sprinkler",  "starfish",  "starting",  "steep",  "still",  "stop",  "storm",  "strong",  "student",  "summer",  "sun",  "sunburn",  "sunflowers",  "sunrise",  "sunset",  "sunshade",  "sunshine",  "super",  "sweet",  "swimming",  "table",  "talk",  "talking",  "tall",  "tap",  "tax",  "tea",  "teacher",  "telephone",  "television",  "ten",  "thank",  "that",  "the",  "there",  "thick",  "thin",  "think",  "thinking",  "thirsty",  "three",  "tiger",  "time",  "tired",  "to",  "toast",  "tomato",  "top",  "total",  "tough",  "town",  "train",  "travel",  "traveling",  "tree",  "twirling",  "twitter",  "two",  "umbrella",  "unicorn",  "up",  "upper",  "use",  "username",  "usual",  "vacation",  "valid",  "war",  "warm",  "was",  "watch",  "watching",  "water",  "watermelon",  "way",  "weak",  "weekday",  "weekend",  "wet",  "whale",  "wheel",  "whispering",  "white",  "who",  "why",  "wide",  "win",  "wind",  "window",  "wine",  "winning",  "winter",  "woman",  "work",  "working",  "write",  "writer",  "writing",  "wrong",  "yawning",  "yellow",  "yes",  "you",  "young",  "youtube",  "zebra" ],

message = document.getElementById("message"),
word = document.getElementById("word"),
remaining = document.getElementById("remainingGuess"),
built = document.getElementById("guessedBuilt"),
input = document.getElementById("input"),
guess = document.getElementById("guess"),
resetCard = document.getElementById("resetCard"),
resetBtn = document.getElementById("reset"),
setLimit = document.getElementById("word-change");

var words, newWord, chances, guessAlpha, wordAlpha, toGuessFrom;

function startGame (wordList) {

    word.innerHTML = built.innerHTML = "";
    words = wordList;
    newWord = generateWord();
    chances = 10;
    guessAlpha = [];
    wordAlpha = [...(newWord).toUpperCase()];
    toGuessFrom = 1;

    remaining.innerHTML = `You have ${chances} guesses remaining.`;

    for(let i = 0; i < newWord.length; i++) 
        word.innerHTML += (i == 0 || (newWord.length > 3 && i == newWord.length-1) || (newWord.length > 5 && i == Math.round(newWord.length/2)))? wordAlpha[i] + " " : "⬤ ";
    
    var compareWords = (val) => (word.innerHTML.indexOf("⬤") == -1) ? youWin() : (chances == 0) ? youLose() : 0;

    function guessed() {
        var uGuess = input.value.toUpperCase();
        if (uGuess == '') {
            myAlert('Cannot Leave Input Empty!');
        } else if (wordAlpha[toGuessFrom] == uGuess) {
            built.innerHTML = built.innerHTML + uGuess + " "; 
            let guessedWord = [...(word.innerHTML)];
            guessedWord[toGuessFrom*2] = uGuess;
            word.innerHTML = "";
            guessedWord.forEach(char => { word.innerHTML = word.innerHTML + char; })
            showMessage(`Good guess! The word has the letter ${uGuess}.`);
            toGuessFrom++;
        }
        else {
            built.innerHTML = built.innerHTML + `<s><i>${uGuess}</i></s>` + " "; 
            remaining.innerHTML = `You have ${--chances} guesses remaining.`;
            showMessage(`Wrong guess! The word Do Not have the letter ${uGuess}.`);
        }
        console.log(uGuess);
        compareWords(uGuess);
        input.value = "";
    }

    var showMessage = (mess) => message.innerHTML = mess;

    function youLose () {
        showMessage(`You Lose! The word was ${newWord.toUpperCase()}.`);
        resetCard.style.backgroundImage = `url(assets/rain.gif)`;
        gameEnd();
    }

    function youWin () {
        showMessage(`Congratulations, You Win! The word was ${newWord.toUpperCase()}.`);
        resetCard.style.backgroundImage = `url(assets/confetti.gif)`;
        gameEnd();
    }

    function gameEnd () {
        word.style.display = 'none';
        remaining.style.display = 'none';
        built.style.display = 'none';
        document.getElementById('onx').style.display = 'none';
        guess.disabled = true;
        guess.style.display = 'none';
        input.disabled = true;
        input.style.display = 'none';
        resetCard.classList.remove("d-none");
        return false;
    }

    function myAlert(message) {
        console.log(message);
    }

    function generateWord () { 
        return words[Math.floor(Math.random() * words.length)]; 
    }
    
    document.querySelector("form").addEventListener( "submit", event => { guessed(); event.preventDefault(); } );
    guess.addEventListener( "click", event => guessed() );
    resetBtn.addEventListener( "click", event => location.reload() );
}

startGame( len5Words );

setLimit.addEventListener( "change", function () {
    if ( this.value == "3" ) startGame( len3Words );
    else if ( this.value == "5" ) startGame( len5Words );
    else if ( this.value == "7" ) startGame( len7Words );
    else if ( this.value == "R" ) startGame( lenRndWords );
})