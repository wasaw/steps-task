<script>
import axios from "axios"

export default {
    data() {
        return {
            clinics: []
        }
    },
    mounted() {
        axios.get('https://dev-app.rnova.org/api/public/getClinics/?api_key=8471e36fd1d7d22996278025475d6593')
        .then(res => res.data)
        .then(result => {
            this.clinics = result.data
        })
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <h2>Шаг 1: Выбор клиники</h2>
        <div class="buttons" v-for="clinic in clinics" :key="clinic.id" :router-link="`/home/${clinic.id}`">
            <button>{{ clinic.title }}</button>
        </div>
    </main>
</template>

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
