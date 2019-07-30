<template>
  <div class="footer">
    <button class="copy" v-on:click="copyCode()">Copy HTML<span id="animation">👍</span></button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    copyCode () {
      let code = document.getElementById('code-copy')
      let button = document.getElementById('animation')

      code.style.display = 'block'
      code.select()

      try {
        var successful = document.execCommand('copy')
        if (successful) {
          button.classList.add('animation')
        }
      } catch (err) {
        alert('Oops, unable to copy')
      }

      code.style.display = 'none'
      window.getSelection().removeAllRanges()

      setTimeout(function () {
        button.classList.remove('animation')
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  background: #153047;
  width: 100vw;
  overflow: visible;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  .copy {
    font-family: 'Courier New', Courier, monospace;
    border: 0;
    padding: 0.5rem 2rem;
    background: #00ff77;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: #153047;
    cursor: pointer;
    display: inline-flex;
    margin: 1rem;
    position: relative;
    #animation {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      display: none;
      &.animation {
        display: block;
        animation: thumbup 1s infinite;
      }
    }

  }
}

@-webkit-keyframes thumbup {
  0%   {
    opacity: 0;
    transform: rotate(30deg)
  }
  40%  {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: -20rem;
    font-size: 7rem;
    transform: rotate(-20deg)
  }

}
</style>
