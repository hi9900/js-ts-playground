/**
 * 함수의 실행 시간을 측정하고 콘솔에 출력합니다.
 * @param {function} fn - 실행 시간을 측정할 함수
 * @param {array} args - 해당 함수에 전달할 인자 배열
 */
function measureTime(fn, ...args) {
  const fnName = fn.name || 'Anonymous Function';

  console.log(`\n--- [${fnName}] 실행 시작 ---`);
  const startTime = performance.now();

  // 함수 실행
  const result = fn(...args);

  const endTime = performance.now();
  console.log(`실행 시간: ${(endTime - startTime).toFixed(4)}ms`);
  console.log(`--- [${fnName}] 실행 종료 ---`);

  // 함수의 반환값을 그대로 반환
  return result;
}

module.exports = { measureTime };
