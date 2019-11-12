package it.unical.demacs.asde2019.weatherforecastservice.service;

import java.util.ArrayList;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Weather;

@Service
public class WeatherService {

	String []condition = {"cloudy", "sunny", "rainy"};
	Weather weather ;
	ArrayList<Weather> day = new ArrayList<Weather>();
	
	@PostConstruct
	void init(){
		weather = new Weather();
	}

	public ArrayList<Weather> getWeather(String location) {
		day.clear();
		if(location.equals("Rende")) {
			weather.setCondition("rainy");
			weather.setTemperature(15);
			day.add(weather);
			day.add(weather);
			day.add(weather);
			return day;
		}else {
			int cont = 0;
			Random r = new Random();
			Random r1 = new Random();
			while(cont < 3) {
				Weather w = new Weather();
				int index = r.nextInt(3);	
				w.setCondition(condition[index]);
				w.setTemperature(r1.nextInt(31));
				day.add(w);
				cont++;
			}
			
			return day;
		}
	}
}

