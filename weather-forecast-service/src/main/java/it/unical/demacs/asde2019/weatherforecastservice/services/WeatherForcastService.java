package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;

@Service
public class WeatherForcastService {
	private Random forecast_gen;
	private HashMap<Integer,String> value_conversion;
	@PostConstruct
	public void init() {
		forecast_gen=new Random();
		value_conversion=new HashMap<Integer, String>();
		value_conversion.put(1, "cloudy");
		value_conversion.put(2, "sunny");
		value_conversion.put(3, "rainy");
	}
	public List<Forecast> getForecast(String location){
		List<Forecast> forecasts=new ArrayList<Forecast>();
		if(location.equals("Rende")) {
			Forecast today=new Forecast("rainy", 15);
			Forecast tomorrow = new Forecast(today);
			Forecast day_after_tomorrow = new Forecast(today);
			
			forecasts.add(today);
			forecasts.add(tomorrow);
			forecasts.add(day_after_tomorrow);
		}else {
			
			Forecast today=new Forecast(value_conversion.get(forecast_gen.nextInt(3)+1), forecast_gen.nextInt(31) );
			Forecast tomorrow = new Forecast(value_conversion.get(forecast_gen.nextInt(3)+1), forecast_gen.nextInt(31) );
			Forecast day_after_tomorrow = new Forecast(value_conversion.get(forecast_gen.nextInt(3)+1), forecast_gen.nextInt(31) );
			
			forecasts.add(today);
			forecasts.add(tomorrow);
			forecasts.add(day_after_tomorrow);
		}
		return forecasts;
	}
	
	
}
