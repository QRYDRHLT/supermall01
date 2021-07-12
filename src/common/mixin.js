// 混入：提高代码复用
import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
export const itemImgListerMixin = {
  data(){
    return{
      itemImgLister: null
    }
  },
  mounted(){
    const newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgLister = () => {
      newRefresh()
    } 
    this.$bus.$on('itemImgLoad',this.itemImgLister)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    listenBackTop(position){
      this.isShowBackTop =  (-position.y) > 750
    },
    backTop(){
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}