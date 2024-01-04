// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const department in allEmployees) {
    employees.push(...allEmployees[department]);
  }

  let index = 0;

  return {
    next() {
      return index < employees.length
        ? { value: employees[index++], done: false }
        : { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
