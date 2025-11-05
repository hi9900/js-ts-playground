---
title: Intro & JS Basics
parent: JS Algorithms
nav_order: 1
---

# 코딩 테스트 개요 및 JavaScript 문법

---

## 0. 개요

지금까지 파이썬(Python)으로 알고리즘을 공부하고 코딩 테스트를 치러왔다. 파이썬은 처음 배운 프로그래밍 언어였고, 그만큼 가장 익숙했기 때문이다.

하지만 프론트엔드 개발자를 준비하는 지금, 자연스럽게 실무와 프로젝트에서 JavaScript와 TypeScript의 비중이 높아졌고, 파이썬은 상대적으로 멀어지게 되었다.

또한 많은 기업이 개발 직무에 사용하는 언어(Stack)로 코딩 테스트 언어를 제한하기 시작했다. 특히 프론트엔드 직무는 JavaScript 로 지정된 경우가 많다.

이에 대비하고자 JavaScript로 알고리즘을 공부하고 코딩 테스트를 준비하려 한다.

---

## 1. 코딩테스트 알아보기

알고리즘 공부를 시작하기 전에, 효율적인 준비를 위한 몇 가지 전략

- 알고리즘 유형별 **'나만의 코드 템플릿'** 만들기
    - 특히 정렬, DFS/BFS, 구현, 완전 탐색, 탐욕(Greedy) 알고리즘 등 대표적인 유형의 기본형 코드를 미리 준비해두면 실전에서 시간을 크게 단축할 수 있다.
- 유형별 핵심 이론 및 **대표 문제 10개 이상** 풀어보기
    - 다양한 문제를 풀며 유형을 익히고, 템플릿을 내 몸에 맞게 최적화하는 과정이 필요하다.

### 시간 복잡도

- 알고리즘 문제 풀이의 핵심은 **시간 복잡도**다. 주어진 제한 시간(보통 1\~5초) 안에 문제를 해결해야 한다.

- 만약 **시간제한이 1초**인 문제를 만났다면, N의 크기에 따라 허용되는 시간 복잡도는 대략 다음과 같다. 이 표를 기준으로 어떤 알고리즘을 선택해야 할지 감을 잡을 수 있다.

| N의 범위          | 허용 시간 복잡도     |
|:---------------|:--------------|
| N ≤ 500        | $O(N^3)$      |
| N ≤ 2,000      | $O(N^2)$      |
| N ≤ 100,000    | $O(N \log N)$ |
| N ≤ 10,000,000 | $O(N)$        |

---

## 2. JavaScript 핵심 문법

알고리즘 문제를 풀 때 자주 사용되는 JavaScript의 기본 문법들을 정리했다.

### 기본 사칙 연산

JavaScript는 기본적인 사칙 연산을 모두 지원한다.
참고: Python과 달리 `//` (정수 나누기) 연산자가 없으므로, 몫을 구할 때는 `parseInt()`나 `Math.floor()`를 사용한다.)

```javascript
a = 7;
b = 3;

console.log(a + b); // 10
console.log(a - b); // 4
console.log(a * b); // 21
console.log(parseInt(a / b)); // 2(몫만 구하기)
console.log(a % b); // 1 (나머지)
```

### 기본 출력

표준 출력에는 `console.log()`를 사용한다. 변수를 포함할 때는 **템플릿 리터럴(Template Literals)**을 사용하는 것이 편리하다.

```javascript
// 단순 문자열 출력
console.log('Hello World!');

result = 35;
// 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함
console.log(`정답은 ${result}입니다.`);
```

### 빠른 출력

반복문 안에서 `console.log()`를 수만 번 호출하면 **시간 초과**가 발생할 수 있다.
이때는 모든 출력 결과를 하나의 문자열에 `\n` (줄바꿈)과 함께 저장한 뒤, 마지막에 한 번만 `console.log()`를 호출하는 것이 훨씬 빠르다.

