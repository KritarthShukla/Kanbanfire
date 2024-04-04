import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TaskComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB36oaPeGTEOwzpGjkrBGtsVM7podR6WAg",
      authDomain: "kanban-e41ae.firebaseapp.com",
      projectId: "kanban-e41ae",
      storageBucket: "kanban-e41ae.appspot.com",
      messagingSenderId: "618055600304",
      appId: "1:618055600304:web:7392eded8fa493caa31375",
      measurementId: "G-DV642VH8TL"
    }),
    AngularFirestoreModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }