//global scope

//prediction phrases

const prediction1 = ['Your sign is sun', 'Your sign is moon', 'Your sign is start', 'Your sign is fire'];
const prediction2 = ['today You wil a nice day', 'today is a bad day for You'];
const prediction3 = ['maybe today You have a good practice', 'today is the day', ' You can do it'];

//joke phrases

const joke1 = ['lolo', 'trololo', 'mujajahhaah'];
const joke2 = ['not today', 'maybe not', 'maybe tomorrow', 'maybe later'];
const joke3 = ['I want to eat', 'pochoclo', "I don't know"]

//astrology generator

const astrology1 = ['Anyone can be a millionaire', 'but to become a billionaire you need an astrologer'];
const astrology2 = ['A physician without a knowledge of Astrology', 'has no right to call himself a physician'];
const astrology3 = ['Astrology is just a finger', 'pointing at reality']

//random generator between a rage 

const rndom = num => {
    let number = Math.floor(Match.random() * num);

}


//this function return a number between the length of the array passed

const randomGenerator = arr => {
    result = Math.floor(Math.random() * arr.length);
    console.log(result);
    return result;
}

// create a object with the posible random message

const message = {
    _predictions: [prediction1, prediction2, prediction3],
    _jokes: [joke1, joke2, joke3],
    _astrologys: [astrology1, astrology2, astrology3],

    //getters 

    get predictions() {
        return this._predictions;
    },
    get jokes() {
        return this._jokes;
    },
    get astrologys() {
        return this._astrologys
    }

}

//this function create a new random message and print the message

const newMessage = () => {

    let type;
    let randomPhrase = Math.floor(Math.random() * 3);


    //select the message

    switch (randomPhrase) {
        case 0:
            type = message.predictions
            break;
        case 1:
            type = message.jokes
            break;
        case 2:
            type = message.astrologys
            break;
        default:
            console.log('error wonka!')
            break;
    }

    console.log(type[randomGenerator(type[Math.floor(Math.random() * type.length)])][0])
    console.log(typeof type)



    //let phrase1 = type[randomGenerator()];
    //let phrase2 = message._jokes[randomGenerator(message2)];
    //let phrase3 = message._astrologys[randomGenerator(message3)];

    //return `${phrase1}, ${phrase2} and ${phrase3}`;
}


// call function

newMessage();