<template>
    <main>
        <h2>Врачи</h2>
        <div 
        class="buttons" 
        v-for="doctor in doctors" 
        :key="doctor.id">
            <button @click="transition(doctor)">{{ doctor.name }}</button>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import router from "@/router"

export default {
    components: {
        router
    },
    data() {
        return {
            doctors: []
        }
    },
    mounted() {
        axios.get('https://dev-app.rnova.org/api/public/getUsers/?api_key=8471e36fd1d7d22996278025475d6593')
        .then(res => res.data)
        .then(result => {
            this.doctors = result.data.filter(element => element.clinic.includes(this.$route.params.id))
        })
    },
    methods: {
        transition(doctor) {
            router.push({ name: 'credential', params: { title: this.$route.params.title, doctor: doctor.name}})
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