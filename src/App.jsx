import './App.css'

function App() {
  const handleCall = () => {
    window.location.href = 'tel:+1-765-245-8252'
  }

  return (
    <div className="crisis-hotline">
      <header className="header">
        <h1>Crisis Support Hotline</h1>
        <p className="subtitle">Professional Support When You Need It Most</p>
      </header>

      <main className="main-content">
        <div className="info-section">
          <h2>24/7 Crisis Support</h2>
          <p>
            Our trained AI agent provides immediate assistance and will connect you 
            with a qualified counselor when needed. All calls are confidential.
          </p>
        </div>

        <div className="call-section">
          <button className="call-button" onClick={handleCall}>
            <span className="phone-icon">📞</span>
            Call Crisis Hotline
          </button>
          <p className="phone-number">(765) 245-8252</p>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Immediate Response</h3>
            <p>AI-powered initial assessment and routing</p>
          </div>
          <div className="feature">
            <h3>Professional Staff</h3>
            <p>Licensed counselors available 24/7</p>
          </div>
          <div className="feature">
            <h3>Confidential</h3>
            <p>Your privacy and safety are our priority</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>If this is a life-threatening emergency, please call 911 immediately.</p>
      </footer>
    </div>
  )
}

export default App
