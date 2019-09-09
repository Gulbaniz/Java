package day13_Reveiw;

public class SwitchStatement {

	public static void main(String[] args) {
		/*
		 switch (Expression) {
		 case casevalue: 
		            statements;
		            break;
		            }
		 */   
		
      int num=5;
      switch (num) {
      case 7 :
    	       System.out.println("Sunday");
    	       break; //case closed/ dismissied 
    	       // it is used exiting switch statement after the case is executed
    	       default:
    	    	     System.out.println("Invalid Entry");
    	    	     System.out.println("Invalid");
    	    	     break; // exits the switch statement
    	    	    // System.out.println("Wednesday);
    	    	    // break statement means the closing statement , cannot give any more statements after the break 
    	       case 5:
    	    	   System.out.println("Friday");
    	    	   break;
      }
		
      String days= "Tuesday";
      switch (days) {
      case "Monday" :
    	     System.out.println("Monday is fun day");
    	     break;
      case "Tuesday" :
    	  System.out.println("Tuesday is great day");
    	  break;
      case "Wednesday" :
    	  System.out.println("Wednesday is day off");
    	  break;
    	  default:
    		  System.out.println("invalid");
    	  
      
    		  long N1 = 10; //10l
    		 // switch (N1) { }
    		  
    		  float N2 =100; //100.0f
    		 // switch (N2) { }
    		  
    		  double N3 =10;
    		//  switch (N3) {  }
    		  
    		  boolean N4 = true; //9 < 8
    		 // switch (N4) { } 
    		  
    		  char ch ='A';
    		  switch (ch) { }
    		  
    		  char ch2 =123;
    		  System.out.println(ch2);
    		  
    		  // or logic:
    		  char grade ='B';
    		  if (grade == 'A' || grade == 'B') {
    			  System.out.println("Passed the exam");
    		  }
    		  else {
    			  System.out.println("Failed");
    		  }
    		  switch (grade) {
    		  case 'A' :
    		  case 'B' :
    			  System.out.println("passed the exam");
    			  break;
    			  default:
    				  System.out.println("failed the exam");
    				  
    		  }
    		  String US = "USA";
    		  if ( US == "USA" || US == "America" || US == "US") {
    			  System.out.println("American");
    		  } else {
    			  System.out.println("Not American");
    		  }
    			  
    			 switch (US) {
    			 case "US" :
    			 case"USA" :
    			 case" American" :
    				 System.out.println("American");
    				 break;
    				 
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    				  
    			  
    			  
    			  
    			  
    			  
    		  
    		  
    		  
    		  
    		  
    		  
    		  
    		  
    			 }
    			 }
    		  
    			 }
    		  
    		  
      }
    		  
    		  

    		  
    		  
    		  

      

