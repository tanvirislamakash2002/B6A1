
type FormatValue = string | number | boolean

const formatValue = (input1: FormatValue): FormatValue => {
    if (typeof input1 === 'string') {
        return input1.toUpperCase()
    }
    else if (typeof input1 === 'number') {
        return input1 * 10
    }
    else if (typeof input1 === 'boolean') {
        return !input1
    }
    throw new Error('Invalid Input');

}

const getLength = (input2: (string | any[])): number => {
    if (typeof input2 === 'string' || Array.isArray(input2)) {
        return input2.length
    }
    throw new Error('Invalid Input');
}



class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age} `
    }
}





type FilterByRating = { title: string, rating: number }

const filterByRating = (input3: FilterByRating[]): FilterByRating[] => {
    return input3.filter(i => i.rating >= 4)
}






type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive === true)
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


const printBookDetails = (book: Book): void => {
    const { title, author, publishedYear, isAvailable } = book

    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: false,
};


type GetUniqueValues = string | number

const getUniqueValues = (array1: GetUniqueValues[], array2: GetUniqueValues[]): GetUniqueValues[] => {

    const uniqueValues: GetUniqueValues[] = []



    const isAvailable = (array: GetUniqueValues[], value: GetUniqueValues): boolean => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false
    }

    for (let i = 0; i < array1.length; i++) {
        if (!isAvailable(uniqueValues, array1[i])) {

            uniqueValues.push(array1[i])
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (!isAvailable(uniqueValues, array2[i])) {

            uniqueValues.push(array2[i])
        }
    }
    return uniqueValues
}




type CalculateTotalPrice = {
    name: string,
    price: number,
    quantity: number
    discount?: number
}[]


const calculateTotalPrice = (products: CalculateTotalPrice): number => {

    let totalPrice = 0

    products.forEach(product => {

        const productPrice = product.price * product.quantity

        const discountPrice = product.discount ? productPrice * (1 - (product.discount / 100)) : productPrice

        totalPrice += discountPrice

    })

    return totalPrice

}




