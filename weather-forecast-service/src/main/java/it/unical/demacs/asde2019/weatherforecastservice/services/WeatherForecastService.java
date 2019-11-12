package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import it.unical.demacs.asde2019.weatherforecastservice.model.City;
import it.unical.demacs.asde2019.weatherforecastservice.model.User;
import it.unical.demacs.asde2019.weatherforecastservice.model.WeatherForecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.WeatherAppStatus;
import it.unical.demacs.asde2019.weatherforecastservice.model.WeatherDay;

@Service
public class WeatherForecastService {
	
	private ArrayList<String> users = new ArrayList<>();

	private final static int DAYS = 3;
	private final static int TYPE = 3;
	private final static int TEMPERATURE = 30;
	
	public WeatherForecast getWeatherforCity(String city) {
		if(city.equalsIgnoreCase("Rende")) {
			ArrayList<WeatherDay> days = new ArrayList<>();
			for(int i=0; i<DAYS; i++) {
				WeatherDay day = new WeatherDay(15,"rainy");
				days.add(day);
				System.out.println(day.getTemperature());
				System.out.println(day.getWeatherType());
			}
			return new WeatherForecast(days);
		}
		else {
			ArrayList<WeatherDay> days = new ArrayList<>();
			Random r = new Random();
			for(int i=0; i<DAYS; i++) {
				int weatherType = r.nextInt(TYPE);
				String type = "cloudy";
				if(weatherType==1)
					 type = "sunny";
				if(weatherType==2)
					 type = "rainy";
				int temperature = r.nextInt(TEMPERATURE);
				WeatherDay day = new WeatherDay(temperature,type);
				days.add(day);
				System.out.println(day.getTemperature());
				System.out.println(day.getWeatherType());
			}
			return new WeatherForecast(days);
		}
	}
	
	public WeatherAppStatus startApp(String user) {

		if(!users.contains(user))
			users.add(user);
			
		return new WeatherAppStatus(user);
	}

}
