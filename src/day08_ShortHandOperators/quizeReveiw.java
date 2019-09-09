package day08_ShortHandOperators;

public class quizeReveiw {

	public static void main(String[] args) {
		
		/*
		 Assesment quiz 02:
		 */

		// question01
		int ivar =100;
		double dvar =200;
		float fvar =300;
		
		//ivar =fvar; // float >int
		
		fvar = ivar; // !false compiles
		
		dvar = fvar;// !false. double > float
		
		// fvar = dvar; // !can . double > float
		
		String str1 = "Result A" + 1 +2 ;
		 //              "Result A12"
		
		// String str2 = "Result A"+7-2;
		//                "Result A7" -2
		
		//System.out.println(str2);
		
		String str3 = "Result A" +7 *2;
		//             result A" +14
		//             "result A14";
		
		String str4 = "Result A"+ 8 %2;
		 //              "Result "A" +0
		//                "Result A0";
		
		System.out.println(str1);
		System.out.println(str3);
		System.out.println(str4);
		
		System.out.println("Result A"+ (1+2) );
		
		
		
		
 				
		
		
		
		
		
	}

}
