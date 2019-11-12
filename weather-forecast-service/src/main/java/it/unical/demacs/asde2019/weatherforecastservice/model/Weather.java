package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.Header;
import org.apache.http.ParseException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class Weather {
	
	String location;
	List<Forecast> forecasts;
	
	public Weather(String location) {
		forecasts = new ArrayList<Forecast>();
		String[] days = {"Today", "Tomorrow", "Day after tomorrow"};
		this.location = location;
		try {
			getCurrentWeather();
		} catch (ParseException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		for (int i = 0; i < 3; i++)
			if (location.toLowerCase().equals("rende")) {
				Forecast forecast = new Forecast("rain", 15, days[i]);
				if(i==0)
					try {
						forecast.setValue(getCurrentWeather());
					} catch (ParseException | IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				forecasts.add(forecast);
			}
			else {
				Forecast forecast = new Forecast(days[i]);
				if(i==0)
					try {
						forecast.setValue(getCurrentWeather());
					} catch (ParseException | IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				forecasts.add(forecast);
			}
	}
	
	public String getCurrentWeather() throws ParseException, IOException {
		String KEY = "673579e891a54ac88a220253c640031e";
		final CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpGet request = new HttpGet("http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+KEY);
		try (CloseableHttpResponse response = httpClient.execute(request)) {

            org.apache.http.HttpEntity entity = response.getEntity();
            if (entity != null) {
                // return it as a String
                String result = EntityUtils.toString(entity);
                JsonObject jsonObject = new Gson().fromJson(result, JsonObject.class);
                return jsonObject.get("weather").getAsJsonArray().get(0).getAsJsonObject().get("main").getAsString();
            }
           return "Sunny";
        }
		
	}
}
