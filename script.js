function main() {
  return {
    DOM: xs.periodic(1000)
    .fold(prev => prev + 1, 0)
    .map(i => `Second elapsed: ${i}`),
    log: xs.periodic(2000)
    .fold(prev => prev + 1, 0)
    .map(i => `Second elapsed: ${i}`),
    }
}

function domDriver(text$) {
  text$.subscribe({
    next: str => {
      const el = document.querySelector('#app')
      el.textContent = str
    }
  })
}
function logDriver(text$) {
  text$.subscribe({
    next: str => console.log(str)
  })
}

const sink = main()
domDriver(sink.DOM)
logDriver(sink.log)
