document.addEventListener('DOMContentLoaded', () => {
  const offset = document.querySelector('.header').offsetHeight // Calcula la altura del header automáticamente
  const inicioAnchor = document.querySelector('#anchor-inicio')
  const tecnologiasAnchor = document.querySelector('#anchor-tecnologias')
  const proyectosAnchor = document.querySelector('#anchor-proyectos')
  const contactameAnchor = document.querySelector('#anchor-contactame')
  const anchorsMenuDespeglable = document.querySelectorAll('#anchor-menu-desplegable')


  const scrollToSection = (event,sectionId) => {
    event.preventDefault()
    const section = document.querySelector(sectionId)
    const yOffset = -offset
    console.log('yoffSet: ', yOffset)
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset

    console.log('y:', y)

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  inicioAnchor.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(event,'#inicio')
  })

  tecnologiasAnchor.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(event,'#tecnologias')
  })

  proyectosAnchor.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(event, '#proyectos')
  })

  contactameAnchor.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(event, '#contactame')
  })

  anchorsMenuDespeglable.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const checkbox = document.querySelector('.checkbox')
      checkbox.checked = !checkbox.checked
      let texto = anchor.textContent
      texto = texto.toLocaleLowerCase()
      texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      const idSection = '#'+texto
      scrollToSection(event, idSection)
    })
  })

})
