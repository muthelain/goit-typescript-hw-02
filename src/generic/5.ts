/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key:T;
  value:U;
}

// const obj: KeyValuePair<string, number> = {
//   key: 'qwe',
//   value: 1,
// }

// const obj2: KeyValuePair<string, string[]> = {
//   key: 'qwe',
//   value: ['qwe','rty'],
// }

export {};