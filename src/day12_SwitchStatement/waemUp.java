package day12_SwitchStatement;

public class waemUp {

	public static void main(String[] args) {
		/*
		 Warm up :
		 declare 3 numbers
		 if n1 and n2 are equal => n1&n2 are equal
		 
		 if n2 and n3 are equal ==> n2&n3 are equal
		 
		 if n3 and n1 are qual ==> n3&n1 are equal
		 
		 if all equal ==> all equal
		  if none of them are equqal ==> none of them are equal
		 do not single if statement
		 
		 
		 */

		int n1=4, n2 =1, n3 =5;
		if (n1== n2 && n1!=n3) { //true
			System.out.println("n1 and n2 equal");
		}
		else if (n2 == n3 && n2 != n1) {
			System.out.println("n2 and n3 equal");
		}
		else if (n3 ==n1 && n1 != n2) {
			System.out.println("n3 and n1 equal");
			
		} 
		else if (n1 ==n2 && n2 ==n3 && n1 ==n3) {
			System.out.println("all equal");
		}
		else {
			System.out.println("non equal");
		}
		System.out.println("\n \n");
		
		

		
		// second:
		int num1=1, num2=2, num3=9;
		if (num1==num2 &&  num2==num3){
			System.out.println("all equal");	
		}
		else if(num1==num2) {
			System.out.println("num1 and num2 are equal");
		}
		else if (num2==num3) {
			System.out.println("num2 and num3 are equal");
		}
		else if (num1==num3) {
			System.out.println("num1 and num3 are equal");
		}
		else {
			System.out.println("none of them are equal");
	}

	
// third:  nested if
	int A=10, B=20, C=30;
	if (A==B && B==C) {
		System.out.println("All are equal");
	}
	else { // if not all them are equal
		if (A==B) {
			System.out.println("Aand B are equal");
		}
		else if (A==C) {
			System.out.println("Aand C are equal");
		}
		else if (B==C) {
			System.out.println("B and  are C are equal");
		}
		else if (B==C) {
			System.out.println("B and C are equal");
		}
		else {
			System.out.println("None of them are equal");
			
		}
	}
	
	
	/*
	 60~70 => D
	 70~ 80 =>c
	 80~ 90 =>  B
	 90 ~100 => A
	 0~ 59 => F
	 grade must be: 0~100
	 */
	
	int grade =99;
	if (grade >=0 && grade <=100) {
		if (grade >= 60) {
	      if (grade >= 90) {
	    	  System.out.println("A");
	      }
	
	else if (grade >= 80) {
		System.out.println("B");
	}
	else if (grade >= 70) {
		System.out.println("C");
	}
	else {
		System.out.println("D");
	}   
		}
	else {
		System.out.println("Failed");
	   }
		
	}
	
	else {
		System.out.println("Invalid Entry");
	}
	
	} 
}
	
	
	
	
	
