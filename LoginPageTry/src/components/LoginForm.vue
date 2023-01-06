<script lang="ts" setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import type { FormInstance, FormRules } from 'element-plus';

// 对表单的引用，可以作为提交时的验证参数
const loginFormRef = ref<FormInstance>();

// 是登录还是注册
const requestType = 'login';

// 可以同时用于登录和注册
const loginForm = reactive({
  level: '0',
  email: '',
  code: '',
  // 下面是register特有的
  name: '',
});

const loginRules = reactive<FormRules>({
  email: [{ required: true, message: 'Please Input E-Mail', trigger: 'change' }],
  code: [
    {
      required: true,
      message: 'Please Input Verification Code',
      trigger: 'blur',
    },
    { min: 6, max: 6, message: 'Format Error', trigger: 'blur' },
  ],
  name:[{ required: true, message: 'Please Input Name', trigger: 'change' }]
});

// 能否发送验证码。防止多次连续发送
const isCodeAble = true;

function sendCode() {
  if(loginForm.email===''){
    alert('Empty Email')
    return
  }
  // 这里可能需要检验邮箱是否有效
  alert('Code Sent.');
}

// 传入表单引用以提交
const submitForm=async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    // valid为校验结果
    if (valid) {
      // 上传表单
      alert('submit succeed!')
    } else {
      // 校验不通过，发出警告
      alert('error submit!')
      console.log('error submit!', fields)
    }
  })
}

// 传入表单引用以重置（包括红字）
const resetForm= (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
  <el-form
    class="login-form"
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    label-width="150px"
  >
    <el-form-item label="Role">
      <el-radio-group v-model="loginForm.level">
        <el-radio label="0">Borrower</el-radio>
        <el-radio label="1">Administrator</el-radio>
        <el-radio label="2">Super-Administrator</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="E-Mail" prop="email">
      <el-input
        v-model="loginForm.email"
        placeholder="your e-mail to register"
      />
    </el-form-item>

    <el-form-item label="Verification Code" prop="code">
      <el-col :span="14">
        <el-input v-model="loginForm.code" />
      </el-col>
      <el-col :span="2">
        <!-- 空隙 -->
      </el-col>
      <el-col :span="8">
        <el-button
          type="primary"
          @click="sendCode"
          :disabled="!isCodeAble"
          style="width: 100%"
          >Send Code</el-button
        >
      </el-col>
    </el-form-item>

    <el-form-item label="Full Name" prop="name">
      <el-input v-model="loginForm.name" placeholder="your full name" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" plain @click="submitForm(loginFormRef)">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.login-form {
  width: 400px;
}
</style>
