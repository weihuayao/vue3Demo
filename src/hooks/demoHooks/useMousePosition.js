import { ref, onMounted, onUnmounted } from 'vue';
function useMousePosition() {
    var x = ref(0);
    var y = ref(0);
    var updateMouse = function (e) {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(function () {
        document.addEventListener('click', updateMouse);
    });
    onUnmounted(function () {
        document.removeEventListener('click', updateMouse);
    });
    return { x: x, y: y };
}
export default useMousePosition;
//# sourceMappingURL=useMousePosition.js.map