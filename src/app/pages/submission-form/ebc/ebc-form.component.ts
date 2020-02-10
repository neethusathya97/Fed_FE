import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingModel } from '../../../model/setting/setting.model';
import { SchemeModel   } from '../../../model/scheme/scheme.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubmissionFormFormComponent } from '../form/submission-form-form.component';


@Component({
    selector: 'app-ebc-form',
    templateUrl: './ebc-form.component.html',
    
  })
  export class EbcformComponent implements OnInit {
      constructor(){}
      ngOnInit(){}
  }