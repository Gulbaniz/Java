package Day16_Recap;
import java.util.*;  // imports one class
//import java.util.*; // imports all classes from java.util
public class WarmUP {
 
 /*
  write a java program that asks user to enter first and 
  last names, then printout the user's full name in all 
  capital letters.
         
  */
 public static void main(String[] args) {
     
     Scanner scan = new Scanner(System.in);
     System.out.println("Enter your first name and last name");
     String firstname = scan.nextLine(),
             lastname = scan.nextLine();
     
     String fullname = firstname+" "+lastname;
             fullname = fullname.toUpperCase();
     System.out.println("your full name is: "+fullname);
     
     
     
     
     
     
 }
}