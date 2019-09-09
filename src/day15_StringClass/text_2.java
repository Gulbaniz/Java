package day15_StringClass;

import java.util.Scanner;
public class text_2 {
    
    public static void main(String[] args) {
        /*
     2. Write a program that asks user to enter three numbers 
            and returns the largest number.
                Do it with ternary
     */
            
        Scanner input = new Scanner(System.in);
        
        System.out.println("Enter num1");
           double n1 = input.nextDouble(); 
           
        System.out.println("Enter num2");
            double n2 = input.nextDouble();
            
        System.out.println("Enter num3");
            double n3 = input.nextDouble();
            
            double Largest = (n1 > n2 && n1 >n3) ? n1
                             : (n2 > n1 && n2 > n3) ? n2
                             : n3 ;
        
        System.out.println("Largest number is "+Largest);
        
        
        
    }
}
