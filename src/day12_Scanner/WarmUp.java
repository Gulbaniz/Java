package day12_Scanner;

public class WarmUp {
	
	/*
	 write a program that can display the days
	 
	 if the day is Monday or Tuesday:
	 
	 
	 
	 
	 */
	

	

	public static void main(String[] args) {
		
		// boolean ,float double,long does not work for switch statmant.
		
		String day ="Tuesday";
		
		switch (day) {
		case "Monday" :
			System.out.println("Java class");
			break;
			
		case "Wednesday":
			System.out.println("SQL");
			break;
			
		case "Thursday":
			System.out.println("Selenium");
			break;
			
		case "Friday":
			System.out.println("Selenim");
			break;
			
		case "Saturday":
			System.out.println("DQL");
			break;
			
			default:
				System.out.println("Day off");
		
		}
	}

}
