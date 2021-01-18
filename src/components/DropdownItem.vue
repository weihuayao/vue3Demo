<template>
	<li
		class="dropdown-item"
		:class="{'is-disabled':disabled}"
	>
		<slot></slot>
	</li>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
  })
</script>

<style scoped>
	.is-disabled {
		color: #6c757d;
		pointer-events: none;
		background-color: transparent;
	}
</style>

