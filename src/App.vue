<script>

</script>

<template>
    <main>
        <h2>Шаг 1: Выбор клиники</h2>
        <div class="buttons">
            <button>Клиника 1</button>
            <button>Клиника 2</button>
            <button>Клиника 3</button>
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
