<template>
    <div>
        <div class="relFacilityTitcon">
            <ul>
                <li
                    v-for="(item, index) in movies"
                    :key="index"
                    @click="changeColr(index)"
                    :class="{ bgcolor: spanIndex.indexOf(index) > -1 }"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: ["你好", "还好", "火影", "巨人"],
            isRed: false,
            spanIndex: [],
        };
    },
    methods: {
        changeColr(index) {
            let arrIndex = this.spanIndex.indexOf(index);
            // console.log(arrIndex);

            if (arrIndex > -1) {
                this.spanIndex.splice(arrIndex, 1);
            } else {
                this.spanIndex.push(index);
            }
        },
    },
};
</script>
<style>
.bgcolor {
    color: red;
}
</style>