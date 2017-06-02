import { Component, OnInit }    from '@angular/core';
import { FormControl }          from '@angular/forms';

import { YoutubeSearchService } from '../../shared/services/youtube-search.service';

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';

@Component({
  templateUrl: './form-rxjs.component.html',
  styleUrls: ['./form-rxjs.component.css']
})
export class FormRxjsComponent implements OnInit {

  private searchTerm = new Subject<any>();
  results: Observable<any>;

  constructor(private ytSearch: YoutubeSearchService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.results = this.searchTerm
      .debounceTime(300)        // wait 300ms after each keystroke before considering the query
      .distinctUntilChanged()   // ignore if next searchTerm term is same as previous
      .switchMap(query => this.ytSearch.search(query))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

}
