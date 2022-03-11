<script>
export default {
  props: {
    ass: {
      type: String,
    },
    name: {
      type: String
    }
  },
  methods: {
    //根据碱基种类返回不同颜色变量
    getColor(item) {
      if (/[AGCTagtc]/.test(item)) {
        return 'var(--' + item.toLowerCase() + ')'
      }
    },
    //判断是否标记
    isMark(index) {
      return this.markPosition.indexOf(index)+1;
    }
  },
  computed: {
    refLength() {
      //如果base只有ATCG,才有长度
      return this.ass.length;
    },
    //返回标记位置数组
    markPosition() {
      const num_ary = this.$store.state.mdTag.match(/\d+/g);
      const base_ary = this.$store.state.mdTag.match(/[ATCG]/g);
      const newary = [];
      let tmp = -1;
      for (let i = 0; i < num_ary.length; i++) {
        const init = Number(num_ary[i]) + base_ary[i].length;
        tmp += init;
        newary.push(tmp);
      }
      return newary;
    },

  }
}

</script>

<template>
  <div class="box">
    <h3>{{ name }} {{ refLength }} bp</h3>
    <div class="all_base">
      <div
        class="base_box"
        v-for="(item, index) in ass"
        :style="{ backgroundColor: getColor(item), }"
        :class="{ mark: isMark(index) }"
        :key="index"
      >{{ item }}</div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin-right: 10px;
}
.box {
  margin: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.base_box {
  width: 36px;
  height: 24px;
  margin: 1px 1px;
  color: black;
  background-color: #909399;
  border-radius: 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mark {
  filter: brightness(40%);
  color: #fff;
}
.all_base {
  display: flex;
  flex-wrap: wrap;
}
</style>
