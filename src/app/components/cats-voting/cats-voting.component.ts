import {Component, OnInit} from '@angular/core';
import {CatService} from "../../services/cat.service";
import {Cat} from "../../model/cat";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'cat-cats-voting',
  templateUrl: './cats-voting.component.html',
  styleUrls: ['./cats-voting.component.scss']
})
export class CatsVotingComponent implements OnInit {

  cat?: Cat;

  constructor(private cs: CatService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.newImage()
  }

  newImage(): void {
    this.cs.getRandom().subscribe({
      next: res => {
        this.cat = res[0];
        console.log(this.cat.breeds);
      },
      error: err => this.snackBar.open(err.message, "close")
    });
  }

  vote(value: number): void {
    this.cs.vote(this.cat?.id ?? '', value).subscribe({
      next: () => {
        setTimeout(() => this.newImage(), 200);
      },
      error: err => this.snackBar.open(err.message, "close")
    });
  }

}
