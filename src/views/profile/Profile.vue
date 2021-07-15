<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login-bar />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import LoginBar from "./children/LoginBar";
import Money from "./children/Money";
import ProfileList from "./children/profileList";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: { Scroll, ProfileList, Money, LoginBar, NavBar}
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
