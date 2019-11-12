package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {
	
	private int temperature;
	
	private String condition;
	
	public Forecast(int temperature, String condition) {
		super();
		this.temperature = temperature;
		condition = condition;
	}
	
	public Forecast() {
		super();
		this.temperature = 0;
		condition = "";
	}
}
