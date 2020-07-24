<template>
 <div id="app">
   <v-app>
      <transition name="fade">
      <router-view/>
    </transition>
   </v-app>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
};
</script>
