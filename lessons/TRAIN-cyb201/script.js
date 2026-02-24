/* ========================
   CYB 201 – INTERACTIVE LEARNING APP
   Built for Mathias
   ======================== */

/* ========================
   CONSTANTS & CONTENT DATA
   ======================== */

const LEARNER = 'Mathias';

const SECTIONS = [
  /* ============================================
     SECTION 1 — THE CYBERSPACE (P1 Slides 1-5)
     ============================================ */
  {
    id:'section-1', num:'01', icon:'🌐', title:'The Cyberspace',
    accent:'Cyberspace', desc:'What is this invisible world called cyberspace?', time:'5 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🌐</span> What is Cyberspace?</h3>
<p><strong>Cyberspace</strong> (the digital world) is the place where computers, phones, and the internet all meet. You cannot touch it. But it is real.</p>
<p>It includes all networks, devices, data, and people who use them. It has no borders. It does not care about geography.</p>
<p>Think of the natural world: land, sea, air, space. Cyberspace is the <strong>5th domain</strong>. Every activity in the real world has a match in cyberspace.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>All the farms in your area, all the paths between them, all the farmers, all the yams, and all the rules everyone follows — that connected world is like cyberspace.</p>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>The entire football league — every pitch, player, ball, referee, and rule — all connected. That whole system is like cyberspace.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔧</span> Elements of Cyberspace</h3>
<p>Cyberspace is made of many parts. Each part has an important job.</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Element</th><th>What It Is</th><th>Farm / Football Example</th></tr></thead>
<tbody>
<tr><td><strong>Hardware</strong></td><td>Physical devices — servers, computers, phones, routers, IoT devices</td><td>Your hoe, cutlass, baskets, grinding machine</td></tr>
<tr><td><strong>Software</strong></td><td>Programs — operating systems (Windows, Linux), apps, firmware</td><td>The farming methods you know — how to make heaps</td></tr>
<tr><td><strong>Networks</strong></td><td>Connections — Internet (global), Intranets (private, inside org), Extranets (shared with partners)</td><td>Paths to market, and the special path shared with your trusted neighbour</td></tr>
<tr><td><strong>Data</strong></td><td>Information — personal data (names), business data (trade secrets), big data (huge collections)</td><td>Your yams, your notebook records, the market price list</td></tr>
<tr><td><strong>Protocols</strong></td><td>Rules — TCP/IP (internet communication), HTTP/HTTPS (web pages), encryption standards (AES, RSA)</td><td>Rules at the grinding machine — line up, wait your turn</td></tr>
<tr><td><strong>People</strong></td><td>Users, IT professionals, cybersecurity experts</td><td>You the farmer, your workers, the agricultural officer</td></tr>
<tr><td><strong>Laws</strong></td><td>GDPR, HIPAA, Nigeria Cybercrimes Act 2015, NIST, ISO 27001</td><td>Village farming rules set by the chief and elders</td></tr>
<tr><td><strong>Threat Actors</strong></td><td>Hackers, cybercriminals, nation-state spies</td><td>Thieves who steal yams, rival villages</td></tr>
<tr><td><strong>Countermeasures</strong></td><td>Firewalls, IDS, antivirus software</td><td>Your fence, watchdog, padlock on the barn</td></tr>
</tbody>
</table>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Cyberspace is the connected digital world — the 5th domain alongside land, sea, air, and space.</li>
<li>It has many elements: hardware, software, networks, data, people, protocols, laws, threat actors, and countermeasures.</li>
<li>Every real-world activity has a digital match in cyberspace.</li>
</ul>
</div>`,
    gate:{q:'What is cyberspace?',
      opts:['Only the internet','The connected world of devices, networks, data, and people','A type of computer','A website'],
      correct:1, explain:'Cyberspace is everything connected — devices, networks, data, and people. Not just the internet alone.'}
  },

  /* ===================================================
     SECTION 2 — WHAT IS CYBERSECURITY? (P1 Slides 6-12)
     =================================================== */
  {
    id:'section-2', num:'02', icon:'🛡️', title:'What is Cybersecurity?',
    accent:'Cybersecurity', desc:'Protecting the digital world from attacks.', time:'8 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🛡️</span> Cybersecurity Defined</h3>
<p><strong>Cybersecurity</strong> is the practice of protecting digital systems and sensitive data from attacks.</p>
<p>It makes sure information systems are not compromised, damaged, or abused.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>Cybersecurity is like building a fence, locking your barn, hiring a watchman, and keeping records of who enters — all to protect your yams from thieves.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">📋</span> The 10 Areas of Cybersecurity</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Area</th><th>What It Protects</th></tr></thead>
<tbody>
<tr><td><strong>Network Security</strong></td><td>Networks from intrusions — using firewalls, IDS, IPS</td></tr>
<tr><td><strong>Application Security</strong></td><td>Software from vulnerabilities — using secure coding, penetration testing</td></tr>
<tr><td><strong>Endpoint Security</strong></td><td>Devices (laptops, phones) — using antivirus, device management</td></tr>
<tr><td><strong>Data Security</strong></td><td>Sensitive data — using encryption, data masking, secure storage</td></tr>
<tr><td><strong>IAM</strong></td><td>Access to resources — using MFA, role-based access control</td></tr>
<tr><td><strong>Operational Security</strong></td><td>Processes and procedures — keeping sensitive info confidential</td></tr>
<tr><td><strong>Cloud Security</strong></td><td>Data in cloud environments — using cloud-specific tools</td></tr>
<tr><td><strong>Threat Intelligence</strong></td><td>Collecting info about threats to predict and prevent attacks</td></tr>
<tr><td><strong>Incident Response</strong></td><td>Detecting, responding to, and recovering from cyber incidents</td></tr>
<tr><td><strong>Legal Compliance</strong></td><td>Following laws and ethical rules about data protection</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🔍</span> Cybersecurity vs Information Security</h3>
<p><strong>Cybersecurity</strong> protects only digital things. <strong>Information Security</strong> protects ALL information — digital, physical, or spoken.</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Aspect</th><th>Cybersecurity</th><th>Information Security</th></tr></thead>
<tbody>
<tr><td>Scope</td><td>Digital assets only</td><td>All assets — digital, physical, intellectual</td></tr>
<tr><td>Focus</td><td>Systems and networks</td><td>Information in any form</td></tr>
<tr><td>Threats</td><td>Hackers, malware, DDoS</td><td>Data breaches, accidental loss</td></tr>
<tr><td>Tools</td><td>Firewalls, IDS, encryption</td><td>Policies, risk management, classification</td></tr>
<tr><td>Example</td><td>Blocking a phishing email</td><td>Locking paper files in a drawer</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>Cybersecurity protects the ball during the match. Information security protects everything — the ball, the jerseys stacked after training, the written strategy, and the coach's spoken plans.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">📌</span> 7 Key Concepts You Must Know</h3>
<ul>
<li><strong>Asset</strong> — Anything valuable you protect. Your yams, barn, tools. In cyber: your computers, data, software.</li>
<li><strong>Vulnerability</strong> — A weakness that can be exploited. A broken fence on your farm.</li>
<li><strong>Threat</strong> — Something that can cause harm. A thief near your village.</li>
<li><strong>Cyberattack</strong> — When someone deliberately breaks into a system.</li>
<li><strong>Attack Vector</strong> — The path the attacker uses. The hole in your fence.</li>
<li><strong>Exploit</strong> — The tool or trick used to abuse a weakness.</li>
<li><strong>Payload</strong> — The harm done after the attack. The yams actually stolen.</li>
</ul>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>Goal post = <strong>asset</strong>. Tired goalkeeper = <strong>vulnerability</strong>. Opposing striker = <strong>threat</strong>. He shoots = <strong>attack</strong>. The angle he used = <strong>attack vector</strong>. His skill = <strong>exploit</strong>. The goal scored = <strong>payload</strong>.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">💰</span> Why Cybersecurity Matters</h3>
<p>${LEARNER}, this part is very important. Cybercrime costs the world <strong>$10.5 trillion per year</strong> by 2025. If cybercrime were a country, it would be the <strong>3rd biggest economy</strong> — after USA and China!</p>
<p>Cybersecurity matters because it:</p>
<ol>
<li><strong>Fights cybercrime</strong> — Hacking, phishing, ransomware cost billions yearly.</li>
<li><strong>Protects critical infrastructure</strong> — Hospitals, power grids, banks depend on digital systems.</li>
<li><strong>Guards data privacy</strong> — Personal and health data must be kept safe. Laws like GDPR enforce this.</li>
<li><strong>Supports business continuity</strong> — Attacks cause downtime, money loss, and reputation damage.</li>
<li><strong>Defends national security</strong> — Countries use cyber warfare for espionage and sabotage.</li>
<li><strong>Protects intellectual property</strong> — Inventions and trade secrets can be stolen digitally.</li>
<li><strong>Handles new tech risks</strong> — IoT, AI, and cloud computing create new attack opportunities.</li>
</ol>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Cybersecurity protects digital systems from attacks. It has 10 areas.</li>
<li>It is narrower than information security, which covers all types of info.</li>
<li>Key concepts: asset, vulnerability, threat, attack, exploit, payload.</li>
<li>Cybercrime is the 3rd biggest economy in the world by cost.</li>
</ul>
</div>`,
    gate:{q:'A weakness in a system that an attacker can use is called a:',
      opts:['Threat','Payload','Vulnerability','Protocol'],
      correct:2, explain:'A vulnerability is a weakness — like a broken fence. A threat is the danger. A payload is the harm done.'}
  },

  /* =====================================================
     SECTION 3 — CIA TRIAD & SECURITY GOALS (P1 Slides 13-15)
     ===================================================== */
  {
    id:'section-3', num:'03', icon:'🔒', title:'CIA Triad & Security Goals',
    accent:'CIA Triad', desc:'The three core goals of cybersecurity — plus two more.', time:'7 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🔒</span> The 5 Cybersecurity Goals</h3>
<p>${LEARNER}, every security decision aims at one or more of these goals:</p>
<ul>
<li><strong>Confidentiality</strong> — Only the right people can see the information.</li>
<li><strong>Integrity</strong> — The information has not been changed or corrupted.</li>
<li><strong>Availability</strong> — The information is there when you need it.</li>
<li><strong>Authenticity</strong> — The data is genuine. It came from who it says.</li>
<li><strong>Non-Repudiation</strong> — The sender cannot deny they sent the message.</li>
</ul>
<p>The first three are called the <strong>CIA Triad</strong>.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>C</strong> — Only you know where your best seedlings are hidden. <strong>I</strong> — Nobody swaps your good seedlings for bad ones. <strong>A</strong> — The grinding machine works when you bring yams. <strong>Authenticity</strong> — Seedlings are truly the variety the seller said. <strong>Non-Repudiation</strong> — The buyer cannot deny receiving your yams after delivery.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">📜</span> History of Cybersecurity Development</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Era</th><th>Focus</th><th>Key Point</th></tr></thead>
<tbody>
<tr><td><strong>1940s</strong></td><td>Communication Security</td><td>Focus on confidentiality. Physical security and cryptography.</td></tr>
<tr><td><strong>1970s–1980s</strong></td><td>Information Security</td><td>Data over networks. Focus on CIA (Confidentiality, Integrity, Availability).</td></tr>
<tr><td><strong>Current</strong></td><td>Information Assurance</td><td>Added Authenticity and Non-Repudiation to the principles.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">⚠️</span> Threats & Countermeasures for Each Goal</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Goal</th><th>Threats</th><th>Countermeasures</th></tr></thead>
<tbody>
<tr><td><strong>Confidentiality</strong></td><td>Unauthorised access, eavesdropping, data breaches, phishing, malware</td><td>Access control, MFA, encryption, data classification, physical security</td></tr>
<tr><td><strong>Integrity</strong></td><td>Man-in-the-Middle, tampering, viruses, SQL injection, forgery</td><td>Encryption, access control, VPN, avoid public Wi-Fi</td></tr>
<tr><td><strong>Availability</strong></td><td>DDoS, ransomware, hardware failures, natural disasters, power outages</td><td>Backups, firewalls, system updates, IDS/IPS, equipment maintenance</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Confidentiality threat</strong> — Opponents steal your match strategy. <strong>Integrity threat</strong> — Someone changes the scoreboard. <strong>Availability threat</strong> — Thousands of fake fans flood the pitch so nobody can play.</p>
</div>
</div>

<div class="demo-container anim-in">
<div class="demo-title">🎮 Interactive: Match Threats to CIA Goals</div>
<p style="font-size:.9rem;color:var(--text-light);margin-bottom:16px">Click a threat, then click the correct CIA goal.</p>
<div id="ciaDemoThreats" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px"></div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
<div class="demo-area" id="ciaC" onclick="ciaDrop('C')"><strong style="color:var(--primary-main)">Confidentiality</strong><div id="ciaCItems"></div></div>
<div class="demo-area" id="ciaI" onclick="ciaDrop('I')"><strong style="color:var(--accent-main)">Integrity</strong><div id="ciaIItems"></div></div>
<div class="demo-area" id="ciaA" onclick="ciaDrop('A')"><strong style="color:var(--earth-light)">Availability</strong><div id="ciaAItems"></div></div>
</div>
<div class="demo-narration" id="ciaNarration">Click a threat above, then click where it belongs.</div>
<div class="demo-controls"><button class="btn-ghost btn-sm" onclick="resetCIA()">↺ Reset</button></div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>CIA Triad: Confidentiality, Integrity, Availability — plus Authenticity and Non-Repudiation.</li>
<li>Security evolved: 1940s (confidentiality only) → current (all 5 goals).</li>
<li>Each goal has its own threats and countermeasures.</li>
</ul>
</div>`,
    gate:{q:'A DDoS attack mostly threatens which CIA goal?',
      opts:['Confidentiality','Integrity','Availability','Authenticity'],
      correct:2, explain:'DDoS floods a system so nobody can use it. This attacks Availability — the system is not there when you need it.'}
  },

  /* =========================================================
     SECTION 4 — IDENTITY & ACCESS MANAGEMENT (P1 Slides 16-18)
     ========================================================= */
  {
    id:'section-4', num:'04', icon:'🔑', title:'Identity & Access Management',
    accent:'Access', desc:'Who are you? Prove it. What can you do?', time:'8 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🔑</span> IAM Functions & Lifecycle</h3>
<p><strong>IAM</strong> (Identity and Access Management) makes sure only the right people access the right things. It has 5 parts:</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Function</th><th>What It Does</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Identification</strong></td><td>You state who you are</td><td>Account creation policy: username rules, password rules, force default password change</td></tr>
<tr><td><strong>Authentication</strong></td><td>You prove who you are</td><td>Login data collection, MFA, biometrics, password change enforcement</td></tr>
<tr><td><strong>Authorisation</strong></td><td>System decides what you can do</td><td>Permissions based on data sensitivity. Low privilege = low sensitive data. High privilege = high sensitive data.</td></tr>
<tr><td><strong>Accountability</strong></td><td>Records of what you did</td><td>Audit trails for investigation. Review of auth records and activities.</td></tr>
<tr><td><strong>Account Termination</strong></td><td>Closing accounts</td><td>Policy defines timing and method for terminating user accounts.</td></tr>
</tbody>
</table>
</div>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>Identification</strong> — You say your name at the grinding machine. <strong>Authentication</strong> — The operator sees your face. <strong>Authorisation</strong> — You paid for the big machine, so you can use it. <strong>Accountability</strong> — He writes your name in his book. <strong>Termination</strong> — When you leave the village, your name is removed from the list.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔐</span> Authentication Mechanisms</h3>
<p>How do you prove your identity? Five ways:</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Method</th><th>Type</th><th>How It Works</th></tr></thead>
<tbody>
<tr><td><strong>Password</strong></td><td>What you know</td><td>You enter a secret word. Simple but can be stolen.</td></tr>
<tr><td><strong>Biometrics</strong></td><td>What you are</td><td>Fingerprint, face scan, iris scan, DNA. Hard to fake.</td></tr>
<tr><td><strong>Token</strong></td><td>What you have</td><td>A card, phone OTP, or hardware key. You must physically have it.</td></tr>
<tr><td><strong>Certificate</strong></td><td>Digital proof</td><td>A digital certificate stored on your device verifies your identity.</td></tr>
<tr><td><strong>MFA</strong></td><td>Two or more combined</td><td>Password + OTP, or fingerprint + card. Much safer!</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>To enter the dressing room: gatekeeper asks for the <strong>team code word</strong> (password), checks your <strong>face</strong> (biometrics), and checks your <strong>ID card</strong> (token). Using two or more is MFA — much harder for an imposter.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🚪</span> Access Control Models</h3>
<p>Once you are identified, the system decides what you can do. Three main models:</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Model</th><th>Who Decides?</th><th>Flexibility</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>DAC</strong> (Discretionary)</td><td>The resource owner</td><td>Flexible but risky — easy to misconfigure</td><td>You own the barn, you give your friend the key.</td></tr>
<tr><td><strong>MAC</strong> (Mandatory)</td><td>Central authority</td><td>Very strict — users cannot change it</td><td>Village chief says only elders enter the yam store. Period.</td></tr>
<tr><td><strong>RBAC</strong> (Role-Based)</td><td>Your job role</td><td>Efficient for large organisations</td><td>Captain calls subs. Goalkeeper uses hands. Players cannot.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>IAM has 5 functions: Identification, Authentication, Authorisation, Accountability, Termination.</li>
<li>5 authentication methods: Password, Biometrics, Token, Certificate, MFA.</li>
<li>3 access models: DAC (owner decides), MAC (central rule), RBAC (role-based).</li>
</ul>
</div>`,
    gate:{q:'MFA (Multi-Factor Authentication) means:',
      opts:['Using one very strong password','Using two or more types of proof to verify identity','Changing your password daily','Only using fingerprints'],
      correct:1, explain:'MFA combines two or more factors — like password + fingerprint. Much stronger than any single method alone.'}
  },

  /* =============================================================
     SECTION 5 — PROTOCOLS, TRUST & FEDERATION (P1 Slides 19-29)
     ============================================================= */
  {
    id:'section-5', num:'05', icon:'🌍', title:'Protocols, Trust & Federation',
    accent:'Trust', desc:'OAuth, SAML, OIDC, trust boundaries, SSO, federation, and mobile security.', time:'9 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🔗</span> Authentication & Authorisation Protocols</h3>
<p>Three protocols help systems verify users and grant access across the internet:</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Protocol</th><th>Purpose</th><th>How It Works</th><th>Used For</th></tr></thead>
<tbody>
<tr><td><strong>OAuth</strong></td><td>Authorisation</td><td>User logs in to Google/Facebook. App gets a token to access user data. Token has limits and expiry.</td><td>API access, third-party apps</td></tr>
<tr><td><strong>SAML</strong></td><td>Authentication + SSO</td><td>User accesses an app. App redirects to identity provider. A SAML assertion (XML file) verifies the user.</td><td>Enterprise SSO, business-to-business</td></tr>
<tr><td><strong>OpenID Connect</strong></td><td>Authentication</td><td>Built on top of OAuth 2.0. Identity provider issues an ID token (JWT) to confirm who you are.</td><td>"Login with Google" buttons, social login</td></tr>
</tbody>
</table>
</div>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>OAuth</strong>: You give a worker a special token that lets him enter your barn to load yams — but only yams, not seedlings, and only for today. <strong>SAML</strong>: The village chief writes a letter saying "this farmer is verified." Any market that trusts the chief accepts the letter. <strong>OpenID Connect</strong>: Like SAML but lighter — the chief gives a small card instead of a long letter.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🤝</span> Trust, SSO & Federation</h3>
<p>In cybersecurity, <strong>trust</strong> means confidence that systems are secure and behave correctly.</p>
<p><strong>Trust Boundaries</strong> define what is trusted and what is not:</p>
<ul>
<li><strong>Traditional model</strong> — Trust boundary is <em>static</em>. Everything inside the company network is trusted. Protected by firewalls, VPNs, IDS, MFA.</li>
<li><strong>Modern model</strong> (cloud, remote work, BYOD) — Trust boundary becomes <em>dynamic</em>. It extends beyond IT control into cloud providers and personal devices.</li>
</ul>
<p><strong>SSO</strong> (Single Sign-On) — Log in once, access many systems. No need for separate passwords.</p>
<p><strong>Federated Identity (FIM)</strong> — Two organisations trust each other. Log in to one, access the other. Example: use your Google account to access Facebook.</p>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>SSO</strong>: Show your ID at the stadium gate. Inside, you can enter any section without showing ID again. <strong>Federation</strong>: Your team's ID card is also accepted at the rival stadium because the two leagues have an agreement.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">📱</span> Mobile Device Management (MDM)</h3>
<p>Phones and laptops are now used for work (BYOD = Bring Your Own Device, and remote work). <strong>MDM</strong> helps companies control and secure these devices.</p>
<p><strong>MDM features:</strong></p>
<ul>
<li>Device enrolment and authentication</li>
<li>GPS location and tracking</li>
<li>Push OS updates and patches remotely</li>
<li>Prevent jailbreaking or root access</li>
<li>Create encrypted containers for sensitive data</li>
<li>Restrict features based on access policies</li>
</ul>
<div class="info-box">
<span class="icon">📝</span>
<p><strong>Scenario:</strong> A CEO loses his phone with company data. The CSIRT uses MDM to: (1) remotely wipe the data, (2) locate the phone via GPS, (3) push security updates if malware is found.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🔐</span> Zero Trust — Never Trust, Always Verify</h3>
<p><strong>Zero Trust</strong> means no user, device, or system is trusted by default — even if they are inside the network. Every access request must be verified.</p>
<p>Traditional security = <strong>network-centred</strong>. Trust everything inside. Problem: internal attacks cannot be stopped.</p>
<p>Zero Trust = <strong>identity-centred</strong>. Trust nobody. Verify everyone, every time. Fine-grained access control.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>Traditional: Once you pass the farm gate, you can go anywhere. Zero Trust: Even inside the farm, every barn door checks your face before opening. Nobody gets a free pass.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>OAuth = authorisation tokens. SAML = enterprise SSO. OpenID Connect = "Login with Google."</li>
<li>Trust boundaries shift from static to dynamic with cloud and BYOD.</li>
<li>SSO = one login, many systems. Federation = trust between organisations.</li>
<li>MDM controls mobile devices remotely — can wipe, track, update.</li>
<li>Zero Trust = never trust, always verify. Identity-centred, not network-centred.</li>
</ul>
</div>`,
    gate:{q:'What does OAuth do?',
      opts:['Encrypts passwords','Allows apps to access your data with a token — without sharing your password','Blocks hackers','Creates user accounts'],
      correct:1, explain:'OAuth gives apps a limited access token. You never share your actual password with the third-party app.'}
  },

  /* =============================================================
     SECTION 6 — CYBER RISK & THREAT LANDSCAPE (P1 Slides 30-41)
     ============================================================= */
  {
    id:'section-6', num:'06', icon:'⚠️', title:'Cyber Risk & Threat Landscape',
    accent:'Threats', desc:'Risk formula, threat types, nation-state attackers, and real case studies.', time:'10 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">📐</span> What is Cyber Risk?</h3>
<p><strong>Cyber Risk</strong> is the chance of loss or harm to your digital systems.</p>
<p>Risk exists when three things meet:</p>
<ul>
<li>You have something valuable — <strong>Asset</strong></li>
<li>It has a weakness — <strong>Vulnerability</strong></li>
<li>Someone wants to harm it — <strong>Threat</strong></li>
</ul>
<p><strong>Risk = Vulnerability × Threat × Asset</strong></p>
<p>Remove any one and the risk goes down.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>Your yam barn = <strong>asset</strong>. Broken lock = <strong>vulnerability</strong>. Thieves nearby = <strong>threat</strong>. All three exist, so you have <strong>risk</strong>. Fix the lock and the risk drops.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🕵️</span> Types of Threats to Critical Infrastructure</h3>
<p>These are the main dangers to important systems (CII = Critical Information Infrastructure):</p>
<ul>
<li><strong>Malware</strong> — Bad software (viruses, worms)</li>
<li><strong>Phishing</strong> — Fake messages that trick you</li>
<li><strong>Ransomware</strong> — Locks files, demands money</li>
<li><strong>DDoS</strong> — Floods system with traffic</li>
<li><strong>Social Engineering</strong> — Tricks using human trust</li>
<li><strong>Insider Threats</strong> — Harm from people inside</li>
<li><strong>Data Breaches</strong> — Sensitive data stolen</li>
<li><strong>Zero-Day Exploits</strong> — Attack unknown weaknesses</li>
<li><strong>Supply Chain Attacks</strong> — Attack through trusted partners</li>
<li><strong>Nation-State APTs</strong> — Government-backed hackers</li>
</ul>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🏴</span> Nation-State Actors & APTs</h3>
<p><strong>Nation-State Actors</strong> are hackers working for governments. They spy, sabotage, and disrupt other countries.</p>
<p>Their approach is called <strong>APT</strong> — Advanced Persistent Threat:</p>
<ul>
<li><strong>Advanced</strong> — Custom malware, zero-day exploits, sophisticated tools</li>
<li><strong>Persistent</strong> — Stay hidden for months or years</li>
<li><strong>Resource-Intensive</strong> — Government funding, intelligence, technology</li>
<li><strong>Well-Coordinated</strong> — Multiple agencies work together</li>
</ul>
<p><strong>Their objectives on critical infrastructure:</strong></p>
<ul>
<li><strong>Espionage</strong> — Steal classified info (defense, energy grids)</li>
<li><strong>Sabotage</strong> — Disable infrastructure for instability</li>
<li><strong>Cyber Warfare</strong> — Part of military strategy</li>
<li><strong>Influence Operations</strong> — Manipulate elections, opinions</li>
</ul>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>A wealthy rival club sends a spy to live in your team for months. He learns your tactics, studies your best players, and at the right moment, leaks everything to the rival. Slow, smart, patient, dangerous — that is an APT.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">📚</span> Major Case Studies</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Attack</th><th>Year</th><th>Attacker</th><th>What Happened</th><th>Significance</th></tr></thead>
<tbody>
<tr><td><strong>Stuxnet</strong></td><td>2009–2010</td><td>USA & Israel</td><td>Worm destroyed Iran's nuclear centrifuges. Physical damage from malware.</td><td>First cyber weapon causing physical harm.</td></tr>
<tr><td><strong>Operation Olympic Games</strong></td><td>2006–2010</td><td>USA & Israel</td><td>Series of cyber espionage and sabotage operations against Iran's nuclear programme.</td><td>Cyber tools used in geopolitical strategy.</td></tr>
<tr><td><strong>Shamoon</strong></td><td>2012, 2016</td><td>Iran (APT33)</td><td>Wiped data from Saudi Aramco — world's biggest oil company. Repeated in 2016.</td><td>Nation-states target energy sectors.</td></tr>
<tr><td><strong>APT10 Cloud Hopper</strong></td><td>2014–2017</td><td>China</td><td>Attacked IT service providers to access client networks in defense, healthcare, telecom.</td><td>Third-party providers exploited to reach many targets.</td></tr>
<tr><td><strong>NotPetya</strong></td><td>2017</td><td>Russia</td><td>Disguised as ransomware but was a wiper. Spread from Ukraine globally. Billions in damage.</td><td>Collateral damage — hit companies worldwide beyond target.</td></tr>
<tr><td><strong>SolarWinds</strong></td><td>2020</td><td>Russia (APT29)</td><td>Malware hidden in software update. Hit US government agencies, Fortune 500 companies.</td><td>Supply chain vulnerability exposed worldwide.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Risk = Vulnerability × Threat × Asset. Remove any one to reduce risk.</li>
<li>10 major threat types: malware, phishing, ransomware, DDoS, APTs, and more.</li>
<li>APTs are Advanced, Persistent, Resource-Intensive, and Coordinated.</li>
<li>Real attacks: Stuxnet, NotPetya, SolarWinds, Shamoon, Cloud Hopper, Olympic Games.</li>
</ul>
</div>`,
    gate:{q:'What does APT stand for?',
      opts:['Application Protocol Transfer','Advanced Persistent Threat','Automated Penetration Test','Access Permission Token'],
      correct:1, explain:'APT = Advanced Persistent Threat. Skilled attackers who stay hidden for a long time in your systems.'}
  },

  /* =============================================================
     SECTION 7 — SUPPLY CHAIN THREATS (P1 Slides 42-51)
     ============================================================= */
  {
    id:'section-7', num:'07', icon:'📦', title:'Supply Chain Threats',
    accent:'Supply Chain', desc:'When attackers come through your trusted partners.', time:'9 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">📦</span> What Are Supply Chain Attacks?</h3>
<p>A <strong>supply chain attack</strong> targets the companies and partners you trust — your software provider, hardware maker, or service partner.</p>
<p>If they get hacked, you get hacked too. The attacker comes in through a <strong>trusted door</strong>.</p>
<p>Supply chain attacks on Critical Information Infrastructure (CII) can disrupt hospitals, power grids, banks, and telecoms.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>You buy seedlings from a trusted seller every year. One year, a thief secretly poisons the seedlings before they reach you. You plant them, and your whole crop fails. The problem came from your <strong>trusted supplier</strong>, not from a direct thief.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔗</span> Characteristics of Supply Chain Attacks</h3>
<ul>
<li><strong>Indirect</strong> — They attack your partners, not you directly.</li>
<li><strong>Exploit trust</strong> — They abuse the trust between you and your suppliers.</li>
<li><strong>Long dwell time</strong> — Attackers hide inside systems for months.</li>
<li><strong>Use legitimate tools</strong> — They use real credentials and approved software.</li>
</ul>
<p>CIIs are especially at risk because they rely on complex networks of third-party systems. A problem at any point can <strong>cascade</strong> — like dominoes falling.</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🎯</span> 4 Types of Supply Chain Attacks</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Type</th><th>How It Works</th><th>Real Example</th></tr></thead>
<tbody>
<tr><td><strong>Software</strong></td><td>Attackers inject bad code into software updates</td><td>SolarWinds (2020) — malware hidden in a legitimate update</td></tr>
<tr><td><strong>Hardware</strong></td><td>Malicious chips or backdoors added during manufacturing</td><td>Tampering with servers during shipping</td></tr>
<tr><td><strong>Open-Source</strong></td><td>Vulnerabilities injected into widely-used code libraries</td><td>Log4j (2021) — flaw in a Java library used by millions</td></tr>
<tr><td><strong>3rd-Party Services</strong></td><td>Attacking cloud vendors or contractors to reach their clients</td><td>Compromised Managed Service Providers (MSPs)</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>The company that makes your team's boots puts a hidden tracker inside. Every team that buys those boots is now being watched. The problem came from a <strong>trusted supplier</strong>, not from the opponent.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">📊</span> 5 Stages of a Supply Chain Attack</h3>
<ol>
<li><strong>Reconnaissance</strong> — Attacker studies your suppliers and dependencies.</li>
<li><strong>Initial Compromise</strong> — Attacker breaks into the weak link (supplier).</li>
<li><strong>Insertion</strong> — Malware, backdoors, or tampered parts are embedded.</li>
<li><strong>Distribution</strong> — Compromised software or hardware spreads through normal channels.</li>
<li><strong>Exploitation</strong> — Attacker uses access to steal data or disrupt operations.</li>
</ol>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">📚</span> Case Studies</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Attack</th><th>What Happened</th><th>Impact</th></tr></thead>
<tbody>
<tr><td><strong>SolarWinds Orion</strong></td><td>Malware hidden in software updates</td><td>US government agencies and Fortune 500 companies infiltrated</td></tr>
<tr><td><strong>NotPetya</strong></td><td>Spread through Ukrainian tax software update</td><td>Global disruption. Billions in damage to Maersk, Merck, etc.</td></tr>
<tr><td><strong>Target Retailer</strong></td><td>Hackers entered through an HVAC (air conditioning) vendor</td><td>Millions of customer credit card records stolen</td></tr>
<tr><td><strong>Log4j (Log4Shell)</strong></td><td>Critical flaw in widely-used open-source library</td><td>Millions of systems at risk — cloud, telecom, energy</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">💔</span> Consequences & Mitigation</h3>
<p><strong>Consequences:</strong> Service outages, national security threats, financial losses, data theft, loss of public trust.</p>
<p><strong>How to protect against supply chain attacks:</strong></p>
<ul>
<li><strong>Vendor Risk Management</strong> — Assess vendors, strict SLAs, audit their security.</li>
<li><strong>Secure SDLC</strong> — Test code, audit updates before deploying, use code-signing.</li>
<li><strong>Hardware Assurance</strong> — Buy from trusted suppliers, verify components, use TPMs.</li>
<li><strong>Continuous Monitoring</strong> — Watch for signs of compromise (IoC) on networks.</li>
<li><strong>Use Frameworks</strong> — NIST, ISO 27001, NIST SP 800-161 for supply chain risk.</li>
<li><strong>Zero Trust</strong> — Limit lateral movement within networks.</li>
<li><strong>Incident Response Plan</strong> — Have a specific plan for supply chain attacks.</li>
</ul>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Supply chain attacks come through trusted partners and suppliers.</li>
<li>4 types: software, hardware, open-source, third-party services.</li>
<li>5 stages: recon → compromise → insertion → distribution → exploitation.</li>
<li>Famous cases: SolarWinds, NotPetya, Target, Log4j.</li>
<li>Mitigate with vendor assessment, secure SDLC, monitoring, zero trust.</li>
</ul>
</div>`,
    gate:{q:'In a supply chain attack, who gets compromised first?',
      opts:['Your own system directly','Your trusted supplier or partner','The government','The internet itself'],
      correct:1, explain:'Supply chain attacks target your trusted suppliers first. Through them, the attacker reaches you.'}
  },

  /* ================================================================
     SECTION 8 — VULNERABILITIES & EXPLOITS (P1 Slides 52-60)
     ================================================================ */
  {
    id:'section-8', num:'08', icon:'🐛', title:'Vulnerabilities & Exploits',
    accent:'Vulnerabilities', desc:'Finding weak points before attackers do.', time:'9 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🐛</span> What Are Vulnerabilities?</h3>
<p>A <strong>vulnerability</strong> is a weakness in technology, people, or processes that attackers can exploit.</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Category</th><th>Sub-Type</th><th>Examples</th></tr></thead>
<tbody>
<tr><td rowspan="3"><strong>Technology</strong></td><td>Hardware</td><td>Design flaws (Spectre, Meltdown), end-of-life devices, lack of physical security</td></tr>
<tr><td>Software</td><td>Buffer overflows, outdated software, insecure APIs</td></tr>
<tr><td>Network</td><td>Open ports, weak protocols (HTTP instead of HTTPS), Man-in-the-Middle</td></tr>
<tr><td rowspan="4"><strong>People</strong></td><td>Social Engineering</td><td>Phishing, baiting — exploiting human trust</td></tr>
<tr><td>Weak Passwords</td><td>Easy to guess, can be brute-forced</td></tr>
<tr><td>Lack of Training</td><td>Employees unaware of security best practices</td></tr>
<tr><td>Insider Threats</td><td>Authorised people who steal data or sabotage</td></tr>
<tr><td rowspan="3"><strong>Process</strong></td><td>No Incident Plan</td><td>Delayed or ineffective responses to attacks</td></tr>
<tr><td>Weak Policies</td><td>Confusion and inconsistent security practices</td></tr>
<tr><td>Poor Access Control</td><td>Unauthorised people accessing sensitive systems</td></tr>
</tbody>
</table>
</div>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>Technology</strong> = broken fence (hardware), old rusted lock (software). <strong>People</strong> = worker leaves gate open (human error), worker secretly sells yams (insider threat). <strong>Process</strong> = no rule about locking the gate at night (missing policy).</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔍</span> Common Causes of Vulnerabilities</h3>
<ul>
<li><strong>No regular updates</strong> — Old software has known holes.</li>
<li><strong>Poor configuration</strong> — Systems set up wrong allow easy entry.</li>
<li><strong>Complex systems</strong> — More connected parts = bigger attack surface.</li>
<li><strong>Third-party dependencies</strong> — Weaknesses from outside software.</li>
<li><strong>Ignoring best practices</strong> — Weak passwords, no encryption, no monitoring.</li>
</ul>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">💥</span> 8 Common Exploits & Their Impacts</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Exploit</th><th>How It Works</th><th>Impact</th></tr></thead>
<tbody>
<tr><td><strong>Phishing</strong></td><td>Fake emails trick you into giving passwords</td><td>Stolen accounts, financial fraud, identity theft</td></tr>
<tr><td><strong>SQL Injection</strong></td><td>Bad commands through website forms attack databases</td><td>Data exposed, corrupted, or deleted entirely</td></tr>
<tr><td><strong>Ransomware</strong></td><td>Locks files, demands payment</td><td>System down, money lost, data gone if no backup</td></tr>
<tr><td><strong>XSS</strong></td><td>Malicious scripts injected into websites</td><td>Cookies stolen, unauthorised access, malware spread</td></tr>
<tr><td><strong>DDoS</strong></td><td>Floods system with fake traffic</td><td>Service stops, financial and reputation damage</td></tr>
<tr><td><strong>Privilege Escalation</strong></td><td>Gains higher access than allowed</td><td>Full system control, further attacks launched</td></tr>
<tr><td><strong>Zero-Day</strong></td><td>Attacks unknown weakness before any fix exists</td><td>Widespread damage, no immediate defense</td></tr>
<tr><td><strong>Buffer Overflow</strong></td><td>Overloads memory to run malicious code</td><td>System crash or full takeover</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Phishing</strong> = fake official tricks goalkeeper into revealing team strategy. <strong>DDoS</strong> = thousands rush the pitch so the match cannot happen. <strong>Zero-Day</strong> = a brand new trick move nobody has ever seen — no team knows how to defend against it.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🔎</span> Vulnerability Assessment Tools & Techniques</h3>
<p><strong>Tools:</strong></p>
<ul>
<li><strong>Nessus</strong> — Scans for known weaknesses</li>
<li><strong>OpenVAS</strong> — Open-source vulnerability scanner</li>
<li><strong>QualysGuard</strong> — Cloud-based continuous assessment</li>
<li><strong>Metasploit</strong> — Tests if weaknesses can actually be exploited</li>
<li><strong>Nikto</strong> — Scans web servers for problems</li>
<li><strong>Burp Suite</strong> — Tests web application security</li>
<li><strong>Wireshark</strong> — Watches network traffic for anomalies</li>
</ul>
<p><strong>Techniques:</strong></p>
<ul>
<li><strong>Automated Scanning</strong> — Tools scan for known vulnerabilities</li>
<li><strong>Manual Testing</strong> — Experts review code for logic flaws</li>
<li><strong>Penetration Testing</strong> — Simulate real attacks to test defenses</li>
<li><strong>Configuration Audits</strong> — Check settings against best practices</li>
<li><strong>Patch Management</strong> — Apply security updates on time</li>
<li><strong>Threat Modelling</strong> — Map potential attack paths for critical assets</li>
</ul>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>Assessment is like walking around your farm before harvest — checking every part of the fence, every lock, every gate. Find the weak spots before the thieves do.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Vulnerabilities exist in technology, people, and processes.</li>
<li>Common causes: no updates, poor config, complexity, third-party risks.</li>
<li>8 major exploits: phishing, SQL injection, ransomware, XSS, DDoS, privilege escalation, zero-day, buffer overflow.</li>
<li>Use tools (Nessus, Metasploit, Wireshark) and techniques (pen-testing, audits) to find weaknesses first.</li>
</ul>
</div>`,
    gate:{q:'Which of these is a "people" vulnerability?',
      opts:['An open port on a server','A weak password','Outdated firewall software','A broken router'],
      correct:1, explain:'Weak passwords are a people vulnerability — the human chose a bad password. Open ports and old software are technology vulnerabilities.'}
  },

  /* ==============================================================
     SECTION 9 — DEFENSE IN DEPTH & SECURITY BY DESIGN
     (P1 Slides 61-64, P2 Slides 1-3)
     ============================================================== */
  {
    id:'section-9', num:'09', icon:'🏰', title:'Defense in Depth & Security by Design',
    accent:'Defense', desc:'Many layers of protection, built in from the start.', time:'8 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🏰</span> Defense in Depth</h3>
<p><strong>Defense in Depth</strong> uses many layers of protection. If one layer fails, the next one catches the attacker.</p>
<p><strong>Objectives:</strong></p>
<ul>
<li>Minimize the chance of a successful attack</li>
<li>Delay attackers and increase their effort</li>
<li>Reduce the damage if a breach happens</li>
</ul>
<p><strong>Principles:</strong> Layered approach, redundancy, resilience, diversity of tools.</p>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>Your farm has: (1) thorn fence around it, (2) locked gate, (3) watchdog inside, (4) padlock on the barn, (5) yams hidden under straw. If a thief jumps the fence, the dog barks. If the dog misses, the padlock stops them. Many layers!</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🧱</span> 3 Types of Security + 6 Layers</h3>
<p><strong>Physical Security:</strong> Keycards, locks, guards, fire protection.</p>
<p><strong>Technical Security:</strong> Antivirus, firewalls, IDS/IPS, VPNs, encryption, WAFs, DLP.</p>
<p><strong>Administrative Security:</strong> Policies, user training, access control (RBAC), incident response plans.</p>
<div class="demo-container" style="margin-top:16px">
<div class="demo-title">🎮 Interactive: 6 Layers of Security — Click Each Layer</div>
<div class="layers-stack" id="layersStack">
<div class="layer" style="background:#1B5E20;color:#fff" onclick="toggleLayer(this)" data-info="Firewalls, DMZ (buffer zone), VPNs. The outer fence of your farm.">🧱 Perimeter Layer</div>
<div class="layer" style="background:#2E7D32;color:#fff" onclick="toggleLayer(this)" data-info="Network segmentation, IDS. Divides your farm into sections with separate fences so a breach in one area does not spread.">🌐 Network Layer</div>
<div class="layer" style="background:#388E3C;color:#fff" onclick="toggleLayer(this)" data-info="Anti-malware, EDR (Endpoint Detection & Response). A guard assigned to each individual device.">💻 Endpoint Layer</div>
<div class="layer" style="background:#43A047;color:#fff" onclick="toggleLayer(this)" data-info="Web Application Firewalls (WAF), Secure SDLC. Strong doors on each building inside the farm.">📱 Application Layer</div>
<div class="layer" style="background:#4CAF50;color:#fff" onclick="toggleLayer(this)" data-info="Encryption, access control mechanisms. A locked safe inside the building — even if someone gets in, they cannot read the data.">💾 Data Layer</div>
<div class="layer" style="background:#66BB6A;color:#1B5E20" onclick="toggleLayer(this)" data-info="Security awareness training, MFA. Teaching the farmer to be alert and checking every person's identity.">👤 User Layer</div>
</div>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🏗️</span> Security by Design & by Default</h3>
<p><strong>Security by Design</strong> = Build security into systems from the very start — not as an afterthought.</p>
<p><strong>Security by Default</strong> = Systems come with safe settings already turned on.</p>
<p><strong>Principles of Security by Design:</strong></p>
<ul>
<li><strong>Minimize attack surface</strong> — Remove anything not needed</li>
<li><strong>Secure defaults</strong> — Safe settings out of the box</li>
<li><strong>Least privilege</strong> — Users get only the access they need</li>
<li><strong>Defense in depth</strong> — Multiple layers</li>
<li><strong>Fail securely</strong> — If it breaks, it stays locked, not open</li>
<li><strong>Separation of duties</strong> — Important tasks need more than one person</li>
<li><strong>Secure SDLC</strong> — Security testing at every development stage</li>
</ul>
<p><strong>Principles of Security by Default:</strong></p>
<ul>
<li>Enable secure configurations by default (HTTPS not HTTP)</li>
<li>Require opt-in for risky features (disable macros by default)</li>
<li>Comprehensive logging and monitoring enabled</li>
<li>Automated security updates</li>
<li>Force users to change default admin passwords</li>
</ul>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Security by Design</strong>: When building a new stadium, you plan the security cameras, fences, and controlled gates from the blueprint — not after the stadium is built. <strong>Security by Default</strong>: Every gate is locked by default. You must show ID to open it. Nobody leaves gates open.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Defense in Depth = many layers. Physical + Technical + Administrative.</li>
<li>6 layers: Perimeter → Network → Endpoint → Application → Data → User.</li>
<li>Security by Design = build security in from the start.</li>
<li>Security by Default = systems come secure out of the box.</li>
</ul>
</div>`,
    gate:{q:'What does "fail securely" mean?',
      opts:['If the system breaks it opens all doors','If the system breaks it stays locked and protected','If the system breaks it deletes all data','It means the system never fails'],
      correct:1, explain:'Fail securely means if something breaks, it stays locked — not open. Like a bank vault that locks tighter during a power outage.'}
  },

  /* ==============================================================
     SECTION 10 — ENCRYPTION & CRYPTOGRAPHY (P2 Slides 4-11)
     ============================================================== */
  {
    id:'section-10', num:'10', icon:'🔏', title:'Encryption & Cryptography',
    accent:'Encryption', desc:'Turning readable data into secret code — and back.', time:'9 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🔏</span> What is Cryptography?</h3>
<p><strong>Cryptography</strong> is the science of securing information using codes and ciphers. It keeps messages readable only by authorised people.</p>
<p>It maintains <strong>confidentiality</strong> (secret), <strong>integrity</strong> (unchanged), and <strong>authenticity</strong> (genuine).</p>
<p>Methods include: encryption, decryption, hashing, and digital signatures.</p>
<p><strong>History:</strong> 500 BC (Greek scytale) → 50 BC (Caesar cipher) → WWI (dictionary codes) → WWII (Enigma machine) → 1949 (Shannon's theory) → 1976 (Diffie-Hellman public key).</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">⚙️</span> The Cryptographic Process</h3>
<p><strong>Encryption</strong>: Plaintext → Algorithm + Key → Ciphertext (unreadable)</p>
<p><strong>Decryption</strong>: Ciphertext → Algorithm + Key → Plaintext (readable again)</p>
<p>Security depends on: key management, algorithm strength, and environment security.</p>
<div class="demo-container" style="margin-top:16px;box-shadow:none;padding:20px;background:rgba(46,125,50,.04)">
<div class="demo-title">🔄 Try Encryption — Caesar Cipher</div>
<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
<input type="text" id="encryptInput" placeholder="Type a word..." maxlength="20" style="max-width:200px">
<button class="btn-primary btn-sm" onclick="demoEncrypt()">Encrypt →</button>
<button class="btn-ghost btn-sm" onclick="demoDecrypt()">← Decrypt</button>
</div>
<div class="encrypt-demo">
<div class="encrypt-box plain" id="encPlain">Hello</div>
<div class="encrypt-arrow">→</div>
<div class="encrypt-box key" id="encKey">Key: +3</div>
<div class="encrypt-arrow">→</div>
<div class="encrypt-box cipher" id="encCipher">Khoor</div>
</div>
<p style="font-size:.82rem;color:var(--text-light);margin-top:8px">This uses Caesar's simple shift. Real encryption (AES, RSA) is far more complex.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🔑</span> Symmetric vs Asymmetric Encryption</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Feature</th><th>Symmetric</th><th>Asymmetric</th></tr></thead>
<tbody>
<tr><td><strong>Keys</strong></td><td>Same key to encrypt and decrypt</td><td>Two keys: public (encrypt) and private (decrypt)</td></tr>
<tr><td><strong>Speed</strong></td><td>Fast — simple algorithms</td><td>Slow — complex maths</td></tr>
<tr><td><strong>Good For</strong></td><td>Encrypting large amounts of data</td><td>Encrypting sensitive data, secure key exchange</td></tr>
<tr><td><strong>Problem</strong></td><td>How do you share the key safely?</td><td>Too slow for large data</td></tr>
<tr><td><strong>Examples</strong></td><td>AES</td><td>RSA, Diffie-Hellman</td></tr>
</tbody>
</table>
</div>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>Symmetric</strong>: You and your trusted neighbour both have a copy of the same padlock key. If someone steals the key during handover, both your barns are at risk.</p>
<p><strong>Asymmetric</strong>: You give everyone an <em>open padlock</em> (public key). Anyone can lock a box with it. But only you have the key to open it (private key). No one needs to receive your secret key — problem solved!</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🌐</span> HTTPS — The Best of Both Worlds</h3>
<p>HTTPS combines both types for maximum security and speed:</p>
<ol>
<li>Server creates a public key and private key (asymmetric).</li>
<li>Server sends the public key to the client.</li>
<li>Client creates a random symmetric key (key X).</li>
<li>Client encrypts key X with the public key and sends it to server.</li>
<li>Server decrypts using its private key — now both have key X.</li>
<li>Both sides use key X (symmetric) for all further communication — fast!</li>
</ol>
<p><strong>Result:</strong> Asymmetric encryption securely exchanges the key. Symmetric encryption handles the fast data transfer. Best of both worlds.</p>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p>Before the match, the captain sends you an open padlock (public key). You lock the team's secret playbook inside a box using that padlock and send it. Only the captain can open it. Inside the playbook, you also include a simpler code word (symmetric key) that you will both use to send fast signals during the game.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Cryptography secures communication using codes.</li>
<li>Encryption: plaintext → ciphertext. Decryption: ciphertext → plaintext.</li>
<li>Symmetric = same key, fast, key-sharing problem. Asymmetric = two keys, slower, safer.</li>
<li>HTTPS combines both: asymmetric for key exchange, symmetric for speed.</li>
</ul>
</div>`,
    gate:{q:'In asymmetric encryption, which key encrypts data?',
      opts:['The private key','The symmetric key','The public key','The admin key'],
      correct:2, explain:'The public key encrypts. The private key decrypts. The sender uses the receiver\'s public key to lock the message.'}
  },

  /* ==============================================================
     SECTION 11 — IDS, IPS & FIREWALLS (P2 Slides 12-29)
     ============================================================== */
  {
    id:'section-11', num:'11', icon:'🔔', title:'IDS, IPS & Firewalls',
    accent:'Firewalls', desc:'Detection, prevention, and traffic control tools.', time:'10 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">🔔</span> IDS — Intrusion Detection System</h3>
<p>An <strong>IDS</strong> watches network traffic for unusual activity and <strong>sends alerts</strong>. It does NOT block attacks — it only warns you.</p>
<p><strong>5 Types of IDS:</strong></p>
<ul>
<li><strong>NIDS</strong> (Network) — Watches traffic on the entire network subnet.</li>
<li><strong>HIDS</strong> (Host) — Runs on a single device. Watches only that device's traffic.</li>
<li><strong>PIDS</strong> (Protocol) — Sits at the front of a server. Monitors the HTTPS protocol.</li>
<li><strong>APIDS</strong> (Application Protocol) — Watches application-specific protocols like SQL.</li>
<li><strong>Hybrid</strong> — Combines host and network data for a complete view. (Example: Prelude)</li>
</ul>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p><strong>IDS</strong> = a watchdog that <strong>barks</strong> when a thief comes — but does <strong>not bite</strong>. You must come and chase the thief yourself.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🛑</span> IPS — Intrusion Prevention System</h3>
<p>An <strong>IPS</strong> watches traffic AND <strong>blocks attacks automatically</strong>. It is placed in-line with network traffic.</p>
<p><strong>4 Types of IPS:</strong></p>
<ul>
<li><strong>NIPS</strong> (Network) — Blocks malicious traffic in real-time on the network.</li>
<li><strong>HIPS</strong> (Host) — Stops malicious scripts from running on a workstation.</li>
<li><strong>Signature-based</strong> — Blocks traffic matching known attack patterns.</li>
<li><strong>Anomaly-based</strong> — Blocks anything that deviates from normal behaviour.</li>
</ul>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>IPS</strong> = a guard dog that <strong>barks AND bites</strong>. It stops the thief on its own.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">⚖️</span> IDS vs IPS — Side by Side</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Feature</th><th>IDS</th><th>IPS</th></tr></thead>
<tbody>
<tr><td>Action</td><td>Detects and alerts</td><td>Detects and blocks</td></tr>
<tr><td>Position</td><td>Beside traffic (listens)</td><td>In-line with traffic (intercepts)</td></tr>
<tr><td>Response</td><td>You must act on alerts</td><td>Acts automatically</td></tr>
<tr><td>Example</td><td>Detects and logs a port scan</td><td>Detects and blocks the port scan</td></tr>
</tbody>
</table>
</div>
<p><strong>Implementing IDS/IPS — 6 steps:</strong></p>
<ol>
<li>Identify which segments and hosts need protection.</li>
<li>Choose the right type based on environment.</li>
<li>Install and configure the IDS/IPS.</li>
<li>Define and update attack signatures.</li>
<li>Regularly monitor alerts and logs.</li>
<li>Tune settings to reduce false positives.</li>
</ol>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🧱</span> Firewalls</h3>
<p>A <strong>firewall</strong> controls network traffic based on security rules. It decides: <strong>Accept</strong> (allow), <strong>Reject</strong> (block with error reply), or <strong>Drop</strong> (block silently).</p>
<p><strong>4 Types:</strong></p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Type</th><th>How It Works</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Packet-Filtering</strong></td><td>Checks IP address, port, protocol. Fast but simple.</td><td>Blocks traffic to port 80 from unknown sources</td></tr>
<tr><td><strong>Stateful</strong></td><td>Tracks active connections. Context-aware.</td><td>Allows return traffic for your outgoing request</td></tr>
<tr><td><strong>Proxy</strong></td><td>Acts as middleman. Fetches content for you.</td><td>You request a webpage, proxy gets it and checks it first</td></tr>
<tr><td><strong>NGFW</strong></td><td>All of the above + app awareness + intrusion prevention.</td><td>Identifies and blocks specific apps regardless of port</td></tr>
</tbody>
</table>
</div>
<p><strong>How firewalls work:</strong> Packet filtering, deep packet inspection, stateful inspection, and proxy service.</p>
<p><strong>Configurations:</strong> Network firewalls (boundary), Host-based (on individual devices), Cloud firewalls (AWS, etc.), Virtual firewalls (in VMs).</p>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Packet-filtering</strong> = security only checks your ticket. <strong>Stateful</strong> = they remember you came in and let you back after halftime. <strong>Proxy</strong> = a representative buys the ticket for you. <strong>NGFW</strong> = checks ticket, searches bag, scans face, and knows which section you belong in.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔲</span> Network Segmentation & Zones</h3>
<p>Networks are divided into <strong>security zones</strong>:</p>
<ul>
<li><strong>Untrust Zone</strong> — The internet. Everyone is a stranger.</li>
<li><strong>DMZ</strong> (Demilitarised Zone) — Middle area hosting public services (web servers, email). Acts as a buffer.</li>
<li><strong>Trust Zone</strong> — Internal network with sensitive data.</li>
<li><strong>Local Zone</strong> — The firewall itself when it sends or receives packets.</li>
</ul>
<p>Data flow is tightly controlled between zones. External → DMZ (strict filtering). DMZ → Internal (very limited). Internal is the most protected.</p>
<p><strong>Firewall Best Practices:</strong> Regular updates, rule review, monitoring and logging, least privilege, and network segmentation.</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🔐</span> Zero Trust Architecture (Detailed)</h3>
<p><strong>Traditional (Network-centred):</strong> Trust everything inside. Firewalls only at the border. Problem: internal attacks cannot be defended.</p>
<p><strong>Zero Trust (Identity-centred):</strong> Trust nothing. Every connection — internal or external — is untrusted until verified. Fine-grained access control.</p>
<p>Core principle: <strong>NEVER TRUST, ALWAYS VERIFY.</strong></p>
<div class="info-box">
<span class="icon">💡</span>
<p>Traditional security is a castle with thick walls but no guards inside. Zero Trust puts guards at every door, every room, every hallway.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>IDS watches and alerts (watchdog barks). IPS watches and blocks (guard dog bites).</li>
<li>5 IDS types: NIDS, HIDS, PIDS, APIDS, Hybrid. 4 IPS types: NIPS, HIPS, Signature, Anomaly.</li>
<li>Firewalls filter traffic: Accept, Reject, Drop. 4 types: Packet-filtering, Stateful, Proxy, NGFW.</li>
<li>Network zones: Untrust → DMZ → Trust. Zero Trust = never trust, always verify.</li>
</ul>
</div>`,
    gate:{q:'What is the key difference between IDS and IPS?',
      opts:['IDS blocks attacks, IPS only alerts','IDS only detects and alerts, IPS detects and blocks automatically','They do the same thing','IDS is hardware, IPS is software'],
      correct:1, explain:'IDS = watchdog that barks (alerts only). IPS = guard dog that barks AND bites (blocks automatically).'}
  },

  /* ==============================================================
     SECTION 12 — GOVERNANCE, POLICIES & FRAMEWORKS (P2 Slides 30-41)
     ============================================================== */
  {
    id:'section-12', num:'12', icon:'📋', title:'Governance, Policies & Frameworks',
    accent:'Governance', desc:'Rules, standards, laws, and how to build security policies.', time:'10 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">📋</span> The 4 Levels of Security Documentation</h3>
<p>Security rules are organised from highest to lowest level:</p>
<ol>
<li><strong>Policies</strong> — High-level vision. "We will protect all customer data." Sets goals, scope, responsibilities.</li>
<li><strong>Standards</strong> — Specific mandatory rules. "All passwords must be 12+ characters." Examples: GDPR, ISO 27001, PCI-DSS.</li>
<li><strong>Guidelines</strong> — Recommendations (not mandatory). "We suggest using a password manager."</li>
<li><strong>Procedures</strong> — Step-by-step instructions. "To reset a password: step 1, step 2, step 3..."</li>
</ol>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Policy</strong> = "We play fair football." <strong>Standard</strong> = "Players must wear shin guards." <strong>Guideline</strong> = "Warm up for 15 minutes." <strong>Procedure</strong> = "Step 1: arrive 1 hour early. Step 2: change into kit. Step 3: warm up."</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">📄</span> 4 Types of Security Policies</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Policy Type</th><th>What It Covers</th></tr></thead>
<tbody>
<tr><td><strong>Programme-level</strong></td><td>Top management sets the purpose, scope, responsibilities, and compliance sanctions for the entire security programme.</td></tr>
<tr><td><strong>Programme-framework</strong></td><td>Broad implementation areas: acceptable use rules, BCP framework, data centre security, app development security.</td></tr>
<tr><td><strong>Issue-specific</strong></td><td>Specific current concerns: email acceptable use, laptop security, wireless security. Changes often with technology.</td></tr>
<tr><td><strong>System-specific</strong></td><td>Security objectives for a specific system: who can read/modify data, access conditions, remote access rules.</td></tr>
</tbody>
</table>
</div>
<p><strong>7 Common Issue-Specific Policies:</strong> Acceptable use, Account management, Password, Data ownership, Data classification, Data retention, Communication.</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🔄</span> Policy Development Lifecycle</h3>
<p>Building a security policy follows a cycle:</p>
<ol>
<li><strong>Management Buy-in</strong> — Leaders see the need (compliance, growth, breach response).</li>
<li><strong>Risk Assessment</strong> — Identify assets, threats, vulnerabilities. Cost-benefit analysis.</li>
<li><strong>Policy Construction</strong> — Draft the policy using templates or consultants.</li>
<li><strong>Implementation</strong> — Define controls, responsibilities. Test and deploy. Train staff.</li>
<li><strong>Monitoring</strong> — Audit behaviour, intrusion detection, compliance checks.</li>
<li><strong>Maintenance</strong> — Review incidents, technology changes, legal requirements. Repeat the cycle.</li>
</ol>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>The village chief decides farms need security rules (buy-in). Elders survey each farm for risks (assessment). They write the rules (construction). Farmers are told the rules and given fences (implementation). The chief checks farms regularly (monitoring). After harvest, rules are reviewed and updated (maintenance).</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">⚖️</span> Important Laws & Standards</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Law/Standard</th><th>Scope</th><th>Key Points</th></tr></thead>
<tbody>
<tr><td><strong>GDPR</strong></td><td>EU personal data</td><td>7 data processing principles. Data subject rights (access, erasure, portability). 72-hour breach notification. Heavy fines.</td></tr>
<tr><td><strong>HIPAA</strong></td><td>US health information</td><td>Privacy Rule (protects PHI), Security Rule (CIA of e-PHI), Breach Notification Rule, Enforcement Rule.</td></tr>
<tr><td><strong>PCI-DSS</strong></td><td>Payment card data</td><td>Secure networks, protect cardholder data, vulnerability management, access control, monitoring, security policy.</td></tr>
<tr><td><strong>ISO 27001</strong></td><td>Global InfoSec standard</td><td>Information security management system (ISMS) framework.</td></tr>
<tr><td><strong>NIST Framework</strong></td><td>US cybersecurity</td><td>5 functions: Identify, Protect, Detect, Respond, Recover.</td></tr>
<tr><td><strong>Nigeria Cybercrimes Act</strong></td><td>Nigerian cybercrime</td><td>Law against cybercrime, issued 2015.</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🛡️</span> GDPR Deep Dive</h3>
<p>Key GDPR definitions: <strong>Personal Data</strong> (any info about a person), <strong>Data Subject</strong> (the person), <strong>Data Controller</strong> (decides how to process data), <strong>Data Processor</strong> (processes data for the controller).</p>
<p><strong>7 Principles:</strong> Lawfulness, Fairness, Transparency, Purpose Limitation, Data Minimization, Accuracy, Storage Limitation, Integrity & Confidentiality, Accountability.</p>
<p><strong>Data Subject Rights:</strong> Access, Rectification, Erasure (Right to be Forgotten), Restriction, Portability, Object, Protection from Automated Decisions.</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">💡</span> Intellectual Property & National Strategy</h3>
<p><strong>Intellectual Property (IP)</strong> — Creations of the mind: inventions, designs, trade secrets. Cybersecurity protects IP from theft and exploitation.</p>
<p><strong>National Cybersecurity Strategy (NCS)</strong> — A government's plan to manage cyber risks, enhance digital security, and build resilience. Nigeria's NCS was first issued in 2014 and reviewed in 2021.</p>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>4 levels: Policies → Standards → Guidelines → Procedures.</li>
<li>4 policy types: Programme, Programme-framework, Issue-specific, System-specific.</li>
<li>Policy lifecycle: Buy-in → Assess → Build → Implement → Monitor → Maintain.</li>
<li>Key laws: GDPR, HIPAA, PCI-DSS, ISO 27001, NIST, Nigeria Cybercrimes Act.</li>
</ul>
</div>`,
    gate:{q:'What is the correct order from highest to lowest level of security documentation?',
      opts:['Procedures → Guidelines → Standards → Policies','Policies → Standards → Guidelines → Procedures','Standards → Policies → Procedures → Guidelines','Guidelines → Procedures → Policies → Standards'],
      correct:1, explain:'From highest to lowest: Policies (vision) → Standards (specific rules) → Guidelines (recommendations) → Procedures (step-by-step instructions).'}
  },

  /* ==============================================================
     SECTION 13 — RISK MANAGEMENT & NIST FRAMEWORK (P2 Slides 42-58)
     ============================================================== */
  {
    id:'section-13', num:'13', icon:'📊', title:'Risk Management & NIST Framework',
    accent:'NIST', desc:'How to manage risk and the world\'s most popular cybersecurity framework.', time:'11 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">📊</span> Risk Assessment Methodologies</h3>
<p><strong>Cyber Risk Management</strong> is the process of identifying, prioritising, managing, and monitoring risks.</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Methodology</th><th>Focus</th><th>Approach</th><th>Strength</th></tr></thead>
<tbody>
<tr><td><strong>NIST RMF</strong></td><td>Federal systems</td><td>Qualitative</td><td>Regulatory alignment</td></tr>
<tr><td><strong>OCTAVE</strong></td><td>Organisational risk</td><td>Qualitative</td><td>Holistic view of risks</td></tr>
<tr><td><strong>FAIR</strong></td><td>Quantitative risk</td><td>Quantitative</td><td>Financial impact clarity</td></tr>
<tr><td><strong>ISO 27005</strong></td><td>ISO-compliant</td><td>Hybrid</td><td>Global standards alignment</td></tr>
<tr><td><strong>COBIT</strong></td><td>IT governance</td><td>Qualitative</td><td>Strategic alignment</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🔄</span> The Risk Management Process</h3>
<ol>
<li><strong>Asset Identification</strong> — List everything valuable.</li>
<li><strong>Threat Identification</strong> — List what could harm each asset. Classify by likelihood and impact.</li>
<li><strong>Vulnerability Assessment</strong> — Map vulnerabilities to assets. Example: email server + outdated antivirus + virus threat.</li>
<li><strong>Risk Analysis</strong> — Calculate likelihood × impact for each risk.</li>
<li><strong>Risk Response</strong> — Choose what to do:
<ul>
<li><strong>Avoidance</strong> — Stop the risky activity entirely.</li>
<li><strong>Mitigation</strong> — Reduce the risk with controls.</li>
<li><strong>Transfer</strong> — Pass the risk to someone else (insurance).</li>
<li><strong>Acceptance</strong> — Accept the risk if it is small enough.</li>
<li><strong>Sharing</strong> — Divide the risk with a partner.</li>
</ul></li>
</ol>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>(1) List your yams, barn, tools. (2) Thieves? Floods? Pests? (3) Broken fence means thieves can enter. (4) Thieves are likely and impact is high = big risk. (5) Fix the fence (mitigate), stop growing in that area (avoid), buy crop insurance (transfer), or accept the small risk of pests.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🏛️</span> NIST Cybersecurity Framework — Structure</h3>
<p>The NIST Framework has <strong>3 parts</strong>:</p>
<ul>
<li><strong>Framework Core</strong> — 5 functions with categories and subcategories. Common across all sectors.</li>
<li><strong>Implementation Tiers</strong> — 4 levels showing how mature your security is.</li>
<li><strong>Framework Profiles</strong> — Current state vs target state of your security.</li>
</ul>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">⭐</span> NIST Core — The 5 Functions</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Function</th><th>Purpose</th><th>Categories</th><th>Farm Analogy</th></tr></thead>
<tbody>
<tr><td><strong>IDENTIFY</strong></td><td>Know what you have and what can go wrong</td><td>Asset Management, Business Environment, Governance, Risk Assessment, Risk Strategy</td><td>Walk your farm. List every barn, tool, and yam variety.</td></tr>
<tr><td><strong>PROTECT</strong></td><td>Put defenses in place</td><td>Access Control, Training, Data Security, Maintenance, Protective Tech</td><td>Build fences, lock gates, train workers.</td></tr>
<tr><td><strong>DETECT</strong></td><td>Watch for problems</td><td>Anomalies & Events, Monitoring, Detection Process</td><td>Keep your watchdog alert. Check fences daily.</td></tr>
<tr><td><strong>RESPOND</strong></td><td>Act when something happens</td><td>Planning, Analysis, Mitigation, Improvements, Communications</td><td>If a thief enters, chase them, assess the damage.</td></tr>
<tr><td><strong>RECOVER</strong></td><td>Get back to normal</td><td>Planning, Improvements, Communications</td><td>Replant stolen yams, fix the fence, tell neighbours.</td></tr>
</tbody>
</table>
</div>
<p><strong>Core structure:</strong> Functions → Categories → Sub-Categories → Informative References (COBIT, ISO 27000, NIST, etc.)</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">📈</span> NIST Tiers — Maturity Levels</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Tier</th><th>Name</th><th>Risk Management</th><th>Organisation</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>Partial</td><td>No formal process. Ad hoc, reactive. Not guided by risk objectives.</td><td>Limited awareness. Case-by-case. No info sharing. Unaware of supply chain risks.</td></tr>
<tr><td><strong>2</strong></td><td>Risk Informed</td><td>Approved by management but not org-wide policy. Informed by risk objectives.</td><td>Some awareness but no org-wide approach. Informal info sharing. Some risk assessment.</td></tr>
<tr><td><strong>3</strong></td><td>Repeatable</td><td>Formally approved as policy. Regularly updated based on risk changes.</td><td>Org-wide approach. Defined processes. Skilled personnel. Regular executive communication.</td></tr>
<tr><td><strong>4</strong></td><td>Adaptive</td><td>Continuous improvement. Uses lessons learned and predictive indicators. Adapts to changing threats.</td><td>Risk-informed culture. Budget based on risk. Real-time supply chain awareness. Proactive communication.</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>Tier 1</strong>: No training plan. React when you lose. <strong>Tier 2</strong>: Coach knows risks but no team-wide plan. <strong>Tier 3</strong>: Formal training schedule, match analysis, everyone knows their role. <strong>Tier 4</strong>: Team adapts strategy in real-time, studies opponent data constantly, improves after every match.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🎯</span> NIST Profiles</h3>
<p><strong>Profiles</strong> align the framework with your organisation's needs:</p>
<ul>
<li><strong>Current Profile</strong> — Where you are now. What security outcomes are you achieving?</li>
<li><strong>Target Profile</strong> — Where you want to be. What outcomes do you need?</li>
<li><strong>Gap Analysis</strong> — Compare current vs target. The gaps become your action plan.</li>
</ul>
<p>Prioritise closing gaps based on business needs and risk.</p>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>5 risk methodologies: NIST RMF, OCTAVE, FAIR, ISO 27005, COBIT.</li>
<li>Risk process: Identify assets → Identify threats → Assess vulnerabilities → Analyse risk → Respond.</li>
<li>Risk responses: Avoid, Mitigate, Transfer, Accept, Share.</li>
<li>NIST has 3 parts: Core (5 functions), Tiers (4 maturity levels), Profiles (current vs target).</li>
<li>5 Core functions: Identify → Protect → Detect → Respond → Recover.</li>
</ul>
</div>`,
    gate:{q:'The 5 NIST Core functions are:',
      opts:['Plan, Build, Test, Deploy, Monitor','Identify, Protect, Detect, Respond, Recover','Encrypt, Authenticate, Authorise, Audit, Archive','Scan, Block, Delete, Restore, Report'],
      correct:1, explain:'NIST Core: Identify (know your assets), Protect (defend), Detect (watch), Respond (act), Recover (restore).'}
  },

  /* ==============================================================
     SECTION 14 — INCIDENT RESPONSE & EMERGING TECH (P2 Slides 59-64)
     ============================================================== */
  {
    id:'section-14', num:'14', icon:'🚨', title:'Incident Response & Emerging Tech',
    accent:'Response', desc:'What to do when attacks happen, and what the future holds.', time:'9 min',
    content:`
<div class="card anim-in">
<h3><span class="card-icon green">📝</span> Event vs Incident</h3>
<p>These two words are different:</p>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Feature</th><th>Cybersecurity Event</th><th>Cybersecurity Incident</th></tr></thead>
<tbody>
<tr><td><strong>Definition</strong></td><td>Something noticeable in a system — may or may not be a problem</td><td>A confirmed event that harms CIA of systems or data</td></tr>
<tr><td><strong>Impact</strong></td><td>Usually no harm — routine</td><td>Causes real harm or disruption</td></tr>
<tr><td><strong>Example</strong></td><td>Failed login attempt, firewall blocking traffic</td><td>Malware infection, data breach, successful phishing</td></tr>
<tr><td><strong>Severity</strong></td><td>Low — routine monitoring</td><td>High — needs immediate response</td></tr>
<tr><td><strong>Response</strong></td><td>Logged for review</td><td>Immediate structured response</td></tr>
</tbody>
</table>
</div>
<div class="info-box">
<span class="icon">💡</span>
<p>All incidents are events, but not all events are incidents. A failed login (event) might just be someone who forgot their password. A successful hack (incident) needs immediate action.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon amber">🎯</span> Incident Response Goals & Benefits</h3>
<p><strong>Goals:</strong></p>
<ul>
<li>Detect compromise as quickly as possible</li>
<li>Respond to incident rapidly</li>
<li>Find the root cause (Root Cause Analysis — RCA)</li>
</ul>
<p><strong>Benefits:</strong> Secure data, contain the damage, reduce recovery time (MTTR), identify cause, prevent future exploits, assess impact, update policies with lessons learned.</p>
<p><strong>Resources needed:</strong> People (skills, roles), Process (policies, plans), Technology (software, hardware).</p>
</div>

<div class="card anim-in">
<h3><span class="card-icon brown">🔄</span> The 4-Step Incident Response Process</h3>
<ol>
<li><strong>Preparation</strong>
<ul>
<li>Documentation, Business Continuity Plan (BCP), Disaster Recovery Plan (DRP)</li>
<li>Set up a Security Operations Centre (SOC)</li>
<li>Build a CSIRT (Cyber Security Incident Response Team)</li>
</ul></li>
<li><strong>Detection & Analysis</strong>
<ul>
<li>Identify the incident</li>
<li>Assess impact and scope</li>
<li>Evaluate and analyse</li>
</ul></li>
<li><strong>Containment, Eradication & Recovery</strong>
<ul>
<li>Contain — stop it from spreading</li>
<li>Eradicate — remove the threat</li>
<li>Recover — restore systems to normal</li>
</ul></li>
<li><strong>Post-Incident Activity</strong>
<ul>
<li>After Action Report (AAR) & Lessons Learned Report</li>
<li>Root Cause Analysis (RCA)</li>
<li>Validate that the fix works</li>
</ul></li>
</ol>
<div class="analogy farm">
<div class="analogy-tag">🌿 Yam Farm Analogy</div>
<p>(1) <strong>Preparation</strong>: Reinforce your barn before rainy season. Sharpen tools. Have a plan. (2) <strong>Detection</strong>: One morning — footprints in mud, broken fence. (3) <strong>Containment & Recovery</strong>: Block the hole, count your yams, replant what was taken. (4) <strong>Post-Incident</strong>: Tell other farmers what happened. Build a stronger fence. Write it down so you remember.</p>
</div>
</div>

<div class="card anim-in">
<h3><span class="card-icon green">🚀</span> Emerging Technologies in Cybersecurity</h3>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Technology</th><th>What It Does</th><th>Cybersecurity Impact</th></tr></thead>
<tbody>
<tr><td><strong>AI</strong></td><td>Learns patterns, predicts threats, automates detection</td><td>Faster threat detection. AI-based IDS. But AI can also be used by attackers.</td></tr>
<tr><td><strong>Blockchain</strong></td><td>Shared, unchangeable digital record</td><td>Secures transactions and supply chains. Nobody can secretly alter records.</td></tr>
<tr><td><strong>IoT</strong></td><td>Millions of connected devices — sensors, cameras, appliances</td><td>Each device is a potential entry point. Need frameworks to secure IoT devices.</td></tr>
<tr><td><strong>Quantum Computing</strong></td><td>Super-powerful future computers</td><td>Could break current encryption. Post-quantum cryptography strategies are being developed now.</td></tr>
</tbody>
</table>
</div>
<div class="analogy football">
<div class="analogy-tag">⚽ Football Analogy</div>
<p><strong>AI</strong> = a coach who watches all past matches and predicts the opponent's next move. <strong>Blockchain</strong> = a scoreboard every fan can see, that nobody can secretly change. <strong>IoT</strong> = sensors on every player tracking speed and health — but each sensor can be hacked. <strong>Quantum</strong> = a future boot so powerful it can kick through any wall — so we must build stronger walls now.</p>
</div>
</div>

<div class="summary-box anim-in">
<h4>✅ Section Summary</h4>
<ul>
<li>Events are observations. Incidents are confirmed harmful events. All incidents are events, not all events are incidents.</li>
<li>IR Process: Prepare → Detect & Analyse → Contain, Eradicate, Recover → Learn.</li>
<li>Needs: People (CSIRT), Process (plans), Technology (tools).</li>
<li>Emerging tech: AI, Blockchain, IoT, Quantum Computing — both opportunities and risks.</li>
</ul>
</div>`,
    gate:{q:'In incident response, what comes AFTER containment?',
      opts:['Preparation','Detection','Eradication and Recovery','Writing the policy'],
      correct:2, explain:'After containing the damage, you eradicate (remove) the threat and recover (restore) systems. Then comes post-incident learning.'}
  }

]; // ← THIS CLOSES THE SECTIONS ARRAY

/* ========================
   SPACED RECALL PROMPTS
   ======================== */
const RECALLS = [
  {after:'section-3',q:'Quick recall: What does CIA stand for in cybersecurity?',opts:['Central Intelligence Agency','Confidentiality, Integrity, Availability','Computer, Internet, Application'],correct:1,explain:'CIA = Confidentiality, Integrity, Availability — the three core security goals.'},
  {after:'section-5',q:'Quick recall: What is authentication?',opts:['Stating your name','Proving you are who you claim to be','Deciding what you can access'],correct:1,explain:'Authentication = proving identity. Identification = stating your name. Authorisation = deciding your access level.'},
  {after:'section-7',q:'Quick recall: Risk = Vulnerability × ___ × Asset',opts:['Firewall','Encryption','Threat'],correct:2,explain:'Risk = Vulnerability × Threat × Asset. All three must exist for risk to exist.'},
  {after:'section-9',q:'Quick recall: What does IDS do?',opts:['Blocks attacks automatically','Detects and alerts only — does not block','Encrypts data'],correct:1,explain:'IDS = Intrusion Detection System. It watches and alerts (barks) but does not block (bite). That is what IPS does.'},
  {after:'section-11',q:'Quick recall: What does "fail securely" mean?',opts:['The system opens all doors when it fails','The system stays locked when it fails','The system deletes all data when it fails'],correct:1,explain:'Fail securely = if it breaks, it stays locked. Not open. A bank vault locks tighter during power outage.'},
  {after:'section-13',q:'Quick recall: The 5 NIST functions start with I, P, D, R, R — what are they?',opts:['Install, Patch, Debug, Restart, Reboot','Identify, Protect, Detect, Respond, Recover','Investigate, Prevent, Deny, Report, Remediate'],correct:1,explain:'NIST Core: Identify, Protect, Detect, Respond, Recover.'}
];

/* ========================
   QUIZ QUESTIONS
   ======================== */
const QUIZ = [
  {q:'What is cyberspace?',opts:['A single computer','The connected digital world of devices, networks, data, and people','A type of virus','A firewall brand'],correct:1,explain:'Cyberspace = the entire connected digital world — networks, devices, data, and people.'},
  {q:'Cybersecurity protects:',opts:['Only physical documents','Only passwords','Digital systems and data from attacks','Only government websites'],correct:2,explain:'Cybersecurity protects all digital systems and sensitive data from harm.'},
  {q:'Which is NOT part of the CIA Triad?',opts:['Confidentiality','Integrity','Accountability','Availability'],correct:2,explain:'CIA Triad = Confidentiality, Integrity, Availability. Accountability is part of IAM, not the CIA Triad.'},
  {q:'A farmer\'s broken fence is like a _____ in cybersecurity.',opts:['Threat','Asset','Vulnerability','Payload'],correct:2,explain:'A broken fence is a weakness — a vulnerability. It is the gap attackers can exploit.'},
  {q:'MFA (Multi-Factor Authentication) means:',opts:['Using one very strong password','Using two or more types of proof to verify identity','Changing your password daily','Logging in from multiple devices'],correct:1,explain:'MFA uses 2+ factors (e.g., password + fingerprint). Much stronger than any single method.'},
  {q:'In the risk formula (Risk = V × T × A), what does "T" stand for?',opts:['Technology','Threat','Token','Transfer'],correct:1,explain:'T = Threat. Risk = Vulnerability × Threat × Asset.'},
  {q:'An APT is:',opts:['A type of firewall','An Advanced Persistent Threat — slow, skilled, patient attack','A programming language','An antivirus tool'],correct:1,explain:'APT = Advanced Persistent Threat. Sophisticated attackers who stay hidden for a long time.'},
  {q:'A supply chain attack targets:',opts:['Your own employees only','Your trusted suppliers and partners to reach you','Only government systems','Social media accounts'],correct:1,explain:'Supply chain attacks compromise trusted third parties to get to the main target.'},
  {q:'Which exploit locks your files and demands money?',opts:['Phishing','DDoS','Ransomware','Buffer Overflow'],correct:2,explain:'Ransomware encrypts your files and demands a ransom payment to unlock them.'},
  {q:'IDS is like a watchdog that:',opts:['Barks AND bites','Only barks (alerts) but does not block the attacker','Stays silent','Only works at night'],correct:1,explain:'IDS detects and alerts but does not block. IPS detects AND blocks. IDS barks, IPS bites.'},
  {q:'Symmetric encryption uses:',opts:['Two different keys','The same key to encrypt and decrypt','No key at all','Only public keys'],correct:1,explain:'Symmetric = same key for both encryption and decryption. Asymmetric = two different keys.'},
  {q:'In HTTPS, asymmetric encryption is used to:',opts:['Encrypt all the data','Securely exchange the symmetric key','Replace the password','Block hackers'],correct:1,explain:'HTTPS uses asymmetric to safely exchange the symmetric key. Then symmetric encrypts the data (faster).'},
  {q:'A firewall that tracks active connections is called:',opts:['Packet-filtering','Stateful inspection','Proxy','Antivirus'],correct:1,explain:'Stateful inspection firewalls track active connections and use that context to make decisions.'},
  {q:'What is the correct order from highest to lowest security documentation?',opts:['Procedures → Guidelines → Standards → Policies','Policies → Standards → Guidelines → Procedures','Standards → Policies → Procedures → Guidelines'],correct:1,explain:'Policies (vision) → Standards (rules) → Guidelines (suggestions) → Procedures (step-by-step).'},
  {q:'The NIST Framework function "Respond" means:',opts:['Listing your assets','Applying firewall rules','Taking action when an incident happens','Restoring systems after recovery'],correct:2,explain:'Respond = take action during a security incident. Recover = restore systems afterwards.'},
  {q:'Which NIST Tier represents the most mature cybersecurity?',opts:['Tier 1: Partial','Tier 2: Risk Informed','Tier 3: Repeatable','Tier 4: Adaptive'],correct:3,explain:'Tier 4: Adaptive — continuous improvement, predictive, real-time awareness, security as part of culture.'},
  {q:'A cybersecurity event becomes an incident when:',opts:['It is detected by a tool','It is confirmed to cause harm to CIA of systems','Someone reports it','It involves a firewall'],correct:1,explain:'An event becomes an incident when confirmed to compromise confidentiality, integrity, or availability.'},
  {q:'Which security model says "Never trust, always verify"?',opts:['Defense in Depth','Zero Trust','RBAC','GDPR'],correct:1,explain:'Zero Trust assumes no one is trusted by default — every access request must be verified.'},
  {q:'GDPR requires breach notification within:',opts:['24 hours','72 hours','1 week','30 days'],correct:1,explain:'GDPR requires data controllers to notify the supervisory authority within 72 hours of becoming aware of a breach.'},
  {q:'Quantum computing threatens cybersecurity because it could:',opts:['Make Wi-Fi faster','Break current encryption methods','Replace all firewalls','Make phishing impossible'],correct:1,explain:'Quantum computers could break current encryption. Post-quantum cryptography strategies are being developed now.'}
];

/* ========================
   GLOSSARY TERMS
   ======================== */
const GLOSSARY = [
  {term:'Cyberspace',def:'The connected digital world of devices, networks, data, and people.',hint:'All the farms, paths, and farmers — connected.'},
  {term:'Cybersecurity',def:'Protecting digital systems and data from attacks.',hint:'Fences, locks, and watchmen for your farm.'},
  {term:'Information Security',def:'Protecting all information — digital, physical, or spoken.',hint:'Protecting yams, paper records, and spoken secrets.'},
  {term:'Asset',def:'Anything valuable you want to protect.',hint:'Your yams, tools, and barn.'},
  {term:'Vulnerability',def:'A weakness that attackers can exploit.',hint:'A broken fence around your farm.'},
  {term:'Threat',def:'Something that can cause harm to a system.',hint:'Thieves spotted near your village.'},
  {term:'Exploit',def:'A tool or trick that abuses a vulnerability.',hint:'The technique to climb through the broken fence.'},
  {term:'Payload',def:'The harmful action an attack performs once inside.',hint:'The yams actually stolen.'},
  {term:'Attack Vector',def:'The path an attacker uses to reach the target.',hint:'The hole in the fence used to enter.'},
  {term:'Cyberattack',def:'Deliberate exploitation of systems by malicious actors.',hint:'When someone actually breaks into your barn.'},
  {term:'CIA Triad',def:'Confidentiality, Integrity, Availability — 3 core security goals.',hint:'Keep secrets, keep data true, keep systems running.'},
  {term:'Confidentiality',def:'Only authorised people can see the information.',hint:'Only you know where your best seedlings are hidden.'},
  {term:'Integrity',def:'Data has not been changed or tampered with.',hint:'Nobody swapped your good seedlings for bad ones.'},
  {term:'Availability',def:'Systems and data are there when needed.',hint:'The grinding machine works when you arrive.'},
  {term:'Authenticity',def:'Data is genuine — from who it claims to be from.',hint:'Seedlings are truly the variety the seller promised.'},
  {term:'Non-Repudiation',def:'Sender cannot deny sending a message.',hint:'The buyer cannot deny receiving your yams.'},
  {term:'IAM',def:'Identity and Access Management — who you are and what you can do.',hint:'Who enters the grinding machine, and which machine they use.'},
  {term:'Authentication',def:'Proving you are who you claim to be.',hint:'The operator recognises your face.'},
  {term:'Authorisation',def:'Deciding what an authenticated person can do.',hint:'You can use the big machine because you paid.'},
  {term:'MFA',def:'Multi-Factor Authentication — two or more proofs of identity.',hint:'Checking both your face AND your ID card.'},
  {term:'DAC',def:'Discretionary Access Control — the owner decides.',hint:'You own the barn, you give your friend the key.'},
  {term:'MAC',def:'Mandatory Access Control — central authority decides.',hint:'The chief says only elders enter. Period.'},
  {term:'RBAC',def:'Role-Based Access Control — access based on your role.',hint:'Captain calls subs, goalkeeper uses hands.'},
  {term:'OAuth',def:'Authorisation framework using access tokens.',hint:'Give a worker a token for the barn — limited access, limited time.'},
  {term:'SAML',def:'Security Assertion Markup Language — enterprise SSO.',hint:'Chief\'s letter accepted at any market that trusts him.'},
  {term:'OpenID Connect',def:'Authentication layer on OAuth 2.0 for identity verification.',hint:'A small ID card instead of a long letter.'},
  {term:'SSO',def:'Single Sign-On — one login for many systems.',hint:'One ID card lets you into all market stalls.'},
  {term:'Federation',def:'Trusted relationship between organisations sharing identities.',hint:'Two villages accept each other\'s ID cards.'},
  {term:'Zero Trust',def:'Never trust, always verify — even inside the network.',hint:'Every barn door checks your face, even inside the farm.'},
  {term:'MDM',def:'Mobile Device Management — control and secure mobile devices.',hint:'Remote control for all farm workers\' phones.'},
  {term:'BYOD',def:'Bring Your Own Device — workers use personal devices for work.',hint:'Workers bring their own cutlass to the farm.'},
  {term:'Risk',def:'Chance of loss or harm. Risk = Vulnerability × Threat × Asset.',hint:'Broken fence + thieves + valuable yams = risk.'},
  {term:'APT',def:'Advanced Persistent Threat — skilled, patient, long-term attack.',hint:'A spy living in your village for months.'},
  {term:'Supply Chain Attack',def:'Attack through a trusted partner or supplier.',hint:'Poisoned seedlings from a trusted seller.'},
  {term:'Malware',def:'Malicious software that harms systems.',hint:'Nails hidden in the football pitch.'},
  {term:'Phishing',def:'Fake messages that trick you into giving up secrets.',hint:'A fake referee asking for your team strategy.'},
  {term:'Ransomware',def:'Locks files and demands money.',hint:'Someone locks the changing room and demands payment.'},
  {term:'DDoS',def:'Distributed Denial of Service — floods system to stop it.',hint:'Thousands of fake fans rush the pitch.'},
  {term:'SQL Injection',def:'Bad commands sent through website forms to attack databases.',hint:'Shouting fake orders at the grinding machine operator.'},
  {term:'XSS',def:'Cross-Site Scripting — malicious scripts in web pages.',hint:'Putting a fake sign on the market stall that tricks buyers.'},
  {term:'Zero-Day',def:'Attack on unknown weakness before any fix exists.',hint:'A brand new trick nobody has seen before.'},
  {term:'Buffer Overflow',def:'Overloading memory to execute malicious code.',hint:'Pouring more yams into a basket than it can hold — it breaks.'},
  {term:'Defense in Depth',def:'Multiple layers of security protection.',hint:'Fence + gate + dog + padlock + hidden yams.'},
  {term:'Encryption',def:'Scrambling data so only authorised people can read it.',hint:'Writing farm records in a secret code.'},
  {term:'Symmetric Encryption',def:'Same key to encrypt and decrypt. Fast.',hint:'You and the captain share one locker key.'},
  {term:'Asymmetric Encryption',def:'Two keys — public (lock) and private (unlock). Safer.',hint:'Captain gives everyone a padlock. Only he has the key.'},
  {term:'IDS',def:'Intrusion Detection System — watches and alerts.',hint:'Watchdog that barks but does not bite.'},
  {term:'IPS',def:'Intrusion Prevention System — watches and blocks.',hint:'Guard dog that barks AND bites.'},
  {term:'Firewall',def:'Device that filters network traffic: accept, reject, or drop.',hint:'Security guard at the stadium gate.'},
  {term:'NGFW',def:'Next-Generation Firewall — advanced filtering plus app awareness.',hint:'Guard who checks ticket, bag, face, and knows your section.'},
  {term:'DMZ',def:'Demilitarised Zone — buffer network between internet and internal.',hint:'The market area between the village gate and the chief\'s compound.'},
  {term:'NIST Framework',def:'5 functions: Identify, Protect, Detect, Respond, Recover.',hint:'Walk farm, build fences, watch, chase thieves, replant.'},
  {term:'GDPR',def:'EU law protecting personal data. 72-hour breach notification.',hint:'Strict village rules about handling people\'s personal information.'},
  {term:'HIPAA',def:'US law protecting health information.',hint:'Rules about keeping patient health records safe.'},
  {term:'PCI-DSS',def:'Standard for protecting payment card data.',hint:'Rules for anyone who handles money at the market.'},
  {term:'Incident Response',def:'Process for handling a cyberattack: Prepare → Detect → Contain → Learn.',hint:'What you do when a thief breaks into your barn.'},
  {term:'CSIRT',def:'Cyber Security Incident Response Team.',hint:'The emergency group that responds when the barn is breached.'},
  {term:'BCP',def:'Business Continuity Plan — keeping operations running during crisis.',hint:'Having a backup plan if the grinding machine breaks.'},
  {term:'Blockchain',def:'Shared, unchangeable digital record.',hint:'A scoreboard everyone sees that nobody can secretly change.'},
  {term:'IoT',def:'Internet of Things — connected sensors and devices.',hint:'Soil sensors on your farm that report moisture to your phone.'},
  {term:'Quantum Computing',def:'Super-powerful future computers that could break current encryption.',hint:'A future tool so powerful it can crack any current lock.'}
];

/* ========================
   BADGES
   ======================== */
const ALL_BADGES = [
  {id:'b-s1',emoji:'🌐',name:'Cyberspace Explorer',desc:'Completed Section 1'},
  {id:'b-s2',emoji:'🛡️',name:'Security Starter',desc:'Completed Section 2'},
  {id:'b-s3',emoji:'🔒',name:'CIA Master',desc:'Completed Section 3'},
  {id:'b-s4',emoji:'🔑',name:'Access Controller',desc:'Completed Section 4'},
  {id:'b-s5',emoji:'🌍',name:'Trust Architect',desc:'Completed Section 5'},
  {id:'b-s6',emoji:'⚠️',name:'Threat Analyst',desc:'Completed Section 6'},
  {id:'b-s7',emoji:'📦',name:'Supply Chain Guardian',desc:'Completed Section 7'},
  {id:'b-s8',emoji:'🐛',name:'Bug Hunter',desc:'Completed Section 8'},
  {id:'b-s9',emoji:'🏰',name:'Cyber Defender',desc:'Completed Section 9'},
  {id:'b-s10',emoji:'🔏',name:'Crypto Apprentice',desc:'Completed Section 10'},
  {id:'b-s11',emoji:'🔔',name:'Firewall Master',desc:'Completed Section 11'},
  {id:'b-s12',emoji:'📋',name:'Governance Guru',desc:'Completed Section 12'},
  {id:'b-s13',emoji:'📊',name:'Risk Manager',desc:'Completed Section 13'},
  {id:'b-s14',emoji:'🚨',name:'Incident Commander',desc:'Completed Section 14'},
  {id:'b-quiz',emoji:'🎓',name:'Quiz Champion',desc:'Scored 80%+ on the final quiz'},
  {id:'b-perfect',emoji:'💎',name:'Perfect Score',desc:'Scored 100% on the final quiz'},
  {id:'b-complete',emoji:'🏆',name:'CYB 201 Graduate',desc:'Completed the entire course'}
];

/* ========================
   COMPARISON DATA
   ======================== */
const COMPARISONS = [
  {emoji:'🌐',title:'Cyberspace',sub:'The Digital World',desc:'Networks, devices, data, and people — all connected.'},
  {emoji:'🛡️',title:'Cybersecurity',sub:'Protection',desc:'Defending digital assets from attacks and threats.'},
  {emoji:'🔒',title:'CIA Triad',sub:'Core Goals',desc:'Confidentiality, Integrity, Availability + Authenticity, Non-Repudiation.'},
  {emoji:'🔑',title:'IAM',sub:'Identity & Access',desc:'Who you are, proving it, and what you can access.'},
  {emoji:'🌍',title:'Trust & Federation',sub:'Cross-Domain Access',desc:'SSO, OAuth, SAML, Zero Trust. Never trust, always verify.'},
  {emoji:'⚠️',title:'Cyber Risk',sub:'V × T × A',desc:'Vulnerability × Threat × Asset = Risk level.'},
  {emoji:'📦',title:'Supply Chain',sub:'Trusted Partners',desc:'Attacks through your vendors and suppliers.'},
  {emoji:'🐛',title:'Vulnerabilities',sub:'Weak Points',desc:'Weaknesses in technology, people, and processes.'},
  {emoji:'🏰',title:'Defense in Depth',sub:'Many Layers',desc:'6 layers of protection from perimeter to user.'},
  {emoji:'🔏',title:'Encryption',sub:'Secret Codes',desc:'Symmetric (one key) and Asymmetric (two keys).'},
  {emoji:'🔔',title:'IDS/IPS & Firewalls',sub:'Detection & Control',desc:'IDS barks. IPS bites. Firewalls guard the gate.'},
  {emoji:'📋',title:'Governance',sub:'Rules & Laws',desc:'Policies, GDPR, HIPAA, PCI-DSS, NIST, ISO 27001.'},
  {emoji:'📊',title:'NIST Framework',sub:'5 Functions',desc:'Identify → Protect → Detect → Respond → Recover.'},
  {emoji:'🚨',title:'Incident Response',sub:'4 Steps',desc:'Prepare → Detect → Contain & Recover → Learn.'}
];

/* ========================
   STATE MANAGEMENT
   ======================== */
let state = {
  theme: 'dark',
  currentSection: 'section-1',
  unlockedSections: ['section-1'],
  badges: [],
  quizScore: null,
  totalCorrect: 0,
  totalAttempts: 0,
  completionDate: null
};

function loadState() {
  try {
    const saved = localStorage.getItem('cyb201_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) { /* fallback to default state */ }
}

function saveState() {
  try {
    localStorage.setItem('cyb201_state', JSON.stringify(state));
  } catch (e) { /* localStorage unavailable */ }
}

/* ========================
   THEME MANAGEMENT
   ======================== */
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  state.theme = isDark ? 'dark' : 'light';
  const btn = document.getElementById('darkToggle');
  btn.textContent = isDark ? '☀️' : '🌙';
  try { localStorage.setItem('theme', state.theme); } catch(e) {}
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  const isDark = document.documentElement.classList.contains('dark-mode');
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

/* ========================
   SMOOTH SCROLL
   ======================== */
function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ========================
   PROGRESS BAR
   ======================== */
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  const bar = document.getElementById('progressBar');
  if (bar) {
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
  }
}

/* ========================
   NAVIGATION
   ======================== */
function buildNav() {
  const container = document.getElementById('navLinks');
  if (!container) return;
  container.innerHTML = SECTIONS.map(s =>
    `<a href="#${s.id}" data-section="${s.id}" onclick="event.preventDefault();smoothScroll('${s.id}')">${s.icon} ${s.title}</a>`
  ).join('');
}

function updateActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const scrollY = window.scrollY + 200;
  let activeId = SECTIONS[0].id;
  SECTIONS.forEach(s => {
    const el = document.getElementById(s.id);
    if (el && el.offsetTop <= scrollY) activeId = s.id;
  });
  links.forEach(l => l.classList.toggle('active', l.dataset.section === activeId));
}

function handleNavScroll() {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
}

/* ========================
   RENDER SECTIONS
   ======================== */
function renderSections() {
  const main = document.getElementById('main-content');
  if (!main) return;
  let html = '';

  SECTIONS.forEach((s, i) => {
    const unlocked = state.unlockedSections.includes(s.id);
    const lockedClass = unlocked ? '' : 'locked';
    const connection = i > 0 ? `<p style="font-size:.92rem;color:var(--text-light);margin-bottom:20px"><em>You just learned about ${SECTIONS[i-1].title}. Now we build on that.</em></p>` : '';
    const recallPrompt = renderRecall(s.id);

    html += `
      <section class="section ${lockedClass}" id="${s.id}" aria-label="${s.title}">
        <div class="section-inner">
          ${!unlocked ? '<div class="lock-msg">🔒 Complete the previous section to unlock this one.</div>' : ''}
          <div class="${unlocked ? '' : 'locked-content'}" ${!unlocked ? 'style="display:none"' : ''}>
            <div class="section-label"><span class="dot"></span><span>${s.num} — ${s.title}</span></div>
            <h2 class="section-heading">${s.title.replace(s.accent, `<span class="accent">${s.accent}</span>`)}</h2>
            <p class="section-desc">${s.desc}</p>
            <p class="section-time">⏱ ${s.time}</p>
            ${connection}
            ${s.content}
            ${renderGate(s, i)}
          </div>
        </div>
      </section>
      ${recallPrompt}
    `;
  });

  main.innerHTML = html;
}

/* ========================
   SECTION GATES
   ======================== */
function renderGate(section, index) {
  if (index >= SECTIONS.length - 1) {
    // Last section — gate leads to quiz
    return `
      <div class="gate anim-in" id="gate-${section.id}">
        <h4>🚪 Section Check</h4>
        <p style="margin-bottom:12px">${section.gate.q}</p>
        <div class="quiz-options" id="gate-opts-${section.id}">
          ${section.gate.opts.map((o, j) => `
            <div class="quiz-opt" onclick="checkGate('${section.id}',${j},${section.gate.correct})" tabindex="0"
              onkeydown="if(event.key==='Enter')checkGate('${section.id}',${j},${section.gate.correct})">
              <span class="letter">${String.fromCharCode(65+j)}</span><span>${o}</span>
            </div>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="gate-fb-${section.id}"></div>
      </div>
    `;
  }

  const nextSection = SECTIONS[index + 1];
  return `
    <div class="gate anim-in" id="gate-${section.id}">
      <h4>🚪 Section Check — Answer to unlock the next section</h4>
      <p style="margin-bottom:12px">${section.gate.q}</p>
      <div class="quiz-options" id="gate-opts-${section.id}">
        ${section.gate.opts.map((o, j) => `
          <div class="quiz-opt" onclick="checkGate('${section.id}',${j},${section.gate.correct})" tabindex="0"
            onkeydown="if(event.key==='Enter')checkGate('${section.id}',${j},${section.gate.correct})">
            <span class="letter">${String.fromCharCode(65+j)}</span><span>${o}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="gate-fb-${section.id}"></div>
    </div>
  `;
}

function checkGate(sectionId, chosen, correct) {
  const optsContainer = document.getElementById('gate-opts-' + sectionId);
  const fb = document.getElementById('gate-fb-' + sectionId);
  if (!optsContainer || !fb) return;

  const opts = optsContainer.querySelectorAll('.quiz-opt');
  const sectionData = SECTIONS.find(s => s.id === sectionId);

  state.totalAttempts++;

  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    if (i === chosen && chosen !== correct) o.classList.add('wrong');
  });

  if (chosen === correct) {
    state.totalCorrect++;
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Correct! ' + sectionData.gate.explain;

    // Unlock next section
    const idx = SECTIONS.findIndex(s => s.id === sectionId);
    if (idx < SECTIONS.length - 1) {
      const nextId = SECTIONS[idx + 1].id;
      unlockSection(nextId);
    } else {
      // Last section completed — show quiz
      showQuiz();
    }

    // Award badge
    const badgeId = 'b-s' + (idx + 1);
    awardBadge(badgeId);

    state.currentSection = sectionId;
    saveState();
  } else {
    fb.className = 'quiz-feedback wrong';
    fb.textContent = '❌ Not quite. ' + sectionData.gate.explain + ' Try again!';
    // Allow retry after 2 seconds
    setTimeout(() => {
      opts.forEach(o => {
        o.classList.remove('disabled', 'wrong', 'correct', 'selected');
      });
      fb.style.display = 'none';
      fb.className = 'quiz-feedback';
    }, 2500);
  }
}

function unlockSection(sectionId) {
  if (!state.unlockedSections.includes(sectionId)) {
    state.unlockedSections.push(sectionId);
  }
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.remove('locked');
    const lockMsg = section.querySelector('.lock-msg');
    if (lockMsg) lockMsg.style.display = 'none';
    const content = section.querySelector('.locked-content');
    if (content) {
      content.style.display = '';
      content.classList.remove('locked-content');
    }
  }
  saveState();

  // Scroll to it after a beat
  setTimeout(() => smoothScroll(sectionId), 600);
}

/* ========================
   SPACED RECALL
   ======================== */
function renderRecall(afterSectionId) {
  const recall = RECALLS.find(r => r.after === afterSectionId);
  if (!recall) return '';
  return `
    <div class="section" style="padding:40px 24px">
      <div class="section-inner">
        <div class="recall-prompt anim-in" id="recall-${afterSectionId}">
          <h4>🧠 Quick Recall Check</h4>
          <p style="margin-bottom:12px">${recall.q}</p>
          <div class="quiz-options" id="recall-opts-${afterSectionId}">
            ${recall.opts.map((o, j) => `
              <div class="quiz-opt" onclick="checkRecall('${afterSectionId}',${j},${recall.correct})" tabindex="0">
                <span class="letter">${String.fromCharCode(65+j)}</span><span>${o}</span>
              </div>
            `).join('')}
          </div>
          <div class="quiz-feedback" id="recall-fb-${afterSectionId}"></div>
        </div>
      </div>
    </div>
  `;
}

function checkRecall(afterId, chosen, correct) {
  const opts = document.querySelectorAll(`#recall-opts-${afterId} .quiz-opt`);
  const fb = document.getElementById('recall-fb-' + afterId);
  const recall = RECALLS.find(r => r.after === afterId);

  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === correct) o.classList.add('correct');
    if (i === chosen && chosen !== correct) o.classList.add('wrong');
  });

  if (chosen === correct) {
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Good, you still remember! ' + recall.explain;
  } else {
    fb.className = 'quiz-feedback wrong';
    fb.textContent = '❌ Not quite. ' + recall.explain;
  }
}

