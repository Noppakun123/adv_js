function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH')

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMEssage = message.toUpperCase();

    return `[${timestamp}] [${eventId}] - ${logMEssage}`
}

const log = createLogEntry('User loging successful');
console.log(log)