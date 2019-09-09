package Homework_2;

public class status_code {

	public static void main(String[] args) {
	
		int statusCode = 200;
		
		if (statusCode==200) {
			System.out.println("Not Found");
			
			int statusCode1 =201;
			 if (statusCode1 ==201) {
				 System.out.println("Created");
			 }
			
			int statusCode2 = 202;
			if (statusCode2 == 202) {
				
				System.out.println("accepted");
				
			}
			int statusCode3 =301;
			if(statusCode3==301) {
				System.out.println("Moved Permanently");
			}
			int statusCode4 = 303;
			if (statusCode4==303) {
				System.out.println("See Other");
				
			}
			int statusCode5 =304;
			if (statusCode5==304) {
				System.out.println("Not Modified");
			}
			int statusCode6 =307;
			if (statusCode6==307) {
				System.out.println("Temporary Redirect");
			}
		}

		

	}

}
