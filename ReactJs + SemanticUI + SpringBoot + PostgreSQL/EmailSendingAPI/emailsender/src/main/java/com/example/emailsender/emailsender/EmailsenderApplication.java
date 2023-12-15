package com.example.emailsender.emailsender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAsync
@EnableScheduling
public class EmailsenderApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmailsenderApplication.class, args);
	}

}
