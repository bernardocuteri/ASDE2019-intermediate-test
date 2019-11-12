package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {
	private String description;
	private int degrees;

	public Forecast(String description, int degrees) {
		super();
		this.description = description;
		this.degrees = degrees;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getDegrees() {
		return degrees;
	}

	public void setDegrees(int degrees) {
		this.degrees = degrees;
	}

}