```javascript
let answer = '';

for (let i = 1; i <= 100; i++) {
  answer += i + '\n'; // 결과를 하나의 문자열에 계속 더하기
}

console.log(answer);
```

### 기본 입력

코딩 테스트에서는 **파일** 또는 **표준 입력**으로 데이터를 받는다.

1. `fs` 모듈 (파일 입출력)

입력 데이터가 `input.txt` 파일로 주어지는 경우, `fs` (File System) 모듈을 사용한다. `readFileSync`로 파일 전체를 읽어와 문자열로 변환한 뒤, 줄바꿈 기호(`\n`)를 기준으로
잘라 배열로 만든다.

```javascript
/*
input.txt 예시:
123
456
789 1000
*/

// fs 모듈을 이용해 파일 전체를 읽어 배열에 저장
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input); // [ '123', '456', '789 1000' ]
```

2. `readline` 모듈 (표준 입력)

사용자로부터 한 줄씩 입력을 받아 처리할 때는 `readline` 모듈을 사용한다.

```javascript
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function(line) {
  // 콘솔에서 줄바꿈(Enter)을 입력할 때마다 이 이벤트가 발생
  input.push(line);
}).on('close', function() {
  // Ctrl+D 또는 Ctrl+C로 입력 종료 시 이 이벤트가 발생
  console.log(input); // 입력받은 모든 줄이 배열로 저장됨
  process.exit();
});
```

### 조건문

`if`, `else if`, `else`를 사용해 프로그램의 흐름을 제어한다.

```javascript
/*
condition: 참 혹은 거짓을 반환하는 조건식
statement1: condition1이 참일때 실행되는 구문
statement2: condition1이 거짓이고, condition2가 참일때 실행되는 구문
statementN: 앞의 모든 조건문이 거짓을 때 실행되는 구문
 */

if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
}
// ...
else {
  statementN;
}
```

### for 반복문

정해진 횟수만큼 코드를 반복할 때 사용한다.

```javascript
/*
- 초기문이 존재한다면 초기문이 먼저 실행된다.
- 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료된다.
- 블록 내부 코드가 실행된 뒤에 증감문이 실행된다.
 */
for (초기문; 조건문; 증감문) {
  // statements
}

// 예시: 1부터 100까지의 합 계산
let summary = 0;
for (let i = 1; i <= 100; i++) {
  summary += i;
}
console.log(summary);  // 5050
```

### while 반복문

특정 조건이 참인 동안 코드를 계속 반복할 때 사용한다.

```javascript
/*
- while문은 조건문이 참일 때 실행되는 반복문이다.
- 블록 내부의 코드가 실행되기 전에 참 혹은 거짓을 판단한다.
 */
while (조건문) {
  // statements
}
```

### 자료형 변환 (String ↔ Number)

입력값은 대부분 문자열(String)로 들어오기 때문에, 계산을 위해 숫자(Number)로 변환하는 과정이 필수적이다.

```javascript
/* String -> Number (문자열을 숫자로) */
let a = '777';
let b = Number(a);
console.log(b); // 777 (Number 타입)

/* Number -> String (숫자를 문자열로) */
let c = 777;
let d = String(c);
console.log(d); // "777" (String 타입)
```

### Array.prototype.reduce()

`reduce()`는 배열의 모든 원소를 순회하며 **하나의 결과값**을 만들 때 유용하다. (예: 총합, 최댓값/최솟값 등)

```javascript
/*
reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환한다.
reducer 함수 형태: (누적값(acc), 현재값(cur)) => (다음 누적값)
 */
let data = [2, 6, 3, 8, 4];

// 예제 1: 원소의 합계 구하기
let summary = data.reduce((acc, cur) => acc + cur, 0); // 초기값 0
console.log(summary); // 23

// 예제 2: 최솟값 구하기
let minValue = data.reduce((acc, cur) => Math.min(acc, cur));
console.log(minValue); // 2
```

