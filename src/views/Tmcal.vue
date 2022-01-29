<!--  -->
<template>
  <container>
    <div class="main_content">
      <div class="bts">
        <button
          @click="
            input_seq = '';
            output_seq = '';
            $refs.in.current_seq = '';
          "
          class="clean"
        >
          清空
        </button>
      </div>
      <div>
        <Input
          @uChange="userChange"
          ref="in"
          :message="information[0]"
          class="input1"
        >
        </Input>
        <Input
          @uChange="userChange"
          ref="ou"
          :message="information[1]"
          class="input2"
        >
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
      input_seq: "",
      output_seq: "",
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
        return "";
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
</style>
