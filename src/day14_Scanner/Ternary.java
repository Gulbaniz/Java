package day14_Scanner;

public class Ternary {


/*
 in Ternary:
 if (condition) ==> (condition)?
 else           ==> :
 else if(condition)==> : (condition) ?
 */
 public static void main (String[]args) {
	 
	 int num =0;
	 if (false) {
		 num=100;
	 }
	 else {
		 num = 50;
	 }
		 int n = (false)? 100:50; // ternary returns a value
	 
int y = false? 100:50 ;
System.out.println(50);
      System.out.println(num); //50
      System.out.println(n);// 50
      System.out.println(y);
      
      String Schoolname ="";
      boolean Batch12 = true;
      if (Batch12) {
    	  Schoolname ="Caybertek";
    	  
      }
      else {
    	  Schoolname = "Invalid";
      }
      System.out.println(Batch12 ? "Cybertek": "Invalid");
      
      String BestSchool = Batch12 ? "Cybertek": "Invalid";
      
      System.out.println(BestSchool);
      
      double d = 10;
      if (true) {
    	  d= 10.5;
      }
      double z = true ? 10.5 : 0;
      // in ternary, total number of ? and : has to be equal
      
      double interestRate =0;
      boolean GoodCredit = true;
      
      interestRate = GoodCredit == true ? 0.5 : 0.9;
      System.out.println(interestRate);
	 
      byte  grade =  60;
      boolean Passed = grade >= 60 ?true : false;
      System.out.println(Passed);
      
      char FinalGrade = 'C';
      String Group= "";
      
      Group =FinalGrade == 'A' ? "Early bird" :FinalGrade =='B'?
    		  "Group 1 ": "After Group";
      
      
      
       /*
        if(FinalGrade == 'A') {
            Group="Early bird";           
        }else if(FinalGrade =='B') {
            Group ="Group 1"; 
        } else if(FinalGrade == 'C') {
            Group = "Group 2";
        } else {
            Group ="After Group 2";
        }
        
        */
    Group = (FinalGrade == 'A') ? "Early Birds" 
                : (FinalGrade == 'B') ? "Group 1"
                    : (FinalGrade == 'C')? "Group 2"
                        : "After Group 2";
      
    	 
    System.out.println(Group);
    
    
    
    int score =80;
    char Finals =' ';
    
    if(score >= 90 && score <=100)
            Finals ='A';
    else if(score >= 80 && score <= 89)
            Finals = 'B';
    else if(score >=70 && score <= 79)
            Finals = 'C';
    else if(score>= 60 && score <= 69)
            Finals ='D';
    else if(score>=0 && score <= 59)
            Finals = 'F';
    else
        Finals = ' '; 
    
    
Finals = (score >= 90 && score <=100) ? 'A'
           :(score >= 80 && score <= 89)? 'B'
             :(score >=70 && score <= 79)? 'C'
                :(score >=60 && score <= 69) ? 'D'
                  : (score>=0 && score <= 59) ? 'F'
                          : ' ';



 }
}