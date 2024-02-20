import { defineStore } from "pinia";

export const useClientStore = defineStore('ClientStore', {
    // state

    state: () => {
        return {
            client: "",
        }
    },

    // actions

    actions: {
        save(client) {
            this.client = client
        }
    }
})