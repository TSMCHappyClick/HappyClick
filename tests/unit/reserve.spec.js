import { shallowMount, createLocalVue } from '@vue/test-utils'
import reserve from '@/views/Reserve.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()



describe('Reserve.vue',()=> {

    it('輸入框初始值為空字符串', () => {
        const wrapper = shallowMount(reserve)
        expect(wrapper.vm.form.employeeID).toBe('')
    })
    /*
    it('reset', () => {
        const wrapper = shallowMount(reserve)
        const input = wrapper.find({name:'input-1'})
        const form = wrapper.find({name:'form'})
        input.setValue = '123321'
        form.trigger('reset')
        expect(wrapper.vm.form.employeeID).toBe('')
    })
    */
  })