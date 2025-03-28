function SumAndMultiply (num1, num2, num3, num4){
    //Add the first numbers
    const sum1 = num1 + num2;
    //Add the second numbers
    const sum2 = num3 + num4;
    //Multiply
    const result = sum1 * sum2;
    
    //Check result greater than or less than 50
       if (result > 50){
       console.log ("El número es mayor a 50");
       } else {
       console.log ( "El número es menor a 50");
       }
  }
    
    SumAndMultiply(5, 10 , 2 ,3); //?
    SumAndMultiply(2, 7, 3, 1); //?
    