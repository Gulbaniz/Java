package day15_StringClass;

public class StringMethods {

	 public static void main(String[] args) {
	        
	        String str ="Cybertek";
	    // index num:    01234567
	        
	        // charAt(index):
	        
	            //  System.out.println( str.charAt(8));
	            
	                char ch = str.charAt(4);
	                
	                System.out.println(ch);
	                
	            String str2 ="Mu htar";
	            // index numbers: 0123456   
	            
	            System.out.println( str2.charAt(2) );
	            
	            
	      // length():
	            
	            String name ="Donald J Trump";
	                int n = name.length()  ;  
	                
	                
	    // concat():
	            String s1 = "Cybertek";
	            
	                s1.concat(" School"); // attempt to modify String s1
	                // returns a brand new String value
	                
	                
	            System.out.println(s1);  //Cybertek,  String is immutable,  
	                    
	            s1 = s1.concat(" School");
	            System.out.println(s1);  // Cybertek School
	            
	    
	    // toUpperCase():
	            String N ="cybertek";
	                    N.toUpperCase();
	                
	                System.out.println(N); //cybertek,  String is immutable
	            
	                N = N.toUpperCase();
	            System.out.println(N);  // CYBERTEK
	            
	            System.out.println(N);
	            
	            
	    // toLowerCase():   
	            
	            
	            
	            
	            
	            
	            
	        
	        
	    }
	}

	


