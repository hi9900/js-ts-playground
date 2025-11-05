# Section 01: TypeScript 개론

## 📚 학습 내용

### 1. TypeScript 소개

- **타입스크립트의 탄생**

  - Anders Hejlsberg(앤더스 하일스버그)가 개발
  - 2012년 Microsoft에서 발표
  - 오픈소스 프로젝트로 발전

- **TypeScript란?**

  - 자바스크립트의 확장판 (Superset)
  - 정적 타입 시스템을 제공하는 프로그래밍 언어
  - 컴파일 시점에 타입 검사를 수행하여 런타임 오류를 사전에 방지

- **등장 배경**
  - Node.js의 등장으로 자바스크립트의 실행 환경이 확장됨
  - 웹 브라우저 → 웹서버, 모바일앱, 데스크탑 앱 등
  - 자바스크립트의 동적 타입 특성으로 인한 버그 발생 가능성 증가
  - 대규모 프로젝트에서의 코드 안정성과 유지보수성 향상 필요

### 2. 자바스크립트의 한계점과 타입스크립트

#### 자바스크립트의 한계점

- **동적 타입 언어**: 런타임에 타입이 결정되어 예상치 못한 오류 발생
- **타입 안정성 부족**: 변수의 타입이 명확하지 않아 버그 발생 가능성 높음
- **대규모 프로젝트 관리의 어려움**: 코드베이스가 커질수록 유지보수가 어려워짐
- **IDE 지원 한계**: 타입 정보가 없어 자동완성, 리팩토링 등의 도구 지원이 제한적

#### 타입스크립트의 해결책

- **정적 타입 시스템**: 컴파일 시점에 타입 검사 수행
- **타입 안전성**: 명시적인 타입 선언으로 런타임 오류 사전 방지
- **향상된 개발자 경험**: 강력한 IDE 지원 (자동완성, 리팩토링, 오류 검출)
- **점진적 도입**: 기존 JavaScript 코드를 TypeScript로 점진적으로 마이그레이션 가능

> #### 타입 시스템의 종류
>
> **정적 타입 시스템 (Static Type System)**
>
> - **컴파일 시점에 타입 검사**: 코드 실행 전에 타입 오류를 발견
> - **명시적 타입 선언**: 변수, 함수, 클래스의 타입을 명확히 지정
> - **장점**: 런타임 오류 사전 방지, IDE 지원 강화, 코드 가독성 향상
> - **예시 언어**: Java, C++, C#
>
> **동적 타입 시스템 (Dynamic Type System)**
>
> - **런타임에 타입 결정**: 코드 실행 중에 변수의 타입이 결정됨
> - **타입 추론**: 변수에 할당되는 값에 따라 타입이 자동으로 결정
> - **장점**: 유연한 개발, 빠른 프로토타이핑, 간단한 문법
> - **단점**: 런타임 오류 발생 가능성, 타입 관련 버그 디버깅 어려움
> - **예시 언어**: JavaScript, Python, Ruby, PHP
>
> **점진적 타입 시스템 (Gradual Type System)**
>
> - **선택적 타입 사용**: 타입을 명시하거나 생략할 수 있음
> - **기존 코드 호환성**: 동적 타입 코드를 점진적으로 정적 타입으로 전환 가능
> - **하이브리드 접근**: 타입이 있는 부분은 정적 검사, 없는 부분은 동적 검사
> - **장점**: 기존 코드베이스와의 호환성, 점진적 마이그레이션 가능
> - **예시 언어**: TypeScript, Flow (JavaScript), Hack (PHP)

### 3. TypeScript의 동작 원리

#### 일반적인 프로그래밍 언어의 컴파일 과정

- 프로그래밍 언어 → 컴파일러 → 기계어

- **예시**: C, C++, Java 등의 컴파일 언어들은 소스 코드를 기계어로 직접 변환하거나 바이트코드로 변환합니다.

#### JavaScript의 실행 과정

- JavaScript 소스 코드 → AST(추상 문법 트리) → 바이트코드 → 실행

#### TypeScript의 컴파일 과정

