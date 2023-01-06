<script lang="ts" setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import type { FormInstance, FormRules } from 'element-plus';

const formWidth=400;

// 对表单的引用，可以作为提交时的验证参数
const loginFormRef = ref<FormInstance>();

// 是登录还是注册
const requestType = ref('login');

// 可以同时用于登录和注册
const loginForm = reactive({
  level: '0',
  email: '',
  code: '',
  // 下面是register特有的
  name: '',
  id: '',
  birthday:[],
});

const loginRules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please Input E-Mail', trigger: 'change' },
  ],
  code: [
    {
      required: true,
      message: 'Please Input Verification Code',
      trigger: 'blur',
    },
    { min: 6, max: 6, message: 'Format Error', trigger: 'blur' },
  ],
  name: [{ required: true, message: 'Please Input Name', trigger: 'change' }],
  id: [{ required: true, message: 'Please Input ID Number', trigger: 'change' }],
  birthday: [{ required: true, message: 'Please Pick Your Birthday', trigger: 'change' }],
});

// 能否发送验证码。防止多次连续发送
const isCodeAble = true;

function sendCode() {
  if (loginForm.email === '') {
    alert('Empty Email');
    return;
  }
  // 这里可能需要检验邮箱是否有效
  alert('Code Sent.');
}

// 传入表单引用以提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    // valid为校验结果
    if (valid) {
      // 上传表单
      alert('submit succeed!');
      console.log(loginForm)
    } else {
      // 校验不通过，发出警告
      alert('error submit!');
      console.log('error submit!', fields);
    }
  });
};

// 传入表单引用以重置（包括红字）
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-radio-group v-model="requestType">
    <el-radio label="login">Login</el-radio>
    <el-radio label="register">Register</el-radio>
  </el-radio-group>

  <!-- 表单 -->
  <el-form
    class="login-form"
    size="default"
    :style="'width:'+formWidth+'px'"
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

    <!-- 下面是注册时的特有项 -->

    <Transition name="form-fade">
      <el-form-item
        v-if="requestType === 'register'"
        label="Full Name"
        prop="name"
      >
        <el-input v-model="loginForm.name" placeholder="your full name" />
      </el-form-item>
    </Transition>

    <Transition name="form-fade">
      <el-form-item
        v-if="requestType === 'register'"
        label="ID Number"
        prop="id"
      >
        <el-input v-model="loginForm.id" placeholder="your ID number" />
      </el-form-item>
    </Transition>

    <!-- 借书人注册要生日 -->
    <Transition name="form-fade">
      <el-form-item
        v-if="requestType === 'register' && loginForm.level === '0'"
        label="Birthday"
        prop="birthday"
      >
        <!-- 此处有坑：value-format必须全部大写 -->
        <el-date-picker
          v-model="loginForm.birthday"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="pick your birthday"
          style="width: 100%"
        />
      </el-form-item>
    </Transition>

    <el-form-item>
      <el-button type="primary" plain @click="submitForm(loginFormRef)"
        >{{ requestType==='login' ? 'Login' : 'Register' }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style scoped>
/* form-fade：表单某一项的消失动画 */
.form-fade-enter-active {
  transition: opacity 0.4s ease;
}
.form-fade-leave-active {
  opacity: 0;
}

.form-fade-enter-from,
.form-fade-leave-to {
  opacity: 0;
}
</style>
