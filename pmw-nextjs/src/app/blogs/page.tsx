import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blogs() {
  const posts = [
    { id: 1, title: 'Top 5 Tips for Smarter Parking', date: 'April 10, 2024', img: 'post-1.jpg' },
    { id: 2, title: 'The Future of Valet Technology', date: 'April 12, 2024', img: 'post-2.jpg' },
    { id: 3, title: 'How to Earn passively from Parking', date: 'April 14, 2024', img: 'post-3.jpg' },
  ];

  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Posts & Blogs</h1></div></div></div>
        </div>
      </div>
      <div className="py-5 my-5"><div className="container">
        <div className="row">
          {posts.map(post => (
            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
              <div className="blog-item shadow rounded overflow-hidden">
                <img src={`/images/${post.img}`} alt="" className="img-fluid" />
                <div className="p-4">
                  <span className="text-green small">{post.date}</span>
                  <h3 className="h5 mt-2">{post.title}</h3>
                  <a href="#" className="btn-default mt-3 py-3 px-4 d-inline-block">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></div>
      <Footer />
    </>
  );
}
