<script>
</script>

<template>
  <router-view :key="$route.fullPath" style="background-color: var(--light); display: flex; flex: 1; flex-direction: column;" />
</template>

<style>
:root {
  --dark: #FCC887;
  --light: #F4F3EA;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.myButton1 {
  background-color: var(--dark);
  border: 0px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 15px;
  transition: transform 0.1s linear;
}
  .myButton1:hover {
    transform: scale(0.95);
  }
  .myButton1:active {
    transform: scale(0.9);
  }
</style>