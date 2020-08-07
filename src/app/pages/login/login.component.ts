import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginServices} from '../../../services/login';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  login = true;
  register = false;
  onSubmit = false;

  constructor(
    private fb: FormBuilder,
    private loginServices: LoginServices,
    private MessageServices: NzMessageService,
    private router: Router,
  ) {
  }

  ToRegister(): void {
    this.login = false;
    this.register = true;
  }

  ToLogin(): void {
    this.login = true;
    this.register = false;
  }

  submitLogin(): void {
    this.onSubmit = true;
    this.MessageServices.loading('正在登陆');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const sendData = {
      username: this.validateForm.value.userName,
      password: this.validateForm.value.password,
    };
    this.loginServices.login(sendData).then(res => {
      if (res.data.code === 0) {
        this.MessageServices.success(res.data.msg);
        sessionStorage.setItem('token', res.data.data.Authorization);
        this.router.navigate(['layout']);
      } else {
        this.onSubmit = false;
        this.MessageServices.warning(res.data.msg);
      }
    }).catch(res => {
      this.onSubmit = false;
      this.MessageServices.error(res.data.msg);
      console.log(res);
    });
  }

  submitRegister(): void {
    this.onSubmit = true;
    this.MessageServices.loading('正在注册');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const sendData = {
      username: this.validateForm.value.userName,
      password: this.validateForm.value.password,
    };
    this.loginServices.register(sendData).then(res => {
      if (res.data.code === 0) {
        this.onSubmit = false;
        this.MessageServices.success(res.data.msg);
        this.register = false;
        this.login = true;
      } else {
        this.onSubmit = false;
        this.MessageServices.warning(res.data.msg);
      }
    }).catch(res => {
      this.onSubmit = false;
      this.MessageServices.error(res.data.msg);
      console.log(res.data);
    });
  }


  ngOnInit(): void {
    this.login = true;
    this.register = false;
    this.onSubmit = false;
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
