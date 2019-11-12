package it.unical.demacs.asde2019.weatherforecastservice.model;


public class OutputWeather {
	
	private int temps[];
	private String weath[];
	private String location;

	
	public void setTemps(int[] temps) {
		this.temps = temps;
	}
	
	public int[] getTemps() {
		return temps;
	}
	
	public void setWeath(String[] weath) {
		this.weath = weath;
	}
	
	public String[] getWeath() {
		return weath;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getLocation() {
		return location;
	}
}
