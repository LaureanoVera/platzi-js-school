const command = document.getElementById('command')

class Test {
  run(player) {
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.25
    })

    observer.observe(command)
  }

  handleIntersection(entries) {
    const entry = entries[0]
  }
}

const here = new Test()
here.run()