<template>
  <div class="acount-content">
    <div class="acount-wrap">
      <div class="input-wrap">
       <input type="text" placeholder="用户名/手机号">
      </div>
      <div class="input-wrap">
       <input type="password" placeholder="密码">
      </div>
      <div class="submit-wrap">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcountContent'
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