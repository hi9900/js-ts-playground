# 🚀 JavaScript & TypeScript Playground

JavaScript와 TypeScript 학습과 실험을 위한 개인 연습 레포지토리입니다.

## 📚 목적

- JavaScript/TypeScript 기본 문법 연습
- 알고리즘 및 자료구조 구현
- 새로운 JavaScript/TypeScript 기능 실험
- 프로젝트 아이디어 프로토타이핑
- TypeScript 타입 시스템 학습

## 📁 폴더 구조

```
js-ts-playground/
├── basics/                   # 기본 문법 연습
├── algorithms/               # 알고리즘
├── data-structures/          # 자료구조
├── projects/                 # 미니 프로젝트들
│   ├── ui-components/        # UI 컴포넌트
│   └── utilities/            # 유틸리티 도구
├── experiments/              # 새로운 기능 실험
└── tools/                    # 개발 도구 설정
    ├── configs/              # 설정 파일들
    └── scripts/              # 빌드/실행 스크립트
```

## 🛠️ 사용 방법

### 환경 설정

```bash
# 레포지토리 클론
git clone https://github.com/hi9900/js-ts-playground.git
cd js-ts-playground

# Node.js가 설치되어 있는지 확인
node --version
npm --version

# TypeScript 설치 (전역)
npm install -g typescript

# 또는 프로젝트별 설치
npm init -y
npm install typescript --save-dev
```

### TypeScript 설정

```bash
# TypeScript 설정 파일 생성
npx tsc --init

# TypeScript 파일 컴파일
npx tsc filename.ts

# TypeScript 파일 실행
npx ts-node filename.ts
```

### 코드 실행

```bash
# JavaScript 파일 실행
node filename.js

# TypeScript 파일 실행
npx ts-node filename.ts

# 또는 브라우저에서 HTML 파일 열기
```

## 📝 학습 노트

각 폴더의 README.md 파일에 학습한 내용과 중요한 포인트들을 기록합니다.

<!-- 
## 📊 진행 상황

- 시작일: 2025-12-19
- 현재 진행 중인 주제: 아코디언 메뉴 구현
- 완료한 연습 문제 수: 0개
- TypeScript 학습 시작: 예정
-->
  
## 🔧 개발 환경 설정

### TypeScript 설정 예시 (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 패키지 스크립트 예시 (package.json)

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "jest",
    "lint": "eslint src/**/*.ts"
  }
}
```

---

**Happy Coding!** 🎉
