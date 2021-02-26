<template>
  <div class="home">
    <div class="timeline">
      <!-- <br />
      <br />
      <br />
      <br /> -->

      <Post />

      <br />
      <br />
      <br />
      <br />
    </div>

    <div class="sidebar">
      <h1>Sidebar</h1>
      <CustomText class="" tag="p">Selam</CustomText>
      <CustomText class="" tag="p" size="small">Selam</CustomText>
      <CustomText class="" tag="p" size="xsmall">Selam</CustomText>
      <CustomText class="" tag="p">Selam</CustomText>
      <CustomText class="" tag="p" size="small">Selam</CustomText>
      <CustomText class="" tag="p" size="xsmall">Selam</CustomText>
      <CustomText class="" tag="p">Selam</CustomText>
      <CustomText class="" tag="p" size="small">Selam</CustomText>
      <CustomText class="" tag="p" size="xsmall">Selam</CustomText>
      <CustomText class="" tag="p">Selam</CustomText>
      <CustomText class="" tag="p" size="small">Selam</CustomText>
    </div>

    <!-- <CustomText tag="p" size="xxsmall">Selam</CustomText>
    <IconHome width="60" height="60" />
    <IconHomeSelected width="60" height="60" />
    <IconDirect width="60" height="60" />
    <IconDirectSelected width="60" height="60" />
    <IconExplore width="60" height="60" />
    <IconExploreSelected width="60" height="60" />
    <IconNotifications width="60" height="60" />
    <IconNotificationsSelected width="60" height="60" />
    <IconDots width="60" height="60" />
    <IconLike width="60" height="60" />
    <IconLikeSelected width="60" height="60" />
    <IconComment width="60" height="60" />
    <IconShare width="60" height="60" />
    <IconSave width="60" height="60" />
    <IconSaveSelected width="60" height="60" />
    <IconEmoji width="60" height="60" />
    <br />
    <IconNewMessage width="60" height="60" />
    <IconArrow width="60" height="60" />
    <IconInfo width="60" height="60" />
    <IconAddImg width="60" height="60" />
    <br />
    <IconOptions width="60" height="60" />
    <IconPosts width="60" height="60" />
    <IconIGTV width="60" height="60" />
    <IconSaved width="60" height="60" />
    <IconTagged width="60" height="60" /> -->
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import Post from '@/components/Post'
// import Avatar from '@/components/Avatar'
// import IconHome from '../../icons/home.svg'
// import IconHomeSelected from '../../icons/home-selected.svg'
// import IconDirect from '../../icons/direct.svg'
// import IconDirectSelected from '../../icons/direct-selected.svg'
// import IconExplore from '../../icons/explore.svg'
// import IconExploreSelected from '../../icons/explore-selected.svg'
// import IconNotifications from '../../icons/notifications.svg'
// import IconNotificationsSelected from '../../icons/notifications-selected.svg'
// import IconDots from '../../icons/dots.svg'
// import IconLike from '../../icons/like.svg'
// import IconLikeSelected from '../../icons/like-selected.svg'
// import IconComment from '../../icons/comment.svg'
// import IconShare from '../../icons/share.svg'
// import IconSave from '../../icons/save.svg'
// import IconSaveSelected from '../../icons/save-selected.svg'
// import IconEmoji from '../../icons/emoji.svg'
// import IconOptions from '../../icons/options.svg'
// import IconPosts from '../../icons/posts.svg'
// import IconIGTV from '../../icons/igtv.svg'
// import IconSaved from '../../icons/saved.svg'
// import IconTagged from '../../icons/tagged.svg'
// import IconNewMessage from '../../icons/new-message.svg'
// import IconArrow from '../../icons/arrow.svg'
// import IconInfo from '../../icons/info.svg'
// import IconAddImg from '../../icons/add-img.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    Post
    // Avatar
    // IconHome,
    // IconHomeSelected,
    // IconDirect,
    // IconDirectSelected,
    // IconExplore,
    // IconExploreSelected,
    // IconNotifications,
    // IconNotificationsSelected,
    // IconDots,
    // IconLike,
    // IconLikeSelected,
    // IconComment,
    // IconShare,
    // IconSave,
    // IconSaveSelected,
    // IconEmoji,
    // IconOptions,
    // IconPosts,
    // IconIGTV,
    // IconSaved,
    // IconTagged,
    // IconNewMessage,
    // IconArrow,
    // IconInfo,
    // IconAddImg
  }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;
  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
