<template v-cloak>
  <div class="root">
    <div class="title">
      今日动态精选
    </div>
    <div class="creator">
      by <a href="https://m.okjike.com/users/11CD03AE-1A7E-4925-AB9E-E6A61F70CAE3" target="_blank">@三丰</a>
    </div>
    <el-empty v-if="feedLoadFinish && feedList.length===0" description="无数据"></el-empty>
    <el-card v-for="feed in feedList" class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span><a :href="feed.url" class="author" target="_blank">@{{ feed.screenName }}</a></span>
          <div class="topic_name">{{ feed.topicName }}</div>
        </div>
      </template>
      <div class="text item">
        <p style="white-space: pre-line;" v-html="feed.content"></p>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

* {
  font-size: 16px;
  line-height: 1.7;
  color: #595959;
}

.root {
  max-width: 600px;
  margin: auto;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin-top: 18px;
  margin-bottom: 18px;
  color: #303133;
  /*background-color: #4c8bd7;*/
}

.creator {
  /*background-color: aqua;*/
  text-align: right;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.52);
  margin-bottom: 20px;
}

.creator a {
  color: rgba(0, 0, 0, 0.52);
  vertical-align: top;
  text-decoration: none;
}

.el-card {
  margin-bottom: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  padding: 0 0;
}

.author {
  text-decoration: none;
  color: #404040;
  background-color: #fbe54f;
}

.topic_name {
  float: right;
  line-height: 100%;
  padding: 3px 0;
  color: #595959;
}
</style>
<script setup lang="ts">
</script>
<script lang="ts">
import {ComponentInternalInstance, defineComponent, getCurrentInstance} from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  data() {
    return {
      feedLoadFinish: false,
      feedList: []
    }
  },
  methods: {
    showToast() {
      console.log("showToast")
    },
  },
  setup() {
    console.log("setup")
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
    axios.get('https://jike.junbao.me/api/today')
        .then(response => {
          this.feedList = response.data.data;
          this.feedLoadFinish = true;
        })
        .catch(error => {
          console.log(error);
          this.feedLoadFinish = true;
        });
  },
  beforeUnmount() {
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
  }
})
</script>
