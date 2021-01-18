import { ref } from 'vue';
import axios from 'axios';
function useURLLoader(url) {
    var result = ref(null);
    var loading = ref(true);
    var loaded = ref(false);
    var error = ref(null);
    axios.get(url).then(function (res) {
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch(function (e) {
        error.value = e;
    });
    // 将这些ref 一一返回
    return {
        result: result,
        loading: loading,
        error: error,
        loaded: loaded
    };
}
export default useURLLoader;
//# sourceMappingURL=useURLLoader.js.map