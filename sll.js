// OOP

class Car {
    constructor(brand, model, color, price) {
        this.brand = brand;
        this.model = model;
        this.color = color; 
        this.price = price; 
    }

    drive() {
        console.log('DRIVE!!!!')
    }

    push() {
        console.log('stop!!!')
    }
}

const gt63 = new Car('Mercedes', 'GT-63', 'matte-black', '88000')

const arr1 = new Array()
arr1.push(1)

console.log(arr1)


class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }
}