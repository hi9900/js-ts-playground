// void
function func1() {
    return 'hello';
}
function func2() {
    console.log('hello');
}
// never
// 무한 루프 함수
function infiniteLoop() {
    while (true) {
        // 무한 루프
    }
}
// 항상 예외를 던지는 함수
function throwError(message) {
    throw new Error(message);
}
export {};
