package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Weather {
	
	private String condition;
	private int temperature = 0;
	
	
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public int getTemperature() {
		return temperature;
	}
	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}
	
	
}
