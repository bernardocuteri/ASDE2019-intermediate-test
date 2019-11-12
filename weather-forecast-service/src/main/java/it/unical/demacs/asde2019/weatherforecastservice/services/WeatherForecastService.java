package it.unical.demacs.asde2019.weatherforecastservice.services;

import it.unical.demacs.asde2019.weatherforecastservice.model.LocationStatus;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.ThreadLocalRandom;
import org.springframework.stereotype.Service;

@Service
public class WeatherForecastService {
	public static final int DAYS = 3;
	public static final int MAX_TEMP = 30;
	public static final int VALUES = 3;
	private static final String[] weatherConditions = {"cloudy", "sunny", "rainy"};
	private final HashMap <String, LocationStatus> map = new HashMap <> ();
	
	public LocationStatus get(String location) {
		final ArrayList <String> tmp = new ArrayList <> ();
		
		if(location.equalsIgnoreCase("rende")) {
			tmp.add(weatherConditions[2] + ":15");
			tmp.add(weatherConditions[2] + ":15");
			tmp.add(weatherConditions[2] + ":15");
			
			return new LocationStatus("Rende", tmp);
		} else {
			if(!map.containsKey("location")) {
				final ArrayList <String> random = new ArrayList <> ();
				
				for(int i = 0; i < VALUES; i++)
					random.add(weatherConditions[ThreadLocalRandom.current().nextInt(VALUES)] + ":" + ThreadLocalRandom.current().nextInt(MAX_TEMP));
				
				final LocationStatus value = new LocationStatus(location, random);
				
				map.put(location, value);
				
				return value;
				
			} else
				return map.get(location);
		}
	}
}
