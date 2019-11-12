package it.unical.demacs.asde2019.weatherforecastservice.model;



public class WeatherDay {
	
	private int temperature;
	private String weatherType;

	public WeatherDay(int temperature, String weatherType) {
		super();
		this.temperature = temperature;
		this.weatherType = weatherType;
	}
	
	public int getTemperature() {
		return temperature;
	}

	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}

	public String getWeatherType() {
		return weatherType;
	}

	public void setWeatherType(String weatherType) {
		this.weatherType = weatherType;
	}
}
