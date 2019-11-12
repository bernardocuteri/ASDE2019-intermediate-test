package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast {

	String[] weather;
	int[] temperatures;
	private int days = 3;
	
	
	
	/*public Forecast(String[] weather, float[] temperatures) {
		weather = new String[days];
		temperatures = new float[days];
		for(int i = 0; i < days; i++) {
			this.weather[i] = weather[i];
			this.temperatures[i] = temperatures[i];
		}
	}*/
	
	public String[] getWeather() {
		return weather;
	}
	public void setWeather(String[] weather) {
		this.weather = weather;
	}
	public int[] getTemperatures() {
		return temperatures;
	}
	public void setTemperatures(int[] temperatures) {
		this.temperatures = temperatures;
	}
	
}
