<template>
    <div class="number-container">
        <span class="text" :class="color" >{{number}}</span>
    </div>
</template>

<script>
export default {
  name: 'Digit',
  props: {
    number: Number,
    color: String
  }
}
</script>

<style scoped>
.number-container{
    height: 2.5rem;
    width: 2.6rem;

    animation: appearFromTop 500ms cubic-bezier(0.480, 0.035, 0.000, 0.935);
}

.text{
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 600;
}

.yellow{
  color: #f8ec7d;
}

.purple{
  color: #63316d;
}

@keyframes levitate{
  0%{
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
}

@keyframes appearFromTop {
  0% {
    transform: translateY(-50px) rotateZ(0deg);
    opacity: 0;
  }
  100%{
    opacity: 100;
    transform: translateY(0px) rotateZ(360deg);
  }
}
</style>