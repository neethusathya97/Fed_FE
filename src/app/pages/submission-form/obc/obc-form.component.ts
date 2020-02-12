import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubmissionFormFormComponent } from '../form/submission-form-form.component';


@Component({
    selector: 'app-obc-form',
    templateUrl: './obc-form.component.html',
  })

  export class ObcformComponent implements OnInit {
      constructor(){}
      ngOnInit(){}
  }