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

                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import CryptoJS from '@/util/CryptoJS.js'
  import axios from 'axios';

  export default {
    data() {
      return {
        model: {
          employeeID: '',
          password: ''
        }
      };
    },
    methods: {
      onSubmit() {
        let encryptedPW = CryptoJS.encrypt(this.model.password)
        console.log(encryptedPW);

        const accountData = { id: this.model.employeeID, password: this.model.password };

        axios
          .post("https://happyclick-healthcenter.herokuapp.com/login", accountData)
          .then(res => {
            // console.log("res status", res.status);
            // console.log('res data:', res.data);
            localStorage.identity = res.data.identity;
            localStorage.setItem("id", this.model.employeeID);
            localStorage.username = res.data.username;
            localStorage.status = "logged in";
            this.$router.push('/dashboard');
          })
          .catch( (error) => {
              // console.log(error);
              alert("wrong ID or password!");
          });

      }
    }
  };
</script>
