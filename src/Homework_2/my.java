package Homework_2;

public class my {

	public static void main(String[] args) {
		
int a= 1000; // 1001
		
		if( true ) {
	//		1000  == 1001   ==> false
			 a = 2000;
			 System.out.println("a is increased");
		}
		
		System.out.println(a+"\n\n\n");

	
	
	int X= 987654320;
	
	if( X%2 == 0 ) {
		// true
		System.out.println(X);
		System.out.println(" it's an even number");
	}
	
	if(  X%2 != 0 ) {
		//  false
		System.out.println(X);
		System.out.println("it's an odd number");
	}
	
	int Y = 23456780;
	if( Y % 5 ==0 ) {
		//
		System.out.println(Y+" can be devided by 5 \n\n");
	}
	
	if( Y % 5 != 0 ) {
		System.out.println(Y+" can't be devided by 5 \n\n");
	}
	}
}
