/* eslint-disable max-len */
import author from '../Assets/author.png';
import instagram from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';

const Author = () => (
  <>
    <section className="author">
      <article className="author-det">
        <img className="author-img" src={author} alt="author" />
        <h2>Jessica Henry</h2>
        <span className="author-sub special">Senior SEO WRITER</span>
        <ul className="author-social">
          <li>
            {' '}
            <svg className="social" xmlns="http://www.w3.org/2000/svg" width="10.588" height="21.175" viewBox="0 0 10.588 21.175">
              <path id="facebook" d="M14.842,3.516h1.933V.149A24.962,24.962,0,0,0,13.959,0c-2.787,0-4.7,1.753-4.7,4.975V7.941H6.187V11.7H9.263v9.471h3.771v-9.47h2.951l.468-3.764H13.033V5.348c0-1.088.294-1.833,1.81-1.833Z" transform="translate(-6.187)" fill="#fff" />
              {' '}
            </svg>
          </li>
          <li><svg className="social" id="twitter" xmlns="http://www.w3.org/2000/svg" width="22.966" height="18.66" viewBox="0 0 22.966 18.66"><g id="Group_913" data-name="Group 913" transform="translate(0 0)"><path id="Path_4519" data-name="Path 4519" d="M22.966,50.209a9.817,9.817,0,0,1-2.713.744,4.682,4.682,0,0,0,2.071-2.6,9.41,9.41,0,0,1-2.986,1.14,4.708,4.708,0,0,0-8.144,3.22,4.848,4.848,0,0,0,.109,1.074,13.327,13.327,0,0,1-9.7-4.925,4.709,4.709,0,0,0,1.447,6.293,4.65,4.65,0,0,1-2.127-.58v.052a4.73,4.73,0,0,0,3.772,4.626,4.7,4.7,0,0,1-1.234.155,4.164,4.164,0,0,1-.891-.08,4.753,4.753,0,0,0,4.4,3.28,9.46,9.46,0,0,1-5.838,2.008A8.821,8.821,0,0,1,0,64.547,13.255,13.255,0,0,0,7.223,66.66a13.308,13.308,0,0,0,13.4-13.4c0-.208-.007-.409-.017-.609A9.393,9.393,0,0,0,22.966,50.209Z" transform="translate(0 -48)" fill="#fff" /></g></svg></li>
          <li><img className="social" src={linkedin} alt="LinkedIn" /></li>
          <li><img className="social" src={instagram} alt="instagram" /></li>
          <li>
            <svg className="social" id="pinterest" xmlns="http://www.w3.org/2000/svg" width="16.517" height="20.531" viewBox="0 0 16.517 20.531"><g id="Group_1028" data-name="Group 1028" transform="translate(0)"><path id="Path_9693" data-name="Path 9693" d="M56.539,0C50.967,0,48,3.606,48,7.538c0,1.823,1.009,4.1,2.624,4.819.245.112.379.064.433-.166.048-.175.26-1.015.363-1.412a.366.366,0,0,0-.086-.357,4.705,4.705,0,0,1-.962-2.837,5.5,5.5,0,0,1,5.832-5.4c3.177,0,5.4,2.084,5.4,5.065,0,3.368-1.765,5.7-4.058,5.7a1.829,1.829,0,0,1-1.915-2.251,24.592,24.592,0,0,0,1.072-4.145A1.585,1.585,0,0,0,55.075,4.8c-1.292,0-2.341,1.292-2.341,3.027a4.35,4.35,0,0,0,.386,1.847s-1.278,5.215-1.516,6.189a13.983,13.983,0,0,0,.094,4.549.134.134,0,0,0,.244.063,16.217,16.217,0,0,0,2.1-4c.158-.586.8-2.964.8-2.964a3.5,3.5,0,0,0,2.963,1.427c3.893,0,6.707-3.456,6.707-7.744C64.507,3.076,61.023,0,56.539,0Z" transform="translate(-48.004)" fill="#fff" /></g></svg>
            {' '}
          </li>
        </ul>
        <button className="btn btn-connect" type="submit">Connect</button>
      </article>
    </section>

    <section className="overview">
      <h2>Overview</h2>
      <article className="overview-det">
        <p>
          A professional wordsmith skilled in SEO writing with a knack for digital marketing.
          He writes to enlighten customers and knows how to tickle readers imaginations while connecting stories
          with sales. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
        <p>
          A professional wordsmith skilled in SEO writing with a knack for digital marketing.
          He writes to enlighten customers and knows how to tickle readers imaginations while connecting stories
          with sales. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </article>
    </section>
  </>
);
export default Author;
