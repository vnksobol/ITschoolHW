// 2 //
let user = undefined;
try {
    if (!user) {
        throw new SyntaxError("Имя пользователя не заполнено");
        }
    console.log(`Привет, ${user}`); 
    } catch(error) {
    console.log("Error: " + error.message );
}

// 5 //
let json = "{ некорректный JSON }";
try {
    let user = JSON.parse(json);      // <-- возникает ошибка...
	console.log(user.name);           // не сработает
} catch (error) {                     // ...выполнение переходит в блок catch
    console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз.");
    console.log(error.name);
    console.log(error.message);
}

// 7 //
let num = parseInt('ыыыы');
try {
    if (!num) {
        throw new ReferenceError("Число не определено");
        }
    console.log(num);
} catch (error) {
  console.log("Извините, введено не число.");
}