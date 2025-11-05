// any
let anyVar = 10;
// anyVar = 'hello'; // 에러: 'string' 형식은 'number' 형식에 할당할 수 없습니다.

let anyVar2: any = 10;
anyVar2 = 'hello';
anyVar2 = true;
anyVar2 = { name: 'test' };

// 모든 프로퍼티와 메서드 접근 가능
anyVar2.foo.bar.baz;
anyVar2.toUpperCase();

// unknown
let unknownVar: unknown = 10;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// unknownVar.toFixed(2); // 에러: 'unknownVar'은(는) 'unknown' 형식입니다.

if (typeof unknownVar === 'number') {
  unknownVar.toFixed(2);
}
