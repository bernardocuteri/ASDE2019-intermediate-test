package it.unical.demacs.asde2019.weatherforecastcontroller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;







@RestController
public class WeatherForecastController {

	
	@CrossOrigin
	@PostMapping("/bet")
	public void bet(@RequestBody Bet bet) {
		return slotMachineService.bet(bet);
	}
	
}
