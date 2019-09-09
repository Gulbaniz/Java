package day12_SwitchStatement;

public class SwitchStatement {

	/*
	 swicth statement does the similar thing like multi
	 
	 
	 */
	public static void main(String[] args) {
		
		int score =1;
		if (score ==1) { // MUST give boolean expression
			System.out.println("1");
		
		}
		else if (score ==2) {
			System.out.println("2");
		}
			else {
				System.out.println();
			}
		
		switch (score) { //Must give an Expression: date
		case 1:
			System.out.println("1");
			break;
		case 2:
			System.out.println("2");
			break;
			default:
				System.out.println("Invalid");
			break;
		}
		
		
	}

			
	
	
}
