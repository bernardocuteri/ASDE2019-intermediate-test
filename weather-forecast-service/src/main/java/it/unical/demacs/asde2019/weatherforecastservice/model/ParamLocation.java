package it.unical.demacs.asde2019.weatherforecastservice.model;

public class ParamLocation {

	String location;
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	@Override
	public String toString() {
		return "{ " + this.location + " }";
 	}
	
}
