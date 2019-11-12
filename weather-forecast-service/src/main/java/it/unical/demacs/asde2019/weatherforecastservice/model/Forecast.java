package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {
	
	String weather;
	int temperature;
	
	
	public Forecast(int weather, int temperature) {
		super();
		if(weather==0) this.weather = "cloudy";
		if(weather==1) this.weather = "sunny";
		else this.weather = "rainy";
		this.temperature = temperature;
	}
	
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public int getTemperature() {
		return temperature;
	}
	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}
	
	

}