/* ========================
   CIA DEMO (Section 3 Interactive)
   ======================== */
const CIA_THREATS = [
  { name: 'Phishing', category: 'C' },
  { name: 'Data Breach', category: 'C' },
  { name: 'Tampering', category: 'I' },
  { name: 'Man-in-the-Middle', category: 'I' },
  { name: 'DDoS Attack', category: 'A' },
  { name: 'Ransomware', category: 'A' },
  { name: 'Eavesdropping', category: 'C' },
  { name: 'SQL Injection', category: 'I' },
  { name: 'Power Outage', category: 'A' }
];

let ciaSelected = null;
let ciaPlaced = [];

function initCIA() {
  const container = document.getElementById('ciaDemoThreats');
  if (!container) return;
  container.innerHTML = CIA_THREATS.map((t, i) =>
    `<div class="demo-item threat" id="cia-t-${i}" onclick="selectCIAThreat(${i})" tabindex="0"
      onkeydown="if(event.key==='Enter')selectCIAThreat(${i})">${t.name}</div>`
  ).join('');
}

function selectCIAThreat(index) {
  if (ciaPlaced.includes(index)) return;
  document.querySelectorAll('#ciaDemoThreats .demo-item').forEach(el => el.style.outline = '');
  ciaSelected = index;
  const el = document.getElementById('cia-t-' + index);
  if (el) el.style.outline = '3px solid var(--accent-main)';
  document.getElementById('ciaNarration').textContent = `"${CIA_THREATS[index].name}" selected. Now click the correct CIA goal.`;
}

