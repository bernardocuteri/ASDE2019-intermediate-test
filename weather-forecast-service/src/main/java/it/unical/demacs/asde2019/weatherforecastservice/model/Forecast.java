package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {

	String value;
	int temperature;

	public Forecast() {
		super();
	}

	public Forecast(String value, int temperature) {
		super();
		this.value = value;
		this.temperature = temperature;
	}

	public Forecast(Forecast today) {
		this.value=today.getValue();
		this.temperature=today.getTemperature();
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public int getTemperature() {
		return temperature;
	}

	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}

}
