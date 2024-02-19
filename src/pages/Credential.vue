<template>
    <main>
        <form action="">
            <input type="text" placeholder="Имя" v-model="client.firstname"/>
            <input type="text" placeholder="Фамилия" v-model="client.lastname" />
            <input type="text" placeholder="Отчество" v-model="client.thirdname" />
            <input type="tel" placeholder="Номер телефона" v-model="client.phone" />
            <input type="date" placeholder="Дата рождения" v-model="client.date" />
            <input type="email" placeholder="Почта" v-model="client.email" />
        </form>
        <button @click="transition">Отправить</button>
    </main>
</template>

<script>
import router from '@/router';

export default {
    components: {
        router
    },
    data() {
        return {
            client: {
                firstname: "",
                lastname: "",
                thirdname: "",
                phone: "",
                date: "",
                email: ""
            },
        }
    },
    methods: {
        transition() {
            router.push({ 
                name: 'verifications', 
                params: { 
                    title: this.$route.params.title, 
                    doctor: this.$route.params.doctor, 
                    firstname: this.client.firstname,
                    lastname: this.client.lastname, 
                    thirdname: this.client.thirdname, 
                    phone: this.client.phone, 
                    date: this.client.date, 
                    email: this.client.email
            }})
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
form {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: black;
}
input {
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    outline: aqua;
    font-family: 'Helvetica', 'Arial', sans-serif;
}
button {
    margin-top: 20px;
    font-size: 21px;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    background-color:blanchedalmond
}
</style>