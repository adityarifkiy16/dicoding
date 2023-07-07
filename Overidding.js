class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`sender : ${this.sender}, receiver : ${receiver}, sent : ${message}`);
    }
}

class WhatsAppService extends MailService{
    constructor(sender, isBussines){
        super(sender); // memanggil constructor(sender) pada superclass/parentnya
        this.isBussines = isBussines;
    }

    // overriding method dari superclass (MailService)
    sendMessage(message, receiver){
        console.log(`sender : ${this.sender}, receiver : ${receiver}, sent : ${message} via WhatsApp`);
    }

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
whatsApp.sendMessage("hallo selamat pagi", "+62823467589");
whatsApp.sendBroadCast("WhatsApp Blast", ['+6289876543210', '+6282234567890']);

// objek Email
const email = new EmailService('Kamado');
email.sendMessage("Cuti Bersama", "+62823467589");
email.sendDelayedMessage("mail blast", "+6282346102078", 5000);