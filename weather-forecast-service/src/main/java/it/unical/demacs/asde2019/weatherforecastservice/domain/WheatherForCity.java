package it.unical.demacs.asde2019.weatherforecastservice.domain;

import java.util.ArrayList;
import java.util.List;

public class WheatherForCity {

	private String nameOfCity;
	
	private List<WheatherState> wheatherforDays = new ArrayList<WheatherState>();

	public List<WheatherState> getWheatherforDays() {
		return wheatherforDays;
	}

	public void setWheatherforDays(List<WheatherState> wheatherforDays) {
		this.wheatherforDays = wheatherforDays;
	}

	public String getNameOfCity() {
		return nameOfCity;
	}

	public void setNameOfCity(String nameOfCity) {
		this.nameOfCity = nameOfCity;
	}
	
	
	
}
