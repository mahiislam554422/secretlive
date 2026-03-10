/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';

export default function App() {
  const [tickerCity, setTickerCity] = useState('New York');

  // Rotate cities for the live ticker to create FOMO
  useEffect(() => {
    const cities = ['New York', 'Los Angeles', 'London', 'Toronto', 'Sydney', 'Miami', 'Chicago'];
    const interval = setInterval(() => {
      setTickerCity(cities[Math.floor(Math.random() * cities.length)]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const affiliateLink = "https://dj83t.bemobtrcks.com/go/81d45cf6-5ba2-407a-b8a8-7e4ad39c23f1?ad_id={{ad.id}}&adset_id={{adset.id}}&campaign_id={{campaign.id}}&ad_name={{ad.name}}&adset_name={{adset.name}}&campaign_name={{campaign.name}}"; // Replace with actual affiliate link

  return (
    <>
      {/* Floating Sticky Button */}
      <div className="floating-cta">
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-rgb pulse" style={{ padding: '12px 25px', fontSize: '1rem' }}>
          <i className="fa fa-envelope"></i> 1 New Message
        </a>
      </div>

      {/* Hero Section */}
      <header>
        <div className="hero-content">
          <div className="live-ticker">
            <i className="fa fa-circle"></i> Someone from <strong>{tickerCity}</strong> just joined!
          </div>
          
          <h1>Find Your <span className="highlight">Secret Match</span> Tonight</h1>
          <p className="sub-text">100% Anonymous. Verified Profiles. No Strings Attached.</p>

          {/* Hero CTA Box with Lighting Button */}
          <div className="hero-cta-box">
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '15px', color: '#fff' }}>
              WARNING <i className="fa fa-exclamation-triangle" style={{color: '#ffcc00'}}></i>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '30px', lineHeight: '1.6' }}>
              You are about to enter a highly discreet dating network. You may see photos of people you know. Please keep their identities a secret.
            </p>
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-lighting">
              I AGREE, ENTER NOW <i className="fa fa-arrow-right" style={{marginLeft: '10px'}}></i>
            </a>
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#888' }}>
              <i className="fa fa-lock"></i> 100% Free & Secure Registration
            </p>
          </div>

          <div className="trust-badges">
            <span className="badge"><i className="fa fa-lock"></i> 256-bit SSL</span>
            <span className="badge"><i className="fa fa-user-secret"></i> 100% Anonymous</span>
            <span className="badge"><i className="fa fa-check-circle"></i> Verified Users</span>
          </div>
        </div>
      </header>

      {/* Premium Features Section */}
      <section className="section" style={{ background: '#080808' }}>
        <h2 className="section-title">Why We Are <span className="highlight">Different</span></h2>
        <p className="section-subtitle">We prioritize your privacy and ensure you only meet real, verified people looking for the same things you are.</p>
        
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon"><i className="fa fa-eye-slash"></i></div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Incognito Mode</h3>
            <p style={{ color: '#aaa' }}>Browse profiles completely hidden. Only reveal your photos to members you actually like.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon" style={{ color: 'var(--neon-pink)' }}><i className="fa fa-bolt"></i></div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Instant Connections</h3>
            <p style={{ color: '#aaa' }}>Our smart algorithm connects you with members who are currently online and ready to chat.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon" style={{ color: '#00ff00' }}><i className="fa fa-shield-alt"></i></div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Zero Fake Profiles</h3>
            <p style={{ color: '#aaa' }}>Every single user goes through a strict AI photo verification process before joining.</p>
          </div>
        </div>
      </section>

      {/* VIP / Elite Members Section */}
      <section className="section">
        <h2 className="section-title">Elite <span className="highlight">Members</span></h2>
        <p className="section-subtitle">Exclusive access to our top-rated, highly active premium members.</p>
        
        <div className="vip-grid">
          <div className="vip-card">
            <div className="vip-tag"><i className="fa fa-crown"></i> Top Rated</div>
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80" alt="VIP Member" />
            <div className="vip-overlay">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Isabella, 25</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 3 miles away &bull; <span style={{ color: '#00ff00' }}>Online</span></p>
            </div>
          </div>
          <div className="vip-card">
            <div className="vip-tag"><i className="fa fa-crown"></i> VIP Status</div>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" alt="VIP Member" />
            <div className="vip-overlay">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Mia, 27</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 1.2 miles away &bull; <span style={{ color: '#00ff00' }}>Online</span></p>
            </div>
          </div>
          <div className="vip-card">
            <div className="vip-tag"><i className="fa fa-crown"></i> Verified Model</div>
            <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=800&q=80" alt="VIP Member" />
            <div className="vip-overlay">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Olivia, 22</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 5 miles away &bull; <span style={{ color: '#00ff00' }}>Online</span></p>
            </div>
          </div>
        </div>
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-rgb pulse">UNLOCK VIP ACCESS</a>
      </section>

      {/* Profile Gallery Section */}
      <section className="section" style={{ background: '#080808', borderTop: '1px solid #111' }}>
        <h2 className="section-title">Recently <span className="highlight">Active</span></h2>
        <p className="section-subtitle">These members are online right now and looking for a connection.</p>
        
        <div className="profile-grid">
          <div className="profile-card">
            <div className="match-badge">98% Match</div>
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Jessica, 23 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 2 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">95% Match</div>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Sophia, 26 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 5 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">91% Match</div>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Monica, 24 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 1.5 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">89% Match</div>
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Chloe, 28 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 4 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">88% Match</div>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Emma, 25 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 3.5 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">85% Match</div>
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Lily, 21 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 1 mile away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">82% Match</div>
            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Ava, 29 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 6 miles away</p>
            </div>
          </div>
          <div className="profile-card">
            <div className="match-badge">80% Match</div>
            <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=500&q=80" alt="Dating Profile" />
            <div className="profile-info">
              <h3>Zoe, 22 <span style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'normal' }}><span className="online-dot"></span> Online</span></h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}><i className="fa fa-map-marker-alt"></i> 2.5 miles away</p>
            </div>
          </div>
        </div>
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-rgb">SEE ALL MATCHES</a>
      </section>

      {/* Testimonials (Social Proof) */}
      <section className="section" style={{ borderBottom: '1px solid #111' }}>
        <h2 className="section-title">Success <span className="highlight">Stories</span></h2>
        <p className="section-subtitle">Don't just take our word for it. See what our members have to say.</p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
            <p style={{ color: '#ddd', fontStyle: 'italic', lineHeight: '1.6' }}>"I was skeptical at first, but I actually met someone amazing on my second day. The incognito feature is exactly what I needed."</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
              <div>
                <h4 style={{ fontSize: '1rem' }}>Mark T.</h4>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>Joined 2 weeks ago</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
            <p style={{ color: '#ddd', fontStyle: 'italic', lineHeight: '1.6' }}>"Way better than the mainstream apps. People here actually reply and know what they want. Highly recommended!"</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
              <div>
                <h4 style={{ fontSize: '1rem' }}>Sarah L.</h4>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>Joined 1 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="security-banner">
          <i className="fa fa-shield-check"></i>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px', fontWeight: '700' }}>100% Secure & Discreet</h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6' }}>Your privacy is our top priority. We use military-grade 256-bit encryption. Your data is never shared with third parties, and billing is completely discreet.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>Stop Waiting. <span className="highlight">Start Matching.</span></h2>
        <p style={{ marginBottom: '40px', color: '#ccc', fontSize: '1.2rem' }}>Join over 2.4 million members finding connections tonight.</p>
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-lighting" style={{ maxWidth: '400px', margin: '0 auto' }}>CREATE FREE ACCOUNT</a>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Safety Tips</a>
          <a href="#">Contact Support</a>
        </div>
        
        <div style={{ color: '#444', fontSize: '0.8rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}>
          <p>&copy; 2024 PrivateMatch Network. All Rights Reserved.</p>
          <p style={{ marginTop: '10px' }}>Disclaimer: This site contains adult material. You must be 18 years or older to enter. All members depicted were 18 years of age or older at the time of photography. We have a zero-tolerance policy against fake profiles and illegal content.</p>
        </div>
      </footer>
    </>
  );
}
