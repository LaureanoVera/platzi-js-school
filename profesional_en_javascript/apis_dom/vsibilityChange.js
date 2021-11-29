document.addEventListener('visibilitychange', () => {
  (document.visibilityState === 'hidden')
    ? document.title = 'Bye =['
    : document.title = 'Profesional JS'
})

