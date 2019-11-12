package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;

@Service
public class ForecastService {
	
	public List<Forecast> get(String location) {
		if(location.equals("Rende"))
			return Arrays.asList(new Forecast(2, 15),new Forecast(2, 15),new Forecast(2, 15));
		int weather1 = new Random().nextInt(3);
		int weather2 = new Random().nextInt(3);
		int weather3 = new Random().nextInt(3);
		int temp1 = new Random().nextInt(30)+1;
		int temp2 = new Random().nextInt(30)+1;
		int temp3 = new Random().nextInt(30)+1;
		return Arrays.asList(new Forecast(weather1, temp1),new Forecast(weather2, temp2),new Forecast(weather3, temp3));
	}

}
