package day13_Reveiw;

public class AssesmentQuiz3 {

	public static void main(String[] args) {
		// Q1:
		int num =9;
		if (num++ ==10) { //line 1 num = 10
       // 9 == 10 ==> false
			System.out.println("Hello World "+num); //line 2 
	}
		else  {
			System.out.println("Hello Universe"+num); //line3
			//                                  10
		}
		
		// Q2:
		int score=0;
		if (true) {
			if (score == 0) {
				// 0 == 0 => true
				score += 50; // score =50;
			}
			if (score !=0) {
				// 50 != 0==> true
				score += 50; // 50+=50 ==> 100;
			}
		}
		System.out.println(score);
		//Q3:
		char grade = 'A';
		boolean Passed =grade =='A'|| grade == 'B';
		//                'A'=='A' || 'A' =='B'
		//                  true   ||  false ==> true
		
		boolean Passed2 = grade =='C' || grade =='D';
		//                 'A'  == 'C'||  'A' == 'D';
		//                  false     ||  false ==> false
		if (Passed || Passed2) {
		 // true ||  false ==> true
			System.out.println("You've passed the exam");
		}
		else {
			System.out.println("You failed");
		}
		
		//Q4:
		boolean A =true, B = !false;
		//               B = true
		
		if (B) {
			// true
			System.out.println("B");
		}
		else if (A) {
			//true
			System.out.println("A");
		}
		else {
			System.out.println("C");
		}
		
		//Q5:
		boolean result = true;
		if (result) {
			System.out.println("it is true");
		}
		else {
			System.out.println("it is false");
		}
		/*
		 else if (result) {
		 System.out.println(" None of the above");
		 }
		 multi- branch if statement starts with if and ends with else statement,
		 cannot end with else-if statement
		 
		 undo : command +z
		 */
		// Q08:
		boolean A1 = true, B1 = !A1;
		//                 B1= false
		
		if (A1) {
			//true
			if (B1) {
				// false
				System.out.println("Monday");
			}
			else {
				System.out.println("Tuesday");
			}
		}
		
		else {
			if (A1) {
				System.out.println("Thursday");
			}
			else {
				System.out.println("Friday");
			}
		}
		//Q09:
		
		int number =10;
		if (--number >10) {
			// 9 > 10 ==> false
			System.out.println("Hello Cybertek "+number);	
		}
		else if (number ==9) {
			System.out.println("Hello World"+number);
			//                                9
		}
		 //Q10:
		boolean X = true;
		boolean Y = !X==false;  // Y= true
		//          false == false ==> true
		boolean Z=Y; // Z = true
		
		if (X) {
			System.out.println("Hello Everyone");
		}
		if (Y) {
			System.out.println("Today is great day");
		}
		if (Z) {
			System.out.println("We have picnic on Saturday");
		}
		
		// nested if : precondition.
		//             if a condition can be evaluate to multiple scenarios
		
		/*
		 vote age:
		 age >= 18 ==> eligible to vote
		 age >= 70 ==> can vote three times
		 70 > age >= 50 ==> can vote twice
		 50 > age >= 18 ==> can vote one time
		 */
		int age =300;
		if (age >= 0 && age <= 150) {
			if (age >=18) {
				if (age >= 70) { //age >= 70
					System.out.println("can vote three time");
				}
				else if (age >=50) { // 70>age >=50
					System.out.println("can vote two times");
				}
				else { //age <50
					System.out.println("can vote time");
				}
				
			}
			else {
				System.out.println("not Eligible to vote");
			}
		}
		else {
			System.out.println("Invalid Entry");
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
