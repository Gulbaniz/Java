package day11_Statement_Reveiw;

public class Warnup {

	
		/*
		 warm up:
		 1. declare an int variable "year"
		   write a java program that can check if the year is a leap year
		 
		 if a year can be devided by 4 ==> leap
		 Do not use single if statement 
		 
		 2 . grade calculator
		 A => 90 ~ 100
		 B => 80 ~ 89
		 C => 70 ~ 79
		 D => 60 ~ 69 
		 F => 0 ~ 59
		 
		 
		 */
	public static void main(String[] args) {
		int grade =55;
		int Year = 2000; // leap
		boolean LeapYear = Year % 4 == 0;
		if (LeapYear) {
			System.out.println("Year "+Year+" is a leap year ");
			
		}
		else {
			System.out.println(" Year  "+ Year+" is NOT a leap year");
		}
		
		/*
		  2 . grade calculator
		 A => 90 ~ 100
		 B => 80 ~ 89
		 C => 70 ~ 79
		 D => 60 ~ 69 
		 F => 0 ~ 59
		 
		 
		 */
		boolean A = grade >= 90 && grade <= 100;
		boolean B = grade >=  80 && grade <= 90;
		boolean C = grade >= 70 && grade <= 79;
		boolean D = grade >= 60 && grade <= 69;
		boolean ValidGrade = grade >= 0 && grade<= 100;
		
		
		
			if (ValidGrade){
				// in order to multi - brach if gets executed,  first validgrade has to be true
				
		if (A ) { // 100 >= grade >= 90
			
			System.out.println("you made A");
		}
		
		else if (B) {   //90> grade >= 80
			System.out.println("you made B ");
		}
		else if (C) {  //80> grade >=70
			System.out.println("you made C");
		}
		else if (D) { //  70 > grade >= 60 
			System.out.println("you made D");
		}
		else {       // 0 =< grade < 60
			System.out.println("you made F");
		}
		   }
		
		else {  // grade < 0 || grade > 100
			System.out.println("Invalid Grade");
		}
	}
			
		}
			