import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  title: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  search() {
    this.onEnter.emit(this.title);
  }


}
