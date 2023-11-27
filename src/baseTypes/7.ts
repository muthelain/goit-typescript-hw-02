/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum days {
   Mon = 'Понеділок',
  Tue = 'Вівторок',
  Wed = 'Середа',
  Thu = 'Четверг',
  Fri = "П'ятниця",
  Sat = 'Субота',
  Sun = 'Неділя',
}

function isWeekend(day: days):boolean {
  if (day === days.Sat || day === days.Sun) return true
  return false
}

console.log(isWeekend(days.Fri));
