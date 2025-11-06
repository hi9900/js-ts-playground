---
layout: default
title: Data Structures
parent: JS Algorithms
nav_order: 2
---

# 핵심 자료구조 알아보기

{: .no_toc }

## 목차

{: .no_toc }

- TOC
  {:toc}

---

## 1. 자료구조(Data Structure) 개요

### 자료구조란?

자료구조는 '데이터를 효율적으로 담고 관리하기 위한 구조'이다.

데이터 수가 많아질수록 '어떻게' 저장하고 구성하느냐에 따라 프로그램의 성능이 크게 좌우되기 때문에 효율적인 자료구조가 필요하다.

#### 자료구조의 필요성

> 100만 명의 사용자 정보가 있고, 이 중에서 특정 id를 가진 사용자를 찾는 작업이 하루에 1억 번 발생한다고 가정해보자.

만약 이 데이터를 단순한 배열(Array)에 `[user1, user2, ...]`처럼 아무 순서 없이 저장했다면 어떨까?

원하는 사용자를 찾기 위해 배열을 처음부터 끝까지 훑어야 하므로, 최악의 경우 100만 번의 비교가 필요하다. ($O(N)$)

하지만 `id`를 key로 사용하는 **Map** 객체나 **트리(Tree)** 기반의 구조를 활용한다면, 이 탐색 시간을 $O(1)$이나 $O(\log N)$으로 줄일 수 있다. (Map을 사용하면 거의 1번 만에
찾을 수 있다)

이처럼 자료구조를 제대로 이해하고 상황에 맞게 사용하지 않으면, 불필요한 메모리와 계산(시간)을 낭비하게 된다.

#### 자료구조의 종류

자료구조는 크게 선형 구조와 비선형 구조로 나뉜다.

- **선형 구조 (Linear Data Structure)**
    - 데이터가 일렬로 연속적으로 연결된 구조. 하나의 데이터 뒤에 다른 데이터가 하나만 존재한다.
    - *예: 배열(Array), 연결 리스트(Linked List), 스택(Stack), 큐(Queue)*
- **비선형 구조 (Non-linear Data Structure)**
    - 하나의 데이터 뒤에 여러 개의 데이터가 올 수 있는, 일렬로 정렬되지 않은 구조.
    - *예: 트리(Tree), 그래프(Graph)*

#### 자료구조와 알고리즘의 관계

효율적인 알고리즘을 설계하기 위해서는 문제 상황에 맞는 적절한 자료구조가 선택되어야 한다. 따라서 프로그램을 작성할 때는 자료구조와 알고리즘 모두 고려해야 한다.

### 프로그램의 성능 측정 - 복잡도

알고리즘의 성능은 시간 복잡도와 공간 복잡도로 측정한다.

- **시간 복잡도 (Time Complexity)**: 알고리즘에 사용되는 연산 횟수 (얼마나 '빠른가')
- **공간 복잡도 (Space Complexity)**: 알고리즘에 사용되는 메모리 양 (얼마나 '적게' 쓰는가)

코딩 테스트에서는 보통 시간제한(e.g., 1초)이 중요하므로, **시간 복잡도를 줄이는 것이 최우선**이다. 때로는 메모리를 조금 더 사용하더라도 시간을 단축하는 방법이 흔히 사용된다. (e.g., 동적 계획법,
캐싱)

#### Big-O 표기법

복잡도를 표현할 때는 Big-O 표기법을 사용한다. 데이터의 크기(N)가 증가할 때 연산 횟수(또는 메모리 사용량)가 얼마나 증가하는지를 나타낸다.

Big-O는 '가장 빠르게 증가하는 항만을 고려한다.
(예를 들어, $3N^2 + 2N + 1$ 의 연산이 필요하다면, $N$이 커질수록 $N^2$의 영향력이 압도적이므로 $O(N^2)$라고 표기한다.)

- $O(n)$의 시간 복잡도 예시

```javascript
let n = 10;
let summary = 0;
// n이 커지는 만큼 반복 횟수(summary += i)가 비례하여 증가
for (let i = 0; i < n; i++) {
  summary += i;
}
console.log(summary); // 45
```

- $O(n^2)$의 시간 복잡도 예시

```javascript
let n = 9;
// n이 커지는 만큼 반복 횟수가 '제곱'에 비례하여 증가
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
/*
1 x 1 = 1
...
9 x 9 = 81
*/
```

#### 코딩 테스트 시간 복잡도

일반적으로 연산 횟수가 1억 번을 넘어가면 1초 이상의 시간이 소요된다. (JavaScript는 다른 언어보다 조금 더 느릴 수 있으니, 1억 번을 기준으로 잡는 것이 안전하다.)

만약 N의 크기가 1,000이면,

| 시간 복잡도        | 연산 횟수 (약)           | 1초 내 실행 가능 여부             |
|---------------|---------------------|---------------------------|
| $O(N)$        | 1,000               | **가능**                    |
| $O(N \log N)$ | 10,000              | **가능**                    |
| $O(N^2)$      | 1,000,000 (1백만)     | **경계(입출력/런타임 환경에 따라 다름)** |
| $O(N^3)$      | 1,000,000,000 (10억) | **불가능 (Time Out)**        |

