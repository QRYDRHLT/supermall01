<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <img src="../../../assets/images/profile/1_xiaoxi.png" class="profile-list-icon"/>
      <span>我的消息</span>
    </div>
    <div class="profile-list-item">
      <img src="../../../assets/images/profile/2_liwu.png" class="profile-list-icon"/>
      <span>积分商城</span>
    </div>
    <div class="profile-list-item">
      <img src="../../../assets/images/profile/3_huiyuanka.png" class="profile-list-icon"/>
      <span style="border-bottom: 0;">会员卡</span>
    </div>
    <div class="line"></div>
    <div class="profile-list-item" @click="cartClick">
      <img src="../../../assets/images/profile/4_gouwuche.png" class="profile-list-icon"/>
      <span>我的购物车</span>
    </div>
    <div class="profile-list-item">
      <img src="../../../assets/images/profile/5_dianzan.png" class="profile-list-icon"/>
      <span>点赞购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileList",
  methods: {
    cartClick(){
      this.$router.replace('/cart')
    }
  }
};
</script>

<style scoped>
.profile-list {
  width: 100%;
}

.profile-list-item {
  line-height: 45px;
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: 20px;
}

.profile-list-item .profile-list-icon {
  font-size: 24px;
  display: inline-block;
  margin-right: 7px;
}

.profile-list-item span {
  font-size: 16px;
  display: inline-block;
  width: 100%;
  color: #333333;
  border-bottom: 1px solid #dddddd;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>
