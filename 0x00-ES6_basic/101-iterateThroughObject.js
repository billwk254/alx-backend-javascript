// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];
  return employeesArray.join(' | ');
}
