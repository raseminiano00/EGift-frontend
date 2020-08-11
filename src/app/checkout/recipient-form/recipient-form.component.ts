import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.css']
})
export class RecipientFormComponent implements OnInit {

  name: string;
  email: string;
  contactNum: number;
  dedication: string;
  constructor() { }

  ngOnInit(): void {
  }

}
