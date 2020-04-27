package com.credit.cpillar.spotlightdemo;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class ItemsHardCodedService {

	private static List<Items> items = new ArrayList<Items>();
	private static int idCount=0;
	
	static {
//		items.add(new Items(++idCount,"Certification"));
//		items.add(new Items(++idCount,"Certification"));
//		items.add(new Items(++idCount,"Certification"));
//		items.add(new Items(++idCount,"Certification"));
		items.add(new Items(++idCount,"Certification","http://media.w3.org/2010/05/sintel/trailer.mp4","JohnS On Certification"));
		items.add(new Items(++idCount,"Certification","http://media.w3.org/2010/05/bunny/trailer.mp4","JohnS On Certification"));
		items.add(new Items(++idCount,"Certification","http://media.w3.org/2010/05/bunny/movie.mp4","JohnS On Certification"));
		items.add(new Items(++idCount,"Certification","https://www.w3schools.com/html/mov_bbb.mp4","JohnS On Certification"));
	
	}
	
	public List<Items> findAll(){
		return items;
	}
}
