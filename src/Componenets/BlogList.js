import data from '../data';

const BlogList = () => (
  <section className="blog-list">
    {data.map((item) => (
      <article className="blog-preview" key={item.title}>
        <img src={item.picture} alt="blog" />
        <div className="Catagory">Shopping  | April 2022</div>
        <h2>{item.title}</h2>
        <a href="https://shuja-shah.github.io" className="Arrow"> Read More</a>
      </article>
    ))}
  </section>
);

export default BlogList;
