import { CommitOptions, Store as VuexStore, createStore } from 'vuex';
import { Mutations, mutations } from './mutations';

import Task from '../model/Task';

export const store = createStore({
    state: {
        tasks: [
            {
                name: 'Demo for VueJS and TS',
                createdAt: new Date(),
                updatedAt: new Date(),
                completed: false,
            },
            {
                name: 'UI design',
                createdAt: new Date(),
                updatedAt: new Date(),
                completed: false,
            },
        ] as Task[],
    },
    mutations,
    actions: {},
    modules: {},
});

//to make the store globally accessible
export function useStore() {
    return store as Store;
}

export type Store = Omit<VuexStore<any>, 'commit'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
};
