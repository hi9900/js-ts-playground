let user = {
    name: '홍길동',
    age: 25,
};
// user.name; // 에러: 'object' 형식에 'name' 속성이 없습니다.
let user1 = {
    id: 1,
    name: '희영',
};
user1.id;
// optional property
let user2 = {
    name: '홍길동',
};
// readonly property
let user3 = {
    id: 1,
    name: '홍길동',
};
export {};
// user3.id = 2; // 에러: 읽기 전용 속성이므로 'id'에 할당할 수 없습니다.
