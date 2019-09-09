package day13_Reveiw;

public class QuizReview {

	public static void main(String[] args) {
		// Kahoot
		//Q1:

		if (!true != ! false) {
			//false != true ==>true
			System.out.println("Cybertek");
		}
		//Q2:
		boolean resultA = 9 >=9 || 10 <=10 ,
				resultB = 'A' >= 128 && 'B'< 128;
	   // resultA =true || true => true
				//resultB = false && true => false
				
				if (!resultA) {
					//true
					if (resultB) {
						//false
						System.out.println(resultA);
						
					}
						else {
							System.out.println(resultB);
							
						}
				}
				
				// Q3:
				if (true) {
				}
				else if (false) {
				}
				//else block is not mandatory
				
				//Q4:
				int num = 9;
				if (++num< 10) {
					// 10 < 10 ==>false
					System.out.println(num+"Hello World");
				}
				else {
					System.out.println(num+"Hello Universe");
					//                                  10
				}
				
				System.out.println(++num);//11
				int num2=9;
				if (num2 ++<10) {
					// 9< 10 ==> true
					System.out.println(num+"Hello World");
					//                               10
				}
				else {
					System.out.println(num+"Hello Universe");
				}
				System.out.println(num2 ++); //10
				System.out.println(num2); //11
				
				// Q5:
				int x= 1, y= 0;
				if (x++ > ++y) { //x=2 ,y=1
				//	1 > 1 ==>false
					System.out.println("Hello");
				}
				else {
					System.out.println("Welcome"); 
				} 
				System.out.println("log"+x+ ":"+y);
				//
				float A = 5.0F;
				
				
				// Q7 :
				if (true) {
					System.out.println("one");
				}
				if (true) {
					System.out.println("two");
				}
				if (true) {
					System.out.println("true");
				}
				
				if (true) {
					System.out.println("1");
				}
				else if (true) {
					System.out.println("2");
				}
				else if (true) {
					System.out.println("3");
				}
				boolean Result =true;
				int N =100;
				if (Result) {
					// true
					N/= 10; 
					
					Result = !Result; // Result = false
				}
				if (Result ) {
					// false
					N *=2 ; // N=10
				}
				else {
					N-=5; // N= 10 -5 =5 ;
				}
				// Q8:
				boolean X = true;
				if (X== false) {
					//true == false ==> false
					System.out.println("one");
				}
				else if (X == false != true) {
					// true == false ! true
					// true == true ==> true
					System.out.println("two");
					
				}
				else if (X== true) {
					// true
					System.out.println("three");
				}
				else if (X != false) {
					// true
					System.out.println("four");
				}
				
				/*
				 =: assignment
				 ==: equal
				 */
				
				//Q10:
				int n = 'B'; // corresponding number of the character will be assigned
				// n= 66;
				System.out.println(n);
				System.out.println('B'); // char printed as it is
				
				if (n> 128 || n<129) {
					// false || true ==> true
					System.out.println('B');
				}
				else {
					System.out.println('A');
					
					
				
				
			
				
				}
	
				
		
		
	}

}
