import {Component, OnInit, ViewChild} from '@angular/core';
import {Vote} from "../../model/vote";
import {CatService} from "../../services/cat.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'cat-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  votes: Vote[] = [];
  displayedColumns: string[] = ['image_id', 'created_at', 'value'];
  dataSource: MatTableDataSource<Vote> = new MatTableDataSource<Vote>(this.votes);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private cs: CatService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cs.getVotes().subscribe({
      next: v => this.setVotes(v),
      error: err => this.snackBar.open(err.message, "close")
    });
  }

  setVotes(votes: Vote[]): void {
    this.votes = votes;
    this.dataSource = new MatTableDataSource<Vote>(this.votes);
    this.dataSource.paginator = this.paginator!;
  }

}