### 배열 초기화

알고리즘 문제에서는 특정 크기와 값으로 배열을 초기화해야 할 때가 많다.

```javascript
// 1. 직접 값을 설정하여 초기화
let arr = [1, 2, 3, 4, 5];

// 2. 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr2 = new Array(5).fill(0);
console.log(arr2); // [ 0, 0, 0, 0, 0 ]
```

### 집합 자료형 (Set)

`Set`은 **중복 없는 유일한 값**들을 저장하는 자료형이다. 특정 원소의 존재 여부를 $O(1)$에 가깝게 빠르게 확인할 때 유용하다.

```javascript
let mySet = new Set(); // 집합 객체 생성

// 원소 삽입
mySet.add(4);
mySet.add(2);
mySet.add(7);
mySet.add(4); // 중복된 값은 무시됨

console.log(`원소의 개수: ${mySet.size}`); // 3
console.log(`원소 7을 포함하고 있는가: ${mySet.has(7)}`); // true

// 원소 제거
mySet.delete(2);

// 원소를 하나씩 순회하며 출력
for (let item of mySet) {
  console.log(item);
}
// 4
// 7
```

### 소수점 아래 특정 자리에서 반올림

실수를 출력할 때 `toFixed()`를 사용해 소수점 아래 특정 자리까지 반올림하여 문자열로 표현할 수 있다.

```javascript
// toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456;
console.log(x.toFixed(2)); // "123.46" (String 타입)
```

### 이스케이프 시퀀스(Escape Sequence)

따옴표 등 특수 문자를 문자열 안에 표현하기 위해 사용한다.

