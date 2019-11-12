package it.unical.demacs.asde2019.weatherforecastservice.domain;

public class WheatherState {

	
	private int temperature;
	
	private String weather;
	
	

	public WheatherState(int temperature, String weather) {
		super();
		this.temperature = temperature;
		this.weather = weather;
	}

	public int getTemperature() {
		return temperature;
	}

	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}

	public String getWeather() {
		return weather;
	}

	public void setWeather(String weather) {
		this.weather = weather;
	}
	
	
	
}
