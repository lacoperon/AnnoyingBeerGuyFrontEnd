import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export class BeerService {  
	static get parameters() {
		return [[Http]];
	}

	constructor(http) {
		this.http = http
	}	

	searchBeer(beerName) {
		var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(beerName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
		this.response = this.http.get(url).map(res => res.json());
	  return this.response;
	}
}