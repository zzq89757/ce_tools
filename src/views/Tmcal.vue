<!--  -->
<template>
  <container>
    <div class="main_content">
      <div class="bts">
        <mini-button :content="'计算'" @click.native="getPrimerMessage(primer)"></mini-button>
        <mini-button
          :content="'清空'"
          @click.native="
            primer = '';
            primerMessage = {};
          "
        ></mini-button>
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
import MiniButton from "../components/content/button/MiniButton";
export default {
  data() {
    return {
      primer: "",
      primerMessage:{},
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

  components: { Input, Container, MiniButton },

  computed: {
  },

  // mounted: {},

  methods: {
    getPrimerMessage(primer){
      return this.primerMessage=this.$utils.Tmcal(primer);
    }
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
