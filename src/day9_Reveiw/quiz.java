package day9_Reveiw;

public class quiz {

	public static void main(String[] args) {
		//Question 01:
		boolean a = !!!!!false;
		       //               !!!! true
		//                      !!! false
		//                       !! ture
		//                        !false
		//                          true
		System.out.println(a); //true
		System.out.println(!!true); //true
		
		// question 02:
		boolean result = ! false != ("Batch12"!= "Best Batch Ever");
		//                           true !=true
		//                             false
		System.out.println(result);
		
		//question 03:
		int x =100;
		double y = x+= 100/20; // x=105, y =105
		//                       x=x+(100/20) =105
		//     y= 100+=5 ==>105
		System.out.println(x);
		System.out.println(105.0 >105); //false
		System.out.println(105.1 > 105); //true
		
		// question 05:
		boolean A = 128 > '9' || 128 == 127;
		                       //ture  || false ==> ture
		System.out.println(A);
		
	        //question 06:
		boolean StupidOperators = 10>=20 &&'a' > 'b';
		                         // false && false ==> false
		System.out.println(StupidOperators);
		
		//Question 07:
		int num1 =999999999;
		int num2 =10;
		System.out.println(num1*num2 /10 % num1);
		//                                        999999999 % 99999999 =0
		
		//question 09:
		int z= 100;
		//System.out.println("z>100 is :"+H);
		                                  // His not defined before this line
		boolean H =z>100; //false
		
		//Question 10: 
		System.out.println(5 +7 +"8");
		//                 12+"8" ===> "128"
		System.out.println("8 +5+7");
		//                            "85+7
		//                             "857"
		System.out.println(5+7+"8"+5+7);
		//                 12+"8"+5+7
		//                 "128"+5+7
		//                  "1285"+7
		//                   "12857"
		
		
		
		System.out.println( (10*5) / (5*4) * 1000 /10 % 100);
		//                            20 /20 *1000 / 10 % 100
		//                                  1000/10 %100
		//                                    100 % 100
		//                                       0
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	        		 
		
	
		
		
		
		

	}

}
