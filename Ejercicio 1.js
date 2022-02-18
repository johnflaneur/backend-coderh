variables = 



class User{
    constructor(name,lastName, books = [], pets = []){
        this.name = name
        this.lastName = lastName
        this.books = getBooks(books)
        this.pets = getPets(pets)

    }

    getFullName(){
        return ` ${this.name} ${this.lastName}`;
    }

    addPet(pet){
        return this.pets.push(pet);
    }
    countPets(){
        return this.pets.length;
    }
    petsNames(){
        return this.pets.map(pet => pet);
    }
    addBook(newBook){
        return this.books.push(newBook);
    }

    booksNames(){
        return this.books.map(name => name.bookName)
    }

    };

let Flaneur = new User('John', 'Flaneur', [{bookName: 'Hobbit', autor: 'J.R.R Tolkien'}], ['Gato']);




