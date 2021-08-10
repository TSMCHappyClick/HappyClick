import { shallowMount, createLocalVue } from '@vue/test-utils'
import check from '@/views/Check.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()



describe('Check.vue',()=> {
    it('test shallowMount', () => {
        const wrapper = shallowMount(check)
        // 判斷元件是否掛載
        expect(wrapper.exists()).toBe(true)
        // 訪問vm例項

    })
        
    
  })