//global scope

//predeccion phrases

const prediction1 = ['Your sign is sun', 'Your sign is moon', 'Your sign is start', 'Your sign is fire'];
const prediction2 = ['today You wil a nice day', 'today is a bad day for You'];
const prediction3 = ['maybe today You have a good pratice', 'today is the day', ' You can do it'];

//joke phrases

const joke1 = ['lolo', 'trololo', 'mujajahhaah'];
const joke2 = ['not today', 'maybe not', 'maybe tomorrow', 'maybe later'];
const joke3 = []

//this functin return a number between the length of the array passed

const randomGenerator = (arr) => {
    result = Math.floor(Math.random() * arr.length);
    console.log(result);
    return result;
}

// create a object with the posible random message

const message = {
    _message1: prediction1[randomGenerator(message1)],
    _message2: prediction2[randomGenerator(message2)],
    _message3: prediction3[randomGenerator(message3)],
    newMessage() {

        return `${this._message1}, ${this._message2} and ${this._messawge3}`;
    }
}

//this function create a new random message and print the message

const newMessage = () => {
    let phrase1 = message1[randomGenerator(message1)];
    let phrase2 = message2[randomGenerator(message2)];
    let phrase3 = message3[randomGenerator(message3)];

    return `${phrase1}, ${phrase2} and ${phrase3}`;
}


//create a object to organize the message for tematic

const messages = {
    _predection: [message1, message2, message3],
    _joke: [joke1, joke2, joke3]
}

// call function

//newMessage();

const newObject = message.newMessage();

console.log(newObject)