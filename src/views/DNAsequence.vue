<!--  -->
<template>
  <div class="content">
    <Input @uChange="userChange" ref="in" :message="information[0]"> </Input>
    <div class="length_message">
      <span v-if="seq_length.filter((x) => x != 0).length > 1">各</span>
      <span v-if="seq_length.filter((x) => x != 0).join()">序列长度：</span>
      <span>{{ seq_length.filter((x) => x != 0).join(" ") }}</span>
    </div>
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
    <Input
      @uChange="userChange"
      ref="ou"
      :message="information[1]"
      :style="{ display: showInput }"
    >
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
import Input from "@/components/content/input/Input.vue";
export default {
  data() {
    return {
      input_seq: "",
      output_seq: "",
      information: [
        {
          num: 1,
          message: "待处理序列",
          tips: "多条序列请以换行符分割",
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
    //每条序列的长度
    seq_length() {
      let array = this.input_seq.split("\n");
      let count_array = [];
      for (let item of array) {
        count_array.push(item.length);
      }
      return count_array;
    },
    //判断序列存在否
    haveInput() {
      if (this.seq_length.length == 1 && this.seq_length[0] == 0) {
        return "none";
      } else {
        return "block";
      }
    },
  },
  // length stringfy
  // length_string(){
  //   return seq_length.filter(x=>x!=0).join(" ");
  // },
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
  margin: 10px;
  position: relative;
  /* border-radius: 30px; */
  color: var(--blue);
  font-size: 18px;
  background-color: var(--white);
  /* outline: none; */
  border: 2px solid var(--blue);
  cursor: pointer;
  transition: 0.2s ease all;
}
button:hover {
  /* color: var(--white); */
  color: #fff;
  background-color: var(--blue);
}
/* .content button::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--blue);
  transform: scaleY(0);
  transition: .4s all ease;
   z-index: -1; 
} */
/* button:hover::after{
  transform: scaleY(1);
} */
.content {
  position: relative;
}
.length_message {
  position: absolute;
  right: 74px;
  top: 202px;
}
.length_message span {
  cursor: auto;
  color: var(--grey);
}
</style>
