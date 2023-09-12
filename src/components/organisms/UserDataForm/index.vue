<template>
  <div id="user-data-form">
    <el-row id="main-content">
        <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "UserDataForm",
  props: [],
};
</script>

<style scoped>
#user-data-form {
  width: 100%;
  max-width: 680px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
}

#main-content {
  padding: 24px;
}
</style>
