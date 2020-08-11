import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.css']
})
export class SenderFormComponent implements OnInit {

  senderName: string;
  senderEmail: string;
  senderContactNum: number;

  senderDetails: any;
  constructor() { }
  ngOnInit(): void {
  }
  GetSenderDetail(): any{
    this.senderDetails = [
      this.senderName,
      this.senderEmail,
      this.senderContactNum
    ];
    return this.GetSenderDetail;
  }
}
