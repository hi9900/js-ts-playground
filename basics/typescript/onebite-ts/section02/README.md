# Section 02: TypeScript 기본

## 📚 학습 내용

### 0. 실습 환경 설정

```bash
# Node.js 패키지 초기화
npm init

# @types/node 패키지 설치
npm install @types/node
```

**컴파일러 옵션 설정**

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

```json
// package.json
{
  // ...
  "type": "module"
  // ...
}
```

---

### 1. [원시 타입과 리터럴 타입](./src/chapter01.ts)

> `변수명: 타입 = 값`
>
> 변수 이름 뒤에 콜론(:)과 함께 변수의 타입을 정의하는 이런 문법을 타입 주석 또는 타입 어노테이션(annotation)이라고 부른다.

#### 원시 타입 (Primitive Types)

- 동시에 한 개의 값만 저장할 수 있는 타입
- TypeScript는 JavaScript의 모든 원시 타입을 지원한다.

**1. number 타입**

- 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입
- 정수, 소수, 음수, Infinity, NaN 등

**2. string 타입**

- 문자열을 의미하는 타입
- 쌍따옴표, 작은따옴표, 백틱, 템플릿 리터럴로 만든 모든 문자열을 포함

**3. boolean 타입**

- 참과 거짓만을 저장하는 타입
- true, false

**4. null**

- null 값만 포함하는 타입

**5. undefined**

- undefined 값만 포함하는 타입

> **null 값을 다른 타입의 변수에 할당하기**
>
> strictNullChecks: false 일 때는 null 값을 다른 타입의 변수에 할당할 수 있다.
>
> ```json
> // tsconfig.json
> {
>   "compilerOptions": {
>     // ...
>     "strictNullChecks": false
>     // ...
>   }
> }
> ```
>
> ```typescript
> let num: number = null; // 가능
> let str: string = null; // 가능
> ```
>
> strictNullChecks: true 일 때는 null 값을 다른 타입의 변수에 할당할 수 없다.

#### 리터럴 타입 (Literal Types)

- 특정 값만을 허용하는 타입

### 2. [배열과 튜플](./src/chapter02.ts)

#### 배열 타입 (Array Types)

**기본 배열 선언**

- `타입[]`, `Array<타입>`

**유니온(Union) 타입 배열**

- `(타입1 | 타입2)[]`

**다차원 배열**

- `타입[][]`

#### 튜플 타입 (Tuple Types)

길이와 타입이 고정된 배열

- `[타입1, 타입2, ...]`

### 3. [객체](./src/chapter03.ts)

#### 객체 타입 정의

**기본 객체 타입(`object`)**

- 원시 타입이 아닌 모든 타입을 의미하는 타입
- 객체의 특정 프로퍼티에 접근하려 하면 에러 발생

**객체 리터럴 타입**

- 중괄호 안에 객체가 갖는 프로퍼티를 직접 나열해 만드는 타입

**선택적 프로퍼티(Optional Property)**

- 프로퍼티 뒤에 물음표(`?`)를 붙여 있어도 되고 없어도 되는 프로퍼티로 정의

**읽기 전용 프로퍼티(Readonly Property)**

- 프로퍼티 앞에 `readonly` 키워드를 붙여 읽기 전용으로 만듦

### 4. [타입 별칭과 인덱스 시그니처](./src/chapter04.ts)

#### 타입 별칭 (Type Aliases)

- 복잡한 타입을 재사용하기 위한 방법
- `type 타입_이름 = 타입`

#### 인덱스 시그니처 (Index Signatures)

- 객체 타입에서 키와 값의 타입을 유연하게 정의하는 방법
- `[key : string] : string`, `[index: number]: number`

### 5. [열거형 타입(Enum 타입)](./src/chapter05.ts)

- 자바스크립트에는 존재하지 않고 타입스크립트에서만 사용할 수 있는 타입
- 여러 개의 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

#### 숫자 열거형 (Numeric Enums)

- 값을 지정하지 않으면 0부터 자동 할당
- 값을 지정하면 해당 값부터 1씩 증가된 값으로 자동 할당

#### 문자열 열거형 (String Enums)

- 문자열 값을 할당

> enum은 컴파일 결과 객체가 된다 [소스코드](./dist/chapter05.js)

### 6. [any와 unknown 타입](./src/chapter06.ts)

#### any 타입

- 모든 타입을 허용하는 타입
- 타입 검사를 비활성화한다
- 사용을 지양해야 한다

**any 사용 시나리오**

```typescript
// 1. 점진적 마이그레이션
let legacyCode: any = getLegacyData();

// 2. 동적 콘텐츠
let userInput: any = JSON.parse(jsonString);

// 3. 서드파티 라이브러리 (타입 정의가 없는 경우)
declare var $: any;
```

#### unknown 타입

- any보다 안전한 최상위 타입
- 모든 타입의 값을 저장할 수 있지만, 타입을 확인한 후에만 사용 가능
- 조건문을 통해 특정 타입임을 보장할 수 있게 되면 타입이 자동으로 바뀐다

### 7. [void와 never 타입](./src/chapter07.ts)

#### void 타입

- 아무런 값도 없음을 의미하는 타입
- 함수가 값을 반환하지 않을 때 사용

#### never 타입

- 절대 발생하지 않는 값의 타입
- 무한 루프나 예외를 던지는 함수에 사용
- never로 정의된 변수에는 어떠한 타입의 값도 담을 수 없다.

---
