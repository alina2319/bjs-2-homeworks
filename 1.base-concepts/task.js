"use strict"

function solveEquation(a, b, c) {
  if(a == 0) return "a=0 недопустимое значение!";
  let D = b * b - 4 * a * c; // Дискриминант
   let x1, x2;
   if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорни уравнения: X1=" + x1 + ", X2=" + x2 + "\nДискриминант(D)=" + D;
	} else if (D == 0) {
		x1 = -b / (2 * a);
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорень уравнения: X=" + x1 + "\nДискриминант(D)=" + D;
	} else if (D < 0) return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорней нет!\nДискриминант(D)=" + D;
}

 



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
