# 🍯 Honeypot Attack Monitor & Visualizer

A real-time attack monitoring and visualization dashboard for honeypot systems. This project demonstrates threat intelligence gathering, attack pattern analysis, and security data visualization using modern web technologies.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo vs Production](#demo-vs-production)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Data Structure](#data-structure)
- [Visualizations Explained](#visualizations-explained)
- [Integration with Real Honeypots](#integration-with-real-honeypots)
- [Security Considerations](#security-considerations)
- [Customization](#customization)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Educational Resources](#educational-resources)

---

## 🎯 Overview

This Honeypot Attack Monitor is an interactive web-based dashboard that visualizes security attacks captured by honeypot systems. It provides real-time monitoring, statistical analysis, and visual representations of attack patterns, helping security researchers and students understand threat landscapes.

### What is a Honeypot?

A honeypot is a deliberately vulnerable system designed to attract and capture malicious activity. This dashboard helps you:
- Monitor attacks in real-time
- Identify attack patterns and trends
- Analyze attacker behavior
- Generate threat intelligence
- Understand the global threat landscape

### Project Purpose

**Educational**: Learn cybersecurity concepts through hands-on visualization
**Research**: Analyze attack patterns and attacker techniques
**Portfolio**: Demonstrate security monitoring and data visualization skills
**Threat Intelligence**: Collect and analyze real-world attack data

---

## ✨ Features

### Real-Time Monitoring
- ⚡ Live attack feed with automatic updates
- 🔄 Simulated attacks for demonstration (configurable for real data)
- 🎯 Attack severity classification (Critical, High, Medium)
- 🚫 Automatic blocking and logging

### Comprehensive Statistics
- 📊 Total attack count tracking
- 🌐 Unique IP address monitoring
- 🎯 Most targeted ports and services
- 🗺️ Geographic attack distribution

### Interactive Visualizations
- 📈 **Attack Timeline**: Hourly attack frequency over time
- 🎯 **Port Distribution**: Most commonly targeted services
- 🔍 **Attack Patterns**: Types of attacks detected (SQL injection, brute force, etc.)
- 🌍 **Geographic Heatmap**: Countries of origin with attack counts
- 📡 **Live Feed**: Real-time attack stream with detailed information

### Attack Pattern Detection
- 🔓 Brute Force Login attempts
- 💉 SQL Injection detection
- 🔍 Port Scanning identification
- 🦠 Malware Download tracking
- 🔑 Credential Stuffing attempts
- 📂 Directory Traversal detection
- ⚡ Command Injection alerts
- 💥 Buffer Overflow attempts
- 🕸️ XSS (Cross-Site Scripting) detection
- 🌊 DDoS Pattern recognition

### Monitored Services
- **SSH (Port 22)**: Secure Shell - High Risk
- **Telnet (Port 23)**: Unencrypted terminal - Critical Risk
- **FTP (Port 21)**: File Transfer Protocol - High Risk
- **HTTP (Port 80)**: Web server - Medium Risk
- **RDP (Port 3389)**: Remote Desktop - High Risk
- **SMB (Port 445)**: Windows file sharing - Critical Risk
- **MySQL (Port 3306)**: Database server - High Risk
- **PostgreSQL (Port 5432)**: Database server - Medium Risk

---

## 🔄 Demo vs Production

### Current Implementation (Demo Mode)

The dashboard currently operates in **simulation mode** with:
- ✅ Randomly generated attack data
- ✅ Realistic attack patterns and payloads
- ✅ Geographic distribution simulation
- ✅ Multiple attack types
- ✅ Severity classification
- ✅ Safe for learning and development

**Purpose**: 
- Learn security visualization concepts
- Understand attack patterns
- Develop analysis skills
- Build your portfolio
- No risk to your systems

### Production Mode (Real Data)

To use with real honeypot data:
1. Deploy actual honeypot (Cowrie, Dionaea, etc.)
2. Connect to attack database
3. Replace simulation logic with API calls
4. Process real log data
5. Maintain data security

See [Integration with Real Honeypots](#integration-with-real-honeypots) section for details.

---

## 🏗️ Architecture

### Component Overview

```
┌─────────────────────────────────────┐
│   Honeypot Attack Monitor (React)   │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Attack Generation Engine    │  │
│  │  (Simulation or Real Data)   │  │
│  └──────────────┬───────────────┘  │
│                 │                   │
│  ┌──────────────▼───────────────┐  │
│  │   State Management (React)   │  │
│  │   - Attacks Array            │  │
│  │   - Statistics               │  │
│  │   - Filters                  │  │
│  └──────────────┬───────────────┘  │
│                 │                   │
│  ┌──────────────▼───────────────┐  │
│  │   Visualization Components   │  │
│  │   - Recharts (Charts)        │  │
│  │   - Lucide (Icons)           │  │
│  │   - Tailwind (Styling)       │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Technology Stack

**Frontend:**
- **React 18+**: Component-based UI framework
- **Recharts**: Data visualization library
- **Lucide React**: Modern icon library
- **Tailwind CSS**: Utility-first styling

**Data Processing:**
- Real-time attack generation/ingestion
- Statistical calculations
- Pattern detection algorithms
- Geographic IP lookup (simulated)

**Visualization:**
- Line charts for time-series data
- Bar charts for distribution analysis
- Pie charts for pattern breakdown
- Progress bars for geographic distribution
- Real-time live feed

---

## 🚀 Installation

### Prerequisites

```bash
# Required
- Node.js 14+ or modern web browser
- npm or yarn (for development)

# Optional (for development)
- Git
- Code editor (VS Code recommended)
```

### Quick Start

#### Option 1: Standalone HTML (No Installation)

1. Copy the React component code
2. Open in a browser that supports modern JavaScript
3. No build process required
4. Works immediately

#### Option 2: React Development Environment

```bash
# Create new React app
npx create-react-app honeypot-monitor
cd honeypot-monitor

# Install dependencies
npm install lucide-react recharts

# Copy the component code to src/App.js

# Start development server
npm start

# Open browser to http://localhost:3000
```

#### Option 3: Production Build

```bash
# Build for production
npm run build

# Deploy the build folder to:
# - Netlify
# - Vercel
# - GitHub Pages
# - Any static hosting service
```

---

## 📖 Usage

### Basic Operation

1. **Start Monitoring**
   - Click the "▶ Start Monitoring" button
   - Attack simulation begins automatically
   - New attacks appear every 1-4 seconds

2. **View Statistics**
   - Top cards show aggregate metrics
   - Updates in real-time as attacks occur
   - Track total attacks, unique IPs, top targets

3. **Analyze Visualizations**
   - **Timeline**: See attack frequency patterns
   - **Ports**: Identify most targeted services
   - **Patterns**: Understand attack types
   - **Geography**: View attack sources

4. **Filter Data**
   - Use port dropdown to filter specific services
   - Switch between Alice and Bob perspectives (demo)
   - Clear data to restart collection

5. **Stop Monitoring**
   - Click "⏸ Stop Monitoring" to pause
   - Data remains visible for analysis
   - Resume monitoring at any time

### Understanding the Interface

#### Statistics Cards

```
┌─────────────────────┐  ┌─────────────────────┐
│ Total Attacks       │  │ Unique IPs          │
│ 156                 │  │ 89                  │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐
│ Top Target          │  │ Top Source          │
│ 22 (SSH)            │  │ CN                  │
└─────────────────────┘  └─────────────────────┘
```

#### Attack Entry Example

```
┌───────────────────────────────────────────────┐
│ CRITICAL  192.168.1.100 → Port 23 (Telnet)   │
│ Pattern: Brute Force Login                    │
│ Payload: admin:password123                    │
│ CN • 14:32:15 • BLOCKED                       │
└───────────────────────────────────────────────┘
```

**Color Coding:**
- 🔴 **Red Border**: Critical severity (Telnet, SMB)
- 🟠 **Orange Border**: High severity (SSH, RDP, FTP)
- 🟡 **Yellow Border**: Medium severity (HTTP, PostgreSQL)

---

## 📊 Data Structure

### Attack Object Schema

```javascript
{
  id: 1642345678901,              // Unique identifier (timestamp + random)
  timestamp: Date,                 // Attack time
  ip: "192.168.1.100",            // Source IP address
  port: 22,                        // Targeted port number
  service: "SSH",                  // Service name
  pattern: "Brute Force Login",    // Attack pattern type
  country: "CN",                   // Country code (ISO 3166-1 alpha-2)
  severity: "high",                // Risk level: critical, high, medium
  payload: "admin:password123",    // Attack payload/details
  blocked: true                    // Whether attack was blocked
}
```

### Supported Attack Patterns

| Pattern | Description | Common Targets |
|---------|-------------|----------------|
| Brute Force Login | Automated password guessing | SSH, Telnet, RDP, FTP |
| SQL Injection | Database exploitation attempts | HTTP, MySQL, PostgreSQL |
| Port Scanning | Network reconnaissance | All ports |
| Malware Download | Malicious file retrieval | HTTP, FTP |
| Credential Stuffing | Using leaked credentials | SSH, HTTP, RDP |
| Directory Traversal | File system access attempts | HTTP, FTP |
| Command Injection | OS command execution | HTTP, SSH |
| Buffer Overflow | Memory corruption attempts | Various services |
| XSS Attempt | Cross-site scripting | HTTP |
| DDoS Pattern | Denial of service traffic | All ports |

### Honeypot Port Configuration

```javascript
const honeypotPorts = [
  { port: 22,   service: 'SSH',        risk: 'high' },
  { port: 23,   service: 'Telnet',     risk: 'critical' },
  { port: 3389, service: 'RDP',        risk: 'high' },
  { port: 445,  service: 'SMB',        risk: 'critical' },
  { port: 80,   service: 'HTTP',       risk: 'medium' },
  { port: 21,   service: 'FTP',        risk: 'high' },
  { port: 3306, service: 'MySQL',      risk: 'high' },
  { port: 5432, service: 'PostgreSQL', risk: 'medium' }
];
```

---

## 📈 Visualizations Explained

### 1. Attack Timeline (Line Chart)

**Purpose**: Track attack frequency over time  
**Data**: Number of attacks per 5-minute interval  
**Use Cases**:
- Identify attack waves or patterns
- Detect coordinated attacks
- Understand peak attack times
- Spot anomalies in traffic

**Interpretation**:
- Spikes indicate coordinated attacks
- Steady baseline shows constant scanning
- Gaps may indicate network issues

### 2. Targeted Ports (Bar Chart)

**Purpose**: Show which services are most attacked  
**Data**: Attack count per port/service  
**Use Cases**:
- Identify most vulnerable services
- Prioritize security hardening
- Understand attacker preferences
- Guide security policy

**Common Findings**:
- SSH (22) usually most targeted
- Telnet (23) attracts many attacks
- Database ports targeted by sophisticated attackers

### 3. Attack Patterns (Pie Chart)

**Purpose**: Categorize types of attacks  
**Data**: Distribution of attack techniques  
**Use Cases**:
- Understand attacker methodologies
- Identify trending attack types
- Guide defensive strategies
- Educate on threat landscape

**Pattern Analysis**:
- High brute force = automated bots
- SQL injection = web application targeting
- Port scanning = reconnaissance phase

### 4. Geographic Distribution (Progress Bars)

**Purpose**: Show attack origins by country  
**Data**: Attack count per country code  
**Use Cases**:
- Understand global threat landscape
- Identify high-risk regions
- Guide geo-blocking policies
- Research attacker infrastructure

**Top Sources** (typically):
- 🇨🇳 China: High volume of scans
- 🇷🇺 Russia: Sophisticated attacks
- 🇺🇸 United States: Compromised infrastructure
- 🇧🇷 Brazil: Bot networks
- 🇮🇳 India: Automated scanning

### 5. Live Attack Feed

**Purpose**: Real-time attack monitoring  
**Data**: Streaming attack log entries  
**Use Cases**:
- Monitor attacks as they happen
- Investigate suspicious patterns
- Extract IOCs (Indicators of Compromise)
- Train on attack recognition

**Feed Information**:
- Severity badge (color-coded)
- Source IP and destination port
- Attack pattern classification
- Payload details
- Geographic origin
- Timestamp and block status

---

## 🔌 Integration with Real Honeypots

### Connecting to Cowrie Honeypot

```javascript
// Replace simulation with real data fetching
const fetchRealAttacks = async () => {
  try {
    const response = await fetch('http://your-api.com/api/attacks/recent');
    const data = await response.json();
    
    setAttacks(prevAttacks => [
      ...data.attacks,
      ...prevAttacks
    ].slice(0, 100));
  } catch (error) {
    console.error('Failed to fetch attacks:', error);
  }
};

useEffect(() => {
  if (isMonitoring) {
    const interval = setInterval(fetchRealAttacks, 5000);
    return () => clearInterval(interval);
  }
}, [isMonitoring]);
```

### Backend API Integration

**Required Endpoints:**

```javascript
// GET /api/attacks/recent
// Returns latest attacks (last 100)
{
  attacks: [
    {
      timestamp: "2024-01-15T14:32:15Z",
      source_ip: "192.168.1.100",
      destination_port: 22,
      service: "SSH",
      username: "admin",
      password: "123456",
      session_id: "abc123",
      country_code: "CN"
    }
  ]
}

// GET /api/stats
// Returns aggregate statistics
{
  total_attacks: 1543,
  unique_ips: 234,
  top_port: 22,
  top_country: "CN"
}

// GET /api/attacks/timeline?hours=24
// Returns time-series data
{
  timeline: [
    { time: "2024-01-15T14:00:00Z", count: 45 },
    { time: "2024-01-15T15:00:00Z", count: 67 }
  ]
}
```

### Database Query Examples

```sql
-- Recent attacks
SELECT 
  timestamp,
  source_ip,
  destination_port,
  service,
  username,
  password,
  country_code
FROM attacks
ORDER BY timestamp DESC
LIMIT 100;

-- Statistics
SELECT 
  COUNT(*) as total_attacks,
  COUNT(DISTINCT source_ip) as unique_ips,
  MODE() WITHIN GROUP (ORDER BY destination_port) as top_port,
  MODE() WITHIN GROUP (ORDER BY country_code) as top_country
FROM attacks
WHERE timestamp > NOW() - INTERVAL '24 hours';
```

### WebSocket for Real-Time Updates

```javascript
// For instant attack notifications
const ws = new WebSocket('ws://your-server.com/attacks');

ws.onmessage = (event) => {
  const attack = JSON.parse(event.data);
  setAttacks(prev => [attack, ...prev].slice(0, 100));
};
```

---

## 🔒 Security Considerations

### Running the Dashboard

**Safe Practices:**
✅ Run dashboard on separate system from honeypot  
✅ Use read-only database access  
✅ Implement authentication for production  
✅ Sanitize displayed data (prevent XSS)  
✅ Use HTTPS for API connections  
✅ Rate limit API requests  

**Avoid:**
❌ Exposing dashboard publicly without auth  
❌ Storing sensitive data in browser  
❌ Running on the honeypot system itself  
❌ Displaying raw, unsanitized payloads  

### Data Privacy

**Anonymization:**
- Consider masking full IP addresses (e.g., 192.168.1.xxx)
- Aggregate data where possible
- Remove personally identifiable information
- Comply with data protection regulations (GDPR, etc.)

**Storage:**
- Implement data retention policies
- Encrypt sensitive attack data
- Secure backup procedures
- Regular data cleanup

### Production Deployment

```javascript
// Add authentication middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!isValidToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.get('/api/attacks', requireAuth, getAttacks);
```

---

## 🎨 Customization

### Changing Attack Simulation Speed

```javascript
// In useEffect hook
interval = setInterval(() => {
  const newAttack = generateAttack();
  setAttacks(prev => [newAttack, ...prev].slice(0, 100));
}, 2000); // Change this value (milliseconds)
```

### Adding New Attack Patterns

```javascript
const attackPatterns = [
  'Brute Force Login',
  'SQL Injection Attempt',
  // Add your custom patterns
  'Zero-Day Exploit',
  'Ransomware Download',
  'Cryptomining Attempt'
];
```

### Customizing Port Monitoring

```javascript
const honeypotPorts = [
  { port: 22, service: 'SSH', risk: 'high' },
  // Add additional ports
  { port: 8080, service: 'HTTP-Alt', risk: 'medium' },
  { port: 27017, service: 'MongoDB', risk: 'high' }
];
```

### Styling Modifications

```javascript
// Change color scheme
const COLORS = [
  '#8b5cf6',  // Purple
  '#ec4899',  // Pink
  // Add your custom colors
  '#10b981',  // Green
  '#f59e0b'   // Orange
];

// Modify gradient backgrounds
className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
// Change to your preferred gradient
```

### Adding New Visualizations

```javascript
// Example: Add a severity distribution chart
const getSeverityData = () => {
  const severityCounts = attacks.reduce((acc, a) => {
    acc[a.severity] = (acc[a.severity] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(severityCounts)
    .map(([name, value]) => ({ name, value }));
};
```

---

## 🗺️ Roadmap

### Planned Features

**Phase 1: Enhanced Analytics** ✅ Current
- [x] Real-time attack monitoring
- [x] Basic statistical analysis
- [x] Geographic visualization
- [x] Pattern detection

**Phase 2: Advanced Intelligence** 🚧 In Progress
- [ ] Machine learning for attack classification
- [ ] Predictive analytics
- [ ] Anomaly detection
- [ ] Correlation analysis

**Phase 3: Integration** 📋 Planned
- [ ] Multiple honeypot support
- [ ] Threat intelligence feed integration
- [ ] SIEM integration (Splunk, ELK)
- [ ] Automated reporting

**Phase 4: Collaboration** 🔮 Future
- [ ] Multi-user dashboard
- [ ] Shared threat intelligence
- [ ] Export capabilities (PDF, CSV)
- [ ] Alert notifications

### Feature Requests

Have ideas? Open an issue or submit a pull request!

Priority areas:
1. Real-time alerting system
2. Attack replay functionality
3. Forensics timeline
4. Attacker profiling
5. Custom rule engine

---

## 🤝 Contributing

Contributions are welcome! This is an educational project designed to help students learn cybersecurity.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Ideas

**Code:**
- New visualization types
- Attack pattern detection algorithms
- Performance optimizations
- Bug fixes

**Documentation:**
- Tutorial videos
- Use case examples
- Integration guides
- Translations

**Research:**
- Attack pattern analysis
- Threat intelligence reports
- Security best practices
- Case studies

### Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Prioritize learning and education
- Follow security best practices
- Give credit where due

---

## 📚 Educational Resources

### Cybersecurity Fundamentals

**Books:**
- "The Web Application Hacker's Handbook" - Stuttard & Pinto
- "Practical Malware Analysis" - Sikorski & Honig
- "The Art of Deception" - Kevin Mitnick

**Courses:**
- SANS SEC504: Hacker Tools, Techniques, and Incident Handling
- Coursera: Cybersecurity Specialization
- TryHackMe: Defensive Security Path

### Honeypot Technologies

**Documentation:**
- [Cowrie Documentation](https://github.com/cowrie/cowrie)
- [The Honeynet Project](https://www.honeynet.org/)
- [Modern Honey Network](https://github.com/pwnlandia/mhn)

**Papers:**
- "Know Your Enemy: Learning about Security Threats" - Honeynet Project
- "A Virtual Honeypot Framework" - Provos
- "Dynamic Analysis of Malicious Code" - Willems et al.

### Data Visualization

**Libraries:**
- [Recharts Documentation](https://recharts.org/)
- [D3.js Gallery](https://observablehq.com/@d3/gallery)
- [Visx Examples](https://airbnb.io/visx/gallery)

**Tutorials:**
- "Data Visualization with React" - Frontend Masters
- "Interactive Data Visualization" - Scott Murray
- "Fundamentals of Data Visualization" - Claus Wilke

### Threat Intelligence

**Resources:**
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CVE Database](https://cve.mitre.org/)

**Communities:**
- Reddit: r/netsec, r/cybersecurity
- Twitter: #infosec, #threatintel
- Discord: Cybersecurity servers

---

## 🎓 Project Ideas & Extensions

### For Students

1. **Research Project**
   - Deploy for 30 days
   - Analyze attack patterns
   - Write research paper
   - Present findings

2. **Capstone Project**
   - Build complete threat intelligence platform
   - Integrate multiple honeypots
   - Create automated response system
   - Document architecture

3. **Competition Entry**
   - Use for CTF defense
   - Demonstrate at security conferences
   - Submit to hackathons
   - Enter research competitions

### Advanced Features

1. **Machine Learning Integration**
   ```python
   # Classify attacks using ML
   from sklearn.ensemble import RandomForestClassifier
   # Train on historical attack data
   # Predict attack types in real-time
   ```

2. **Geo-Location Mapping**
   ```javascript
   // Add interactive world map
   import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
   // Plot attacks on global map
   ```

3. **Attack Replay**
   ```javascript
   // Replay historical attacks
   const replayAttack = (attackId) => {
     // Step through attack sequence
     // Show commands executed
     // Display timeline
   };
   ```

---

## ⚖️ Legal & Ethical Disclaimer

### Educational Purpose

This tool is created for:
- ✅ Educational learning
- ✅ Security research
- ✅ Academic projects
- ✅ Authorized testing

### Responsible Use

When deploying honeypots:
1. Only on infrastructure you own/control
2. With proper authorization
3. Following applicable laws
4. Respecting privacy
5. With incident response plan

---

## 📞 Community


**Issues:**
- Search existing issues
- Provide detailed bug reports
- Include error messages
- Share environment details

**Questions:**
- Use GitHub Discussions
- Tag questions appropriately
- Be specific and clear
- Share relevant code

### Connect

**Email**: [Nyh5146@psu.edu
**LinkedIn**: [Nnamdi Hill]

---

## 🏆 Acknowledgments

### Inspiration
- Cowrie SSH/Telnet Honeypot
- The Honeynet Project
- SANS Internet Storm Center
- Shodan and Censys research

### Technologies
- React team for the framework
- Recharts for visualization
- Tailwind CSS for styling
- Lucide for icons

### Community
- Cybersecurity educators
- Open source contributors
- Security researchers
- Student developers



## 📊 Project Statistics

**Lines of Code**: ~600  
**Components**: 1 main component  
**Visualizations**: 5 chart types  
**Attack Patterns**: 10 types  
**Monitored Ports**: 8 services  
**Update Frequency**: Real-time  

---

## 🎯 Quick Reference

### Key Commands

```bash
# Start development
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy
npm run deploy
```

### Important Files

```
src/
├── App.js              # Main dashboard component
├── index.js            # Entry point
└── styles/             # Custom styles

public/
└── index.html          # HTML template

package.json            # Dependencies
README.md              # This file
```

### Environment Variables

```bash
# .env file (for production)
REACT_APP_API_URL=https://your-api.com
REACT_APP_WS_URL=wss://your-websocket.com
REACT_APP_REFRESH_INTERVAL=5000
```

---

## 🚀 Deployment Checklist

- [ ] Update API endpoints to production URLs
- [ ] Add authentication/authorization
- [ ] Configure CORS properly
- [ ] Enable HTTPS
- [ ] Set up monitoring
- [ ] Configure rate limiting
- [ ] Test with real data
- [ ] Create backup procedures
- [ ] Document deployment process
- [ ] Set up CI/CD pipeline
