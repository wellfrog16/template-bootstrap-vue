<template>
    <b-container>
        <b-row cols="1">
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Admin',
                    href: '#',
                },
                {
                    text: 'Manage',
                    href: '#',
                },
                {
                    text: 'Library',
                    active: true,
                },
            ],
        };
    },
};
</script>

<style lang="scss" module>
</style>
