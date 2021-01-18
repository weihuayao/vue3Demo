<template>
	<div class="validate-input-container pb-3">
		<input
			type="text"
			class="form-control"
			:class="{'is-invalid': inputRef.error}"
			v-model="inputRef.val"
			@blur="validateInput"
			@input="updateValue"
			v-bind="$attrs"
		/>
		<span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
	</div>
</template>

<script lang="ts">
  import {defineComponent, reactive, PropType} from 'vue'
  import {RulesProp} from '@/components/interface/RuleProps'

  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  export default defineComponent({
    name: '',
    props: {
      rules: Array as PropType<RulesProp>,
      modelValue: String,
    },
    inheritAttrs: false,
    setup(props, context) {
      const inputRef = reactive({
        val: '',
        error: false,
        message: ""
      });
      const validateInput = () => {
        if (props.rules) {
          const isPass = props.rules.every(rule => {
            let pass = true;
            inputRef.message = rule.massage;
            switch (rule.type) {
              case 'required':
                pass = (inputRef.val.trim() !== '');
                break;
              case "email":
                pass = emailReg.test(inputRef.val);
                break;
              case "length":
                pass = inputRef.val.length > 6
                break;
              default:
                break;
            }
            return pass
          })
          inputRef.error = !isPass
        }
      }
      const updateValue = (e: KeyboardEvent) => {
        const targetValue = (e.target as HTMLInputElement).value
        inputRef.val = targetValue
        context.emit("update:modelValue", targetValue)
      }
      return {
        inputRef,
        validateInput
      }
    }
  })
</script>
