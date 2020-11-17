<template>
  <div class="page" style="display: flex; align-items: center; height: 100%;">
    <div style="width: 100%;">
      <a-row type="flex" justify="center">
        <a-col
          v-for="(song, index) in songs"
          :key="song.title"
          flex="0 0 400px"
          style="margin-bottom: 25px; padding: 0 50px;">
          <ds-card
            :title="song.title"
            :description="song.desc"
            :placeholder="getPlaceholder(index + 1)"
            style="width: 100%;" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      pic: 'https://cdn.dribbble.com/users/2760253/screenshots/14579355/media/cd7121e29d37d4eb1311f54e8104abfe.jpg',
      songs: [{
        title: '如果当时',
        desc:  `
          为什么 你当时对我好
          又为什么 现在变得冷淡了
          我知道 爱要走难阻挠
          反正不是我的 我也不该要
          你和我 曾经有共同爱好
          谁的耳边 总有绝句在萦绕
        `
      }, {
        title: '千百度',
        desc: `
          关外野店烟火绝客怎眠
          寒来袖间 谁为我 添两件
          三四更雪 风不减 吹袭一夜
          只是可怜 瘦马未得好歇
          怅然入梦 梦几月 醒几年
          往事凄艳 用情浅 两手缘
          鹧鸪清怨 听得见 飞不回堂前
          旧楹联红褪墨残谁来揭
          我寻你千百度
          日出到迟暮
        `
      }, {
        title: '幻听',
        desc: `
          在远方的时候
          又想你到泪流
          这矫情的措辞结构
          经历过的人会懂
          那些不堪言的疼痛
          也就是我自作自受
          你没有装聋
          你真没感动
          一个人的时候
          偷偷看你的微博
          你转播的歌好耳熟
        `
      }]
    }
  },
  computed: {
    ...mapGetters({
      appName: 'app/name'
    })
  },
  methods: {
    getPlaceholder(index) {
      const text = index.toString()
      return text.length < 2 ? `0${text}` : text
    }
  }
}
</script>

<style lang="less" scoped>
  .banner {
    padding: 0 20%;
    color: #fff;
    &__slogan {
      padding: 100px;
      font-size: 32px;
    }
    &__pic {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .card {
    width: 300px;
    height: 200px;
    background-image: linear-gradient(to right, lighten(#ea5648, 20%), #ea5648);
  }
</style>
