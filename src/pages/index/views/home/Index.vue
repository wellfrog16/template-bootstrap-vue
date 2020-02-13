<template>
    <b-container :class="[$style.main, 'py-3']">
        <b-row>
            <b-col>Column</b-col>
            <b-col cols="5">Column</b-col>
            <b-col>Column</b-col>
            <b-col>Column</b-col>
            <b-col>Column</b-col>
        </b-row>
        <b-row cols="3">
            <b-col>Column</b-col>
            <b-col>Column</b-col>
            <b-col>Column</b-col>
            <b-col>Column</b-col>
            <b-col>Column</b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module>
.main {
    height: 1500px;
    background-color: #f3f3f3;
}
</style>
