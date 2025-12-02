// problem 1 -------------------------------------------------------

type FormatValue = string | number | boolean

const formatValue = (fv: FormatValue) => {
    if (typeof fv === 'string') {
        return fv.toUpperCase()
    }
    else if (typeof fv === 'number') {
        return fv * 10
    }
    else if (typeof fv === 'boolean') {
        return !fv
    }

}
// console.log(formatValue('sss'));


// problem 2-------------------------------------------------------
const getLength = (gl: (string | number[])) => {
    return gl.length
}

// console.log(getLength('akash'));

// problem 3-------------------------------------------------------

class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails(): string {
        return `Name: ${this.name} , Age: ${this.age} `
    }
}

const person1 = new Person('akash', 30);

// console.log(person1.getDetails());

// problem 4-------------------------------------------------------

type FilterByRating = { title: string, rating: number }[]

const filterByRating = (books: FilterByRating): FilterByRating => {
    return books.filter(book => book.rating >= 4)
}


const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book B', rating: 4.2 },
    { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


// problem 5-------------------------------------------------------

type User = { id: number, name: string, email: string, isActive: boolean }[]
const filterActiveUsers = (users: User): User => {
    return users.filter(user => user.isActive === true)
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


// problem 6-------------------------------------------------------

type Book = {
    title: string,
    author: string,
    publishedYear: number
    isAvailable: boolean
}


const printBookDetails = (input6: Book) => {
    const {
        title, author, publishedYear, isAvailable, } = input6
    return console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);


// problem 7-------------------------------------------------------

const getUniqueValues = (array1: number[], array2: number[]): number[] => {
    const uniqueValues = array1
    array2.forEach(value => {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value)
        }
    })
    return uniqueValues
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));






