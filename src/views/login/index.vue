<template>
  <el-row class="login-cont" align="middle" justify="center">
    <el-col :span="6">
      <el-card>
        <template #header>
          <span>登录</span>
        </template>
        <el-form
          class="roc-form"
          :model="form"
          ref="form"
          :rules="rules"
          label-width="80px"
          :inline="false"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="form.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="password">
            <el-input :maxlength="5" v-model.trim="form.captcha"></el-input>
            <img
              class="code"
              :src="captchaPath"
              alt="验证码"
              @click="getCaptcha"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { login } from "@/api/login";
import { getUUID } from "@/utils/utils";
import { baseURL } from "@/config";
export default {
  name: "login",
  data() {
    return {
      captchaPath: "",
      form: {
        username: "",
        password: "",
        captcha: "",
        uuid: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        captcha: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    // 验证码
    getCaptcha() {
      this.form.uuid = getUUID();
      this.captchaPath = `${baseURL}/captcha?uuid=${this.form.uuid}`;
    },
    // 处理登录
    handleLogin() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          console.log(this.form, "登录信息");
          const sendObj = { ...this.form };
          await login(sendObj);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-cont {
  height: 100vh;
  background-color: #333;
}
:deep() {
  .roc-form {
    .el-form-item {
      position: relative;
      .code {
        position: absolute;
        top: 1px;
        right: 1px;
        height: 30px;
        cursor: pointer;
        border-left: 1px solid #ccc;
        border-radius: 0px 4px 4px 0;
      }
    }
  }
}
</style>
