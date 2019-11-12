package it.unical.demacs.asde2019.weatherforecastservice.controller;


import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class WeatherController {
	// this doesnt work in this project but if you copy paste to another project. dont ask me why. prof saw during the test that it worked ...

	
	@CrossOrigin
	@GetMapping("/citySelect")
	public String citySelect(@RequestParam String location) {
		if (location.equals("Rende") || location.equals("Rome") || location.equals("Butzbach") || location.equals("Frankfurt")) {
			return createForecast(location);
		} else {
			return randomForecast();
		}
	}
	
	public final static String cloudy = "cloudy";
	public final static String sunny = "sunny";
	public final static String rainy = "rainy";
	public static int temperature;
	public static String rende = "Today: 15 Degrees, rainy conditions, \nTomorrow: 15 Degrees, rainy conditions, \nDay after tomorrow: 15 Degrees, rainy conditions";
	public static String butzbach = "Today: 5 Degrees, rainy conditions, \nTomorrow: 4 Degrees, rainy conditions, \nDay after tomorrow: 4 Degrees, rainy conditions";
	public static String frankfurt = "Today: 6 Degrees, rainy conditions, \nTomorrow: 5 Degrees, rainy conditions, \nDay after tomorrow: 3 Degrees, rainy conditions";
	public static String rome = "Today: 20 Degrees, rainy conditions, \nTomorrow: 19 Degrees, rainy conditions, \nDay after tomorrow: 18 Degrees, rainy conditions";
	
	
	public static String createForecast(String location) {
		if (location.equals("Butzbach")) {
			return ("The weather forecast for " + location + "is: \n" + butzbach);
		} else if (location.equals("Rende")){
			return ("The weather forecast for " + location + "is: \n" + rende);
		} else if (location.equals("Frankfurt")) {
			return ("The weather forecast for " + location + "is: \n" + frankfurt);
		} else if (location.equals("Rome")) {
			return ("The weather forecast for " + location + "is: \n" + rome);
		} else {
			return "";
		}
	}
	
	public static int randomTemperature() {
		return (int) Math.floor(Math.random()*30);
		
	}
	
	public static String randomString(){
        Random r = new Random();

        int i = r.nextInt()%3;

        switch (i) {
            case 0:
                return "cloudy";
		case 1:
                return "sunny";
		case 2:
                return "rainy";
		default:
				return "";
        }

    }
	
	public static String randomForecast() {
		return ("The random weather forecast results in: \n" +
				"today: " + randomString() + "conditions" + randomTemperature() + " Degrees" +
				"\ntomorrow: " + randomString() + "conditions" + randomTemperature() + " Degrees" +
				"\nday after tomorrow: " + randomString() + "conditions" + randomTemperature() + " Degrees" 
				
				);
	
}
}

