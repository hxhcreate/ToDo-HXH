<template>
  <div class="home">
<!--    <h1>TextExample</h1>-->
<!--    <p class="pink lighten-4 red&#45;&#45;text text&#45;&#45;darken-4">-->
<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur culpa delectus dolorem eveniet facere fugiat, harum incidunt ipsam iste, labore minus numquam obcaecati officiis omnis praesentium quidem tempore voluptatum!-->
<!--    </p>-->
<!--    <h1 class="text-h1">Massive Display</h1>-->
<!--    <h4 class="text-h4">Massive Display</h4>-->
<!--      <p class="text-subtitle-1">sub1</p>-->
<!--      <p class="text-subtitle-2">sub2</p>-->
<!--      <p class="text-caption">caption</p>-->
<!--      <p class="text-body-1">this is body</p>-->
<!--      <p class="text-button">button-text</p>-->
<!--      <p class="overline">overline</p>-->

<!--    <v-btn class="pink white&#45;&#45;text ma-2">click me</v-btn>-->

<!--    <v-btn depressed color="green" class="ma-2">click me</v-btn>-->

<!--    <v-btn text color="pink">click me</v-btn>-->

<!--    <v-btn class="pink lighten-3 ma-2" small >-->
<!--      <v-icon left small>email</v-icon>-->
<!--      <span>email me</span>-->
<!--    </v-btn>-->

<!--    <v-btn depressed dark color="purple" class="ma-4">-->
<!--      <span >email me</span>-->
<!--      <v-icon>email</v-icon>-->
<!--    </v-btn>-->

<!--    <v-btn class="ma-auto pa-auto"-->
<!--           outlined-->
<!--           fab>-->
<!--      <v-icon right>favorites</v-icon>-->
<!--    </v-btn>-->

    <v-btn class="hidden-md-and-down">Click Me</v-btn>
    <v-btn class="hidden-md-and-up">Click me</v-btn>

    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn block class="primary">1</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn block class="primary">2</v-btn>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
export default {
  name: "Example"
}
</script>

<style scoped>

</style>