<script lang="ts">
import { defineComponent, ref } from 'vue';
import type Task from './model/Task';
import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';

export default defineComponent({
    name: 'Home',
    setup() {
        const tasks = ref([]);
        const store = useStore();
        tasks.value = store.state.tasks;
        const setTaskComplete = (task: Task): void => {
            store.commit(MutationType.CompleteTask, task);
        };
        const deleteTask = (task: Task) => {
            store.commit(MutationType.DeleteTask, task);
        };

        return {
            tasks,
            setTaskComplete,
            deleteTask,
        };
    },
});
</script>
