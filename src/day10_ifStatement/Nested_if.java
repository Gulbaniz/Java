package day10_ifStatement;

public class Nested_if {
	
	/*
	 nested if:
	 if (condition1){
	    if (condition2){
	          //some code to run
	 }
	     }
	 */

	public static void main(String[] args) {
		
		if (true) {
			System.out.println("Hello Cybertek");
			
			if (true) {
				System.out.println("Hello World");
			}
		
		}
		if (true) {
			System.out.println("Hello batch 12"); //printed
		}
		if (false) {
			System.out.println("Hello programmers");
		}
		else {
			System.out.println("Hello Team SDET"); //printed
		}


	/*
	 60 <= grade <70 ==> D
	 70 <= grade < 80 ==> C
	 80 <= grade < 90 ==> B
	 90 <= grade < 100 ==>A
	 50 <= grade < 60 ==> F
	 40 <= grade < 50 ==> G
	 30 <= grade <40 ==> H 
	 20 <= grade < 30 ==> I
	 10 <= grade <20 ==> J
	 0 <= grade < 10 ==> K
	 
	 */
	
	int grade = 0;
	
	if (grade >= 60 && grade <=100) {
		System.out.println("you passed");

		if (grade >=90 && grade <= 100) {
			System.out.println("\twith a grade of A");
		}
		else if (grade >= 80 && grade <90) {
			System.out.println("\\ twith a grade of B");
			
		}
		else if (grade >= 70 && grade <80) {
			System.out.println("\\ twith a grade of C");
			
		}
		else { // 60 <= grade <70
			System.out.println("\\ twith a grade of D");
		}
		
	}
	else { // either less than 60 or greater than 100
		if (grade <60) {
			System.out.println("you failed with a grade of F");
		}
		else { // greater than 100
			System.out.println("inalid score , errot 404");
			
			
			
			
			
			
		}
	
	
	
	}
	
	
}
	
	
	
	
	
	
}