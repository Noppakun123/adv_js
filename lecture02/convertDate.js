const registrationDate = new Date('2025-12-03T10:30:00Z')

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`Formatted Date: ${formattedDate}`);