function ciaDrop(category) {
  if (ciaSelected === null) return;
  const threat = CIA_THREATS[ciaSelected];
  const narration = document.getElementById('ciaNarration');

  if (threat.category === category) {
    // Correct
    ciaPlaced.push(ciaSelected);
    const el = document.getElementById('cia-t-' + ciaSelected);
    if (el) { el.classList.remove('threat'); el.classList.add('correct-placed'); el.style.outline = ''; el.onclick = null; }
    const targetItems = document.getElementById('cia' + category + 'Items');
    if (targetItems) targetItems.innerHTML += `<div class="demo-item correct-placed" style="font-size:.8rem;padding:6px 12px;margin-top:4px">${threat.name}</div>`;
    narration.textContent = `✅ Correct! "${threat.name}" is a ${category === 'C' ? 'Confidentiality' : category === 'I' ? 'Integrity' : 'Availability'} threat.`;

    if (ciaPlaced.length === CIA_THREATS.length) {
      narration.textContent = '🎉 All threats matched correctly! Great work, ' + LEARNER + '!';
      celebrateParticles(narration);
    }
  } else {
    narration.textContent = `❌ Not quite. "${threat.name}" does not belong there. Think again!`;
    const area = document.getElementById('cia' + category);
    if (area) { area.style.animation = 'shake 0.3s'; setTimeout(() => area.style.animation = '', 300); }
  }
  ciaSelected = null;
}

