<!--  -->
<template>
  <div>
    <Input @uChange="userChange" ref="in" :message="information[0]"></Input>
    <button @click="output_seq = dnareverse">反向</button>
    <button @click="output_seq = get_complement(input_seq)">互补</button>
    <button @click="output_seq = get_complement(dnareverse)">反向互补</button>
    <button
      @click="
        input_seq = '';
        output_seq = '';
        $refs.in.current_seq = '';
      "
    >
      清空
    </button>
    <Input @uChange="userChange" ref="ou" :message="information[1]" :style="{ display: showInput }">
      <textarea
        readonly
        v-limit-input-basen
        class="input_seq"
        v-model="output_seq"
        spellcheck="false"
      >
      </textarea>
    </Input>
  </div>
</template>

<script>
import Input from "../components/content/input/Input.vue";
export default {
  data() {
    return {
      input_seq: "",
      output_seq: "",
      information: [
        {
          num: 1,
          message: "目的序列",
          tips: "请输入待处理的序列，多条序列以换行符分割",
        },
        {
          num: 2,
          message: "处理后的序列",
          tips: "",
        },
      ],
    };
  },

  components: { Input },

  computed: {
    //对多条以换行符分割的序列取反向序列
    dnareverse() {
      let tmparray = this.input_seq.split("\n");
      for (let i = 0; i < tmparray.length; i++) {
        tmparray[i] = tmparray[i].split("").reverse().join("");
      }
      return tmparray.join("\n");
    },
    //决定是否展示输出框
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
    // 接收来自子组件的用户输入数据
    userChange(recive_data) {
      this.input_seq = recive_data;
      console.log(recive_data);
    },
  },
};
</script>
<style lang="css" scoped>
button {
  width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: 18px;
  background-color: var(--blue);
  outline: none;
}
</style>