> 만약 N의 최대 범위가 100,000이라면?
> $O(N^2)$ 알고리즘은 약 100억 번의 연산이 필요하므로 시간 초과 발생.
> 이때는 반드시 $O(N \log N)$ 이나 $O(N)$의 알고리즘을 설계해야 한다.

#### 공간 복잡도

코딩 테스트의 메모리 제한은 보통 128MB ~ 512MB이다.

JavaScript에서 숫자(Number)형은 64비트, 즉 8바이트를 차지한다.

- 100만 개의 숫자를 담은 배열: `new Array(1_000_000)`
    - `1,000,000 * 8 바이트 ≈ 8,000,000 바이트 ≈ 8MB`
- 2000 x 2000 크기의 2차원 배열:
    - `2,000 * 2,000 * 8 바이트 ≈ 32,000,000 바이트 ≈ 32MB`

대부분의 경우 메모리보다는 시간이 문제가 되지만, 이처럼 배열의 크기를 어림잡아 메모리 제한을 넘지 않는지 확인하는 습관도 중요하다.

---

## 2. 배열(Array)과 리스트(List)

### 배열(Array)

배열은 가장 기본적인 자료구조로, 데이터를 연속된 메모리 공간에 저장하는 구조를 말한다.

- **인덱스 (Index):** 모든 데이터는 0부터 시작하는 고유한 '주소'(인덱스)를 가진다.
- **빠른 접근 ($O(1)$):** 인덱스를 알면 어떤 원소든 한 번에 접근할 수 있다.

#### 배열의 특징

- **장점:**
    - 인덱스를 통한 빠른 조회 속도($O(1)$).
    - 데이터가 메모리에 연속적으로 모여있어 캐시(Cache) 효율이 좋다.
- **단점:**
    - 크기를 미리 지정해야 하는 경우가 많다. (C, Java 등)
    - 데이터를 중간에 삽입하거나 삭제하는 것이 비효율적($O(N)$)이다.
      (e.g., 100칸짜리 배열의 3번째 칸에 데이터를 넣으려면, 3~99번 칸의 데이터를 모두 한 칸씩 뒤로 밀어야 한다.)

### 연결 리스트(Linked List)

연결 리스트는 이름처럼 데이터(Node)들이 서로 연결된 형태의 자료구조이다. 배열과 달리 데이터가 메모리상에 흩어져 있다.

- **노드 (Node):** 각 노드는 '데이터'와 '다음 노드를 가리키는 포인터(주소)'로 구성된다.
- **느린 접근 ($O(N)$):** 5번째 원소를 찾으려면 1번째(Head) 노드부터 시작해 2, 3, 4번 노드를 순서대로 거쳐가야 한다.
- **특징:**
    - **장점:** 데이터의 삽입과 삭제가 매우 빠르다($O(1)$). (중간의 연결고리만 끊고 새로 이어주면 된다.)
    - **단점:** 특정 원소를 찾는(검색) 속도가 느리다($O(N)$).

> 💡 연결 리스트를 직접 구현해야 할까?
>
> 코딩 테스트 관점에서 JavaScript는 매우 유연한 배열을 제공하기 때문에, 연결 리스트를 직접 구현해야 하는 경우는 거의 없다. 개념만 확실히 이해하고 넘어가도 대부분의 문제를 해결할 수 있다.

### JavaScript의 배열

JavaScript의 배열은 전통적인 배열과 연결 리스트의 장점을 일부 합친 '동적 배열(Dynamic Array)'이다.

- **특징:**
    - `arr[i]`와 같이 인덱스를 사용해 원소에 빠르게 접근할 수 있다. (평균 $O(1)$)
    - `new Array(5)`처럼 크기를 미리 정할 필요 없이, 배열의 용량이 가득 차면 동적으로 크기가 증가한다.
    - `arr.push()` (맨 뒤에 추가)가 매우 빠르다. (평균 $O(1)$)

JavaScript 배열은 내부적으로 스택(Stack)의 기능을 효율적으로 수행할 수 있지만, 큐(Queue)의 기능(맨 앞에서 빼기)은 비효율적이니 주의해야 한다.

> ⚠️ JavaScript 배열은 큐(Queue)로 사용하기 비효율적!
>
> - `arr.push(5)`: 맨 뒤에 원소 추가 (빠름, $O(1)$)
> - `arr.pop()`: 맨 뒤의 원소 제거 (빠름, $O(1)$)
>
> ---
>
> - `arr.unshift(5)`: 맨 앞에 원소 추가 (느림, $O(N)$)
> - `arr.shift()`: 맨 앞의 원소 제거 (느림, $O(N)$)
>
> `shift()`나 `unshift()`를 사용하면, 배열의 모든 원소를 한 칸씩 당기거나 밀어야 하므로 $O(N)$의 시간이 걸린다. 데이터가 많을 때 큐(Queue)가 필요하다면, 배열 대신 다른 방법을
> 사용해야 한다. (e.g., 연결 리스트 직접 구현 또는 특정 알고리즘 사용)

