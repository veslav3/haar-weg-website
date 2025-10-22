export function Services() {
  const services = [
    {
      icon: "✂️",
      title: "Haarknippen",
      description: "Professionele knippen op maat van uw gezichtsvorm en levensstijl"
    },
    {
      icon: "💇‍♀️",
      title: "Haarstyling",
      description: "Creatieve styling voor dagelijkse looks of speciale gelegenheden"
    },
    {
      icon: "🎨",
      title: "Haarkleuring",
      description: "Deskundige kleurbehandelingen van subtiele highlights tot gedurfde transformaties"
    },
    {
      icon: "💆‍♀️",
      title: "Haarbehandelingen",
      description: "Voedende behandelingen om gezond haar te herstellen en te behouden"
    },
    {
      icon: "👰",
      title: "Bruidskapsel",
      description: "Styling voor speciale gelegenheden voor uw perfecte bruiloft look"
    },
    {
      icon: "🧔",
      title: "Herenkappers",
      description: "Professionele herenknippen, baard trimmen en styling diensten"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Onze Diensten</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
