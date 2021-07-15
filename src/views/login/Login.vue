<template>
  <div class="login">
    <nav-bar>
      <div slot="left">
        <div @click="backFn">
          <img src="~assets/images/back.svg" class="back-icon"/>
        </div>
      </div>
      <div slot="center">账号登录</div>
    </nav-bar>
    <acount-content/>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
import AcountContent from "components/common/acountContent/AcountContent"
export default {
  name: 'Login',
  components: {
    NavBar,
    AcountContent
  },
  methods: {
    backFn(){
      console.log('返回');
      this.$router.replace('/profile')
    }
  }
}
</script>

<style scoped>
.back-icon {
  width: 22px;
  height: 22px;
  margin-left: 5px;
  vertical-align: middle;
}
</style>