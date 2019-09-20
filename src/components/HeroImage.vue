<template>
    <img :src="imageSrc" />
</template>

<script>
    export default {
        name: 'hero-image',
        props: {
            image: {
                type: String,
                required: true,
            },
        },
        computed: {
            imageSrc() {
                return require(`@/assets/${this.image}`);
            },
        },
    };
</script>

<style scoped>

</style>
