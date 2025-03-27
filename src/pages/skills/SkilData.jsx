
export default function SkilData({ children, img, title, id }) {
    return (
      <section id={id}>
        {img}
        {title}
        {children}
      </section>
    );
  }
  