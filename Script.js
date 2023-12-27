let startedMessage = 'You are ';
const messagesArr = [
    'Incredible', 'Awesome', 'Amazing', 'Intelligent', 'Capable of doing great things', 'Strong', 'Wonderful', 'Brave'
]

const mixMessage = (start, arr) => {
    let randomNumberMessage = Math.floor(Math.random() * arr.length);
    return arr.map((x) => {
        console.log(startedMessage + arr[randomNumberMessage]);
    })
}

mixMessage(startedMessage, messagesArr);