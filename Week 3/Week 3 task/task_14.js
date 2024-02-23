const books = {
    title: 'Javascript',
    description: 'The Fundamental of JavaScript',
    numberOfPages: 35,
    authour: 'Ayanloye Segun Samson',
    reading: true,
    toggleReadingStatus: function(){
        if (books.reading === false) {
            books.reading = true
        }
        else{
            books.reading = false
        }
    }
}
books.toggleReadingStatus()
console.log(books.reading)