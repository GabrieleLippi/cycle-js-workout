xs.periodic(1000)
  .fold(prev => prev + 1, 0)
  .map(i => `Second elapsed: ${i}`)
  .subscribe({
    next: str => {
      const el = document.querySelector('#app')
      el.textContent = str
    }
  })
