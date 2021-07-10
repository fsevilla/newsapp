import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validators: this.validarPasswords()
    });
  }

  ngOnInit(): void {
  }

  validarPasswords() {
    return () => {
      if(!this.form) return null;
      
      // const password = this.form.controls.password.value;
      // const confirm = this.form.controls.confirmPassword.value;

      const datos = this.form.getRawValue();
      if(datos.password === datos.confirmPassword) {
        return null;
      } else {
        return { mismatch: true }
      }

    };
  }

  guardarDatos() {
    console.log('Guardar al usuario....', this.form);
    if(this.form.valid) {
      console.log('Enviar datos');
    }
  }

}
