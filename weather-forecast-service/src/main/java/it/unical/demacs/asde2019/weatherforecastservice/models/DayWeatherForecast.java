package it.unical.demacs.asde2019.weatherforecastservice.models;

public class DayWeatherForecast {

	String weather;
	String time;
	int temperature;
	
	
	public DayWeatherForecast() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public DayWeatherForecast(String weather, int temperature, String time) {
		super();
		this.weather = weather;
		this.temperature = temperature;
		this.time = time;
	}
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
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
