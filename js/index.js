'use strict';

/*
! Базовый уровень:
1. Вычислить сумму первых N элементов последовательности. Параметр N задает пользователь
(например n=4, 1+2+3+4)
*/

function sum(n) {
  if (typeof n !== Number && isNaN(n)) {
    throw new TypeError('n must be a Number!');
  }
  if (n <= 0) {
    throw new RangeError('n must be a positive number');
  }
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/*
2.1 Создать объект student, который содержит следующие свойства: 
имя, фамилию, пол, контактные данные, id.

* Добавить обьекту студента свойство dateOfApplication - дату его поступления в университет. Использовать обьект Date для решения задачи.

* Добавить геттер для курса студента. Для расчета текущего курса использовать dateOfApplication и методы обьекта Date. Если курс будет больше 5 то вместо результата вернуть ошибку (уже выпустился).
*/

const student = {
  name: 'Test',
  lastName: 'Testenko',
  isMale: true,
  contactDetails: 1234,
  id: 1,
  dateOfApplication: new Date('2015-10-01'),
};

/*
2.2 Создать объект студенческой группы, содержащий:
имя университета, факультета и кафедры.
*/

const studentGroup = {
  nameOfUnivercity: 'NYC',
  faculty: 'TT',
  department: 'OP',
};

/*
2.3 Связать обьект студента с обьектом его группы.
*/

const fullStudent = { ...student, ...studentGroup };

/*
2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. Функция должна принимать обьект студента
*/

// function showStudentData(student) {
//   return {...fullStudent};
// }

function showStudentData(student) {
  for (const allStudentData in fullStudent) {
    console.log(`${allStudentData}: ${fullStudent[allStudentData]}`);
  }
}

/*
3.1 Создать числовой массив и проинициализировать его из 25 элементов.
*/

const arr = [
  1, 0, 3, 4, 5, -6, 7, 8, 9, -10, 11, 0, 13, 14, 15, 16, -17, 18, 19, 0, 21,
  22, 23, -24, 25,
];

const arr1 = [];
for (let i = 0; i < 25; i++) {
  const num = Math.random() > 0.5 ? i : -i;
  arr1.push(num);
}

const arr2 = new Array(25)
  .fill(undefined)
  .map((_, i) => (Math.random() > 0.5 ? i : -i));

/*
3.2 Вывести элементы с четными индексами.
*/

const evenIndex = arr.filter(function (_, i) {
  return i % 2 === 0;
});

/*
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка).
*/

const evenNumbers = arr.filter(function (elem) {
  return elem % 2 === 0;
});

/*
3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки).
*/

const zeroIndex = arr.filter(function (elem, i) {
  if (elem === 0) {
    console.log(i);
  }
});

// const zeroIndex1 = arr.forEach((elem, i) => {
//   if(elem === 0) {
//     console.log(i);
//   }
// })

/*
3.5 Подсчитать количество отрицательных чисел в массиве.
*/

let countNegElems = 0;
const negativeElems = arr.filter(function (elem, i) {
  if (elem < 0) {
    countNegElems++;
  }
});
console.log(countNegElems);

/*
4. Создать классы:
- Книга (автор, название, год издания, издательство);
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер).

* Добавить классам геттеры и сеттеры для свойств с проверками(правильные типы данных, реалистичные диапазоны и т.д).
*/

class Book {
  constructor(author, title, yearOfPublication, publisher) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher;
  }

  get authorOfBook() {
    return this.author;
  }
  set authorOfBook(author) {
    if (typeof author !== 'string') {
      throw new TypeError('Author must be in string format');
    }
  }

  get titleofBook() {
    return this.title;
  }

  set titleofBook(title) {
    if (typeof title !== 'string') {
      throw new TypeError('Title must be in string format');
    }
  }

  get yearOfPublicationOfBook() {
    return this.yearOfPublication;
  }

  set yearOfPublicationOfBook(yearOfPublication) {
    if (typeof yearOfPublication !== 'number' || isNaN(yearOfPublication)) {
      throw new TypeError('must be a number');
    }
    if (typeof yearOfPublication < 1500) {
      throw new RangeError('need to specify realistic ranges');
    }
  }
}

const myBook = new Book('Test', 'AboutTest', '2050', 'Testenko');

class ElectronicBook extends Book {
  constructor(
    author,
    title,
    yearOfPublication,
    publisher,
    format,
    electronicNumber
  ) {
    super(author, title, yearOfPublication, publisher);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}

const Elbook = new ElectronicBook('Smb', 'Smth', '2022', 'AI', 'epub', '4444');

/*
5. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
*/

function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      console.log('fizz');
    }
    if (i % 5 === 0) {
      console.log('buzz');
    }
    if (i % 3 === 0 || i % 5 === 0) {
      console.log('fizzbuzz');
    }
    console.log(i);
  }
  return number;
}

/*
6. С сервера передается обьект, имеющий следующую структуру:
*/
const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: 'John',
        lastName: 'Doe',
      },
      {
        id: 1,
        name: 'Jane',
        lastName: 'Doe',
      },
      {
        id: 2,
        name: 'Admin',
        lastName: 'Tiranovich',
      },
      {
        id: 3,
        name: 'User',
        lastName: 'Undefinovich',
      },
    ],
  },
};

/*
С помощью деструктуризации:
- создать переменную users на основании массива в обьекте serverResponse
- создать отдельные переменные для 3 и 4 пользователя
*/

// const {
//   data: { data: users },
// } = serverResponse;

// const [ , , user3, user4 ] = users;

const {
  data: {
    data: users,
    data: [, , user3, user4],
  },
} = serverResponse;
