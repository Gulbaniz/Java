package day10_ifStatement;

public class Multi_Branch_ifStatment {

	public static void main(String[] args) {
		/*
		 if -else if- else:
		 if (codition1){
		 //A ==> if condition1 is true
		   }
		   else if (condition2) {
		   //B ==> if condition1 is false and condition2 is true
		    }
		    else {
		    //C ==> if conditian1 and condition2 are both false
		 
		 */
        if (false) {
        	System.out.println("if block");
        }
        else if (true) {
        	System.out.println("else if block");
        }
        else {
        	System.out.println("else block");
        }
        /*
         TASK01:
         90 <= grade ==>A 
         80 <= grade <90  ==> B
         70 <= grade < <80 ==> C
         60 <= grade <70 ==> D 
         else ==> F 
         */
        int grade =85;
        
        if (grade >= 90 ) { // 90 , 91 ..
        	System.out.println("Youhave made A,Great job");
        }
        else if (grade < 90 && grade >= 80) { // 80 , 81 
        	System.out.println("You made B Good");
        	
        }
        else if(grade <80 && grade >= 70) {
        	System.out.println("You made CThan is Okay");
        }
        else if (grade < 70 && grade >= 60) {
        	System.out.println("Youmade D Really");
        }
        else {
        	System.out.println("You made F, Study more");
        }
        
        
        //Find the bug:
        int grade2 =70;
        
        if (grade >60) {
        	System.out.println("D");
        }
        else if (grade >= 70) {
        	System.out.println("C");
        	
        }
        else if (grade2 >=80) {
        	System.out.println("B");
        }
        else if (grade2 >= 90) {
        	System.out.println("A");
        }
        else {
        	System.out.println("F");
        }
        
        /*
         task02:
         1. write a program that:
              1. 0 ~  12 ==> good morning
              2. 12 ~ 15 ==> good afternoon
              3. 15 ~ 23 ==> good night
              4. 12 ==> good noon
         */
        
        int hour =23;
        
        if (hour >= 0 &&hour <= 12) {
        	System.out.println("Good morning");
        }
        
        else if (hour > 12 && hour <= 15) {
        	System.out.println("Good Afternoon");
        }
        
        else if(hour > 15 && hour <= 23) {
        	System.out.println("Good night");
        }
        else {
        	System.out.println("noon");
        }
        
        /*
         Task :
         int num1 num2 num3
         find the bigger number
         */
        int num1 =200, num2 =300, num3 =200;
        
        if (num1 > num2 && num1 > num3) {
        	System.out.println(num1+"is the bigger number");
        }
        else if (num2 >num1 && num2>num3) {
        	System.out.println(num2+" is bigger number");
        }
        else if (num3 > num2 && num3 >num1) {
        	System.out.println(num3+"is the bigger number");
        }
        else if (num3 ==num2 && num3 > num1) {
        	System.out.println(num3+"and"+num2+ "are the bigg");
        }
        else if (num3 ==num1 && num3 >num2) {
        	System.out.println(num3+"and"+num1+"are the bigge");
        	
        }
        else {
        	System.out.println("all of then are equal");
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
	}

}
