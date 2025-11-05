---
nav_exclude: true
---

# 🔧 개발 도구 설정

JavaScript와 TypeScript 개발을 위한 도구 설정과 스크립트를 관리하는 폴더입니다.

## 📁 폴더 구조

- configs/ - 설정 파일들
- scripts/ - 빌드/실행 스크립트

<!--
TODO:
## 🎯 포함된 도구

### 설정 파일 (configs/)

- [ ] TypeScript 설정 (tsconfig.json)
- [ ] ESLint 설정 (.eslintrc.js)
- [ ] Prettier 설정 (.prettierrc)
- [ ] Jest 설정 (jest.config.js)
- [ ] Webpack 설정 (webpack.config.js)
- [ ] Babel 설정 (.babelrc)

### 스크립트 (scripts/)

- [ ] 빌드 스크립트
- [ ] 테스트 스크립트
- [ ] 린트 스크립트
- [ ] 포맷팅 스크립트
- [ ] 개발 서버 스크립트

## 📝 파일 구조

```
tools/
├── configs/
│   ├── tsconfig.json
│   ├── .eslintrc.js
│   ├── .prettierrc
│   ├── jest.config.js
│   ├── webpack.config.js
│   └── .babelrc
└── scripts/
    ├── build.js
    ├── test.js
    ├── lint.js
    ├── format.js
    └── dev-server.js
```

## 🚀 설정 파일 예시

### TypeScript 설정 (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

### ESLint 설정 (.eslintrc.js)

```javascript
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', '@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
```

### Prettier 설정 (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### Jest 설정 (jest.config.js)

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
```

## 📦 패키지 스크립트 (package.json)

```json
{
  "name": "js-playground",
  "version": "1.0.0",
  "description": "JavaScript and TypeScript learning playground",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "format": "prettier --write src/**/*.ts",
    "format:check": "prettier --check src/**/*.ts",
    "clean": "rimraf dist",
    "start": "node dist/index.js",
    "dev:server": "webpack serve --mode development",
    "build:prod": "webpack --mode production"
  },
  "devDependencies": {
    "@types/jest": "^29.0.0",
    "@types/node": "^18.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "prettier": "^2.8.0",
    "rimraf": "^3.0.0",
    "ts-jest": "^29.0.0",
    "ts-node": "^10.9.0",
    "typescript": "^4.9.0",
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0",
    "webpack-dev-server": "^4.0.0"
  }
}
```

## 🚀 사용 방법

### 초기 설정

```bash
# 의존성 설치
npm install

# TypeScript 설정 파일 복사
cp tools/configs/tsconfig.json ./
cp tools/configs/.eslintrc.js ./
cp tools/configs/.prettierrc ./
cp tools/configs/jest.config.js ./
```

### 개발 워크플로우

```bash
# 코드 작성
npm run dev

# 코드 검사
npm run lint
npm run format

# 테스트 실행
npm run test

# 빌드
npm run build
```

## 🎯 학습 목표

1. **개발 환경 설정**: 효율적인 개발 환경 구축
2. **코드 품질 관리**: ESLint, Prettier를 통한 코드 품질 향상
3. **테스트 환경**: Jest를 통한 테스트 자동화
4. **빌드 프로세스**: TypeScript 컴파일 및 번들링
5. **자동화**: 스크립트를 통한 반복 작업 자동화

## 📚 참고 자료

- [TypeScript Configuration](https://www.typescriptlang.org/tsconfig)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Jest Configuration](https://jestjs.io/docs/configuration)
- [Webpack Configuration](https://webpack.js.org/configuration/) -->
