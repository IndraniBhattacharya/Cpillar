package com.credit.cpillar.spotlightdemo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController 

@CrossOrigin(origins="http://localhost:4200")
public class SpotlightItems {
	
	@Autowired
	private ItemsHardCodedService itemService; 
	
	@GetMapping("/Cpillar/CollabComm/spotlight")
	public List<Items> getAllItems(){
		return itemService.findAll(); 
	}
}
 