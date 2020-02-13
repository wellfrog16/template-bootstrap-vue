<template>
    <navbar :class="[$style.main, 'mx-auto']" />
</template>

<script>
import Navbar from '../navbar/index.vue';

export default {
    components: {
        Navbar,
    },
};
</script>

<style lang="scss" module>
.main {
    max-width: 1440px;
}
</style>
