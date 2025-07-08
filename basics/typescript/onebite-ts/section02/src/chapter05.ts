// enum

// Numeric Enums
enum Role {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}

enum Role2 {
  ADMIN = 10,
  USER, // 11
  GUEST, // 12
}

enum Role3 {
  ADMIN, // 0
  USER = 10, // 10
  GUEST, // 11
}

// String Enums
enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '관리자',
  role: Role.ADMIN, //관리자
  language: Language.korean,
};

const user2 = {
  name: '회원',
  role: Role.USER, // 회원
  language: Language.english,
};

const user3 = {
  name: '게스트',
  role: Role.GUEST, // 게스트
  language: Language.korean,
};
