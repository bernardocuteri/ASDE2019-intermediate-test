package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {
	
	private String weather;
	private int temperature;
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
	public Forecast(String weather, int temperature) {
		super();
		this.weather = weather;
		this.temperature = temperature;
	}
	
	

}
