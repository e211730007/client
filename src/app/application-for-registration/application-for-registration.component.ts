import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-for-registration',
  templateUrl: './application-for-registration.component.html',
  styleUrls: ['./application-for-registration.component.scss']
})
export class ApplicationForRegistrationComponent implements OnInit {

  sendDetails(){
    alert("הפרטים התקבלו בהצלחה במקרה ותקבל אישור למייל תוכל להיכנס שוב ולעדכן תודה רבה!!! ")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
