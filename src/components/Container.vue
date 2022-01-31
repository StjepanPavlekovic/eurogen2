<template>
  <div class="container">
    <div class="title">
      <img class="logo" src="../assets/coin.svg" />
    </div>
    <div class="content">
      <div v-if="numbersExist">
        <div class="top-row">
          <digit
            :number="number"
            v-for="number in mainNumbers"
            :key="number"
            :color="'purple'"
          />
        </div>
        <div class="bottom-row">
          <digit
            :number="number"
            v-for="number in secondaryNumbers"
            :key="number"
            :color="'yellow'"
          />
        </div>
      </div>
      <div v-else class="instructions">
        <span style="color: white; font-size: 1.5rem; letter-spacing: 3px"
          >Press button to generate numbers!</span
        >
        <div style="height: 100px">
          <img class="arrows" src="../assets/arrows.png" />
        </div>
      </div>
    </div>
    <div class="myButton" @click.stop="generateNumbers"></div>
    <span class="footer">Made by Pavlek</span>
  </div>
</template>

<script>
import Digit from "./Digit";

export default {
  name: "Container",
  components: {
    Digit,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      mainNumbers: [],
      secondaryNumbers: [],
    };
  },
  methods: {
    async generateNumbers() {
      this.mainNumbers = [];
      this.secondaryNumbers = [];

      do{
        await this.generate5();
        if(!this.checkTwoThreeConstraint(this.mainNumbers) || !this.checkOddEvenConstraint(this.mainNumbers)) this.mainNumbers = [];
      }
      while(this.mainNumbers.length < 5);
      
      while (this.secondaryNumbers.length < 2) {
        this.generateNewNumber(this.secondaryNumbers, 12);
      }
      this.mainNumbers.sort((a, b) => a - b);
      this.secondaryNumbers.sort((a, b) => a - b);
    },

    generateNewNumber(arr, limit) {
      let num = Math.floor(Math.random() * limit) + 1;
      if (!arr.includes(num)) {
        arr.push(num);
      }
    },

    async generate5(){
      while (this.mainNumbers.length < 5) {
        this.generateNewNumber(this.mainNumbers, 50);
      }
    },

    checkTwoThreeConstraint(arr) {
      let lowers = 0;
      let highers = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 25) lowers++;
        else highers++;
      }
      if ((lowers === 3 && highers === 2) || (lowers === 2 && highers === 3))
        return true;
      return false;
    },
    checkOddEvenConstraint(arr) {
      let odds = 0;
      let evens = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) odds++;
        else evens++;
      }
      if ((odds === 3 && evens === 2) || (odds === 2 && evens === 3))
        return true;
      return false;
    },
  },
  computed: {
    numbersExist() {
      return this.mainNumbers.length > 0 ? true : false;
    },
  },
};
</script>

<style scoped>
.title {
  animation: appearFromTop 500ms cubic-bezier(0.48, 0.035, 0, 0.935);
}
.logo {
  height: 250px;
  transform-origin: center;
  opacity: 0.8;
}

.container {
  width: 650px;
  height: 90vh;
  min-height: 600px;
  max-height: 1000px;

  display: flex;
  flex-direction: column;

  animation: appearFromTop 500ms cubic-bezier(0.48, 0.035, 0, 0.935);
}

.content {
  height: auto;
  max-width: 500px;
  width: 90%;
  margin: auto;
}

.top-row {
  height: 3.5rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: ". . . . .";
  justify-content: space-evenly;
  grid-auto-flow: column;
  align-items: center;
  background-color: #f8ec7d;
  transform-origin: left;
  animation: slideInRight 400ms cubic-bezier(0.48, 0.035, 0, 0.935);
}

.bottom-row {
  height: 3.5rem;
  max-width: 300px;
  margin: 30px auto 0px auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  justify-content: space-evenly;
  grid-auto-flow: column;
  align-items: center;
  background-color: #63316d;
  transform-origin: right;
  animation: slideInLeft 400ms cubic-bezier(0.48, 0.035, 0, 0.935);
}

.instructions {
  animation: levitate 2s infinite cubic-bezier(0.42, 0, 0.58, 1) 500ms;
}

.arrows {
  height: 60px;
  margin-top: 10%;
}

.myButton {
  width: 150px;
  height: 150px;
  margin: auto;
  background-color: #f8ec7d;
  border: 3px solid #63316d;
  border-radius: 100px;
  font-weight: 400;
  font-size: 1.1rem;
  background-image: url("../assets/random.png");
  background-position: center;
  background-size: cover;
  animation: appearFromBottom 2s cubic-bezier(0.48, 0.035, 0, 0.935),
    levitate 2s infinite cubic-bezier(0.42, 0, 0.58, 1) 2s;
}

.myButton:active {
  background-color: #c4ba61;
  transform: scale(0.99);
}

.footer {
  margin-top: auto;
  color: white;
  opacity: 0.7;
}

@keyframes levitate {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes slideInRight {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes slideInLeft {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes appearFromTop {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    opacity: 100;
    transform: translateY(0px);
  }
}

@keyframes appearFromBottom {
  0% {
    opacity: 0;
    transform: translateY(125px);
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
    transform: translateY(0px) rotateZ(360deg);
  }
}

/* MOBILE */
@media only screen and (max-width: 720px) {
  .container {
    width: 90vw;
    min-width: 300px;
  }

  .myButton {
    width: 100px;
    height: 100px;
    margin-top: 70px;
  }

  .logo {
    height: 150px;
    margin-bottom: 50px;
  }

  .footer {
    font-size: 0.7rem;
  }
}
</style>
