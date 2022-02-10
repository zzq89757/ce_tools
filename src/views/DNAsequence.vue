<!--  -->
<template>
  <container>
    <div class="main_content">
      <div class="bts">
        <mini-button
          :content="'反向'"
          @click.native="output_seq = dnareverse"
        ></mini-button>
        <mini-button
          :content="'互补'"
          @click.native="output_seq = get_complement(input_seq)"
        ></mini-button>
        <mini-button
          :content="'反向互补'"
          @click.native="output_seq = get_complement(dnareverse)"
        ></mini-button>
        <mini-button
          :content="'清空'"
          @click.native="
            input_seq = '';
            output_seq = '';
            $refs.in.current_seq = '';
          "
        ></mini-button>
      </div>
      <div>
        <Input
          @uChange="userChange"
          ref="in"
          :message="information[0]"
          class="input1"
        >
          <textarea
            v-limit:[1]
            class="input_seq"
            v-model.lazy="input_seq"
            spellcheck="false"
            :placeholder="information[0].tips"
          >
          </textarea>
        </Input>
        <Input
          @uChange="userChange"
          ref="ou"
          :message="information[1]"
          class="input2"
        >
          <textarea
            readonly
            class="input_seq"
            v-model="output_seq"
            spellcheck="false"
          >
          </textarea>
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
      input_seq: "",
      output_seq: "",
      information: [
        {
          num: 1,
          message: "待处理序列",
          tips: "多条序列请以换行符分隔",
        },
        {
          num: 2,
          message: "处理后的序列",
          tips: "",
        },
      ],
    };
  },

  components: { Input, Container, MiniButton },

  computed: {
    //对多条以换行符分割的序列取反向序列
    dnareverse() {
      let tmparray = this.input_seq.split("\n");
      for (let i = 0; i < tmparray.length; i++) {
        tmparray[i] = tmparray[i].split("").reverse().join("");
      }
      return tmparray.join("\n");
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
.main_content {
  margin: 8px;
}
.bts {
  overflow: hidden;
  padding-bottom: 14px;
}
.content {
  position: relative;
  text-align: left;
}

.input1 {
  width: 660px;
  margin-right: 40px;
}
.input2 {
  width: 444px;
}
</style>