#### JavaScript 배열 초기화

1. 대괄호 사용하기

   대괄호를 이용해 간단히 배열을 생성할 수 있다.

    ```javascript
    // 빈 배열 생성
    let arr = [];
    
    arr.push(7);
    arr.push(8);
    arr.push(9);
    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    /*
    7
    8
    9
    */
    ```

2. 1차원 배열 초기화

   특정 값이나 크기를 가진 배열을 만들 때 유용하다.

    ```javascript
    // 1. 원하는 값을 직접 입력
    let arr1 = [0, 1, 2, 3, 4];
    console.log(arr1); // [0, 1, 2, 3, 4]
    
    // 2. 길이가 5이고 모든 원소가 7인 배열 생성
    let arr2 = Array.from({ length: 5 }, () => 7);
    console.log(arr2); // [7, 7, 7, 7, 7]
    
    // 3. (참고) new Array() 사용법
    let arr3 = new Array(5); // 길이가 5인 빈 배열 [ <5 empty items> ]
    let arr4 = new Array(5).fill(0); // 길이가 5이고 0으로 채워진 배열 [0, 0, 0, 0, 0]
    ```

3. 2차원 배열 초기화

   알고리즘 문제에서 좌표(Grid)를 다룰 때 주로 사용한다.

    ```javascript
    // 1. 원하는 값을 직접 입력
    let arr1 = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    
    // 2. 4x5 크기의 2차원 배열 생성 (0으로 초기화)
    let rows = 4;
    let cols = 5;
    let arr2 = Array.from({ length: rows }, () => new Array(cols).fill(0));
    
    console.log(arr2[1][2]); // 0
    
    // 3. 반복문을 이용한 초기화 (예: i * 3 + j 값으로 채우기)
    let arr3 = new Array(3);
    for (let i = 0; i < arr3.length; i++) {
      arr3[i] = new Array(4); // 3x4 배열 생성
      for (let j = 0; j < arr3[i].length; j++) {
        arr3[i][j] = i * 4 + j;
      }
    }
    console.log(arr3);
    /*
    [
      [ 0, 1, 2, 3 ],
      [ 4, 5, 6, 7 ],
      [ 8, 9, 10, 11 ]
    ]
    */
    ```

#### 유용한 배열 메서드

- `push(value)`: 배열의 맨 뒤에 원소를 추가한다. ($O(1)$)
- `pop()`: 배열의 맨 뒤에 원소를 제거하고 반환한다. ($O(1)$)
- `concat(arr2, ...)`: 여러 배열을 이어 붙인 **새로운 배열**을 반환한다. (원본 불변) ($O(N)$)
- `slice(begin, end)`: `begin` 인덱스부터 `end` 직전 인덱스까지의 원소를 복사한 **새로운 배열**을 반환한다. (원본 불변) ($O(N)$)
- `indexOf(value)`: 특정 값을 가지는 첫 번째 원소의 인덱스를 반환한다. 없으면 -1을 반환한다. ($O(N)$)

```javascript
// concat(): 배열 합치기
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr = arr1.concat(arr2, [6, 7]);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

// slice(begin, end): 배열 자르기
let arrSlice = [1, 2, 3, 4, 5];
let result = arrSlice.slice(2, 4); // index 2부터 4 '전'까지
console.log(result); // [ 3, 4 ]

// indexOf(): 값으로 인덱스 찾기
let arrIndex = [7, 3, 5, 6, 6, 2, 1];
console.log(arrIndex.indexOf(5)); // 2
console.log(arrIndex.indexOf(6)); // 3 (첫 번째 6의 인덱스)
console.log(arrIndex.indexOf(8)); // -1 (값이 없음)
```

---

## 3. 스택(Stack)

### 스택(Stack) 이란?

스택은 **"마지막에 들어온 데이터가 가장 먼저 나가는"** 구조를 말한다. 이를 **LIFO (Last-In, First-Out)** 또는 후입선출(後入先出)이라고 부른다.

- **Push (삽입):** 새로운 원소를 삽입할 때는 마지막 위치에 삽입한다.
- **Pop (추출):** 새로운 원소를 꺼낼 때는 마지막 원소부터 추출한다.

이처럼 스택은 데이터가 들어오는 입구와 나가는 출구가 동일한 자료구조이다.

#### 스택의 시간 복잡도

스택의 핵심 연산은 모두 $O(1)$이다. 왜냐하면 항상 '맨 위(끝)'에서만 작업이 이루어지기 때문에, 데이터의 개수(N)와 상관없이 항상 일정한 속도를 보장한다.

