function loop1() {
    let fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

const loop2 = () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
    const item = prompt("Enter an item:");
    items.push(item);
    }
    
    for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    }
};

const loop3 = () => {
    const itemString = prompt("Enter 3 items, seperated by commas:");
    const myArray = itemString.split(",");

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
};

const map1 = () => {
    const numString = prompt("Enter comma separated numbers (e.g. 3,1,9):");
    const numArrayAsStrings = numString.split(",");
  
    //
    // Version 1
    // const numArray = [];
    // for (let i = 0; i < numArrayAsStrings.length; i++) {
    //   const s = numArrayAsStrings[i];
    //   const num = Number(s);
    //   numArray.push(num);
    // }
  
    // // Version 2
    // const numArray = numArrayAsStrings.map((s) => {
    //   return Number(s);
    // });
  
     // Version 3
     function convertToNumber(str) {
       return Number(str);
     }
     const numArray = numArrayAsStrings.map(convertToNumber);
  
    // Version 4
    //const numArray = numArrayAsStrings.map(Number);

    console.log(numArray);
  };

const map2 = () => {
    const numbers = [1, 2, 3, 4, 5];

    const doubleNums = (num) => {
        return num * 2;
    }
    const doubled = numbers.map(doubleNums);

    console.log(doubled);
};

const map3 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const changed = [];

    for (let i = 0; i < numbers.length ; i++) {
        if (numbers[i] % 2 === 0) {
            const result = numbers[i] * 2;
            changed.push(result);
        }
        else if (numbers[i] % 2 === 1) {
            const result = numbers[i] * 3;
            changed.push(result);
        }
    }
    console.log(`Original: ${numbers} | Changed: ${changed}`);
};