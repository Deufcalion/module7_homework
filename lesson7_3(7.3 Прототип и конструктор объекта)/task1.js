/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
   Данная функция не должна возвращать значение.*/

   function func(users) {
    for (let key in users)
      console.log( `Ключ - ${key}: Значение - ${users[key]}`)
  }
  
  
  const usersName = {
    user_1: 'Artem',
    user_2: 'Irina',
    user_3: 'Masha'
  }
  
  console.log(func(usersName))