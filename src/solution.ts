// problem 1 -------------------------------------------------------

type FormatValue = string | number | boolean

const formatValue = (input1: FormatValue):FormatValue => {
    if (typeof input1 === 'string') {
        return input1.toUpperCase()
    }
    else if (typeof input1 === 'number') {
        return input1 * 10
    }
    else if (typeof input1 === 'boolean') {
        return !input1
    }else{
        return "The Type is invalid"
    }

}
// console.log(formatValue('sss'));


// problem 2-------------------------------------------------------
const getLength = (value2: (string | any[])):number => {
    if(typeof value2 === 'string'){
        return value2.length
    }
    else if(Array.isArray(value2)){
        return value2.length
    }else{
        return 0
    }
}

console.log(getLength([1,6,9,12]));

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


// problem 8-------------------------------------------------------

type CalculateTotalPrice = {
    name: string,
    price: number,
    quantity: number
    discount?: number
}[]
const calculateTotalPrice = (products: CalculateTotalPrice): number => {
    let totalPrice = 0
    products.forEach(product => {
        const productPrice=product.price* product.quantity
        const discountPrice = product.discount?productPrice*(1-(product.discount/100)) : productPrice
        totalPrice += discountPrice 
    })
    return totalPrice

}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));



