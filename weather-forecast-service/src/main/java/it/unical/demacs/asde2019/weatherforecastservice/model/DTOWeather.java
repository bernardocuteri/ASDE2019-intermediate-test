package it.unical.demacs.asde2019.weatherforecastservice.model;

public class DTOWeather {

	private Forecast[] forecasts;

	public Forecast[] getForecasts() {
		return forecasts;
	}

	public void setForecasts(Forecast[] forecasts) {
		this.forecasts = forecasts;
	}

	public DTOWeather(Forecast[] forecasts) {
		super();
		this.forecasts = forecasts;
	}
	
	public DTOWeather() {
		forecasts = new Forecast[3];
	}
}
