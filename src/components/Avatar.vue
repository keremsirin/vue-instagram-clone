<template>
  <figure class="avatar">
    <img
      :src="src"
      :alt="alt"
      :width="size"
      :height="size"
      :style="background"
    />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://instagram.fist10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117433864_1991775174292169_3200767522508786292_n.jpg?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_ohc=echJz0RojhUAX_RdtND&tp=1&oh=a63d876a323f12af7f2e511d29bf0d96&oe=605E18EB'
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    },
    background: {
      type: String
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline-flex;
  /* border: 3px solid black; */
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(193, 53, 132, 1) 0%,
    rgba(225, 48, 108, 1) 35%,
    rgba(247, 119, 55, 1) 70%,
    rgba(255, 220, 128, 1) 100%
  );
  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
