<template v-cloak>
  <div class="root">
    <div class="title">
      今日动态精选
    </div>
    <div class="creator">
      by <a href="https://m.okjike.com/users/11CD03AE-1A7E-4925-AB9E-E6A61F70CAE3" target="_blank">@三丰</a>
    </div>
    <el-empty v-if="feedList.length===0" description="无数据"></el-empty>
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
import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      feedList: [{
        "url": "https://m.okjike.com/originalPosts/622b59b888fbe60010942193",
        "createAt": "2022-03-11 22:16",
        "username": "c28c4303-ea82-4043-9938-cc6ed14f83d0",
        "screenName": "孟岩",
        "topicName": "",
        "content": "越来越理解芒格说的，不要和那些人品不好的，不值得你信任和尊敬的人合作。\n\n他们的性格和处事方式，天然就隐藏着占便宜、惹麻烦的种子。\n\n短期你能获得的东西，根本无法匹配现在你根本想象不到的，未来从这些种子生根发芽的烂事。",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b6ec5e8376b0010364800",
        "createAt": "2022-03-11 23:46",
        "username": "dd289a87-ffaa-4dd3-ad8a-963c1428feee",
        "screenName": "精神病人顾大夫们",
        "topicName": "今日烂梗",
        "content": "像极了某些产品经理的解题思路。",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FiSRKkiufCTIwTZzSPM3cjPEJCgBv2.jpeg?imageMogr2/format/jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b36b5845598001032faac",
        "createAt": "2022-03-11 19:47",
        "username": "172ACA6F-E650-4E8E-92E2-3B60CE4913EB",
        "screenName": "纯银",
        "topicName": "",
        "content": "密集谈心时，我会反复提到的一句话是：\n“下班回家，好好生活。”\n工作中训练出来的硬技能，大同小异，中位数以上高一点低一点没有太大的关系。但生活中根据各自的爱好，圈子，时间投入得到的软技能，才是未来3-5年里，让你和同事很不一样，会给你带来很大帮助的东西。",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b275e40bdef0010e35e02",
        "createAt": "2022-03-11 18:41",
        "username": "cd912cdd-932e-49b5-a2d4-99d6203b02a3",
        "screenName": "吕东",
        "topicName": "一起听播客",
        "content": "第二季完结了，欢迎新的品牌朋友携手共创第三季🥳",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FreOom7TVHU-nS6o470qg1SjGxwlv2.jpeg?imageMogr2/format/jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b2e2901726c00107fd57d",
        "createAt": "2022-03-11 19:10",
        "username": "251EF962-D7CB-4809-B4B3-FD37BDBC8130",
        "screenName": "快乐女孩张笑真",
        "topicName": "一起拍写真",
        "content": "来看看酷妹妹\n想念我的长发了！\n我要继续留长发( ̀⌄ ́)",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FjrUcwCQ0MIAO77Y_RgnlTF1XoP-v2.jpg", "https://cdn.jellow.site/Fg4JowrS5vNU9vCY9rEzmu_2RAh6v2.jpg", "https://cdn.jellow.site/Fu5hqOJcUQu7eShfdyNtEPJnT9j2v2.jpg", "https://cdn.jellow.site/Fj8CeoEGdEpLNTUnv310z7o8z6I4v2.jpg", "https://cdn.jellow.site/FoTtAmZR_jUafoYO2vu4tNyqYf2av2.jpg", "https://cdn.jellow.site/FspMseleqiyyJiS4i6wHarcrHhrqv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b4241a2178000104abd2e",
        "createAt": "2022-03-11 20:36",
        "username": "4A1A47B2-80E5-472C-A984-213080733E39",
        "screenName": "昭君今天早睡了吗",
        "topicName": "即友日记本",
        "content": "打坐之前发个俗图\n当时凭借这张臀部特写，一举拿下天然呆男朋友\n当时我的想法：\n从外观上来看，确定交往这个人吗？\n确定！👉展示性吸引力；\n深度交流三观，再次确定要和他在一起吗？\n确定！👉袒露心扉，继续交往……\n（在确定这个人是呆瓜之后我才敢这么干，万一对方太精明的搞不好就成liaosao了）",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FpaEJsw8f7W9jpZRw46aRtYqPQvzv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b21ee61c5d60010b455f0",
        "createAt": "2022-03-11 18:18",
        "username": "D423FDBD-0175-4FB5-B852-55A69CAA7034",
        "screenName": "松松酱板鸭",
        "topicName": "喵星人的日常",
        "content": "阿卷真是傻，饭盆里明明还有猫粮他不吃，非要我晃一晃盆子，弄出点响声，他才知道“噢我的盆儿里有粮食啊！” 他才会跑过来吃\n\n这傻孩子，随我😌",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b3f44e8de690010dd13b9",
        "createAt": "2022-03-11 20:23",
        "username": "2FF63D38-82E0-49FB-B773-3872C9FD40CC",
        "screenName": "鸠摩小虾米",
        "topicName": "这么过分一定发即刻",
        "content": "我们跟朋友吃饭，在等位。\n我跟我老公不知道怎么就打起来了，反正等着也是无聊，就打一架好了。\n我攻击他防守。\n然后我踹了他一脚。\n\n我们朋友是个外国人。\n我老公转向他说：“Chinese 功夫，u know。”",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b5287e8376b001036471c",
        "createAt": "2022-03-11 21:45",
        "username": "3F7F1B1E-60EF-4A61-A402-1B76F0C6BE88",
        "screenName": "油百万",
        "topicName": "一起来学习",
        "content": "看到有帖子说最近小朋友学习俄语的兴致很高涨，还有什么文章说俄语有望取代英语课什么的。哈哈哈。我只分享一个小经历\n\n我大概几个月前出于兴趣爱好开始学习俄语，平时看看俄语版小猪佩奇，反复看同一集。其中有一句台词叫” Я люблю кошек”（我喜欢小猫咪）\n\n然后不知道学了多久的语法，我今天终于知道，这句话里面牵涉到любить （喜欢）的动词第二变位和кошка （猫咪）的复数第四格\n\n什么概念呢，就是主语换成“你 我 Ta 他们 你们 我们”这个喜欢各有一种变法，然后这个Кошка 为什么变成кошек我到现在都还是一头雾水😊\n\n希望学习俄语的小朋友们一定要干吧呆了哦！",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622be59e01726c00107fd8aa",
        "createAt": "2022-03-12 08:13",
        "username": "B4F78125-FDDD-4D3D-8E7A-ED254E24D7D9",
        "screenName": "McDonald",
        "topicName": "日出日落现场直播",
        "content": "早啊，即友，今天的日出又很好看",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fq9Zg3B8Bc7jXLjcZ-TBmilxW92sv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b5161f8cf9700105ff1c6",
        "createAt": "2022-03-11 21:40",
        "username": "0276f61d-10a2-4be3-9b3f-d4788abc0ab8",
        "screenName": "任慕少艾",
        "topicName": "一起拍写真",
        "content": "这张很好看",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FpAM47jS-d1F-U-1IyyPLJOG89f-v2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b2eb637f63b0010f1074a",
        "createAt": "2022-03-11 19:12",
        "username": "86891A68-1D76-4291-B317-83EF8BBE804F",
        "screenName": "猫助",
        "topicName": "晒晒自拍",
        "content": "公司五周年纪念T恤衫。\n（不知抓到鱼没呀）",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fqy5QGEQ-V4uK7AwxCYT-dBk_AGmv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b629cec7ee10010c0de13",
        "createAt": "2022-03-11 22:54",
        "username": "EE3BF9C8-F671-4817-A4E6-764260F91729",
        "screenName": "西蓝发",
        "topicName": "即友日记本",
        "content": "我的上周真是过去一年里最大的血洗，经历了A股的过山车，一个人搬家，创业的挑战，离开了深圳回到上海躺在懒人沙发上发呆。\n\n在深圳经历过太多事了。\n\n回想起来就是脑海中闪现的电影，二十出头的自己，因为意外血流不止拿毛巾裹住手坐出租车去医院的自己，工作受了委屈在忍不住洗澡的时候放声大哭的自己。\n\n当年在门口送别以为会在一起的前任的最后一面，没带钥匙蹲在门口无助的抹眼泪的瞬间，买了家具一个人搬不动请楼下保安帮忙的心酸瞬间，在家发高烧睡了好多天没人问津的记忆。\n\n深圳的好多年，好像很孤单也好像又还好，最后离开的时候好像又没有什么留恋。\n\n离开之前，瞒着朋友，我说我要暂时离开一会，没告诉他们我要永远搬去上海。\n那一晚，喝了二十多瓶酒，喝到凌晨六点，我喝晕在桌上，朋友拍拍我的头。问我，下次什么时候回来呀。\n\n那一瞬间我的眼泪默默的流出来，我说，可能很快就回来。\n\n朋友说，哎呀，我们还想周末再来的，那下次吧，去上海照顾好自己。\n我默默擦掉眼泪，我不知道再见他们是什么时候，因为第二天这个家就会被搬空。\n\n飞走之前，发了一条ins，\n前任留言，这次真的不回来了吗。\n我回，嗯，真的不回来了。\n\n在回上海的飞机上我看到了很美的晚霞，那一瞬间有点恍惚。\n\n原来我长大了啊。",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b2a9fb0966200119a58e4",
        "createAt": "2022-03-11 18:55",
        "username": "084A4F03-1AA9-48DB-9E78-809863D429B9",
        "screenName": "犇仔",
        "topicName": "小散户的日常",
        "content": "五年内应该都回不了本了..今天勉守1100...",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FgeKWUP51roBC3CrN7j8_T6tf8YLv2.jpg", "https://cdn.jellow.site/FrcgjO5ZR8OhCtBuKXIGnJtAf7t0v2.png?imageMogr2/auto-orient/thumbnail/3566952@"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622be8eaec7ee10010c0dfa8",
        "createAt": "2022-03-12 08:27",
        "username": "36c7059f-82ef-4060-a0ab-9ea8620e7893",
        "screenName": "你就叫我Alice吧",
        "topicName": "晒晒自拍",
        "content": "👓",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fk36sBTHJqh5xbmPG490xQNuW6Y1v2.jpeg?imageMogr2/format/jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b6b39845598001032fc55",
        "createAt": "2022-03-11 23:31",
        "username": "56bcd4d6-468e-46ee-a3e3-730fd1a3a717",
        "screenName": "小涛44",
        "topicName": "秀恩爱联盟",
        "content": "在一起都快一年了\n和女朋友没吵过一次架\n都是坐下来列一二三好处坏处\n这就是理工男和理工女的爱情吧🙈",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FoWAB3IMaPuY52t7D5N2AvKfJK5iv2.jpeg?imageMogr2/format/jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b55cf845598001032fba2",
        "createAt": "2022-03-11 21:59",
        "username": "129BCBE6-6E54-41E5-A212-B5ACD895488E",
        "screenName": "罗锴",
        "topicName": "科技圈大小事",
        "content": "自从steam被全库破解后，PS5貌似也被毛子破解了。反正哪家软件公司🈲️，那家就被破解，免费用…我感觉国内开发大厂应该去俄罗斯🇷🇺挖点软件人才，黑客水平真心牛逼",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fv_Rgwmmi-ahnHGyOEFOrw-tVMogv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b455e37f63b0010f107f7",
        "createAt": "2022-03-11 20:49",
        "username": "B109B1FD-9586-4EFD-8BED-BFB4257A66B8",
        "screenName": "三乙木",
        "topicName": "今日穿搭",
        "content": "买了四个多月的裙子终于能穿了！",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FrTrccsCNnpwmYexCOUpYQUwn4MPv2?imageMogr2/format/jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b53a4b0966200119a5a1c",
        "createAt": "2022-03-11 21:50",
        "username": "ec2f176d-79aa-4fa2-b8fc-e7d72256665e",
        "screenName": "-罗罗子-",
        "topicName": "即刻杂谈区",
        "content": "说个未必正确的观点:真的学习很差的宝贝，就别再跟学霸卷学历了。\n\n之所以有这个感叹，是因为我们高中招飞行员。咱班学霸，基本连报名资格都没有，主要是卡在近视。\n\n当时觉得飞行员很low，后来才得知，升到机长以后，工资堪比金融……😶\n\n后来我还发现，当兵工资也不低，在三四线城市过得蛮滋润的。\n\n当别人都在努力读书去大公司内卷，你拥有明亮的眼睛、强健的体魄，就已经赢了大多数人。\n\n大家都去考研，学历就会不断贬值。身体健康鲜少被人关注，便成了这个时代的稀缺资本。\n\n更重要的是，身体比学历更加不可逆。最可惜的那批人是，书读不出来，身体还搞坏了。",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b773801726c00107fd7bd",
        "createAt": "2022-03-12 00:22",
        "username": "40864521-7957-4846-83A7-3B4F30E684A8",
        "screenName": "胖胖碎冰冰",
        "topicName": "杠精八点半",
        "content": "那种十几二十岁的00后管90后叫叔叔阿姨是什么毛病？是觉得很幽默吗？\n拜托，很没品哎。\n\n知道个女的是90后就上去耍贱喊阿姨，是没人教你礼貌吗？\n我不介意变老，就是不喜欢被傻逼玩意儿恶心",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b3cc801726c00107fd5ef",
        "createAt": "2022-03-11 20:12",
        "username": "36CBE1C4-C807-40F5-A331-BB6100C57F35",
        "screenName": "郭婉瓢盆",
        "topicName": "一起拍写真",
        "content": "姐姐的细腰，撩人的弯刀",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FnPVSozyu91L0lC6LrzMViz4x5hmv2.jpg", "https://cdn.jellow.site/Fmrvi0SyPTj-JpKun-V4f4oCPreBv2.jpg", "https://cdn.jellow.site/Fsa1LGJM5V-4u2lIspgu8hjuvtcnv2.jpg", "https://cdn.jellow.site/FsjV5PG1YyaAoPEETPhCxvqDxv6Gv2.jpg", "https://cdn.jellow.site/Fu5PyY25r4_md9aXvPGwf-rlDG8Jv2.jpg", "https://cdn.jellow.site/Fg1XpsgWBg6Z8jhgonlO0oRq675kv2.jpg", "https://cdn.jellow.site/FseO_5i_tyByJpahzOBWjyHkHJ-Xv2.jpg", "https://cdn.jellow.site/FhMkqRFRX0b_EEs4avU6KxHYUW-cv2.jpg", "https://cdn.jellow.site/Fibc7C76YNrCaAinD41lPO8lqe-0v2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b2154b0966200119a589c",
        "createAt": "2022-03-11 18:15",
        "username": "3558128F-E881-45F5-836F-04D006766A0A",
        "screenName": "约小亚",
        "topicName": "一起听播客",
        "content": "有什么值得推荐的中文播客短节目吗？半小时以内的那种（不用提名《商业就是这样》）",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b2f03fe704900101e0f45",
        "createAt": "2022-03-11 19:14",
        "username": "f9f14f38-b8f9-4cf4-b370-983b93fb25aa",
        "screenName": "Rainbow.",
        "topicName": "晒晒自拍",
        "content": "",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fl0PHBWKx1xujU5RrGxvMzy-V8kzv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b443140bdef0010e35ee4",
        "createAt": "2022-03-11 20:44",
        "username": "72e31b5a-7723-4383-936e-8fa4ead6b024",
        "screenName": "金叶宸",
        "topicName": "",
        "content": "相信大家一直都对死宅男如何追到仙女有很大的好奇。我决定把攻略给大家简单做一下，方法也不是很难，大家按步骤做就能学废：\n\n1.在社交媒体上在作死的边缘反复横跳，营造一个刻薄毒舌缺乏同理心的令人生厌形象；\n2.出差顺道约不在一个城市的女神吃饭，顺道的情况参考上海到北京出差顺道去郑州这样的一个路径(因为这样顺道，女神不是很好意思拒绝)；\n3.见面的时候让对方发现你虽然是个死宅，但贵在不抽烟不渴酒不赌博不烫头还讲礼貌的优点；\n4.对方如果有APPLE Watch就表白，没有的话就送对方一个再表白。\n\n以上步骤大家牢记，像我者生学我者死，祝各位好运，恋爱顺利，阿门无量陀佛。",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b470a845598001032fb1b",
        "createAt": "2022-03-11 20:56",
        "username": "7B1385A9-FCC9-4446-B8CE-472EAF6817B2",
        "screenName": "少楠Plidezus",
        "topicName": "游戏玩家的日常",
        "content": "入手老头环\n出门不小心戳了下感觉是友军的NPC\n然后就被打死了…\n重生点就在旁边…\n又被打死了…\n如此重复十几次…\n直到内心崩塌",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b4000845598001032fae6",
        "createAt": "2022-03-11 20:26",
        "username": "B5C00109-15EA-4351-8B93-E58651E8C39D",
        "screenName": "我不管我不管",
        "topicName": "F1车迷会",
        "content": "扎心了\n没想到泽平就这样名宿了",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fh212j0jLGcjE4avfDuXpo3EnDOSv2.png?imageMogr2/auto-orient/thumbnail/3338496@", "https://cdn.jellow.site/FlntdmivDoEuuK838_RqnorXtHS_v2.png?imageMogr2/auto-orient/thumbnail/3338496@"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b6cd201726c00107fd761",
        "createAt": "2022-03-11 23:37",
        "username": "e0605654-5eba-4fc5-901e-442f8e4230d4",
        "screenName": "老蒋不一定靠谱",
        "topicName": "978-7-020-06838-?",
        "content": "见 证 历 史",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FuwSqSTLUaKKF7iyLaC1WC-SkCSLv2.png?imageMogr2/auto-orient/thumbnail/3566952@", "https://cdn.jellow.site/FnqAZG3zLaRSBds8GHw-nr-82wQTv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622bdbf6ec7ee10010c0df7a",
        "createAt": "2022-03-12 07:32",
        "username": "B0CE5059-215B-448C-BCFA-2E301A1726CD",
        "screenName": "范米索Misso",
        "topicName": "记一件小事",
        "content": "说一个很好笑的事。\n\n今天下课，Ai来接我堵在了路上，然后他跟我说，你可以去有帅哥的那家咖啡厅等我。\n\n不过我想再探索周边其他的店，一开始就没去，结果发现的一家华夫店只能现金，又找不到其他附近咖啡厅，无奈折回那家帅哥咖啡厅。\n\n我进门，果然还是那个帅哥站在吧台，我们开心的打了招呼，他给我推荐喝巧克力奶昔，随后问我：“你今天学了什么？”\n\n我叽里呱啦跟他说了一堆西语单词，简单的句子，小哥欣喜地夸奖我发音漂亮。随后他问我叫啥名字，我跟他自我介绍了下，他也告诉我了他的名字。\n\n由于相谈甚欢，我看了下手机，发现Ai打了两个电话过来我没接到，就看到他短信说：“你是不是在和帅哥聊天😡”\n\n当时我又惊又笑喷，跟帅哥匆匆结束对话去找他，结果推开咖啡门，要过马路的时候，看到马路对面有个身形纤长穿着西装的人。\n\n此刻喝着巧克力奶昔的我，自然眼睛朝人家盯了会，因为我视力不太好，看对面的人好像还不错…\n\n恰好过马路一阵风出过，那人戴着口罩，发丝被风吹乱，眼睛有点深邃，于是我准备走进些看看清楚，结果一看，我嘴里的奶直接喷了出来……\n\nAi看到我跟我说：\n\n“你在咖啡店跟帅哥聊那么久，一推开门，看到马路对面又有个帅哥眼睛都不带眨地盯着看了半天，眼神flirting （调情）。\n\n结果一看，发现是我，你的巧克力奶昔喷口而出。你一定很开心，因为你发现帅哥是你男朋友。很好，你还没有对我产生过crush 的感觉，今天你在马路上crush 你男朋友。”\n\n我听他不要脸的叽里咕噜说一通，顿时涨红了脸，试图疯狂辩驳，结果Ai：\n\n“我不想听其他理由，反正你就是在没认出我的情况下crush 了我。”\n\n我……😑😑😑\n\n虽然不想承认，其实我就想凑近点看看清楚，但……他说的没错，我开始的确没反应过来马路对面那人竟然是Ai……毕竟大热天穿个西装，站在街上，怎么都很显眼，而且我都没看他穿过西装…瞬间怔住…果然人靠衣装…\n\n至于为什么他今天这么正式，是因为他说要给我惊喜，因为今天是第27个纪念日～\n\n人家一年过一次纪念日，我们一个月过一次，当然线上恋爱的时候就很简单的靠文字问候表达，线下都是他在给惊喜，我被带飞。\n\n其实我觉得大家已经挺“老夫老妻”了……但他还是给足各种美好体验，那么熟了，竟然还能让我crush，真是老脸丢尽……又好气又好笑……😑😑",
        "linkUrl": "",
        "pictureUrlList": []
      }, {
        "url": "https://m.okjike.com/originalPosts/622b205761c5d60010b455e3",
        "createAt": "2022-03-11 18:11",
        "username": "070CAD4D-BAB6-4027-B315-1F81E23BA57C",
        "screenName": "Fanta_Trip",
        "topicName": "去过的好玩的地方",
        "content": "如果风景会写诗。\n\n西藏日落l 𝐯𝐨𝐥.𝟑",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/Fi5Q8h0NsR9yJg9Rm8nJA85FMfGAv2.jpg", "https://cdn.jellow.site/FsBrbtWjKtRac5hF_7Z4ChYF-M0Ev2.jpg", "https://cdn.jellow.site/FiywnYQpkwWon3OBrQ_wR0SzSeQ0v2.jpg", "https://cdn.jellow.site/Fp0PCcJWOTIB1JxE-CYjVYP5fBpEv2.jpg", "https://cdn.jellow.site/Fu8GiV8gKyR3dvwcE28GP-vA-AHEv2.jpg", "https://cdn.jellow.site/Fu-5GydxzshsOHnZc0KWueGpHwC5v2.jpg", "https://cdn.jellow.site/Frggteb3Mr8-phghweA3XFrO5sWev2.jpg", "https://cdn.jellow.site/FpC0Hjct5Vjh1TBhZ9Tss1M4D35vv2.jpg", "https://cdn.jellow.site/FvS0djCnEDflwNOhQWTgC5nsh5FWv2.jpg"]
      }, {
        "url": "https://m.okjike.com/originalPosts/622b535337f63b0010f10866",
        "createAt": "2022-03-11 21:49",
        "username": "a4d2ed07-2541-49c8-bd68-769464fe618f",
        "screenName": "仙女味的大小姐",
        "topicName": "即刻交友区",
        "content": "仙女今日下早班啦～\r自由时间到～~",
        "linkUrl": "",
        "pictureUrlList": ["https://cdn.jellow.site/FkbhHYYLL4zpp5I_Ltgx-rxhM15tv2.jpeg?imageMogr2/format/jpg", "https://cdn.jellow.site/FpGaaqiL0j-aLkPfMqts0_b-DiVkv2.jpeg?imageMogr2/format/jpg"]
      }]
    }
  },
  methods: {
    showToast() {
      console.log("showToast")
    },
  },
  created() {
    console.log("created")
  },
  beforeUnmount() {
    console.log("beforeUnmount")
  },
})
</script>
