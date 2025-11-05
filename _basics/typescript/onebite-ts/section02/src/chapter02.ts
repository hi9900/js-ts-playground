// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'heeyoung'];
let boolArr: Array<boolean> = [true, false, true];

// union array
let multiArr: (number | string)[] = [1, 'hello'];

// double array
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// tuple
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hello', true];

// tup1.push(1);
// tup1.push(1);
// tup1.push(1);
// tup1.push(1);
