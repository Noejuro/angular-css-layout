import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() src: string = "";
  @Input() alt: string = "";
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
