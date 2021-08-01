<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">各廠區施打率</h3>
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="廠區"
                       min-width="130px"
                       prop="factory">
        <template v-slot="{row}">
          <div class="font-weight-700">{{row.factory}}</div>
        </template>
      </el-table-column>
      <el-table-column label="施打人數"
                       min-width="70px"
                       prop="people">
      </el-table-column>
      <el-table-column label="地點"
                       min-width="70px"
                       prop="location">
      </el-table-column>
      <el-table-column label="施打率"
                       min-width="90px"
                       prop="rate">
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
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
            factory: 'F2',
            location: '竹科',
            people: '30',
            rate: '0.46%',
          },
          {
            factory: 'F3',
            location: '竹科',
            people: '97',
            rate: '0.61%'
          },
          {
            factory: 'F5',
            location: '竹科',
            people: '46',
            rate: '0.32%',
          },
          {
            factory: 'F7',
            location: '竹科',
            people: '75',
            rate: '0.56%',
          },
          {
            factory: 'F8',
            location: '竹科',
            people: '48',
            rate: '0.43%',
          },
          {
            factory: 'F12',
            location: '竹科',
            people: '62',
            rate: '0.63%',
          }
        ]
      }
    }
  }
</script>
<style>
</style>
