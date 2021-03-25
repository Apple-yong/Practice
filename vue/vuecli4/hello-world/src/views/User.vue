<template>
  <div>
    <p>User {{ $route.params.id }}</p>
    <router-link :to="'/user/'+$route.params.id+'/content'">点击获取{{ $route.params.id }}的详细信息</router-link>
    <router-link :to="{path: '/user', query: {name: $route.params.id, age: 18, height: 180}}">点击获取{{ $route.params.id }}的详细信息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {

}

</script>
<style>
</style>
