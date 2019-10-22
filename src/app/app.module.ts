import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CoursesComponent, CourseComponent ],
  providers: [ CoursesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
