<template>
  <div class="Profile">
    <CustomText tag="h1">Profile</CustomText>
    <IconOptions width="60" height="60" />
    <IconPosts width="60" height="60" />
    <IconIGTV width="60" height="60" />
    <IconSaved width="60" height="60" />
    <IconTagged width="60" height="60" />

    <div id="nav">
      <router-link to="/profile">Posts</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/saved">Saved</router-link> |
      <router-link to="/profile/tagged">Tagged</router-link> |
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconOptions from '@/icons/options.svg'
import IconPosts from '@/icons/posts.svg'
import IconIGTV from '@/icons/igtv.svg'
import IconSaved from '@/icons/saved.svg'
import IconTagged from '@/icons/tagged.svg'

export default {
  name: 'Profile',
  components: {
    CustomText,
    IconOptions,
    IconPosts,
    IconIGTV,
    IconSaved,
    IconTagged
  }
}
</script>

<style scoped></style>