| 연산               | 시간 복잡도 | 설명                       |
|------------------|--------|--------------------------|
| **Push (삽입)**    | $O(1)$ | 스택의 맨 위에 원소를 삽입          |
| **Pop (추출)**     | $O(1)$ | 스택의 맨 위(마지막) 원소를 추출      |
| **Top (확인)**     | $O(1)$ | 스택의 맨 위 원소를 (제거하지 않고) 확인 |
| **isEmpty (확인)** | $O(1)$ | 스택이 비어있는지 확인             |

### 스택 구현하기 - 배열(Array)

JavaScript의 배열의 `push()` (맨 뒤에 추가)와 `pop()` (맨 뒤에서 제거) 연산은 모두 $O(1)$이다. JavaScript의 배열은 그 자체로 스택이므로, 별도 구현 없이 배열을
그대로 사용하면 된다.

```javascript
let stack = [];

// 삽입 (Push)
stack.push(5); // stack: [5]
stack.push(2); // stack: [5, 2]
stack.push(3); // stack: [5, 2, 3]
stack.push(7); // stack: [5, 2, 3, 7]

// 추출 (Pop)
stack.pop();   // 7 제거. stack: [5, 2, 3]

// 삽입 (Push)
stack.push(1); // stack: [5, 2, 3, 1]
stack.push(4); // stack: [5, 2, 3, 1, 4]

// 추출 (Pop)
stack.pop();   // 4 제거. stack: [5, 2, 3, 1]

// ---------------------------------
// 스택의 현재 상태: [5, 2, 3, 1]
// ---------------------------------

// Top (최상위 원소 확인)
// : 배열의 마지막 인덱스(length - 1)를 확인
console.log(stack[stack.length - 1]); // 1

// 스택의 최상단(나중에 들어온) 원소부터 출력
// :원본을 보존하기 위해 .slice()로 복사 후 .reverse()
let reversed = stack.slice().reverse();
console.log(reversed); // [ 1, 3, 2, 5 ]

// 스택의 현재(바닥부터) 상태
console.log(stack); // [ 5, 2, 3, 1 ]

```

> 💡 참고: 연결 리스트로 스택 구현하기
>
> 이론적으로 스택은 연결 리스트(Linked List)로도 구현할 수 있다. 데이터가 들어오고 나가는 '머리(head)' 포인터만 관리하면, 삽입/삭제 모두 $O(1)$로 동일하게 동작한다.
>
> - 삽입(push): 머리(head) 위치에 데이터를 넣는다.
> - 추출(pop): 머리 위치에서 데이터를 꺼낸다.
>
> 하지만 코딩 테스트 환경에서는 JavaScript 배열을 사용하는 것이 훨씬 간단하고 효율적이므로, 연결 리스트 구현은 "이렇게도 가능하다" 정도로만 알아두자.

### 스택은 언제 사용할까?

스택은 LIFO 특성 때문에 '되돌아가기'가 필요하거나, '가장 최근의 것'을 처리해야 할 때 유용하다.

- 웹 브라우저의 '뒤로 가기' 버튼: 현재 페이지를 Push, 뒤로 가기를 누르면 Pop
- 프로그램의 함수 호출 (콜 스택): 함수A가 함수B를 부르고, 함수B가 함수C를 부르면 스택에는 `[A, B, C]` 순서로 쌓인다. C가 끝나면 Pop, B가 끝나면 Pop...
- 알고리즘: 깊이 우선 탐색 (DFS): "갈 수 있는 데까지 일단 가보고, 막히면 돌아온다"는 DFS의 '되돌아오기' 특성이 스택과 완벽하게 일치한다.
- 괄호 짝 맞추기: `(()())` 같은 문자열의 괄호가 유효한지 검사할 때 스택을 사용한다.

---

## 4. 큐(Queue)

### 큐(Queue)란?

큐는 **"먼저 삽입된 데이터가 먼저 추출되는"** 자료구조이다. 이를 **FIFO (First-In, First-Out)** 또는 선입선출(先入先出)이라고 부른다.

### 큐 구현하기

#### JavaScript 배열로 큐를 만들면?

스택은 JavaScript 배열의 `push()`, `pop()`을 이용해 $O(1)$로 완벽하게 구현할 수 있었다. 큐를 배열로 구현하면 어떻게 될까?

- **Enqueue (삽입):** `arr.push(data)` (맨 뒤에 데이터 추가)
    - 이 연산은 $O(1)$로 빠르다.
- **Dequeue (추출):** `arr.shift()` (맨 앞에서 데이터 제거)
    - `shift()`는 첫 번째 원소를 제거한 뒤, **뒤에 있는 모든 원소를 한 칸씩 앞으로 당겨온다.**
    - 데이터가 N개일 때, 이 연산은 $O(N)$의 시간 복잡도를 가진다.

만약 N이 100,000인데 `shift()`를 100,000번 반복한다면? $O(N^2)$의 시간이 걸려 100% **시간 초과**가 발생한다.

#### 효율적인 큐 구현하기

삽입/삭제를 모두 $O(1)$을 보장하는 방법은 두 가지이다.

