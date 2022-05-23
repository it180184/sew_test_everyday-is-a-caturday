import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {Cat} from "../model/cat";
import {Vote, VoteRaw} from "../model/vote";
import {VoteFactory} from "../model/vote-factory";
import {VotesComponent} from "../components/votes/votes.component";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private api: string = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {
  }

  getRandom(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.api}/images/search`)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

  vote(id: string, value: number): Observable<any> {
    return this.http.post(`${this.api}/votes`, {
      'image_id': id,
      'sub_id': 'cat_app_sew',
      'value': value
    })
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

  getVotes(): Observable<Vote[]> {
    return this.http.get<VoteRaw[]>(`${this.api}/votes?sub_id=cat_app_sew`)
      .pipe(
        retry(2),
        map((raw) => raw.map(vote => VoteFactory.fromRaw(vote))),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(() => error);
  }
}
