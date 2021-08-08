<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="竹 科 廠 疫 苗 施 打 率"
                      type="gradient-red"
                      sub-title="20%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4"
                      >
            <template slot="footer">
                 <span class="text-success mr-2">3.48%</span>
                 <span class="text-nowrap">Increase last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="中 科 廠 疫 苗 施 打 率"
                      type="gradient-orange"
                      sub-title="20%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Increase last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="南 科 廠 疫 苗 施 打 率"
                      type="gradient-green"
                      sub-title="20%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Increase last month</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="海 外 廠 疫 苗 施 打 率"
                      type="gradient-info"
                      sub-title="20%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">5.18%</span>
              <span class="text-nowrap">Increase last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>
    
    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">TSMC 總體疫苗施打率(%)</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">施打率</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)">   
                    <span class="d-none d-md-block">未施打人數</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                  
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">部門施打率(%)</h6>
                <h5 class="h3 mb-0">Fab營運相關部門</h5>
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
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
      <b-row class="mt-5">
        <!--<Shot-Person-table></Shot-Person-table>-->
      </b-row>  
    </b-container>

  </div>
  
</template>
<script>

  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  import ShotPersonTable from './Dashboard/ShotPersonTable';
 
  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable,
      ShotPersonTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 6, 10, 18, 27, 32, 45, 50, 53],
            [22, 23, 205, 28, 31, 35, 37, 40, 41]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 50, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['R&D', '製程', '設備', 'IT', '業務', '營運'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
    },
    mounted() {
      this.initBigChart(0);
    },
  }


</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
