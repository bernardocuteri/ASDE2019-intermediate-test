package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Pair {
	private int temperature;
	private String condition;
	
	public Pair(int temperature, String condition) {
		super();
		this.temperature = temperature;
		this.condition = condition;
	}
	
	
	public int getTemperature() {
		return temperature;
	}


	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}


	public String getCondition() {
		return condition;
	}


	public void setCondition(String condition) {
		this.condition = condition;
	}


	
	
	

}
