<template>
  <b-card body-class="p-0" header-class="border-0" v-if = 'identity=="staff"'>
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">所屬員工疫苗施打情形</h3>
        </b-col>
      </b-row>
    </template>

    <el-table
      class="table-responsive table"
      :data="tableData"
      header-row-class-name="thead-light">
      <el-table-column label="工號" min-width="115px" prop="id">
      </el-table-column>
      <el-table-column label="施打狀態" min-width="115px" prop="status">
      </el-table-column>
     
    </el-table>
  </b-card>
</template>
<script>
  import axios from 'axios'
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'employee-table',
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
        identity: localStorage.identity,
        tableData: []
      }
    },
    created() {
      if (localStorage.identity=="staff"){
        var __this = this;
        axios
          .get('https://happyclick-healthcenter.herokuapp.com/find_employees_under_staff',{params:{"id":localStorage.id}})
          .then(res => {
            console.log(res.data);
            res.data.shot.forEach(function(item) {
              console.log(item);
              __this.tableData.push({
                  'id': item,
                  'status': '已施打'
              });
            })
            res.data.not_shot.forEach(function(item) {
              __this.tableData.push({
                  'id': item,
                  'status': '未施打'
              });
            });
          });
      }
    }
  }
  
</script>
<style>
</style>