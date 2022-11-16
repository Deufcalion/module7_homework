/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
   Функция должна возвращать true или false.
 */

   const users = {
    user_1: 'Artem',
    user_2: 'Irina',
    user_3: 'Masha'
  }
  
  function func(str, users){
    console.log (str in users)
  }
  
  
 func('user_1', users) // true
 func('user_4', users) // false
  