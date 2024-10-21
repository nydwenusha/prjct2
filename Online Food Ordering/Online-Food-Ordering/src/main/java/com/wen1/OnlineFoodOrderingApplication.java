package com.wen1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class OnlineFoodOrderingApplication {

	public static void main(String[] args) {

		// Start the Spring Boot application // added 10/12/2024 because chatgpt said this.....
		SpringApplication.run(OnlineFoodOrderingApplication.class, args);


		try {

			Connection obj = DriverManager.getConnection("jdbc:mysql://localhost:3306/wen_res", "root", "s19wenusha@#123");
			System.out.println(obj);
		}
		catch (Exception e){
			System.out.println(e);
		}



	}

}
