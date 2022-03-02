<script lang="ts">
import { defineComponent, ref } from 'vue';
import Task from '../model/Task';
import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'AddTask',
    setup() {
        const taskName = ref('');
        const router = useRouter(); // Substitute of Vue prototype this.$router
        const store = useStore();
        const addTask = (): void => {
            store.commit(MutationType.SetTask, { value: '' });
        };

        return { taskName, addTask };
    },
});
</script>
