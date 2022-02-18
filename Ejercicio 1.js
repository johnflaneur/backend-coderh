variables = 



class User{
    constructor(name,lastName, books = [], pets = []){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets

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

john.addPet('Búho');
john.addBook({bookName: 'Señor de los Anillos, Las Dos Torres', autor: 'J.R.R Tolkien'});


console.log(`Hola soy ${john.getFullName()}
tengo ${john.countPets()} mascotas y son un ${john.petsNames()[0]}
 y un ${john.petsNames()[1]} siempre me acompañan y están cerca de mí, sobretodo
 cuando me siento a leer un poco de dos libros nuevos que me compré que son: ${john.bookName()[0]} y ${john.bookName()[1]}`)


