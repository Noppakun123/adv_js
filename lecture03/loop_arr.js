const names = ['Justin', 'Sarah', 'Christopher'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('------------');

names.forEach(name => {
    console.log(name);
});

console.log('------------');

names.forEach(myfuchtion);
function myfuchtion(value) {
    console.log(value);
}

console.log('------------');

for(let name of names) {
    console.log(name);
}