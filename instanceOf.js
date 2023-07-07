class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`sender : ${this.sender}, receiver : ${receiver}, sent : ${message}`);
    }
}

class WhatsAppService extends MailService{
    sendBroadCast(message, receiver){
        for (const receivers of receiver) {
            this.sendMessage(message, receivers);
        }
    }
}

class EmailService extends MailService{
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay);
    }
}

// objek whatsapp
const whatsApp = new WhatsAppService('Aditya');
console.log(whatsApp instanceof WhatsAppService);
console.log(whatsApp instanceof MailService);

// objek Email
const email = new EmailService('Kamado');
console.log(email instanceof EmailService);
console.log(email instanceof MailService);

// instanceOf digunakan untuk mengecek apakah suatu objek turunan dari prototype lain atau tidak