| 시퀀스  | 의미         |
|:-----|:-----------|
| `\n` | 줄바꿈        |
| `\t` | 탭          |
| `\\` | 역슬래시(`\`)  |
| `\"` | 큰따옴표(`"`)  |
| `\'` | 작은따옴표(`'`) |

---

## 3. JavaScript 입출력 문제 풀이

1. [2557. Hello World](https://www.acmicpc.net/problem/2557)

    - `console.log()` 함수를 이용해 원하는 변수 혹은 상수를 출력할 수 있다.
    - 풀이

    ```javascript
    console.log('Hello World!');
    ```

2. [1000. A+B](https://www.acmicpc.net/problem/1000)

    - 입력받은 문자열 데이터를 정수로 변환한다.
    - 이후 덧셈을 수행한 결과를 출력한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const input = fs.readFileSync('input.txt').toString().split(' ');
    
    let [a, b] = input.map(Number);
    console.log(a + b);
    ```

3. [10998. A x B](https://www.acmicpc.net/problem/10998)

    - 입력받은 문자열 데이터를 정수로 변환한다.
    - 이후 곱셈을 수행한 결과를 출력한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const input = fs.readFileSync('input.txt').toString().split(' ');
    
    let [a, b] = input.map(Number);
    console.log(a * b);
    ```

4. [10869. 사칙연산](https://www.acmicpc.net/problem/10869)

    - 나누기 연산(`/`)을 수행하면 실수 데이터가 반환된다.
    - 몫을 구하기 위해서는 `parseInt()` 함수를 사용한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const input = fs.readFileSync('input.txt').toString().split(' ');
    
    let [a, b] = input.map(Number);
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(parseInt(a / b));
    console.log(a % b);
    ```

5. [2588. 곱셈](https://www.acmicpc.net/problem/2588)

    - 세 자리 수 두 개가 주어진다.
    - 10으로 나눈 나머지와의 곱을 구하고, 10으로 나눈 몫으로 값을 변환한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let [a, b] = input.map(Number);
        
    let result = 0;
    for (let i = 0; i < 3; i++) {
      let ans = a * (b % 10);
      console.log(ans);
      result += ans * 10 ** i;
      b = parseInt(b / 10);
    }
        
    console.log(result);
    ```

    - 다른 풀이
        - 문자열로 처리하여 각 자릿수를 얻는다.
        - 이후 `Number()` 함수를 이용해 각 문자를 정수 데이터로 변환한다.

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');

    let [a, b] = input;

    x_1 = b[2]; // 일의자리
    x_2 = b[1]; // 십의자리
    x_3 = b[0]; // 백의자리

    console.log(Number(a) * Number(x_1));
    console.log(Number(a) * Number(x_2));
    console.log(Number(a) * Number(x_3));
    console.log(Number(a) * Number(b));
    ```

---

## 4. JavaScript 조건문 문제 풀이

1. [9498. 시험 성적](https://www.acmicpc.net/problem/9498)

    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
      
    const score = Number(input[0]);
      
    if (score >= 90) {
      console.log('A');
    } else if (score >= 80) {
      console.log('B');
    } else if (score >= 70) {
      console.log('C');
    } else if (score >= 60) {
      console.log('D');
    } else {
      console.log('F');
    }
    ```

2. [2884. 알람 시계](https://www.acmicpc.net/problem/2884)

    - 현재 시각이 주어질 때, 45분을 감소시킨다.
    - 0분보다 작아지면, 시(hour)가 1시간 감소한다.
    - 0시보다 작아지면, 시가 23시로 초기화된다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const input = fs.readFileSync('input.txt').toString().split(' ');
        
    let [h, m] = input.map(Number);
        
    if (m - 45 < 0) {
      h -= 1;
      if (h < 0) {
        h += 24;
      }
      m = 60 + (m - 45);
    } else {
      m -= 45;
    }
        
    console.log(h, m);
    ```

3. [2525. 오븐 시계](https://www.acmicpc.net/problem/2525)

    - 입력 시각과 소요 시간(분 단위)이 주어질 때, 입력된 분(min)에 소요 시간을 추가한다.
    - 60분 보다 커지면, 시에 60으로 나눈 몫을 추가한다.
    - 24시보다 커지면, 0시로 초기화된다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let [a, b] = input[0].split(' ').map(Number);
    let c = Number(input[1]);
        
    if (b + c >= 60) {
      a += parseInt((b + c) / 60);
      b = (b + c) % 60;
    } else {
      b += c;
    }
        
    if (a >= 24) {
      a -= 24;
    }
        
    console.log(a, b);
    ```

    - 다른 풀이
        - 입력으로 주어진 시각을 “분” 형태로 바꾼 뒤 소요 시간을 추가한다.
        - 24시를 넘지 않도록 (60*24) 로 나눈 나머지 값으로 사용한다.
        - “분” 형태를 60으로 나눠 몫과 나머지로 시와 분을 구한다.

        ```javascript
        const fs = require('fs');
        // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
        const input = fs.readFileSync('input.txt').toString().split('\n');
       
        let [a, b] = input[0].split(' ').map(Number);
        let c = Number(input[1]);
       
        let totalMinute = a * 60 + b + c;
        totalMinute %= 60 * 24;
        let hour = parseInt(totalMunute / 60);
        let minute = totalMinute % 60;
       
        console.log(hour, minute);
        ```

4. [2480. 주사위 세개](https://www.acmicpc.net/problem/2480)

    - 주사위 3개의 값을 비교해 조건 별로 결과를 출력한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let [a, b, c] = input[0].split(' ').map(Number);
        
    if (a === b) {
      if (a === c) {
        console.log(10000 + a * 1000);
      } else {
        console.log(1000 + a * 100);
      }
    } else if (b === c) {
      if (b === a) {
        console.log(10000 + b * 1000);
      } else {
        console.log(1000 + b * 100);
      }
    } else if (a === c) {
      if (a === b) {
        console.log(10000 + a * 1000);
      } else {
        console.log(1000 + a * 100);
      }
    } else {
      console.log(Math.max(a, b, c) * 100);
    }
    ```

---

## 5. JavaScript 반복문 문제 풀이

1. [8393. 합](https://www.acmicpc.net/problem/8393)

    - 자연수 N의 최대값은 10,000이다.
    - 따라서, 단순히 1부터 N까지의 값을 차례대로 더해도 괜찮다.
    - 이 경우 시간복잡도는 O(N)이다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let n = Number(input[0]);
        
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    console.log(result);
    ```

    - 다른 풀이
        - 단순히 등차수열의 합 공식을 이용할 수 있다.
        - 등차수열의 제 1항부터 제 N항까지의 합을 S(N)이라고 하자.
        - 첫째 항이 a, 마지막 항이 l 일 때 `S(N) = N(a+l)/2`

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
      
    let n = Number(input[0]);
      
    console.log(n * (n + 1) / 2);
    ```

2. [2739. 구구단](https://www.acmicpc.net/problem/2739)

    - 단순히 1단부터 N단까지 반복 문법을 이용한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let n = Number(input[0]);
        
    for (let i = 1; i <= 9; i++) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
    ```

3. [2438. 별 찍기 - 1](https://www.acmicpc.net/problem/2438)

    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let n = Number(input[0]);
        
    for (let i = 1; i <= n; i++) {
      console.log('*'.repeat(i));
    }
    ```

4. [15552. 빠른 A + B](https://www.acmicpc.net/problem/15552)

    - 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤, 한꺼번에 문자열을 출력한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    let T = Number(input[0]);
    let result = '';
        
    for (let i = 0; i < T; i++) {
      let [a, b] = input[i + 1].split(' ').map(Number);
      result += a + b + '\n';
    }
        
    console.log(result);
    ```

---

## 6. JavaScript 배열 문제 풀이

1. [10818. 최소, 최대](https://www.acmicpc.net/problem/10818)

    - 배열의 원소를 순회하며 최댓값과 최솟값을 찾는다.
    - 원소를 차례대로 하나씩 확인하므로, 시간 복잡도는 O(N)
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const n = Number(input[0]);
    const arr = input[1].split(' ').map(Number);
        
    let minNumber = 1_000_000;
    let maxNumber = -1_000_000;
        
    for (let i = 0; i < n; i++) {
      minNumber = Math.min(minNumber, arr[i]);
      maxNumber = Math.max(maxNumber, arr[i]);
    }
        
    console.log(minNumber, maxNumber);
    ```

    - `Math.max`, `Math.min` 에 배열을 스프레드 연산자로 풀어서 넣을 수 있다.

    ```javascript
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    ```

2. [2562. 최댓값](https://www.acmicpc.net/problem/2562)

    - 배열의 원소를 순회하며 최댓값과 그 인덱스를 찾는다.
    - 가장 큰 값을 가지는 원소의 인덱스를 업데이트한다.
    - 원소를 차례대로 하나씩 확인하므로, 시간 복잡도는 O(N)
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const arr = input.map(Number);
    let maxNumber = 0;
    let maxIndex = 0;
        
    for (let i = 0; i < 9; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        maxIndex = i + 1;
      }
    }
        
    console.log(maxNumber);
    console.log(maxIndex);
    ```

    - 다른 풀이
        - `Math.max`와 `Array.indexOf` 활용

   ```javascript
    const arr = input.map(Number);
    let maxNumber = Math.max(...arr);
    let maxIndex = arr.indexOf(maxNumber) + 1
    ```

3. [3052. 나머지](https://www.acmicpc.net/problem/3052)

    - 각 원소를 순회하며 42로 나눈 나머지를 차례대로 집합에 추가한다.
    - 원소를 차례대로 하나씩 확인하므로, 시간 복잡도는 O(N)

    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const arr = input.map(Number);
    let mySet = new Set();
    for (let i = 0; i < 10; i++) {
      mySet.add(arr[i] % 42);
    }
        
    console.log(mySet.size);
    ```

4. [4344. 평균은 넘겠지](https://www.acmicpc.net/problem/4344)

    - N개의 원소에 대한 평균 값을 계산한다. O(N)
    - 다시 N개의 원소를 하나씩 확인하여 평균 이상인지 확인한다. O(N)
    - 전체 시간 복잡도는 O(N)
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const c = Number(input[0]);
        
    for (let i = 1; i < c + 1; i++) {
      const [n, ...score] = input[i].split(' ').map(Number);
        
      // 평균
      const sumScore = score.reduce((acc, cur) => acc + cur, 0);
      const avg = sumScore / n;
        
      // 평균이 넘는 학생
      let students = 0;
      for (let j = 0; j < n; j++) {
        if (score[j] > avg) {
          students++;
        }
      }
        
      console.log(`${((students / n) * 100).toFixed(3)}%`);
    }
    ```

5. [1546. 평균](https://www.acmicpc.net/problem/1546)

    - 최댓값을 계산한 후
    - 각 값을 하나씩 확인하여 새로운 값의 평균을 구한다.
    - 시간 복잡도는 O(N)
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const n = Number(input[0]);
    const score = input[1].split(' ').map(Number);
        
    // 최댓값
    let maxScore = score.reduce((acc, cur) => Math.max(acc, cur));
        
    let sumNewScore = 0;
    for (let i = 0; i < n; i++) {
      sumNewScore += (score[i] / maxScore) * 100;
    }
    console.log(sumNewScore / n);
    ```

---

## 7. JavaScript 문자열 문제 풀이

1. [11720. 숫자의 합](https://www.acmicpc.net/problem/11720)

    - 각 문자를 하나씩 잘라 정수로 변환한다.
    - 정수로 변환된 각 값을 모두 더한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const n = Number(input[0]);
    const numbers = input[1].split('').map(Number);
        
    let sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log(sumNumbers);
    ```

2. [2675. 문자열 반복](https://www.acmicpc.net/problem/2675)

    - 문자열을 하나씩 순회하며 각각 R번 반복한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const t = Number(input[0]);
        
    for (let i = 1; i < t + 1; i++) {
      let [r, s] = input[i].split(' ');
      r = Number(r);
        
      let result = '';
      for (let j = 0; j < s.length; j++) {
        result += s[j].repeat(r);
      }
        
      console.log(result);
    }
    ```

3. [2908. 상수](https://www.acmicpc.net/problem/2908)

    - 세 자리수를 문자열 형태로 처리하여 뒤집는다.
    - 뒤집은 수의 최댓값을 출력한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const [a, b] = input[0].split(' ');
        
    let revA = a.split('').reduce((acc, cur) => cur + acc, '');
    let revB = b.split('').reduce((acc, cur) => cur + acc, '');
        
    revA = Number(revA);
    revB = Number(revB);
    console.log(Math.max(revA, revB));
    ```

4. [1316. 그룹 단어 체커](https://www.acmicpc.net/problem/1316)

    - 각 문자를 하나씩 확인하여 연속하지 않고 등장하는 지 체크한다.
    - 풀이

    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const n = Number(input[0]);
    let result = n;
        
    for (let i = 1; i < n + 1; i++) {
      const word = input[i];
        
      for (let j = 0; j < word.length; j++) {
        if (word.slice(j + 1).includes(word[j]) && word[j + 1] !== word[j]) {
          result -= 1;
          break;
        }
      }
    }
        
    console.log(result);
    ```

5. [1152. 단어의 개수](https://www.acmicpc.net/problem/1152)

    - 공백으로 구분된 단어의 개수를 센다.

    - 풀이
    ```javascript
    const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const input = fs.readFileSync('input.txt').toString().split('\n');
        
    const strings = input[0].trim().split(' ');
        
    if (strings.length === 1 && strings[0] == '') console.log(0);
    else console.log(strings.length);
    ```

---
