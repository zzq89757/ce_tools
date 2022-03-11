<!--  -->
<template>
  <div>
    <div class="input_box">
      <el-input type="textarea" :rows="6" placeholder="请输入参考序列" v-model="ref" class="input1"></el-input>
      <el-input type="textarea" :rows="6" placeholder="请输入reads" v-model="reads" class="input1"></el-input>
      <el-input type="textarea" :rows="6" placeholder="请输入bam文件信息" v-model="mdTag" class="input1"></el-input>
    </div>
    <el-button type="primary" plain @click="postbase()">生成</el-button>
    <Base :name="'ref : '" :ass="$store.state.seq"/>
    <Base :name="'reads:'" :ass="$store.state.reads"/>
  </div>
</template>

<script>
import Base from "./Base.vue";
import Input from "../input/Input.vue";
export default {
  data() {
    return {
      ref: "",
      reads: "",
      mdTag: "2A3C4T5G",
    };
  },

  components: { Base, Input },

  computed: {

  },

  mounted: {},

  methods: {
    //向store发送数据并通过mutation更改对应的值
    postbase() {
      this.$store.commit('receive', {ref:this.ref,reads:this.reads,mdTag:this.mdTag})
    }
  }
}

</script>
<style lang='css' scoped>
.input_box{
  display: flex;
  justify-content: space-around;
}
.input1 {
  width: 422px;
}
</style>