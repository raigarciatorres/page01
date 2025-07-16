import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page01 } from "./page01/page01";
import { Page02 } from "./page02/page02";
import { Page03 } from "./page03/page03";
import { Page04 } from "./page04/page04";
import { Page05 } from "./page05/page05";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Page01, Page02, Page03, Page04, Page05],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  page:string = 'page01';
}
