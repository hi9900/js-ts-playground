// type alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '홍길동',
  nickname: '홍길동',
  birth: '1990-01-01',
  bio: '홍길동의 소개',
  location: '서울',
};

let user2: User = {
  id: 2,
  name: '김아무개',
  nickname: '김아무개',
  birth: '1990-01-01',
  bio: '김아무개의 소개',
  location: '부산',
};

// index signature
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};
