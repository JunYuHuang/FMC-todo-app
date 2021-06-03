export function checkLSKeyValueExists(LSKey) {
  return localStorage.getItem(LSKey) === null ? false : true;
}

export function getLSKeyValue(LSKey) {
  return JSON.parse(localStorage.getItem(LSKey));
}

export function setLSKeyValue(LSKey, LSValue) {
  localStorage.setItem(LSKey, JSON.stringify(LSValue));
}
