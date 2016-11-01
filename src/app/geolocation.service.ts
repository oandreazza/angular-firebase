import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Location } from './location';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeolocationService {

    constructor(private http: Http) { }

    getLocation(address: string) {
        return this.http
            .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
            .map(res => res.json())
            .map(result => {
                let location = new Location();
                location.address = result.results[0].formatted_address;
                location.latitude = result.results[0].geometry.location.lat;
                location.longitude = result.results[0].geometry.location.lng;

                return location;
            });
    }

    //haversine formula
    getCurrentLocation(): Observable<Location> {
        return Observable.create(
            observer => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const coordinates = position.coords;
                        let location = new Location();
                        location.latitude = coordinates.latitude;
                        location.longitude = coordinates.longitude;
                        observer.next(location);
                    }
                )
            }
        )

    }

    getDistanceFromLatLonInKm(locationStarted: any, locationFinished: any) {

        if (!locationStarted || !locationFinished)
            return 0;
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(locationFinished.latitude - locationStarted.latitude);  // deg2rad below
        var dLon = this.deg2rad(locationFinished.longitude - locationStarted.longitude);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(locationStarted.latitude)) * Math.cos(this.deg2rad(locationFinished.latitude)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km

        return Number(d.toFixed(3));
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

}
