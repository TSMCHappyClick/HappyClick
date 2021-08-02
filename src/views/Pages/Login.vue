<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0" img-src="img/brand/HappyClick.png" style="max-width: 40rem;">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4"><big>Welcome to Happy Click</big></div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <big>Sign in</big>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-badge"
                              placeholder="Employee ID"
                              name="Employee ID"
                              :rules="{required: true}"
                              v-model="model.employeeID">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import CryptoJS from '@/util/CryptoJS.js'
  import axios from 'axios';
  import qs from 'qs';

  export default {
    data() {
      return {
        model: {
          employeeID: '',
          password: '',
          rememberMe: true
        }
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
        let encryptedPW = CryptoJS.encrypt(this.model.password)
        let b = CryptoJS.decrypt(encryptedPW)
        console.log(encryptedPW);
        console.log(b);

        const accountData = { ID: this.model.employeeID, password: this.model.password };
        console.log('data:',qs.stringify(accountData));

        
        axios
          .post("http://localhost:8088/Login", accountData)
          .then(res => {
            console.log('res:', res.body);
          });



      }
    }
  };
</script>
