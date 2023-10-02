function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("1 is 1", () => {
  expect(1).toBe(1);
});

/* array test */
test("array test", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

/* true or false test */
test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});


test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  // 완전히 일치해야함
  expect(getUser(2).email).toMatch(/.*test.com$/);
  // 종종 정규식 기반의 일치를 판별할 때
});

/* 예외 발생 여부 테스트 */
function getUser1(id) {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("throw when id is non negative", () => {
  // don't use this ->  expect(getUser1(-1)).toThrow();
  expect(() => getUser1(-1)).toThrow();
  expect(() => getUser1(-1)).toThrow("Invalid ID");
});
