// enum
// Numeric Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 10] = "ADMIN";
    Role2[Role2["USER"] = 11] = "USER";
    Role2[Role2["GUEST"] = 12] = "GUEST";
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 0] = "ADMIN";
    Role3[Role3["USER"] = 10] = "USER";
    Role3[Role3["GUEST"] = 11] = "GUEST";
})(Role3 || (Role3 = {}));
// String Enums
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
