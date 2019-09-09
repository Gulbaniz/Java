package day08_ShortHandOperators;

public class RelationalOperators {

	public static void main(String[] args) {
		 /*
		 > ; greater than 
		 >=: greater than or equal
		 < : less than 
		 <=:less than or equal
		 ==: equal
		 ! =: not equal
		 =: assign
		 ! : Exclamation mark in java means the logical opposite
		  
		  */

		
		System.out.println(10>9); //
		boolean resultA =10> 9;
		System.out.println(resultA);
		
		System.out.println(10 >= 9 ); // greater or equal
		
		boolean resultB =10 >=9;
		System.out.println(resultB);
		boolean resultC =  10 <=9 ; // less than or equal
		System.out.println(resultC);
		
		boolean resultD = 1100 < 1200 ; // lest than 
		System.out.println(resultD);
		
		boolean resultE = 1000 < 1000; // less than
		System.out.println(resultE);
		boolean resultF = 1000 <= 1000; // less than or equal
		System.out.println(resultF); //true
		
		//==
		
		boolean resualtG =19 ==19; // equal
		System.out.println(resualtG);// true
		
		// ! : not
		
		boolean resultH = 20 != 20;
		System.out.println(resultH);
		
		boolean A = ! false; // true
		System.out.println(A);
		
		boolean  B = ! true ; // false
		
		/*
		 in java :
		 true == true, false == false 
		 ! false equal to true ,! true equal to false 
		 so therefore:
		 ! false does not equal ! true
		 and
		 true equal ! false.
		 
		 */
		
		boolean C = !false != ! true;
		System.out.println(C);
		
		boolean D = true ==!true;
		System.out.println(D);
		
		boolean E = ! (!true);
		System.out.println(E);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
