<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" width="" height="" />
      </router-link>
      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>
      <!-- nav -->
      <nav class="navigation">
        <router-link to="/">
          <IconHomeSelected v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectSelected v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreSelected v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>

        <a href="" onclick="return false;">
          <IconNotifications />
          <!-- <IconNotificationsSelected /> -->
        </a>

        <router-link to="/profile">
          <Avatar :size="26" style="background: transparent" />
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import Container from '@/components/Container'
import IconHome from '@/icons/home.svg'
import IconHomeSelected from '@/icons/home-selected.svg'
import IconDirect from '@/icons/direct.svg'
import IconDirectSelected from '@/icons/direct-selected.svg'
import IconExplore from '@/icons/explore.svg'
import IconExploreSelected from '@/icons/explore-selected.svg'
import IconNotifications from '@/icons/notifications.svg'
import Avatar from '@/components/Avatar'
// import IconNotificationsSelected from '@/icons/notifications-selected.svg'

export default {
  name: 'MasterHeader',
  components: {
    IconHome,
    IconHomeSelected,
    Container,
    IconDirect,
    IconDirectSelected,
    IconExplore,
    IconExploreSelected,
    IconNotifications,
    Avatar
    // IconNotificationsSelected
  }
}
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 90;
}
.header-inner {
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo {
  display: flex;
  margin-top: 7px;
}
.search {
  display: none;

  @media (--t) {
    display: block;
    text-align: center;

    input {
      width: 215px;
      height: 28px;
      border: 1px solid rgb(var(--b6a));
      background-color: rgb(var(--b3f));
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
      margin-right: 10px;

      &::placeholder {
        text-align: center;
      }
    }
  }
}

.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid rgb(var(--b6a));
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (--t) {
    height: auto;
    position: static;
    justify-content: flex-end;
    margin-top: 4px;
    border-top: none;

    a {
      margin-left: 21px;
    }
  }
}
</style>