1. 연결 리스트(Linked List)

   연결 리스트로 큐를 구현하면, 두 개의 포인터(`head`와 `tail`)를 사용해 $O(1)$을 보장할 수 있다.

    - **Head 포인터:** 남아있는 원소 중 가장 먼저 들어온 데이터(출구)를 가리키는 포인터
    - **Tail 포인터:** 남아있는 원소 중 가장 마지막에 들어온 데이터(입구)를 가리키는 포인.
    - **Enqueue (삽입):** `tail`이 가리키는 노드에 새 노드를 연결하고 `tail` 포인터를 갱신한다. ($O(1)$)
    - **Dequeue (추출):** `head`가 가리키는 노드를 제거하고 `head` 포인터를 다음 노드로 갱신한다. ($O(1)$)

2. 객체(Object)와 두 개의 인덱스 사용

   코딩테스트에서 매번 연결 리스트를 구현하는 것은 번거롭다. JavaScript에서는 객체(Object)를 사용해 $O(1)$의 성능을 내는 큐를 간단히 구현할 수 있다.

    - 배열의 `shift()`처럼 원소를 실제로 '제거'하고 '당겨오는' 작업을 하지 않는다.
    - `headIndex`와 `tailIndex`라는 두 개의 인덱스(포인터)만 사용한다.
    - `enqueue` 시: `tailIndex`를 키(key)로 객체에 값을 저장하고 `tailIndex`를 1 증가시킨다.
    - `dequeue` 시: `headIndex`를 키(key)로 객체에서 값을 읽어온 뒤, `headIndex`를 1 증가시킨다.
    - 이때 `delete` 연산자로 사용이 끝난 `headIndex`의 데이터를 삭제해주면 메모리 효율도 챙길 수 있다.

#### JavaScript 큐 구현 코드

아래는 객체(Object) 기반의 큐 클래스이다.

```javascript
class Queue {
  constructor() {
    this.items = {}; // 데이터를 저장할 객체
    this.headIndex = 0; // 맨 앞 원소(출구)를 가리킬 인덱스
    this.tailIndex = 0; // 맨 뒤 원소(입구)를 가리킬 인덱스
  }

  // 큐의 맨 뒤에 데이터를 추가 (O(1))
  enqueue(item) {
    this.items[this.tailIndex] = item; // tailIndex를 key로 사용해 값 저장
    this.tailIndex++; // tailIndex를 1 증가시켜 다음 입구 준비
  }

  // 큐의 맨 앞에서 데이터를 제거 (O(1))
  dequeue() {
    // 큐가 비어있으면 undefined 반환 (길이로 체크)
    if (this.headIndex === this.tailIndex) {
      return undefined;
    }

    const item = this.items[this.headIndex]; // headIndex의 아이템 추출
    delete this.items[this.headIndex]; // 메모리 최적화를 위해 사용한 key 삭제
    this.headIndex++; // headIndex를 1 증가시켜 다음 출구 준비
    return item;
  }

  // 큐의 맨 앞 데이터를 확인 (제거 X)
  peek() {
    return this.items[this.headIndex];
  }

  // 큐의 현재 길이 반환 (O(1))
  getLength() {
    return this.tailIndex - this.headIndex;
  }

  // 큐가 비어있는지 확인 (O(1))
  isEmpty() {
    return this.getLength() === 0;
  }
}
```

### 큐는 언제 사용할까?

큐는 FIFO 특성상 '순서대로 처리'해야 하는 작업에 사용된다.

- **너비 우선 탐색 (BFS, Breadth-First Search):**
    - 그래프 탐색 시, 현재 정점에서 갈 수 있는 모든 정점을 '일단 큐에 넣고' 순서대로 방문할 때 사용된다. (스택이 DFS라면, **큐는 BFS**다.)
- **시뮬레이션:** 대기열이 필요한 모든 종류의 시뮬레이션 문제
- **캐시(Cache) 구현:** (e.g., LRU 캐시의 기본 로직에 활용)

---

## 5. 트리(Tree)와 우선순위 큐(Priority Queue)

### 트리(Tree)란?

트리는 이름처럼 **나무를 거꾸로 뒤집어 놓은 형태**의 자료구조다. 단순한 순서가 아닌, 계층적인 구조(부모-자식)를 표현할 때 사용된다. (e.g., 조직도, 폴더 구조, 가계도)

#### 트리 용어 정리

트리를 이해하려면 몇 가지 기본 용어를 알아야 한다.

- **루트 노드 (Root Node):** 트리의 최상위 노드 (부모가 없는 노드)
- **단말 노드 (Leaf Node):** 자식이 없는 노드 (트리의 가장 아래쪽 노드)
- **부모/자식 관계:** 노드 A가 노드 B를 가리킬 때 A를 부모, B를 자식이라고 한다.
- **깊이 (Depth):** 루트 노드에서 특정 노드까지의 거리(간선 수)
- **높이 (Height):** 루트 노드에서 가장 깊은 단말 노드까지의 거리

#### 트리의 종류

