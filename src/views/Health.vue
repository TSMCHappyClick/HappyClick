<template>
    <div>
        
        <div class="header pb-2 pt-5 pt-lg-6 d-flex align-items-center">
        <b-container fluid>
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <b-container fluid class="d-flex align-items-center">
            <b-row >
                <b-col lg="10" md="8">
                <h1 class="display-3 text-white">Health Center Page</h1>
                <p class="text-white mt-0 mb-2">This is for Health Center's staff ONLY</p>
                
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        </div>
            <b-card class="mt-3" header="已施打疫苗名單" header-bg-variant="info" header-text-variant="white">
                <b-card-text>
                每天於疫苗施打完畢後 (17:00)，更新已施打疫苗的員工資料。
                </b-card-text>

                <b-card-text>請勾選施打狀態。</b-card-text>


                <b-table striped hover :items="items" :fields="fields"></b-table>
                <b-form-checkbox>已施打</b-form-checkbox>


                <a href="#" class="card-link">Card link</a>
                <b-link href="#" class="card-link">Another link</b-link>
            </b-card>
        </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['employeeID', 'name', 'vaccine', 'Date'],
        items:[
            {employeeID: 120332 ,name: 'Anson',vaccine: 'AstraZeneca', Date: '2021-08-08'},
        ],
        form: {
          employeeID: '',
          name: '',
          vaccine: null,
          date: null,
          checked: []
        },
        vaccine: [{ text: 'Select One', value: null }, 'AstraZeneca', 'Moderna', 'BioNTech', '高端'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.employeeID = ''
        this.form.name = ''
        this.form.vaccine = null
        this.form.date = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
