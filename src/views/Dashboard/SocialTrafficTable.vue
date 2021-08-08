<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">各品牌疫苗施打率(%)</h3>
        </b-col>
        <b-col class="text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </b-col>
      </b-row>
    </template>


    <el-table
      class="table-responsive table"
      :data="tableData"
      header-row-class-name="thead-light">
      <el-table-column label="疫苗品牌" min-width="115px" prop="name">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.name}}</div>
        </template>
      </el-table-column>



      <el-table-column min-width="220px" prop="progress">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <span class="mr-2">{{row.progress}}%</span>
            <base-progress :type="row.progressType" :value="row.progress" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            name: 'AstraZeneca',

            progress: 60,
            progressType: 'gradient-danger',
          },
          {
            name: 'Moderna',

            progress: 30,
            progressType: 'gradient-success',
          },
          {
            name: 'BioNTech',

            progress: 8,
            progressType: 'gradient-primary',
          },
          {
            name: '高端',

            progress: 2,
            progressType: 'gradient-info',
          },

        ]
      }
    }

  }
</script>
<style>
</style>
