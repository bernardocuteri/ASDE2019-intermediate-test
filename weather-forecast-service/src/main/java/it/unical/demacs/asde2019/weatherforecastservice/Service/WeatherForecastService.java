package it.unical.demacs.asde2019.weatherforecastservice.Service;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.Model.WeatherForecast;

@Service
public class WeatherForecastService {
	
	public WeatherForecast getWeatherForecast (String location_name) {
		ArrayList<Integer> temperatures = new ArrayList<Integer>();
		ArrayList<String> weatherValues = new ArrayList<String>();
		Random rand = new Random();
		if(location_name.equals("Rende") || location_name.equals("rende"))
		{
			for(int i = 0; i < 3; i++ ) {
				temperatures.add(15);
				weatherValues.add("rain");
			}
			return new WeatherForecast(location_name, temperatures, weatherValues);
		}
			
			
		for(int i = 0; i < 3; i++ ){
			temperatures.add(rand.nextInt(30));
			int weather_value = rand.nextInt(3);
			switch(weather_value){
			case 0:
				weatherValues.add("sun");
				break;
			case 1:
				weatherValues.add("cloud");
				break;
			case 2:
				weatherValues.add("rain");
				break;
			default:
				break;
			}
		}	
		
		return new WeatherForecast(location_name, temperatures, weatherValues);
	}
}