function resetCIA() {
  ciaSelected = null;
  ciaPlaced = [];
  document.getElementById('ciaCItems').innerHTML = '';
  document.getElementById('ciaIItems').innerHTML = '';
  document.getElementById('ciaAItems').innerHTML = '';
  document.getElementById('ciaNarration').textContent = 'Click a threat above, then click where it belongs.';
  initCIA();
}

/* ========================
   LAYERS DEMO (Section 7 Interactive)
   ======================== */
function toggleLayer(el) {
  const wasActive = el.classList.contains('active');
  document.querySelectorAll('.layer').forEach(l => l.classList.remove('active'));
  if (!wasActive) {
    el.classList.add('active');
    // Show info
    let info = el.querySelector('.layer-info');
    if (!info) {
      info = document.createElement('div');
      info.className = 'layer-info';
      info.textContent = el.dataset.info;
      el.appendChild(info);
    }
  }
}

/* ========================
   ENCRYPTION DEMO (Section 7)
   ======================== */
function caesarShift(text, shift) {
  return text.split('').map(ch => {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
    if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
    return ch;
  }).join('');
}

function demoEncrypt() {
  const input = document.getElementById('encryptInput');
  const val = (input && input.value.trim()) || 'Hello';
  document.getElementById('encPlain').textContent = val;
  document.getElementById('encCipher').textContent = caesarShift(val, 3);
  document.getElementById('encKey').textContent = 'Key: +3';
}

