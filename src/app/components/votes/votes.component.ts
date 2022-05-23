import {Component, OnInit} from '@angular/core';
import {Vote} from "../../model/vote";
import {CatService} from "../../services/cat.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'cat-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  votes: Vote[] = [];
  displayedColumns: string[] = ['image_id', 'created_at', 'value'];

  constructor(private cs: CatService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cs.getVotes().subscribe({
      next: v => this.votes = v,
      error: err => this.snackBar.open(err.message, "close")
    });
  }

}
