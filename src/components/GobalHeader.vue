<template>
	<nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
		<a class="navbar-brand" href="#">者也专栏</a>
		<ul v-if="!user.isLogin" class="list-inline mb-0">
			<li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
			<li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
		</ul>
		<ul v-else class="list-inline mb-0">
			<li class="list-inline-item">
				<dropdown :title="`你好 ${user.name}`">
					<dropdown-item>新建文章</dropdown-item>
					<dropdown-item>我的专栏</dropdown-item>
					<dropdown-item disabled>编辑资料</dropdown-item>
					<dropdown-item>退出登陆</dropdown-item>
				</dropdown>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
  import {defineComponent, PropType} from 'vue'
  import {UserProps} from '@/components/interface/userProps'
  import DropdownItem from "@/components/DropdownItem.vue";
  import Dropdown from "@/components/Dropdown.vue";

  export default defineComponent({
    name: 'GobalHeader',
    components: {
      Dropdown,
      DropdownItem,
    },
    props: {
      user: {
        type: Object as PropType<UserProps>,
        required: true
      }
    },
  })
</script>
