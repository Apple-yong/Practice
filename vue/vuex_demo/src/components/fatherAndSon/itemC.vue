<template>
    <div>
        <button @click="send">itemC将数据发送给item</button>
    </div>
</template>

<script>
import event from './event'

export default {
    data() {
        return {
            title: '来自于子组件itemC的数据'
        }
    },
    methods: {
        send() {
            event.$emit('data-a',this.title)
        }
    },
}
</script>