function demoDecrypt() {
  const cipher = document.getElementById('encCipher').textContent;
  const plain = caesarShift(cipher, -3);
  document.getElementById('encPlain').textContent = plain;
}

/* ========================
   QUIZ SYSTEM
   ======================== */
let quizAnswers = {};
let quizSubmitted = false;

function showQuiz() {
  // Show quiz section and other end sections
  const quizSection = document.getElementById('quiz-section');
  const conceptMap = document.getElementById('concept-map');
  const compSection = document.getElementById('comparison-section');
  if (quizSection) quizSection.style.display = '';
  if (conceptMap) conceptMap.style.display = '';
  if (compSection) compSection.style.display = '';

  renderQuiz();
  renderConceptMap();
  renderComparisons();

  setTimeout(() => smoothScroll('concept-map'), 800);
}

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  container.innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-q anim-in" id="quiz-q-${i}">
      <h4><span class="q-num">Q${i+1}.</span> ${q.q}</h4>
      <div class="quiz-options" id="quiz-opts-${i}">
        ${q.opts.map((o, j) => `
          <div class="quiz-opt" onclick="selectQuizAnswer(${i},${j})" tabindex="0"
            onkeydown="if(event.key==='Enter')selectQuizAnswer(${i},${j})">
            <span class="letter">${String.fromCharCode(65+j)}</span><span>${o}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-fb-${i}"></div>
    </div>
  `).join('') + `
    <div style="text-align:center;margin-top:32px">
      <button class="btn-hero" id="submitQuiz" onclick="submitQuiz()">Submit Quiz</button>
    </div>
  `;

  quizAnswers = {};
  quizSubmitted = false;
}

