package it.unical.demacs.asde2019.weatherforecastservice.model;

public class Forecast
{
	int temp;
	String weather;

	public Forecast(int temp, String weather)
	{
		this.temp = temp;
		this.weather = weather;
	}

	public int getTemp()
	{
		return temp;
	}

	public String getWeather()
	{
		return weather;
	}

	public void setTemp(int temp)
	{
		this.temp = temp;
	}

}