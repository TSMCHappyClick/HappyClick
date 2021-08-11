<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="龍潭廠區疫苗施打率"
                      type="gradient-red"
                      sub-title="0.51%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.LT') }}: {{regionData.rate_1 }}%</h3>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="竹科廠區疫苗施打率"
                      type="gradient-orange"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.HC') }}: {{ regionData.rate_2 }}%</h3>
          </stats-card>
          
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="中科廠區疫苗施打率"
                      type="gradient-yellow"
                      sub-title="0.43%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.TC') }}: {{ regionData.rate_3 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="南科廠區疫苗施打率"
                      type="gradient-green"
                      sub-title="0.47%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.TN') }}: {{ regionData.rate_4 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="中國廠區疫苗施打率"
                      type="gradient-info"
                      sub-title="0.48%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.CHINA') }}: {{ regionData.rate_5 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="美國廠區疫苗施打率"
                      type="gradient-purple"
                      sub-title="12.76%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.USA') }}: {{ regionData.rate_6 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="新加坡廠區疫苗施打率"
                      type="gradient-default"
                      sub-title="0.51%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">
                      <h3>{{ $t('DASHBOARD.SIG') }}: {{ regionData.rate_7 }}%</h3>
          </stats-card>
        </b-col>

      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="12" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="h3 mb-0">{{ $t('DASHBOARD.Each_Fab') }}(%)</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="6" class="mb-5 mb-xl-0">
          <vaccine-table></vaccine-table>
        </b-col>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <employee-table ></employee-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  import axios from 'axios'
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import BarChart from '@/components/Charts/BarChart';
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // Tables
  import EmployeeTable from './Dashboard/EmployeeTable';
  import VaccineTable from './Dashboard/VaccineTable';
  export default {
    components: {
      BarChart,
      BaseProgress,
      StatsCard,
      EmployeeTable,
      VaccineTable
    },
    data() {
      return {
        regionData:{
          rate_1: 0,
          rate_2: 0,
          rate_3: 0,
          rate_4: 0,
          rate_5: 0,
          rate_6: 0,
          rate_7: 0,
        },
        redBarChart: {
          chartData: {
            labels: [],
            datasets: [{
              label: this.$t('DASHBOARD.Shot_Rate'),
              data: []
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
    },
    created() {
      var __this = this;
      //get data for division shot
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/find_division_shot_rate')
          .then(res => {
            // console.log(res.data);
            // console.log(res.data['竹科'])
            __this.regionData.rate_1 = Math.round(res.data['龍潭封測廠']*10000)/100;
            __this.regionData.rate_2 = Math.round(res.data['竹科']*10000)/100;
            __this.regionData.rate_3 = Math.round(res.data['中科']*10000)/100;
            __this.regionData.rate_4 = Math.round(res.data['南科']*10000)/100;
            __this.regionData.rate_5 = Math.round(res.data['中國']*10000)/100;
            __this.regionData.rate_6 = Math.round(res.data['美國']*10000)/100;
            __this.regionData.rate_7 = Math.round(res.data['新加坡']*10000)/100;
          })
          .catch( (error) => console.log(error));
          
      //get data for barChart 
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/find_fac_shot_rate')
          .then(res => {
            // console.log("test");
            // console.log(res.data);
            // console.log("FAC:",res.data.factories);

            __this.redBarChart= {
              chartData: {
                labels: res.data.factories,
                datasets: [{
                  label: this.$t('DASHBOARD.Shot_Rate'),
                  data: res.data.rate
                }]
              },
              extraOptions: chartConfigs.blueChartOptions
            }
          })
          .catch( (error) => console.log(error));
          // console.log("AFTERALL:",this.redBarChart.chartData.labels)
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>