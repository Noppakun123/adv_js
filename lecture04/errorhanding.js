function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n**********Try...Catch*************\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error: ");
    logError(ex);
}

console.log("\n**********Try...Catch...Finally*************\n");

try {
    throw"An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error: ");
    logError(ex);
}

console.log("\n**********Custom Error Object*************\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error: ");  
    logError(ex);
} finally {
    console.log("Code that always runs");
}
