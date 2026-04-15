import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Login() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Login / Register</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="login-form-box shadow p-5 rounded bg-white">
                <div className="section-title text-center mb-4">
                  <h2 className="h3">Welcome Back</h2>
                  <p className="small text-muted">Join ParkMyWheels for a seamless parking experience.</p>
                </div>
                
                <form>
                  <div className="mb-4">
                    <label className="form-label small fw-bold">Email or Phone Number</label>
                    <input type="text" className="form-control py-2" placeholder="Enter your email or phone" required />
                  </div>
                  
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label className="form-label small fw-bold">Password</label>
                      <a href="#" className="small text-green text-decoration-none">Forgot Password?</a>
                    </div>
                    <input type="password" className="form-control py-2" placeholder="••••••••" required />
                  </div>
                  
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label small" htmlFor="rememberMe">Remember me</label>
                  </div>
                  
                  <button type="submit" className="btn-default w-100 py-3 mb-4">Sign In</button>
                  
                  <div className="text-center">
                    <p className="small mb-0">Don't have an account? <a href="#" className="text-green fw-bold text-decoration-none">Register Now</a></p>
                  </div>
                </form>
                
                <div className="mt-4 pt-4 border-top text-center">
                  <p className="small text-muted mb-3">Or sign in with</p>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-outline-secondary px-4 py-2 small d-flex align-items-center">
                      <i className="fa-brands fa-google me-2"></i> Google
                    </button>
                    <button className="btn btn-outline-secondary px-4 py-2 small d-flex align-items-center">
                      <i className="fa-brands fa-apple me-2"></i> Apple
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
