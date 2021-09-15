//global scope

const message1 = ['Your sign is sun', 'Your sign is moon', 'Your sign is start', 'Your sign is fire'];
const message2 = ['today You wil a nice day', 'today is a bad day for You'];
const message3 = ['maybe today You have a good pratice', 'today is the day', ' You can do it'];

//this functin return a number between the length of the array passed

const randomGenerator = (arr) => {
    result = Math.floor(Math.random() * arr.length);
    console.log(result);
    return result;
}

//this function create a new random message and print the message

const newMessage = () => {
    let phrase1 = message1[randomGenerator(message1)];
    let phrase2 = message2[randomGenerator(message2)];
    let phrase3 = message3[randomGenerator(message3)];

    console.log(`${phrase1}, ${phrase2} and ${phrase3}`);
}

// call function

newMessage();