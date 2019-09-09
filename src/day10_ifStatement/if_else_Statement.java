package day10_ifStatement;

public class if_else_Statement {

	public static void main(String[] args) {
		/*
		 if & else :
		 if (condition) {
		   //A
		    // if block only gets executed if the condition is true
		    }
		    else {
		    //B
		     //else block only gets 
		   
		 */
 if (9>8) {
	 System.out.println("9 is greater than 8");
 }
       if (9<8) {
    	   System.out.println("9 is less than 8");
       }
       if (9==8) {
    	   System.out.println("9 is equal to 8");
       }
       
        if (9>=8) {
        	System.out.println("9 is greater or equal to 8");
        
        }
        else {
        	System.out.println("9 is less than 8");
        	//if 9 is not greater or equal to 8, than 9 is must be less than 8
        }
       if (false== !false) {
    	   System.out.println("if block");
       }
       else {
    	   System.out.println("else block");
       }
       /*
        task01:
        if score <60 ==> failed
        if score >=60 but score <90 ==> pass
        if score >90 ==> passed with Distinction
        */
       
       int score =99;
       if (score>= 60) {
    	   System.out.println("Passed");
       }
       else {
    	   System.out.println("Failed");
       }
       
       if (score >= 90) {
    	   System.out.println("you have made A+, good job");
       }
       else {
    	   System.out.println("You couldn't make A+");
    	   
    	   
    	   /*
    	    1. triangle : has three angles,
    	                 and sum of three angles MUST be equal to 180 
    	      1. declare three variables angle1, angle2 angle3
    	      2. write a program to check if the triangle is valid or not            
    	    */
    	    int angle1 =20, angle2 =50, angle3 =75;
    	    boolean valid = 180-(angle1+angle2+angle3)==180;
    	    if (valid ) {
    	    	System.out.println("it's a valid triangle");
    	    	
    	    }
    	    else {
    	    	System.out.println("Invalid triangle, do some math");
    	    }
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    	   
       }
       
       
       
       
       
       
       
       
       
       
       
       
       
	}

}