- TypeScript 소스 코드 → AST → 타입 검사 → JavaScript 코드 → AST → 바이트코드 → 실행

### 4. 개발 환경 설정 및 Typescript 실행

#### 필수 설치 항목

**1. Node.js 설치**

- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드
- npm(Node Package Manager) 자동 포함
- 설치 확인:
  ```bash
  node -v
  # v20.18.0
  npm -v
  # 11.4.1
  ```

**2. Node.js 패키지 초기화**

```bash
npm init
```

**3. `@types/node` 설치**

- Node.js 내장 기능들의 타입 정보를 담고있는 `@types/node` 패키지를 설치

```bash
# Node.js 내장 기능들의 타입 정보 설치
npm install @types/node
```

**4. TypeScript 컴파일러 설치**

```bash
# 전역 설치 (권장)
npm install -g typescript

# 또는 프로젝트별 설치
npm install -D typescript

# 설치 확인
tsc -v
# Version 5.8.3
```

#### TypeScript 실행 방법

**방법 1: 전통적인 컴파일 후 실행**

1. TypeScript 파일 작성:

   ```typescript
   // src/index.ts
   console.log('Hello, World!');
   ```

2. 컴파일 및 실행:

   ```bash
   # 컴파일
   tsc src/index.ts

   # 컴파일된 JavaScript 파일 실행
   node src/index.js
   # Hello, World!
   ```

**방법 2: TSX를 사용한 직접 실행**

1. TSX 설치:

   ```bash
   npm install -g tsx

   # 설치 확인
   tsx -v
   # tsx v4.20.3
   # node v20.18.0
   ```

2. 직접 실행:
   ```bash
   tsx src/index.ts
   # Hello, World!
   ```

### 5. 컴파일러 옵션 설정 (tsconfig.json)

#### tsconfig.json 파일 생성

**자동 생성 방법**

```bash
tsc --init
```

- 기본 설정이 포함된 `tsconfig.json` 파일이 자동 생성된다.

**수동 생성 방법**

```json
// tsconfig.json
{
  "compilerOptions": {
    // 컴파일러 옵션들
  },
  "include": ["src"]
}
```

#### 주요 컴파일러 옵션 설명

**1. include 옵션**

- 컴파일할 파일의 범위를 설정

```json
{
  "include": [
    "src/**/*", // src 폴더의 모든 파일
    "tests/**/*" // tests 폴더의 모든 파일
  ]
}
```

**2. target 옵션**

- 컴파일된 JavaScript의 ECMAScript 버전을 설정

```json
{
  "compilerOptions": {
    "target": "ESNext" // ES5, ESNext 등
  }
}
```

**3. module 옵션**

- 모듈 시스템을 설정

```json
{
  "compilerOptions": {
    "module": "ESNext" // commonjs, ESNext 등
  }
}
```

**4. outDir 옵션**

- 컴파일된 파일의 출력 폴더를 설정

```json
{
  "compilerOptions": {
    "outDir": "./dist" // 컴파일된 파일을 dist 폴더에 저장
  }
}
```

**5. strict 옵션**

- 엄격한 타입 검사를 활성화

```json
{
  "compilerOptions": {
    "strict": true // 모든 엄격한 타입 검사 옵션 활성화
  }
}
```

**6. 전역 모듈 설정**

- 모든 파일을 모듈로 처리하도록 설정

```json
{
  "compilerOptions": {
    "moduleDetection": "force" // 모든 파일을 모듈로 강제 인식
  }
}
```

- 또는 각 TypeScript 파일에 다음 중 하나를 추가:

```typescript
// 방법 1: export 문 추가
export {};

// 방법 2: import 문 추가
import './some-module';
```

**7. skipLibCheck 옵션**

- 타입 정의 파일(\*.d.ts)의 타입 검사를 생략

```json
{
  "compilerOptions": {
    "skipLibCheck": true // 라이브러리 타입 검사 생략으로 컴파일 속도 향상
  }
}
```

---

### 폴더 구조

```
section01/
├── dist/   # 컴파일된 JavaScript 파일
├── src/
│   └── index.ts
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json   # 컴파일러 옵션
└── README.md
```
