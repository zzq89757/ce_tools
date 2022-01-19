<!--  -->
<template>
  <div>
    <!-- <div class="destination_seq input_public">
      <div class="info_table">
        <span class="tips">1</span>
        <span class="info">目的序列</span>
      </div>
      <textarea
        type="text"
        class="input_seq"
        placeholder="请输入完整的目的序列"
        v-limit-input-basen
        v-model.lazy="input_seq"
        spellcheck="false"
      ></textarea>
    </div> -->
    <Input @uChange="userChange"></Input>
    <button @click="output_seq = dnareverse">反向</button>
    <button @click="output_seq = get_complement(input_seq)">互补</button>
    <button @click="output_seq = get_complement(dnareverse)">反向互补</button>
    <button
      @click="
        input_seq = '';
        output_seq = '';
      "
    >
      清空
    </button>
    <div class="destination_seq input_public" :style="{ display: showInput }">
      <div class="info_table">
        <span class="tips">2</span>
        <span class="info">目的序列</span>
      </div>
      <textarea
        readonly
        v-limit-input-basen
        class="input_seq"
        v-model="output_seq"
        spellcheck="false"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
import Input from '../components/content/input/Input.vue';
export default {
  data() {
    return {
      input_seq: "",
      output_seq: "",
    };
  },

  components: {Input},

  computed: {
    //对多条以换行符分割的序列取反向序列
    dnareverse() {
      let tmparray = this.input_seq.split("\n");
      for (let i = 0; i < tmparray.length; i++) {
        tmparray[i] = tmparray[i].split("").reverse().join("");
      }
      return tmparray.join("\n");
    },
    showInput() {
      if (!this.input_seq || !this.output_seq) {
        return "none";
      }
    },
  },

  // mounted: {},

  methods: {
    //对多条以换行符分割的序列取互补序列
    get_complement(seq) {
      let newstr = "";
      let array = seq.split("\n");
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/(A|G|C|T)/g, function ($0, $1) {
          return {
            A: "T",
            G: "C",
            C: "G",
            T: "A",
          }[$1];
        });
      }
      newstr = array.join("\n");
      return newstr;
    },
    userChange(recive_data){
      this.input_seq = recive_data;
      console.log(recive_data);
    }
  },
};
</script>
<style lang="css" scoped>
.input_public {
  margin: 15px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 1px,
    rgba(34, 34, 34, 0.74) 0px 0px 1px;
}
.tips {
  background-color: #04429a;
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-weight: 600;
  padding: 4px 8px;
}

.info {
  float: left;
  margin-left: 6px;
  line-height: 28px;
}

.seq_input {
  width: 600px;
  resize: none;
}
.input_seq {
  width: 1500px;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  resize: none;
  outline: none;
}
button {
  width: 200px;
  height: 60px;
  border-radius: 30px;
  color: #fff;
  font-size: 18px;
  background-color: #04429a;
  outline: none;
}
</style>
