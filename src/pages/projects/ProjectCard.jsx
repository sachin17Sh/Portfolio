

export default function ProjectCard({children, id, img , name}) {
  return (
    <section id={id}>
        {img}
        {name}
        {children}
      </section>
  )
}
