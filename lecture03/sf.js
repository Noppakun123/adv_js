const bookobj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false
};

const bookJSON = JSON.stringify(bookobj);
console.log(bookJSON);
console.log(typeof bookJSON);

const receivedBookobj = JSON.parse(bookJSON);
console.log(receivedBookobj.author);
console.log(typeof receivedBookobj);