import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Location } from './location';

@Injectable()
export class GeolocationService {

  constructor(private http: Http) { }

  getLocation(address: string){
    return this.http
      .get(`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
      .map( res => res.json())
      .map( result =>{
          let location = new Location();
          location.address = result.results[0].formatted_address;
          location.latitude = result.results[0].geometry.location.lat;
          location.longitude = result.results[0].geometry.location.lng;

          return location;
      });
  }

}
