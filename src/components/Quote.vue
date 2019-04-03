<template>
  <div class="container">
    <blockquote class="quotes">
      <p
        class="quotes__phrase"
        id="phrase"
      >{{ quotes.quote }}</p>
      <footer
        class="quotes__character"
        id="character"
      >{{ quotes.character }}</footer>
    </blockquote>
  </div>
</template>

<script>
import { API } from '../services/api'

export default {
  name: 'Quote',
  data () {
    return {
      quotes: [],
      errored: false
    }
  },

  created () {
    API.get(`quotes`)
      .then(response => (this.quotes = response.data))
      .catch(error => (this.errored = true))
  }
};
</script>

<style>
.container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 100%;
}

.quotes {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  width: 80%;
}

.quotes__phrase {
  font: 400 30px/1.4 "IBM Plex Serif", serif;
  padding: 10px 20px;
  quotes: "\201C""\201D""\2018""\2019";
}

.quotes__phrase:before {
  color: #000;
  content: open-quote;
  display: inline;
  font-size: 3em;
  height: 0;
  left: -10px;
  line-height: 0;
  position: relative;
  top: 30px;
}

.quotes__phrase:after {
  color: #000;
  content: close-quote;
  display: inline;
  font-size: 3em;
  height: 0;
  left: 10px;
  line-height: 0;
  position: relative;
  top: 35px;
}

.quotes__character {
  font: 700 1.5em/1.4 "IBM Plex Serif", serif;
  font-style: italic;
  margin: 0;
  text-align: right;
}
</style>