- **이진 트리 (Binary Tree):** 각 노드가 최대 2개의 자식 (왼쪽 자식, 오른쪽 자식)만을 가질 수 있는 트리
- **포화 이진 트리 (Full Binary Tree):** 단말(Leaf) 노드를 제외한 모든 노드가 2개의 자식을 가지고 있는 트리
- **완전 이진 트리 (Complete Binary Tree):** 트리의 마지막 레벨을 제외한 모든 레벨이 꽉 차 있고, 마지막 레벨의 노드들은 **왼쪽부터 차례대로** 채워진 트리
- **높이 균형 트리 (Height Balanced Tree):** 모든 노드에 대해, 왼쪽 서브트리의 높이와 오른쪽 서브트리의 높이 차이가 1 이하인 트리 (e.g., AVL 트리)

---

### 우선순위 큐(Priority Queue)

우선순위 큐는 큐(Queue)의 한 종류이다. 하지만 일반 큐(FIFO)와는 작동 방식이 다르다.

- **큐 (Queue):** 먼저 들어온 데이터가 먼저 나간다. (선착순)
- **스택 (Stack):** 나중에 들어온 데이터가 먼저 나간다. (후착순)
- **우선순위 큐 (PQ):** 우선순위가 가장 높은 데이터가 먼저 나간다. (중요도순)

| 자료구조            | 추출되는 데이터            |
|-----------------|---------------------|
| 스택 (Stack)      | 가장 **나중에** 삽입된 데이터  |
| 큐 (Queue)       | 가장 **먼저** 삽입된 데이터   |
| **우선순위 큐 (PQ)** | 가장 **우선순위가 높은** 데이터 |

#### 우선순위 큐 구현하기: 힙 (Heap)

우선순위 큐(개념)는 힙(자료구조)을 이용해 구현한다. "힙(Heap)" 자료구조를 사용하면 삽입과 삭제(추출) 모두 **$O(\log N)$ 라는 매우 빠른 속도를 보장받을 수 있다.

| 구현 방식          | 삽입 시간           | 삭제(추출) 시간                   |
|----------------|-----------------|-----------------------------|
| **배열 (Array)** | $O(1)$ (그냥 추가)  | $O(N)$ (전체를 탐색해 최고 우선순위 찾기) |
| **힙 (Heap)**   | **$O(\log N)$** | **$O(\log N)$**             |

### 힙(Heap)이란?

힙(Heap)은 우선순위 큐를 구현하기 위해 고안된 **완전 이진 트리** 기반의 자료구조다.

> 완전 이진 트리 (Complete Binary Tree)란?
> 트리의 마지막 레벨을 제외한 모든 레벨이 꽉 차 있고, 마지막 레벨의 노드들은 왼쪽부터 차례대로 채워진 이진 트리를 말한다.
>

힙은 항상 특정 '힙 속성'을 만족해야 한다.

- **최대 힙 (Max Heap):**
    - 부모 노드의 값이 **자식 노드의 값보다 항상 크거나 같다.**
    - 루트 노드는 항상 트리의 **최댓값**이다.
    - 값이 클수록 우선순위가 높다.
- **최소 힙 (Min Heap):**
    - 부모 노드의 값이 **자식 노드의 값보다 항상 작거나 같다.**
    - 루트 노드는 항상 트리의 **최솟값**이다.
    - 값이 작을수록 우선순위가 높다.

#### 힙의 동작 (삽입/삭제)

힙은 원소의 삽입과 삭제에 대해 $O(\log N)$의 수행 시간을 요구한다.

1. **삽입 (Insert):**
    1. 새로운 데이터를 **완전 이진 트리의 맨 마지막 위치**(왼쪽부터)에 추가한다.
    2. 새 데이터와 부모 노드를 비교하며 '힙 속성'에 맞을 때까지 **위로(Up-Heap)** 교환한다. (Heapify-up)
    3. 트리의 높이($\log N$)만큼만 비교/교환하므로 $O(\log N)$이다.
2. **삭제 (Delete - 루트 노드 추출):**
    1. 루트 노드(최댓값/최솟값)를 제거한다.
    2. 트리의 **맨 마지막 노드**를 루트 자리로 가져온다.
    3. 자식 노드와 비교하며 '힙 속성'에 맞을 때까지 **아래로(Down-Heap)** 교환한다. (Heapify-down)
    4. 마찬가지로 트리의 높이만큼만 비교/교환하므로 $O(\log N)$이다.

이처럼, N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하며, 이를 힙 정렬(Heap Sort)이라고 부르고 $O(N \log N)$의 시간 복잡도를 가진다.

### JavaScript와 우선순위 큐

JavaScript는 기본적으로 우선순위 큐를 라이브러리로 제공하지 않는다.

따라서 다익스트라(Dijkstra) 최단 경로, 최소 신장 트리(MST) 등 힙이 필수적인 알고리즘을 풀 때는, 직접 구현하거나 검증된 라이브러리 코드를 가져와 사용해야 한다.

아래는 배열을 기반으로 힙(Heap)을 구현한 우선순위 큐의 한 예시이다.

- 우선순위 큐 구현 예시 소스코드

