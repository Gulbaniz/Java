package day9_Reveiw;

public class If_Statement {

	public static void main(String[] args) {
		
       /*
        if statement {
        single if statement:
        
        if (boolean expression ) {
        
        some code to run}
        
            if block only gets executed if the condition is true
    
        */
		
           if ( 9<10 ) {
        	   System.out.println("Hello");
        	   System.out.println("Happy Friday");
        	   System.out.println("Tomorrow is day off");
        	   System.out.println("class starts on Monday");
        	   
           }
           
           int a= 1000; //1001
           
           if (true) {
        	  // 1000 == 1001 ==> false
        	   
        	   a= 2000;
        	   System.out.println("a is increased");
        	   
        	   
           }
            
           System.out.println(a+"/n/n/n");
           
           int X= 987654320;
           
           if ( X%2 ==0 ) {
        	   
        	   //true
        	   System.out.println(X);
        	   System.out.println("it's an even number");
        	    
           }
           
           if ( X%2 !=0 ) {
        	   // false
        	   System.out.println(X);
        	   System.out.println("it's an old number");
        	   
           }
           
           //
           int Y = 23456780;
           if (Y %5 ==0) {
        	   //
        	   System.out.println(Y+"can be devided by 5 /n/n");
        	  
        	       
           }
           
           if (Y % 5 !=0) {
        	   System.out.println(Y+ "can't be devided by 5 /n /n");
        	   
           }
           
           String CEO = "Main Boss";
           String Kuzzat ="Main Boss";
            System.out.println(CEO == Kuzzat); //true
            
            if (Kuzzat == CEO) {
            	// true
            	  System.out.println("Great Person in the world");
            	  System.out.println("first if block");
            
            	
            }
           int TotalNumber =100;
           boolean Cybertek =true;
           boolean BestSchool = true;
            
           if (Cybertek == BestSchool) {
        	   // true
        	   TotalNumber +=500; //TotalNumber =600
        	   
           }
           if ( Cybertek != BestSchool) {
        	   //false
        	   TotalNumber -=50; //TotalNumber =50
        	   
           }
           
           System.out.println(TotalNumber);
           
           /*
            1. declear a variable, and initialize user age
            2.write a program if the user is eligible to vote for Donal Trump
                           vote age:18
            */
           
           byte PersonAage =18;
           byte voteAge =18;
           if (PersonAage>= voteAge) {
        	   //true
        	   System.out.println("/n/n yes are eligible to vote");
        	   System.out.println("have fun with building the wall");
        	   System.out.println("MAGA");
        	  
           }
           
          if ( PersonAage <= voteAge) {
        	  //false
        	  
        	  System.out.println(" You are not ellible to vote yet, please grow up");
          }
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
	}

}
