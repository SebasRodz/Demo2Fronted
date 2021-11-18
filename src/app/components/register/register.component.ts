import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('contrasena') contrasena: ElementRef; 
  @ViewChild('contrasena2') contrasena2: ElementRef;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ValidarContrasena(){
    var contrasena = this.contrasena.nativeElement.value;
    var contrasena2 = this.contrasena2.nativeElement.value;
 
    if(contrasena==contrasena2){
      console.log(true);
    }else
    alert("Contraseñas diferentes")
  }

}
