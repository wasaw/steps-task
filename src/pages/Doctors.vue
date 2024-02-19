<template>
    <h1>Doctors</h1>
</template>

<script>
export default {
    mounted() {
        console.log('load')
        console.log(this.$route.params.id)
    }
}
</script>

<style>
</style>