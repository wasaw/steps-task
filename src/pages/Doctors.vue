<template>
    <main>
        <h2>Врачи</h2>
        <div 
        class="buttons" 
        v-for="doctor in doctors" 
        :key="doctor.id">
            <button @click="onClickDoctor(doctor)">{{ doctor.name }}</button>
        </div>
    </main>
</template>

<script>
import router from "@/router"
import { useStore } from '../stores/Store'

export default {
    data() {
        return {
            doctors: []
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    mounted() {
        this.doctors = this.store.filter(this.$route.params.id)
    },
    methods: {
        onClickDoctor(doctor) {
            this.store.saveDoctor(doctor)
            router.push({ name: 'credential' })
        }
    }
}
</script>

<style>
body {
    background: #232323;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Helvetica', 'Arial', sans-serif;
}
main {
    max-width: 600px;
    background: antiquewhite;
    padding: 50px;
    border-radius: 15px;
}
h2 {
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 22px;
}
.buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
button {
    font-size: 18px;
}
</style>