<template>
    <main>
        <h2>Пожалуйста, проверьте выбранные данные</h2>
        <div>
            <h3>Клиника</h3>
            <label>{{ doctorsStore.selectedDoctor.clinic_titles }}</label>
        </div>
        <div>
            <h3>Врач</h3>
            <label>{{ doctorsStore.selectedDoctor.name }}</label>
        </div>
        <div>
            <h3>Фамилия</h3>
            <label>{{ clientStore.client.lastname }}</label>
        </div>
        <div>
            <h3>Имя</h3>
            <label>{{ clientStore.client.firstname }}</label>
        </div>
        <div>
            <h3>Отчество</h3>
            <label>{{ clientStore.client.thirdname }}</label>
        </div>
        <div>
            <h3>Телефон</h3>
            <label>{{ clientStore.client.thirdname }}</label>
        </div>
        <div>
            <h3>Дата</h3>
            <label>{{ clientStore.client.date }}</label>
        </div>
        <div>
            <h3>Почта</h3>
            <label>{{ clientStore.client.email }}</label>
        </div>
    </main>
</template>

<script>
import router from '@/router';
import { useClientStore } from '@/stores/ClientStore';
import { useDoctorsStore } from '@/stores/DoctorsStore';

export default {
    setup() {
        const clientStore = useClientStore()
        const doctorsStore = useDoctorsStore()
        return {
            clientStore,
            doctorsStore
        }
    },
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
h3 {
    font-weight: bold;
}
div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 19px;
}
label {
    margin: 5px;
}
</style>