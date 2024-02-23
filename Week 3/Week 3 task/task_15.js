const books = [
    {
        title: "JavaScript",
        description: "Fundamental of JavaScript",
        numberOfPages: 34,
        authour: "Adewale Oladele",
        reading: true
    },
    {
        title: "Python",
        description: "Fundamental of Python",
        numberOfPages: 72,
        authour: "John Doe",
        reading: false
    },
    {
        title: "Postman",
        description: "API TESTING USING POSTMAN",
        numberOfPages: 102,
        authour: "David Johnson",
        reading: false
    },
    {
        title: "Cypress with Javascript",
        description: "Web Automation using Cypress",
        numberOfPages: 150,
        authour: "Ibironke Yekinni",
        reading: true
    }
]


    for (let i = 0; i < books.length; i = i+1) {
        const readbook = books[i];
        if (readbook.reading) {
        console.log(readbook);
     }
 }