function selectQuizAnswer(qIndex, optIndex) {
  if (quizSubmitted) return;
  quizAnswers[qIndex] = optIndex;
  const opts = document.querySelectorAll(`#quiz-opts-${qIndex} .quiz-opt`);
  opts.forEach((o, i) => {
    o.classList.toggle('selected', i === optIndex);
  });
}

function submitQuiz() {
  if (quizSubmitted) return;

  // Check all answered
  const unanswered = QUIZ.filter((_, i) => quizAnswers[i] === undefined);
  if (unanswered.length > 0) {
    alert(`Please answer all questions. You have ${unanswered.length} unanswered.`);
    return;
  }

  quizSubmitted = true;
  let score = 0;

  QUIZ.forEach((q, i) => {
    const chosen = quizAnswers[i];
    const opts = document.querySelectorAll(`#quiz-opts-${i} .quiz-opt`);
    const fb = document.getElementById('quiz-fb-' + i);

    opts.forEach((o, j) => {
      o.classList.add('disabled');
      if (j === q.correct) o.classList.add('correct');
      if (j === chosen && chosen !== q.correct) o.classList.add('wrong');
    });

    if (chosen === q.correct) {
      score++;
      fb.className = 'quiz-feedback correct';
      fb.textContent = '✅ Correct! ' + q.explain;
    } else {
      fb.className = 'quiz-feedback wrong';
      fb.textContent = '❌ Not quite. ' + q.explain;
    }
  });

  const pct = Math.round((score / QUIZ.length) * 100);
  state.quizScore = { score, total: QUIZ.length };
  saveState();

  // Show result
  const resultDiv = document.getElementById('quizResult');
  if (resultDiv) {
    let msg = '';
    if (pct === 100) msg = `Perfect score, ${LEARNER}! You are a cybersecurity star! 🌟`;
    else if (pct >= 80) msg = `Great job, ${LEARNER}! You really understand this material!`;
    else if (pct >= 60) msg = `Good effort, ${LEARNER}! Review the sections you missed and try again.`;
    else msg = `Keep going, ${LEARNER}. Review the sections and try the quiz again. You can do this!`;

    resultDiv.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-score" id="quizScoreNum">${score}</div>
        <p style="font-size:1.2rem;font-weight:600">out of ${QUIZ.length} (${pct}%)</p>
        <p class="quiz-msg">${msg}</p>
        ${pct < 80 ? '<button class="btn-secondary" onclick="retryQuiz()" style="margin-top:16px">Try Again</button>' : ''}
      </div>
    `;
    resultDiv.style.display = '';

    if (pct >= 80) {
      awardBadge('b-quiz');
      if (pct === 100) awardBadge('b-perfect');
      awardBadge('b-complete');
      state.completionDate = Date.now();
      saveState();

      setTimeout(() => showCompletion(score, QUIZ.length), 1500);
    }
  }

  // Hide submit button
  const btn = document.getElementById('submitQuiz');
  if (btn) btn.style.display = 'none';

  smoothScroll('quizResult');
}

function retryQuiz() {
  quizSubmitted = false;
  quizAnswers = {};
  renderQuiz();
  document.getElementById('quizResult').style.display = 'none';
  smoothScroll('quiz-section');
}

/* ========================
   COMPLETION SCREEN
   ======================== */
function showCompletion(score, total) {
  const screen = document.getElementById('completionScreen');
  const text = document.getElementById('completionText');
  const badges = document.getElementById('completionBadges');
  if (!screen) return;

  text.innerHTML = `You scored ${score}/${total} on the final quiz. As a 300-level university student, you now understand: cyberspace, cybersecurity goals, the CIA Triad, identity and access management, cyber threats, vulnerabilities, defense principles, governance, incident response, and emerging technologies. That is impressive!`;

  badges.innerHTML = state.badges.map(id => {
    const b = ALL_BADGES.find(x => x.id === id);
    return b ? `<span style="font-size:1.8rem" title="${b.name}">${b.emoji}</span>` : '';
  }).join('');

  screen.style.display = '';
  celebrateParticles(screen.querySelector('.completion-emoji'));
}

function exploreFree() {
  document.getElementById('completionScreen').style.display = 'none';
  // Unlock all sections
  SECTIONS.forEach(s => unlockSection(s.id));
  smoothScroll('section-1');
}

function resetAll() {
  try { localStorage.removeItem('cyb201_state'); localStorage.removeItem('theme'); } catch(e) {}
  location.reload();
}

/* ========================
   CONCEPT MAP
   ======================== */
function renderConceptMap() {
  const map = document.getElementById('conceptMap');
  if (!map) return;
  const concepts = [
    { name: 'Cyberspace', links: ['Cybersecurity','Networks','Data'] },
    { name: 'Cybersecurity', links: ['CIA Triad','IAM','Defense','Governance'] },
    { name: 'CIA Triad', links: ['Confidentiality','Integrity','Availability'] },
    { name: 'IAM', links: ['Authentication','Authorisation','Zero Trust'] },
    { name: 'Threats', links: ['Malware','Phishing','APTs','Supply Chain'] },
    { name: 'Defense', links: ['Firewalls','IDS/IPS','Encryption','Layers'] },
    { name: 'Governance', links: ['NIST','GDPR','Policies','Incident Response'] },
    { name: 'Risk', links: ['Vulnerability','Threat','Asset'] }
  ];

  map.innerHTML = concepts.map(c =>
    `<div class="concept-node" tabindex="0" onclick="highlightConcept(this)" title="Links to: ${c.links.join(', ')}">${c.name}</div>`
  ).join('') + concepts.flatMap(c => c.links.map(l =>
    `<div class="concept-node" tabindex="0" onclick="highlightConcept(this)" style="font-size:.78rem;padding:8px 14px;opacity:.7">${l}</div>`
  )).join('');
}

function highlightConcept(el) {
  document.querySelectorAll('.concept-node').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
}

/* ========================
   COMPARISONS
   ======================== */
function renderComparisons() {
  const grid = document.getElementById('comparisonGrid');
  if (!grid) return;
  grid.innerHTML = COMPARISONS.map(c => `
    <div class="comp-card anim-in">
      <div class="emoji">${c.emoji}</div>
      <h4>${c.title}</h4>
      <div class="sub">${c.sub}</div>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

/* ========================
   GLOSSARY
   ======================== */
function renderGlossary() {
  const list = document.getElementById('glossaryList');
  if (!list) return;
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
  list.innerHTML = sorted.map(g => `
    <div class="glossary-item" data-term="${g.term.toLowerCase()}">
      <h5>${g.term}</h5>
      <p>${g.def}</p>
      <div class="analogy-hint">🌿 ${g.hint}</div>
    </div>
  `).join('');
}

function filterGlossary() {
  const search = (document.getElementById('glossarySearch').value || '').toLowerCase();
  document.querySelectorAll('.glossary-item').forEach(item => {
    const match = item.dataset.term.includes(search);
    item.style.display = match ? '' : 'none';
  });
}

function toggleGlossary() {
  const panel = document.getElementById('glossaryPanel');
  const backdrop = document.getElementById('glossaryBackdrop');
  const isOpen = panel.classList.toggle('open');
  backdrop.style.display = isOpen ? '' : 'none';
}

/* ========================
   BADGES
   ======================== */
function renderBadges() {
  const list = document.getElementById('badgeList');
  if (!list) return;
  list.innerHTML = ALL_BADGES.map(b => {
    const earned = state.badges.includes(b.id);
    return `
      <div class="badge-item ${earned ? '' : 'locked'}">
        <div class="b-emoji">${b.emoji}</div>
        <div class="b-info">
          <h5>${b.name}</h5>
          <p>${earned ? b.desc : '🔒 Not yet earned'}</p>
        </div>
      </div>
    `;
  }).join('');

  const pill = document.getElementById('badgeCount');
  if (pill) pill.textContent = state.badges.length;
}

function awardBadge(badgeId) {
  if (state.badges.includes(badgeId)) return;
  state.badges.push(badgeId);
  saveState();
  renderBadges();

  // Badge unlock animation
  const badge = ALL_BADGES.find(b => b.id === badgeId);
  if (badge) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--white);padding:16px 28px;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.2);z-index:100001;display:flex;align-items:center;gap:12px;animation:badgeIn .6s cubic-bezier(.34,1.56,.64,1);font-weight:600;';
    toast.innerHTML = `<span style="font-size:2rem">${badge.emoji}</span> <span>Badge Earned: ${badge.name}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.transition = 'opacity .3s'; toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
  }
}

function toggleBadges() {
  document.getElementById('badgePanel').classList.toggle('open');
}

/* ========================
   PARTICLE CELEBRATIONS
   ======================== */
function celebrateParticles(anchor) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = anchor ? anchor.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2 };
  const colors = ['#2E7D32', '#4CAF50', '#F9A825', '#FFD54F', '#81C784', '#FF7043'];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      left:${rect.left + (rect.width || 0) / 2}px;
      top:${rect.top + (rect.height || 0) / 2}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      width:${4 + Math.random() * 8}px;
      height:${4 + Math.random() * 8}px;
    `;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 80 + Math.random() * 200;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 100;

    particle.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${dx}px,${dy + 300}px) scale(0)`, opacity: 0 }
    ], { duration: 1000 + Math.random() * 800, easing: 'cubic-bezier(.25,.46,.45,.94)' });

    setTimeout(() => particle.remove(), 2000);
  }
}

/* ========================
   WELCOME BACK
   ======================== */
function checkWelcomeBack() {
  if (state.unlockedSections.length > 1 && !state.completionDate) {
    const idx = SECTIONS.findIndex(s => s.id === state.currentSection);
    const sectionName = idx >= 0 ? SECTIONS[idx].title : 'your last section';
    document.getElementById('welcomeBackMsg').textContent = `You left off at "${sectionName}". Ready to continue?`;
    document.getElementById('welcomeBack').style.display = '';
  }
}

function continueSession() {
  document.getElementById('welcomeBack').style.display = 'none';
  // Restore unlocked sections in DOM
  state.unlockedSections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.remove('locked');
      const lockMsg = section.querySelector('.lock-msg');
      if (lockMsg) lockMsg.style.display = 'none';
      const content = section.querySelector('.locked-content');
      if (content) { content.style.display = ''; content.classList.remove('locked-content'); }
    }
  });
  setTimeout(() => smoothScroll(state.currentSection), 300);
}

/* ========================
   INTERSECTION OBSERVER
   ======================== */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim-in').forEach(el => observer.observe(el));
}

/* ========================
   SCROLL HANDLER
   ======================== */
let scrollTicking = false;
function onScroll() {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      updateProgress();
      handleNavScroll();
      updateActiveNav();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}

/* ========================
   KEYBOARD HANDLERS
   ======================== */
function handleKeyboard(e) {
  if (e.key === 'Escape') {
    const glossary = document.getElementById('glossaryPanel');
    if (glossary.classList.contains('open')) toggleGlossary();
    const badges = document.getElementById('badgePanel');
    if (badges.classList.contains('open')) toggleBadges();
    const welcome = document.getElementById('welcomeBack');
    if (welcome.style.display !== 'none') welcome.style.display = 'none';
  }
}

/* ========================
   RESTORE SESSION STATE
   ======================== */
function restoreSession() {
  // Restore unlocked sections
  state.unlockedSections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.remove('locked');
      const lockMsg = section.querySelector('.lock-msg');
      if (lockMsg) lockMsg.style.display = 'none';
      const content = section.querySelector('.locked-content');
      if (content) { content.style.display = ''; content.classList.remove('locked-content'); }
    }
  });

  // Restore badges
  renderBadges();

  // If all sections unlocked, show quiz etc
  if (state.unlockedSections.length >= SECTIONS.length) {
    showQuiz();
  }

  // If completed, show everything
  if (state.completionDate) {
    SECTIONS.forEach(s => unlockSection(s.id));
    showQuiz();
  }
}

/* ========================
   INITIALIZATION
   ======================== */
function init() {
  try {
    loadState();
    initTheme();
    buildNav();
    renderSections();
    renderGlossary();
    renderBadges();

    // Restore previous session
    restoreSession();

    // Init interactive demos
    setTimeout(() => {
      initCIA();
      initAnimations();
    }, 100);

    // Check welcome back
    if (state.unlockedSections.length > 1 && !state.completionDate) {
      checkWelcomeBack();
    }

    // Scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Keyboard
    document.addEventListener('keydown', handleKeyboard);

    // Initial progress
    updateProgress();
    handleNavScroll();

  } catch (e) {
    console.error('Init error:', e);
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ================================================================
   VISUAL EFFECTS ENGINE — Premium Interactions
   ================================================================ */

/* ========================
   CUSTOM CURSOR
   ======================== */
(function initCursor(){
  if(window.matchMedia('(pointer:coarse)').matches) return;
  if(window.matchMedia('(max-width:768px)').matches) return;

  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if(!dot || !ring) return;

  let mouseX=0, mouseY=0, ringX=0, ringY=0, dotX=0, dotY=0;
  const lerpDot = 0.2, lerpRing = 0.08;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
  }, {passive:true});

  function animate(){
    dotX += (mouseX - dotX) * lerpDot;
    dotY += (mouseY - dotY) * lerpDot;
    ringX += (mouseX - ringX) * lerpRing;
    ringY += (mouseY - ringY) * lerpRing;
    dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
    ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover states
  const hoverEls = 'a, button, .quiz-opt, .demo-item, .layer, .concept-node, .comp-card, .card, .badge-pill';
  document.addEventListener('mouseover', e => {
    if(e.target.closest(hoverEls)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest(hoverEls)) ring.classList.remove('hover');
  });
})();

/* ========================
   3D CARD TILT
   ======================== */
(function initCardTilt(){
  if(window.matchMedia('(pointer:coarse)').matches) return;
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  document.addEventListener('mousemove', e => {
    const cards = document.querySelectorAll('.card, .comp-card, .demo-container');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if(!inView) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const maxDist = Math.max(rect.width, rect.height);

      if(Math.abs(distX) < maxDist && Math.abs(distY) < maxDist){
        const rotateY = (distX / maxDist) * 3;
        const rotateX = -(distY / maxDist) * 3;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      }
    });
  }, {passive:true});

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.card, .comp-card, .demo-container').forEach(c => {
      c.style.transform = '';
    });
  });

  // Reset on mouse leave per card
  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card, .comp-card, .demo-container');
    if(card && !card.contains(e.relatedTarget)){
      card.style.transition = 'transform .5s var(--ease-out)';
      card.style.transform = '';
      setTimeout(() => card.style.transition = '', 500);
    }
  });
})();

/* ========================
   ENHANCED SCROLL ANIMATIONS
   ======================== */
(function initScrollAnimations(){
  // Re-initialize animations for dynamically rendered content
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if(entry.isIntersecting){
        // Stagger delay based on position within viewport batch
        const delay = idx * 60;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -60px 0px'});

  // Observe all anim-in elements periodically (handles dynamic content)
  function observeNew(){
    document.querySelectorAll('.anim-in:not(.visible)').forEach(el => observer.observe(el));
  }
  observeNew();
  // Re-check when sections unlock
  const origUnlock = window.unlockSection;
  if(typeof origUnlock === 'function'){
    window.unlockSection = function(id){
      origUnlock(id);
      setTimeout(observeNew, 100);
    };
  }

  // Also observe on mutation
  const mutObs = new MutationObserver(() => setTimeout(observeNew, 50));
  const main = document.getElementById('main-content');
  if(main) mutObs.observe(main, {childList:true, subtree:true});
})();

/* ========================
   MAGNETIC BUTTONS
   ======================== */
(function initMagneticButtons(){
  if(window.matchMedia('(pointer:coarse)').matches) return;

  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.btn-hero, .btn-primary, .fab').forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const threshold = 120;

      if(dist < threshold){
        const pull = (1 - dist/threshold) * 8;
        const moveX = (dx/dist) * pull;
        const moveY = (dy/dist) * pull;
        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        btn.style.transform = '';
      }
    });
  }, {passive:true});
})();

/* ========================
   ENHANCED PARTICLE CELEBRATION
   ======================== */
const _origCelebrate = window.celebrateParticles;
window.celebrateParticles = function(anchor){
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const rect = anchor ? anchor.getBoundingClientRect() :
    {left:window.innerWidth/2, top:window.innerHeight/2, width:0, height:0};
  const cx = rect.left + (rect.width||0)/2;
  const cy = rect.top + (rect.height||0)/2;
  const colors = ['#2E7D32','#4CAF50','#F9A825','#FFD54F','#81C784','#FF7043','#CE93D8','#64B5F6'];
  const shapes = ['50%','4px','0'];

  for(let i=0; i<45; i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 3 + Math.random()*10;
    const borderRadius = shapes[Math.floor(Math.random()*shapes.length)];
    p.style.cssText = `left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:${borderRadius}`;
    document.body.appendChild(p);

    const angle = Math.random()*Math.PI*2;
    const velocity = 100 + Math.random()*280;
    const dx = Math.cos(angle)*velocity;
    const dy = Math.sin(angle)*velocity - 150;
    const spin = (Math.random()-0.5)*720;

    p.animate([
      {transform:'translate(0,0) rotate(0deg) scale(1)',opacity:1},
      {transform:`translate(${dx}px,${dy+350}px) rotate(${spin}deg) scale(0)`,opacity:0}
    ],{duration:1200+Math.random()*800,easing:'cubic-bezier(.25,.46,.45,.94)'});

    setTimeout(() => p.remove(), 2200);
  }
};

/* ========================
   COUNTER ANIMATION
   ======================== */
(function initCounterAnimations(){
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.textContent, 10);
      if(isNaN(target)) return;

      let current = 0;
      const duration = 1500;
      const start = performance.now();

      function step(now){
        const elapsed = now - start;
        const progress = Math.min(elapsed/duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.round(eased * target);
        el.textContent = current;
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterObs.unobserve(el);
    });
  }, {threshold:0.5});

  // Observe quiz scores when they appear
  const scoreObs = new MutationObserver(() => {
    const scoreEl = document.getElementById('quizScoreNum');
    if(scoreEl) counterObs.observe(scoreEl);
  });
  const quizResult = document.getElementById('quizResult');
  if(quizResult) scoreObs.observe(quizResult, {childList:true, subtree:true});
})();

/* ========================
   NAV ACTIVE SECTION HIGHLIGHT
   ======================== */
(function initSectionObserver(){
  const sections = document.querySelectorAll('.section[id^="section-"]');
  if(!sections.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        document.querySelectorAll('.nav-links a').forEach(l => {
          l.classList.toggle('active', l.dataset.section === id);
        });
      }
    });
  }, {threshold:0.15, rootMargin:'-80px 0px -50% 0px'});

  // Observe after render
  setTimeout(() => {
    document.querySelectorAll('.section[id^="section-"]').forEach(s => obs.observe(s));
  }, 200);
})();

/* ========================
   SMOOTH SECTION COLOR ATMOSPHERE
   ======================== */
(function initSectionAtmosphere(){
  const sectionColors = [
    'rgba(46,125,50,0.02)','rgba(27,94,32,0.02)','rgba(56,142,60,0.02)',
    'rgba(67,160,71,0.02)','rgba(76,175,80,0.02)','rgba(249,168,37,0.02)',
    'rgba(93,64,55,0.02)','rgba(239,83,80,0.02)','rgba(46,125,50,0.02)',
    'rgba(33,150,243,0.02)','rgba(156,39,176,0.02)','rgba(255,152,0,0.02)',
    'rgba(0,150,136,0.02)','rgba(244,67,54,0.02)'
  ];

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const idx = parseInt(entry.target.id.replace('section-',''),10) - 1;
        if(idx >= 0 && idx < sectionColors.length){
          document.body.style.backgroundColor = '';
          entry.target.style.background =
            `linear-gradient(180deg, transparent 0%, ${sectionColors[idx]} 50%, transparent 100%)`;
        }
      }
    });
  }, {threshold:0.3});

  setTimeout(() => {
    document.querySelectorAll('.section[id^="section-"]').forEach(s => obs.observe(s));
  }, 300);
})();

/* ========================
   BADGE TOAST ENHANCEMENT
   ======================== */
const _origAwardBadge = window.awardBadge;
window.awardBadge = function(badgeId){
  if(typeof _origAwardBadge === 'function') _origAwardBadge(badgeId);
  // The original already shows a toast, so this just wraps it
};

console.log('%c🛡️ CYB 201 — Visual Excellence Edition loaded for ' + LEARNER,
  'color:#4CAF50;font-size:14px;font-weight:bold;');