```javascript
// 우선순위 큐 (Max Heap)
function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

// 기본 비교 함수 (Max Heap 기준)
PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b; // a가 b보다 크면 양수 (Max Heap)
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};

PriorityQueue.prototype.isEmpty = function() {
  return this.size() === 0;
};

PriorityQueue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0]; // 루트 노드
};

// 삭제 (Dequeue) - Down-Heap
PriorityQueue.prototype.deq = function() {
  var first = this.peek(); // 루트 노드 (반환할 값)
  var last = this._elements.pop(); // 맨 마지막 노드
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last; // 루트 자리에 마지막 노드 삽입
  var current = 0; // 루트에서 시작

  // 자식 노드와 비교하며 아래로 내려감
  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    // 왼쪽 자식과 비교
    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }
    // 오른쪽 자식과 비교
    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }
    // 현재 노드가 자식들보다 크면(largest === current) 멈춤
    if (largest === current) break;

    this._swap(largest, current); // 자식이 더 크면 교환
    current = largest; // 인덱스를 더 컸던 자식으로 이동
  }
  return first;
};

// 삽입 (Enqueue) - Up-Heap
PriorityQueue.prototype.enq = function(element) {
  var size = this._elements.push(element);
  var current = size - 1; // 새로 삽입된 노드 인덱스

  // 부모 노드와 비교하며 위로 올라감
  while (current > 0) {
    var parent = Math.floor((current - 1) / 2); // 부모 인덱스

    // _compare(current, parent) <= 0 이면 (자식이 부모보다 작거나 같으면) 멈춤
    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current); // 자식이 더 크면 부모와 교환
    current = parent; // 인덱스를 부모로 이동
  }
  return size;
};

PriorityQueue.prototype.size = function() {
  return this._elements.length;
};

PriorityQueue.prototype._compare = function(a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

PriorityQueue.prototype._swap = function(a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};
```

- 사용 예시

  위 구현체를 가져온 뒤, 다음과 같이 사용할 수 있다.

```javascript
// (위의 PriorityQueue 코드가 있다고 가정)

// 1. 최대 힙 (Max Heap) 예시
// (a, b) => a - b : a가 크면 양수 -> Max Heap
let maxHeap = new PriorityQueue(function(a, b) {
  return a.cash - b.cash;
});

maxHeap.enq({ cash: 250, name: 'Valentina' });
maxHeap.enq({ cash: 300, name: 'Jano' }); // 300이 가장 큼
maxHeap.enq({ cash: 150, name: 'Fran' });

console.log(maxHeap.size()); // 3
console.log(maxHeap.peek()); // { cash: 300, name: 'Jano' } (최댓값)
console.log(maxHeap.deq()); // { cash: 300, name: 'Jano' } (최댓값 추출)
console.log(maxHeap.size()); // 2
console.log(maxHeap.peek()); // { cash: 250, name: 'Valentina' } (다음 최댓값)

// 2. 최소 힙 (Min Heap) 예시
// (a, b) => b - a : b가 크면 양수 -> Min Heap
let minHeap = new PriorityQueue(function(a, b) {
  return b.cash - a.cash;
});

minHeap.enq({ cash: 250, name: 'Valentina' });
minHeap.enq({ cash: 300, name: 'Jano' });
minHeap.enq({ cash: 150, name: 'Fran' }); // 150이 가장 작음

console.log(minHeap.peek()); // { cash: 150, name: 'Fran' } (최솟값)
```

---

## 6. 그래프(Graph)와 표현 방식

### 그래프(Graph)란?

그래프는 정점(Vertex 또는 Node)과 이들을 연결하는 간선(Edge)으로 구성된 자료구조다.

복잡한 실제 세계의 문제를 모델링하는 데 사용된다.

- **지하철 노선도:** 정점(역), 간선(노선)
- **소셜 네트워크:** 정점(사람), 간선(친구 관계)
- **도로망:** 정점(교차로), 간선(도로)

그래프를 구현하는 방식은 크게 두 가지가 있다.

1. **인접 행렬 (Adjacency Matrix):** 2차원 배열 사용
2. **인접 리스트 (Adjacency List):** 리스트(배열)의 배열 사용

### 인접 행렬 (Adjacency Matrix)

인접 행렬은 **V x V 크기의 2차원 배열** (V는 정점의 개수)을 이용해 그래프를 표현하는 방식이다.

`graph[A][B]`의 값은 "정점 A에서 B로 가는 간선"의 정보를 담는다.

#### 1) 무방향 무가중치 그래프

- **무방향 (Undirected):** A와 B가 연결되어 있다면, A→B와 B→A가 모두 성립한다.
- **무가중치 (Unweighted):** 간선에 비용(가중치)이 없다.
- **표현:** `graph[A][B] = 1` (연결됨), `graph[A][B] = 0` (연결 안 됨)
- **특징:** A→B와 B→A가 같으므로, 행렬은 **주대각선을 기준으로 대칭**이다.

