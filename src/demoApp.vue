<template>
	<div>{{count}}</div>
	<div>{{double}}</div>
	<Suspense>
		<template #default>
			<async-show></async-show>
		</template>
		<template #fallback>
			<h1>@Loading@</h1>
		</template>
	</Suspense>
	<h1 v-if="loading">Loading!...</h1>
	<img v-if="loaded" :src="result.message">
	<ul v-for="(num , index) in numbers" :key="index">
		<li>{{num}}</li>
	</ul>
	<h1>x:{{x}},y:{{y}}</h1>
	<div>{{person.name}}</div>
	<button @click="handleIncrease">💪+1</button>
	<button @click="updateGreeting">change title</button>
	<button @click="openModal">Open Modal</button>
	<br/>
	<modal :isOpen="modalIsOpen" @close-modal="onModalClose"> My Modal !!!!</modal>
	<!--		<div id="modal"></div>-->
</template>

<script lang="ts">
  import {ref, computed, reactive, toRefs, watch} from 'vue'
  import useMousePosition from "@/hooks/demoHooks/useMousePosition";
  import useURLLoader from "@/hooks/demoHooks/useURLLoader";
  import Modal from "@/components/demoComponents/Modal.vue";
  import AsyncShow from "@/components/demoComponents/AsyncShow.vue";

  interface DogResult {
    message: string;
    status: string;
  }

  interface CatResult {
    id: string;
    url: string;
    width: number;
    height: number;
  }

  interface DateProps {
    count: number;
    double: number;
    numbers: number[];
    person: {};
    handleIncrease: () => void;
  }

  export default {
    name: 'App',
    components: {
      Modal,
      AsyncShow
    },
    setup() {
      // onMounted(() => {
      //   console.log('mounted')
      // })
      // onUpdated(()=>{
      //   console.log('updated')
      // })
      const {x, y} = useMousePosition();
      const greeting = ref('')
      const updateGreeting = () => {
        greeting.value += 'hello'
      };
      const {result, loading, loaded} = useURLLoader('https://dog.ceo/api/breeds/image/random');
      // const {result, loading, loaded} = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1');
      const data: DateProps = reactive({
        count: 0,
        handleIncrease: () => {
          data.count++
        },
        double: computed(() => data.count * 2),
        numbers: [1, 2, 3],
        person: {name: 'wade'}
      });
      watch([greeting, () => data.count], (nval, oval) => {
        console.log(nval, oval);
        document.title = greeting.value + data.count
      })
      // const refData = toRefs(data)
      // const count = ref(0);
      // const double = computed(()=>{
      //   return count.value*2
      // })
      // const handleIncrease = () => {
      //   count.value++
      // };
      const modalIsOpen = ref(false)
      const openModal = () => {
        modalIsOpen.value = true
      }
      const onModalClose = () => {
        modalIsOpen.value = false
      }
      return {
        ...toRefs(data),
        updateGreeting,
        x,
        y,
        result, loading, loaded,
        modalIsOpen,
        openModal,
        onModalClose
        // count,
        // double,
        // handleIncrease
      }
    }
  };
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
