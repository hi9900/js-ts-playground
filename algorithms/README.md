# 🧩 알고리즘 학습

JavaScript 로 다양한 알고리즘을 구현하고 학습하는 폴더입니다.

## 📁 폴더 구조

- **javascript/** - JavaScript 로 구현한 알고리즘

## 📖 학습할 알고리즘

<!--
### 정렬 알고리즘

- [ ] 버블 정렬 (Bubble Sort)
- [ ] 선택 정렬 (Selection Sort)
- [ ] 삽입 정렬 (Insertion Sort)
- [ ] 퀵 정렬 (Quick Sort)
- [ ] 머지 정렬 (Merge Sort)
- [ ] 힙 정렬 (Heap Sort)

### 검색 알고리즘

- [ ] 선형 검색 (Linear Search)
- [ ] 이진 검색 (Binary Search)
- [ ] 깊이 우선 검색 (DFS)
- [ ] 너비 우선 검색 (BFS)

### 재귀 알고리즘

- [ ] 팩토리얼 계산
- [ ] 피보나치 수열
- [ ] 하노이 탑
- [ ] 퀵 정렬 (재귀 버전)

### 동적 프로그래밍

- [ ] 피보나치 (메모이제이션)
- [ ] 최장 공통 부분수열 (LCS)
- [ ] 배낭 문제 (Knapsack)
- [ ] 최단 경로 (Dijkstra)
 -->

## 📝 파일 구조

각 알고리즘 폴더에는 다음 파일들이 포함됩니다:

```
algorithms/
└── javascript/
    ├── note/   # 이론 정리 
    (TODO)
    ├── sorting/ 
    │   ├── bubble-sort.js
    │   ├── quick-sort.js
    │   └── merge-sort.js
    ├── searching/
    │   ├── linear-search.js
    │   └── binary-search.js
    └── recursion/
        ├── factorial.js
        └── fibonacci.js
```

## 🚀 실행 방법

```bash
# JavaScript 알고리즘 실행
node algorithms/javascript/sorting/bubble-sort.js
```

## 📊 성능 측정

각 알고리즘에는 성능 측정 코드가 포함되어 있습니다:

```javascript
// 실행 시간 측정 예시
const startTime = performance.now();
fn(...args);
const endTime = performance.now();
console.log(`실행 시간: ${endTime - startTime}ms`);
```

## 🎯 학습 목표

1. 각 알고리즘의 동작 원리 이해
2. 시간 복잡도와 공간 복잡도 분석
3. JavaScript 로 효율적인 구현
4. 실제 문제에 알고리즘 적용하기
