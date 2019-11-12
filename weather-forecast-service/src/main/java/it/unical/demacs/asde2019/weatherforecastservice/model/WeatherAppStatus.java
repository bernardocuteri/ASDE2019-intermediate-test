package it.unical.demacs.asde2019.weatherforecastservice.model;

public class WeatherAppStatus {
	
	private String user;

	public WeatherAppStatus(String user) {
		super();
		this.user = user;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
}
