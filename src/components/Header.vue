<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" width="" height="" />
      </router-link>

      <form class="search">
        <input type="text" placeholder="Search" />
      </form>

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

        <router-link to="/profile"> Profile </router-link>
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
    IconNotifications
    // IconNotificationsSelected
  }
}
</script>

<style scoped>
.header {
  /* background-color: yellow; */
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner {
  display: grid;
  height: 53px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.logo {
  display: flex;
  margin-top: 7px;
}
.search {
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

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 4px;

  a {
    margin-left: 21px;
  }
}
</style>
