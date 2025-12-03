const istatus = 200

if (istatus === 200) {
    console.log('OK')
} else if (istatus === 400) {
    console.log('error!')
} else {
    console.log('unknow')
}

switch (istatus) {
    case 200:{
        console.log("OK")
        console.log("success")}
        break
    case 400:
        console.log('Bad Request')
        break
    default:
        console.log('Other Status')
}

const result = istatus === 200 ? "OK" : "Not OK"
console.log(result)