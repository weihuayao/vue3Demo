<template>
	<div class="container">
		<gobal-header :user="user"></gobal-header>
		<form action="">
			<div class="mb-3">
				<label class="inputEami">邮箱地址</label>
				<validate-input :rules="eamailRules" placeholder="请输入邮箱地址"></validate-input>
			</div>
			<div class="mb-3">
				<label class="form-label">密码</label>
				<validate-input type="password" class="form-control" id="exampleInputPassword1"
												placeholder="请输入密码"></validate-input>
			</div>
		</form>
		<column-list :list="list"></column-list>

	</div>
</template>

<script lang="ts">
  import {defineComponent, reactive} from 'vue';
  // import ColumnList from "@/components/ColumnList.vue";
  import {ColumnProps} from '@/components/interface/columnProps';
  import GobalHeader from "@/components/GobalHeader.vue";
  import ValidateInput from '@/components/ValidateInput.vue'
  import {UserProps} from '@/components/interface/userProps';
  import {RulesProp} from "@/components/interface/RuleProps";

  const currentUser: UserProps = {
    isLogin: true,
    name: "wade"
  };
  const testData: ColumnProps[] = [
    {
      id: 1,
      title: 'test1的专栏',
      description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
      avatar: ''
    },
    {
      id: 2,
      title: 'test2的专栏',
      description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
      avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    }
  ];
  export default defineComponent({
    name: 'App',
    components: {
      // ColumnList,
      GobalHeader,
      ValidateInput
    },
    setup() {
      const eamailRules: RulesProp = [
        {type: 'required', massage: "电子邮箱地址不能为空"},
        {type: 'email', massage: "请输入正确的电子邮箱格式"},
        {type: 'length', massage: "长度大于6"},
      ]
      const emailRef = reactive({
        val: '',
        error: false,
        message: ""
      })
      // const validateEmail = () => {
      //   if (emailRef.val.trim() === '') {
      //     emailRef.error = true
      //     emailRef.message = 'can not be empty'
      //   } else if (!emailReg.test(emailRef.val)) {
      //     emailRef.error = true
      //     emailRef.message = 'should be valid email'
      //   }
      // }
      return {
        emailRef,
        // validateEmail,
        list: testData,
        eamailRules,
        user: currentUser,
      }
    }
  })
</script>
