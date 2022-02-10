<!--  -->
<template>
  <container>
    <div class="main_content">
      <div class="bts">
        <button>计算</button>
        <button
          @click="
            primer = '';
            $refs.in.current_seq = '';
          "
          class="clean"
        >
          清空
        </button>
      </div>
      <div>
        <Input ref="in" :message="information[0]" class="input1">
          <textarea
            type="text"
            class="input_seq"
            v-limit
            spellcheck="false"
            v-model.lazy="primer"
            :placeholder="information[0].tips"
          ></textarea>
        </Input>
        <Input
          @uChange="userInput"
          ref="ou"
          :message="information[1]"
          class="input2"
          v-model="primerMessage"
        >
          <div v-show="primerMessage.length" class="messageBox">
            <p>引物长度：{{ primerMessage.length }}bp</p>
            <p>GC含量：{{ primerMessage.gcContent }}</p>
            <p>引物Tm值：{{ primerMessage.tm }}°C</p>
            <p>推荐PCR退火温度：{{ primerMessage.tuihuo }}°C</p>
          </div>
        </Input>
      </div>
    </div>
  </container>
</template>

<script>
import Input from "@/components/content/input/Input";
import Container from "@/components/content/container/Container";
export default {
  data() {
    return {
      primer: "",
      basen: "base",
      information: [
        {
          num: 1,
          message: "引物序列",
          tips: "方向5'至3'，非ATCG字符将会被自动过滤",
        },
        {
          num: 2,
          message: "引物基本信息",
          tips: "",
        },
      ],
    };
  },

  components: { Input, Container },

  computed: {
    primerMessage() {
      return this.$utils.Tmcal(this.primer);
    },
  },

  // mounted: {},

  methods: {
  },
};
</script>
<style lang="css" scoped>
.main_content {
  margin: 8px;
}
.bts {
  overflow: hidden;
  padding-bottom: 14px;
}
button {
  width: 80px;
  height: 40px;
  /* display: inline-block; */
  float: left;
  margin-right: 20px;
  position: relative;
  /* border-radius: 30px; */
  color: var(--white);
  font-size: 18px;
  background-color: var(--actived);
  background-color: #04439aca;
  /* outline: none; */
  border: 1px solid #04439ac7;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s linear all;
}
.clean {
  color: var(--actived);
  background-color: var(--white);
  border: 2px solid var(--actived);
}
button:hover {
  /* color: var(--white); */
  color: #fff;
  background-color: var(--actived);
  border: 2px solid var(--actived);
}
.input1 {
  width: 660px;
  margin-right: 40px;
}
.input2 {
  width: 444px;
}
p {
  text-align: left;
  margin: 5px;
}
.messageBox {
  margin: 10px;
}
</style>
