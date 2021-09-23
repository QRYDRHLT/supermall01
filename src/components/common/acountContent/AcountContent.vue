<template>
  <div class="acount-content">
    <div class="acount-wrap">
      <div class="input-wrap">
       <input type="text" v-model="user" placeholder="昵称">
      </div>
      <div class="input-wrap">
       <input type="number" v-model="number" placeholder="手机号">
      </div>
      <div class="input-wrap">
       <input type="password" v-model="password" placeholder="密码">
      </div>
      <div class="submit-wrap">
        <span v-if="true" @click="submitLogin" >登录</span>
        <span v-else>注册</span>
      </div>
    <toast :message="message" v-show="isToast"></toast>
      <!-- <p>暂无账号，立即注册</p> -->
    </div>
  </div>
</template>

<script>
import Toast from '../toast/Toast'
export default {
  name: 'AcountContent',
  components: {
    Toast
  },
  data(){
    return{
      user: '',
      number: '',
      password: '',
      message: '登录成功',
      isToast: false
    }
  },
  methods: {
    submitLogin(){
      this.isToast = true
      console.log(this.user,this.number,this.password);
      // 触发action中getUser的回调函数，同时传入用户名和密码
      this.$store.dispatch('getUser',{user:this.user,number:this.number,password:this.password})
      this.$router.replace('/profile')
    }
  }
}
</script>

<style scoped>
body{
  box-sizing:content-box;
}
.acount-content {
  width: 100%;
  margin-top: 45px;
  font-size: 12px;
}
.acount-wrap {
  width: 85%;
  margin: 0 auto;
}
.input-wrap {
  width: 100%;
  height: 39px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.input-wrap>input {
  width: calc(100% - 10px);
  height: 39px;
  font-size: 18px;
  padding: 0 5px;
  line-height: 30px;
  border: 0;
}
.input-wrap>input::placeholder {
  font-size: 18px;
  color: #ccc;
}

.submit-wrap {
  width: 100%;
  height: 47px;
  margin-top: 35px;
  background-color: #ff5777;
  border-radius: 22px;
}
.submit-wrap span {
  display: block;
  width: 100px;
  height: 47px;
  margin: 0 auto;
  text-align: center;
  line-height: 47px;
  color: #fff;
  font-size: 16px;
}
</style>