const fullName = " Noppakun  Laoimjun  ";

const cleanedName = fullName.trim();
console.log (`Trimmed Name: '${cleanedName}'`);

const nameParts = cleanedName.split(" ");
console.log ("Name Parts:", nameParts);

const finalParts = nameParts.filter(Boolean);
console.log('Filtered Name Parts:', finalParts)

const firstName = finalParts[0];
console.log(`Hello '${firstName}'`)