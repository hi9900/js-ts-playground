// void
function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

// never
// 무한 루프 함수
function infiniteLoop(): never {
  while (true) {
    // 무한 루프
  }
}

// 항상 예외를 던지는 함수
function throwError(message: string): never {
  throw new Error(message);
}

let b: never;
// b = 1;        // 에러: never 타입에는 어떤 값도 할당 불가
// b = {};       // 에러
// b = null;     // 에러
// b = undefined; // 에러
