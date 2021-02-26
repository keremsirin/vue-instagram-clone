<template>
  <div class="post">
    <!-- Header -->
    <header class="header section">
      <div class="header-author">
        <Avatar :size="34" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b"> keremsirinn </CustomText>
          </div>
          <div>
            <CustomText size="xsmall"> Pilevneli Gallery </CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconDots />
        </button>
      </div>
    </header>
    <!-- Media -->
    <div class="post-media">
      <img
        src="https://instagram.fist10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/83234785_844915699283841_3654724365176690539_n.jpg?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=y4nKLdEp63sAX96E_3r&tp=1&oh=732ae5a3a78e90e10fae2d3d521342d0&oe=6063BD9C"
        alt=""
      />
    </div>
    <!-- Actions -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconShare />
      </button>
      <button type="button">
        <IconSave />
      </button>
    </div>
    <!-- View Count -->
    <div class="view-count section">
      <CustomText tag="b">
        93 likes
      </CustomText>
    </div>
    <!-- Caption -->
    <div class="post-caption section">
      <CustomText tag="b"> keremsirinn</CustomText>
      <CustomText class="post-caption-text">Biraz da sanat 🎨</CustomText>
    </div>
    <!-- Comments List -->
    <div class="comment-list section">
      <div class="comment-list-view">
        <a href="" onclick="return false;">
          <CostumText>View all 6 comments</CostumText>
        </a>
      </div>
      <div class="comment-list-comments">
        <div class="block">
          <CustomText tag="b">rhazals</CustomText>
          <CustomText class="comment-list-comments-text">😍 😍 😍</CustomText>
          <button type="button" width="12" height="12">
            <IconLike width="12" height="12" />
          </button>
        </div>
        <div class="block">
          <CustomText tag="b">batucmrt</CustomText>
          <CustomText class="comment-list-comments-text">🔥 🔥 🔥</CustomText>
          <button type="button" width="12" height="12">
            <IconLike width="12" height="12" />
          </button>
        </div>
      </div>
    </div>
    <!-- Datetime -->
    <div class="datetime section">
      <CustomText class="datetime-content" size="xxsmall">
        4 DAYS AGO
      </CustomText>
    </div>
    <!-- Comments Form -->
    <div class="comment-form section">
      <div class="comment-form-emoji">
        <IconEmoji />
      </div>
      <div class="comment-form-add">
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
      </div>
      <div class="comment-form-post">
        <button type="submit">
          <CustomText class="post-button" tag="b">Post</CustomText>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'
import IconDots from '@/icons/dots.svg'
import IconLike from '@/icons/like.svg'
// import IconLikeSelected from '@/icons/like-selected.svg'
import IconComment from '@/icons/comment.svg'
import IconShare from '@/icons/share.svg'
import IconSave from '@/icons/save.svg'
import IconEmoji from '@/icons/emoji.svg'

export default {
  name: 'Post',
  components: {
    Avatar,
    CustomText,
    IconDots,
    IconLike,
    IconComment,
    IconShare,
    IconSave,
    IconEmoji
  }
}
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}

.header {
  display: flex;
  height: 60px;
  align-items: center;

  &-author {
    display: flex;
    align-items: center;

    &-info {
      margin-left: 8px;
    }
  }
  &-more {
    margin-left: auto;
  }
}

.action-buttons {
  display: flex;
  height: 46px;
  align-items: center;
  padding-top: 4px;

  button {
    margin-right: 16px;
    &:last-child {
      margin-left: auto;
      margin-right: 0;
    }
  }
}

.view-count {
  margin-bottom: 4px;
}

.post-caption {
  &-text {
    margin-left: 4px;
  }
}

.comment-list {
  &-view {
    margin-top: 2px;
    margin-bottom: 2px;
    color: rgb(var(--f52));
  }
  &-comments {
    display: block;
    &-text {
      margin-left: 4px;
    }
  }
}

.block {
  display: flex;
  align-items: center;
  button {
    margin-left: auto;
  }
}

.datetime {
  margin-top: 2px;
  &-content {
    color: rgb(var(--f52));
  }
}

.comment-form {
  display: grid;
  grid-template-columns: 40px 1fr 1fr;
  align-items: center;
  height: 56px;
  border-top: 1px solid rgb(var(--ce3));
  margin-top: 10px;

  &-emoji {
    text-align: center;
  }
  &-add {
    margin-left: 8px;
    textarea {
      display: flex;
      height: 18px;
      width: 498px;
      resize: none;
      max-height: 54px;
    }
  }
  &-post {
    text-align: center;
  }
}

.post-button {
  color: rgb(var(--d69));
}
</style>
