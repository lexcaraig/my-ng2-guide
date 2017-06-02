import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { YOUTUBE_API } from '../../utils/constants/apis';

@Injectable()
export class YoutubeSearchService {

  constructor(private http: Http) {}

  search(query: string): Observable<any> {
    return this.http
               .get(`${YOUTUBE_API.BASE_URL}?q=${query}&part=snippet&key=${YOUTUBE_API.API_TOKEN}`)
               .map(response => response.json())
               .map(data => data.items);
  }
}
