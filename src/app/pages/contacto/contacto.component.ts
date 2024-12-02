import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form = {name:'', email:'', message:''}
  message:string = 'Enviar mensaje'
  error:boolean = false

  constructor(private fb: FormBuilder, private http: HttpClient, private mailService: MailService){

  }
  submit(){
    const{name, email, message} = this.form
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    if (this.form.name !== '' && this.form.email !== '' && this.form.message !== '') {
      this.mailService.sendEmail(this.form).subscribe(
        () => {
          alert('Error al enviar el email');
          this.message = "Mensaje no enviado"
          console.error("error");
        },
        err => {
          this.message = "Mensaje enviado"
          window.location.reload()
        }
      );
    } else {
      this.error = true
    }
  }
}