```javascript
/*
  그래프 예시 (정점 4개: 0, 1, 2, 3)
  0 -- 1
  |  /
  2 -- 3
*/

// 인접 행렬
//       0  1  2  3 (To)
let graph = [
  /* 0 */[0, 1, 1, 0],
  /* 1 */[1, 0, 1, 0],
  /* 2 */[1, 1, 0, 1],
  /* 3 */[0, 0, 1, 0]
];
```

#### 2) 방향 가중치 그래프

- **방향 (Directed):** A→B가 성립해도 B→A는 성립하지 않을 수 있다.
- **가중치 (Weighted):** 간선마다 비용(가중치)이 있다.
- **표현:** `graph[A][B] = 7` (A→B로 가는 비용 7)
- **특징:** 간선이 없는 경우는 `0` 또는 `Infinity`로 표현한다. (만약 0이 유효한 가중치라면, `Infinity`를 사용하는 것이 안전하다.)

```javascript
/*
  그래프 예시 (정점 4개: 0, 1, 2, 3)
  1 --(3)--> 0
  0 --(7)--> 2
  1 --(8)--> 2
  2 --(8)--> 1
  3 --(4)--> 2
*/

// 인접 행렬
//       0  1  2  3 (To)
let graph = [
  /* 0 */[0, 0, 7, 0],
  /* 1 */[3, 0, 8, 0],
  /* 2 */[0, 8, 0, 0],
  /* 3 */[0, 0, 4, 0]
];
```

### 인접 리스트 (Adjacency List)

인접 리스트는 '각 정점에 연결된 이웃 정점들의 리스트'를 저장하는 방식이다.

`graph[A]`는 "정점 A에서 출발하여 도달할 수 있는 모든 이웃"의 리스트를 담는다.

#### 1) 무방향 무가중치 그래프

- **표현:** `graph[A]`에 이웃 정점 `B`를 리스트의 원소로 추가한다.
- **특징:** 무방향이므로, `graph[A]`에 `B`를 추가했다면 `graph[B]`에도 `A`를 추가해야 한다.

```javascript
/*
  그래프 예시 (정점 4개: 0, 1, 2, 3)
  0 -- 1
  |  /
  2 -- 3
*/

// 인접 리스트
let graph = [
  /* 0 */ [1, 2],      // 0의 이웃: 1, 2
  /* 1 */ [0, 2],      // 1의 이웃: 0, 2
  /* 2 */ [0, 1, 3],   // 2의 이웃: 0, 1, 3
  /* 3 */ [2]          // 3의 이웃: 2
];
```

#### 2) 방향 가중치 그래프

- **표현:** `graph[A]`에 `[B, weight]` 형태의 배열(튜플) 또는 `{node: B, weight: weight}` 객체를 저장한다.
- **특징:** A→B 방향 간선만 `graph[A]`에 저장한다.

```javascript
/*
  그래프 예시 (정점 4개: 0, 1, 2, 3)
  1 --(3)--> 0
  0 --(7)--> 2
  1 --(8)--> 2
  2 --(8)--> 1
  3 --(4)--> 2
*/

// 인접 리스트 ( [목적지, 가중치] )
let graph = [
  /* 0 */ [[2, 7]],               // 0 -> 2 (비용 7)
  /* 1 */ [[0, 3], [2, 8]],       // 1 -> 0 (비용 3), 1 -> 2 (비용 8)
  /* 2 */ [[1, 8]],               // 2 -> 1 (비용 8)
  /* 3 */ [[2, 4]]                // 3 -> 2 (비용 4)
];
```

### 인접 행렬 vs. 인접 리스트

정점의 수(V), 간선의 수(E)가 주어질 때, 인접 행렬과 인접 리스트의 공간 복잡도와 시간 복잡도는 다음과 같다.

| 기준                           | 인접 행렬 (Adjacency Matrix)             | 인접 리스트 (Adjacency List)           |
|------------------------------|--------------------------------------|-----------------------------------|
| **공간 복잡도**                   | **$O(V^2)$**                         | **$O(V + E)$**                    |
| **간선 연결 확인**<br/>(A와 B가 연결?) | **$O(1)$** <br/> `graph[A][B]` 바로 확인 | **$O(V)$**<br/> `graph[A]` 리스트 순회 |

#### 코딩 테스트 결론: 인접 리스트를 사용하자

그렇다면 코딩 테스트에서 둘 중 무엇을 선택해야 할까? 대부분의 코딩 테스트 문제는 다음과 같은 특징을 가진다.

1. 정점(V)은 많지만, 간선(E)은 그보다 적다.
2. 모든 이웃을 탐색하는 작업(BFS, DFS)이 핵심이다.

결론: 최단 경로, 그래프 탐색 등 대부분의 알고리즘 문제에서는 공간 효율이 좋고 이웃 탐색이 빠른 **인접 리스트**를 사용하는 것이 유리하다.
(단, V가 매우 작고(e.g., V < 400), 간선이 매우 많은 특정 문제에서는 인접 행렬이 유용할 수도 있다.)

---