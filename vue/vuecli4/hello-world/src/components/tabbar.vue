<template>
  <div class="bottom-nav">
    <ul>
      <li
      :class="{'active':$route.path === list.path}"
      v-for="list in navConfig"
      :key="list.index"
      @click="changeNav(list)"
      >
        <a>
          <i v-if="$route.path === list.path"
            :class="list.icon"
            :style="{ backgroundImage: 'url('+ list.iconImageActive +')' }">
          </i>
          <i v-else :class="list.icon"
            :style="{ backgroundImage: 'url('+ list.iconImage +')' }">
          </i>
          <div>{{ list.name }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    navConfig: {
      type: Array
    }
  },
  computed: {

  },
  methods: {
    changeNav (list) {
      this.$router.replace(list.path)
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  width: 100%;
  height: 49px;
  bottom: 0;
  background-color: #fff;
  z-index: 8;
  -o-border-image: url(https://b.yzcdn.cn/v2/image/wap/border-line-2.png) 2
    stretch;
  border-image: url(https://b.yzcdn.cn/v2/image/wap/border-line-2.png) 2 stretch;
  border-top: 2px solid #e5e5e5;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min--moz-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  .bottom-nav {
    border-top-width: 1px;
    z-index: 999;
  }
}

.bottom-nav ul {
  position: relative;
  height: 100%;
  zoom: 1;
}

.bottom-nav ul:after {
  content: "";
  display: table;
  clear: both;
}

.bottom-nav li {
  display: block;
  float: left;
  width: 25%;
  height: 100%;
}

.bottom-nav a {
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  text-align: center;
  font-size: 10px;
}

.bottom-nav [class^="icon-"] {
  display: block;
  width: 22px;
  height: 22px;
  margin: auto;
  margin-bottom: 4px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.bottom-nav .active a {
  color: #ff6366;
}
</style>
