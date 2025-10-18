
/* Data model built from 'Business Entity Setup in India.docx'.
   Items can be strings or objects: { text: '...', url: 'https://...' } */
const DATA = {
  overview: {
    "Business Registration": [
      "Choose a legal structure: Private Limited Company / LLP / Sole Proprietorship.",
      { text: "Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN)." },
      { text: "Register the company via MCA Portal.", url: "https://www.mca.gov.in/content/mca/global/en/home.html" },
      "Get Certificate of Incorporation, PAN, and TAN.",
      { text: "Apply for GST Registration (mandatory if turnover > ₹20 lakh).", url: "https://www.gst.gov.in/" },
      { text: "Obtain Import Export Code (IEC) if publishing internationally.", url: "https://www.dgft.gov.in/CP/?opt=iec-profile-management" },
      { text: "Register with Startup India and apply for DPIIT recognition (optional but beneficial).", url: "https://www.startupindia.gov.in/" },
      "Open a current bank account in the company’s name."
    ],
    "Labour and HR Compliance": [
      "Register under Shops and Establishments Act (state-specific).",
      "Comply with Code on Wages, 2019 (minimum wages, equal pay, timely payments).",
      { text: "Register for EPF and ESIC if employee count exceeds thresholds.", url: "https://www.epfindia.gov.in/site_en/" },
      { text: "Implement POSH Policy (Prevention of Sexual Harassment)." },
      "Maintain employee records: offer letters, contracts, attendance, salary slips.",
      "Provide statutory benefits: gratuity, maternity leave, paid holidays.",
      "Conduct annual health checkups (if applicable under OSH Code).",
      "Display mandatory labour law posters at office premises."
    ],
    "Legal and Regulatory Obligation": [
      { text: "Apply for Trademark Registration for company name/logo.", url: "https://ipindiaonline.gov.in/trademarkefiling/user/frmloginNew.aspx" },
      { text: "Register Copyrights for game code, music, visuals, and storyline.", url: "https://copyright.gov.in/" },
      "Consider Patent Registration for unique game mechanics or technology.",
      "Draft and enforce Software License Agreements and EULAs.",
      "Ensure compliance with IT Act, 2000 for digital operations.",
      "Implement a Privacy Policy and Terms of Service on your website/app.",
      { text: "Comply with Advertising Standards Council of India (ASCI) guidelines.", url: "https://www.ascionline.in/" },
      { text: "If accepting foreign investment, comply with RBI & FEMA regulations.", url: "https://firms.rbi.org.in/" }
    ],
    "Game Publishing Specific": [
      "Obtain necessary Gaming Licenses (especially for real-money or fantasy games).",
      "Ensure games are skill-based to avoid gambling regulations.",
      "Integrate payment gateways (Razorpay, Instamojo, etc.) with proper KYC.",
      "Submit builds to Google Play Console and Apple App Store for review.",
      "Monitor app store compliance and respond to feedback promptly."
    ]
  },
  checklistSections: [
    {
      title: "Business Entity Setup",
      groups: [
        { title: "Private Limited Company (Pvt Ltd) – Pre-Incorporation", items: [
          "Decide company name and check availability on MCA portal.",
          { text: "Obtain Digital Signature Certificate (DSC) for all directors." },
          { text: "Apply for Director Identification Number (DIN) via SPICe+ form.", url: "https://www.mca.gov.in/content/mca/global/en/mca-services/company-services/incorporation/spicplus.html" },
          "Prepare documents: PAN, Aadhaar, address proof, passport-size photo.",
          "Draft Memorandum of Association (MoA) and Articles of Association (AoA)."
        ]},
        { title: "Private Limited Company (Pvt Ltd) – Incorporation via SPICe+", items: [
          { text: "Fill SPICe+ Part A (name reservation).", url: "https://www.mca.gov.in/content/mca/global/en/mca-services/company-services/incorporation/spicplus.html" },
          { text: "Fill SPICe+ Part B (incorporation, PAN, TAN, GST, EPFO, ESIC).", url: "https://www.mca.gov.in/content/mca/global/en/mca-services/company-services/incorporation/spicplus.html" },
          "Attach required documents and declarations.",
          "Pay incorporation fee and stamp duty.",
          { text: "Submit application on MCA Portal.", url: "https://www.mca.gov.in/content/mca/global/en/home.html" }
        ]},
        { title: "Private Limited Company (Pvt Ltd) – Post-Incorporation", items: [
          "Receive Certificate of Incorporation.",
          { text: "Apply for GST registration (if applicable).", url: "https://www.gst.gov.in/" },
          "Open company bank account.",
          "Register under Shops & Establishments Act (state-specific).",
          "Maintain statutory registers and file annual returns."
        ]},
        { title: "Limited Liability Partnership (LLP) – Pre-Incorporation", items: [
          { text: "Choose LLP name and check availability via RUN-LLP.", url: "https://www.mca.gov.in/content/mca/global/en/mca-services/llp-services/run.html" },
          "Obtain DSC for designated partners.",
          "Prepare documents: PAN, Aadhaar, address proof, photo, email, mobile.",
          "Ensure at least one designated partner is a resident of India."
        ]},
        { title: "LLP – Incorporation via FiLLiP Form", items: [
          { text: "Fill FiLLiP form on MCA portal.", url: "https://www.mca.gov.in/content/mca/global/en/mca-services/llp-services/incorporation-of-llp.html" },
          "Attach partner consent, address proof, DSC, PAN.",
          "Submit LLP Agreement within 30 days of incorporation.",
          "Pay registration fee based on capital contribution."
        ]},
        { title: "LLP – Post-Incorporation", items: [
          "Receive Certificate of Incorporation.",
          "Apply for PAN and TAN.",
          { text: "Register under GST (if applicable).", url: "https://www.gst.gov.in/" },
          "Open LLP bank account.",
          "File annual returns and Statement of Accounts & Solvency."
        ]},
        { title: "Sole Proprietorship – Setup Process", items: [
          "Choose a unique business name.",
          { text: "Obtain PAN card (if not already available)." },
          { text: "Get Aadhaar card linked with PAN." },
          "Open a current bank account in business name.",
          "Provide address proof (utility bill/rent agreement + NOC)."
        ]},
        { title: "Sole Proprietorship – Registrations", items: [
          "Register under Shop & Establishment Act (state-specific).",
          { text: "Apply for GST registration (if turnover > ₹20 lakh or interstate).", url: "https://www.gst.gov.in/" },
          { text: "Register under Udyam (MSME) for benefits.", url: "https://udyamregistration.gov.in/" },
          { text: "Apply for Professional Tax (if applicable)." },
          { text: "Obtain FSSAI license (if dealing with food).", url: "https://foscos.fssai.gov.in/" }
        ]},
        { title: "Sole Proprietorship – Post-Setup", items: [
          "Maintain basic accounting records.",
          "File income tax returns annually.",
          "Renew licenses as required."
        ]}
      ]
    },
    {
      title: "IEC for International Publishing",
      groups: [
        { title: "Eligibility", items: [
          "Confirm your business type (Sole Proprietorship/Partnership/LLP/Company/Trust/Society/HUF).",
          "Ensure you have a valid PAN (Permanent Account Number)."
        ]},
        { title: "Documents Required", items: [
          "PAN Card of the business or individual.",
          "Aadhaar/Passport/Voter ID (for identity verification).",
          "Certificate of Incorporation / Partnership Deed / MSME Registration.",
          "Proof of business address (electricity bill, rent agreement, etc.).",
          "Bank Certificate or Cancelled Cheque.",
          "Valid email ID and mobile number (linked with Aadhaar).",
          "Passport-size photograph (JPEG under 50KB).",
          "Digital Signature Certificate (DSC) – mandatory for companies/LLPs."
        ]},
        { title: "Online Registration (DGFT Portal)", items: [
          { text: "Visit DGFT Portal and click 'Apply for IEC'.", url: "https://www.dgft.gov.in/CP/?opt=iec-profile-management" },
          "Register using email and mobile OTP.",
          { text: "Start a fresh IEC application and fill Form ANF-2A.", url: "https://www.dgft.gov.in/" },
          "Upload required documents in PDF/JPEG and attach DSC (if applicable).",
          "Pay ₹500 government fee online and submit the application."
        ]},
        { title: "Post-Submission", items: [
          "Receive IEC Certificate via email.",
          { text: "Download IEC from DGFT portal (IEC Profile Management).", url: "https://www.dgft.gov.in/CP/?opt=iec-profile-management" },
          "Update IEC annually between April–June to avoid deactivation.",
          "Use IEC for customs clearance, international banking, export incentives."
        ]}
      ]
    },
    {
      title: "Startup India DPIIT Recognition",
      groups: [
        { title: "Step 1: Incorporate Your Business", items: [
          "Choose a legal structure: Private Limited / LLP / Partnership.",
          { text: "Register with MCA or Registrar of Firms.", url: "https://www.mca.gov.in/content/mca/global/en/home.html" },
          "Obtain Certificate of Incorporation.",
          "Get PAN and TAN for the business."
        ]},
        { title: "Step 2: Register on Startup India Portal", items: [
          { text: "Visit Startup India Portal.", url: "https://www.startupindia.gov.in/" },
          { text: "Click 'Register' and create an account.", url: "https://www.startupindia.gov.in/" },
          "Verify email and log in to dashboard."
        ]},
        { title: "Step 3: Prepare Required Documents", items: [
          "Certificate of Incorporation.",
          "PAN card of the entity.",
          "Office address proof.",
          "Brief description of business and innovation.",
          "Details of funding received (if any).",
          "Website or product screenshots (optional)."
        ]},
        { title: "Step 4: Apply for DPIIT Recognition", items: [
          "Open 'Recognition' tab and click 'Apply for DPIIT Recognition'.",
          "Fill entity details (name, structure, date of incorporation, sector).",
          "Describe innovation and scalability.",
          "Upload required documents.",
          "Self-certify compliance with labour and environmental laws."
        ]},
        { title: "Step 5: Submit Application", items: [
          "Review all details.",
          "Submit and track status from dashboard."
        ]},
        { title: "Step 6: Receive DPIIT Certificate & Benefits", items: [
          "Download Certificate of Recognition once approved.",
          "Apply for tax exemption under Section 80-IAC.",
          "Claim Angel Tax exemption under Section 56(2)(viib).",
          "Avail IPR benefits (fast-track filings).",
          "Participate in government tenders (relaxed norms).",
          "Access Startup India Seed Fund Scheme and grants."
        ]}
      ]
    },
    {
      title: "Copyright Registration",
      groups: [
        { title: "What You Can Copyright", items: [
          "Game Code (source/object) as literary work.",
          "Music & Sound Effects (compositions/recordings).",
          "Visuals (characters, UI/UX, backgrounds, concept art).",
          "Storyline & Scripts (dialogues, lore, quests).",
          "Cinematics (cutscenes) as audio-visual works."
        ]},
        { title: "Documents Required", items: [
          "Soft copy of the work (code, music, visuals, script, etc.).",
          "Author’s identity proof (PAN, Aadhaar).",
          "NOC from publisher/producer (if applicable).",
          "NOC from co-authors/contributors (if applicable).",
          "Power of Attorney (if filing through an agent).",
          "Signed declaration of originality."
        ]},
        { title: "Online Registration Process", items: [
          { text: "Visit Copyright Office India and create an account.", url: "https://copyright.gov.in/UserRegistration/frmLoginPage.aspx" },
          "Select correct category (Literary/Musical/Artistic/Sound/Film).",
          "Fill Form XIV for each category.",
          "Upload the work and required documents.",
          "Pay applicable fee (₹500–₹2,000).",
          "Submit the application."
        ]},
        { title: "Post-Submission Process", items: [
          "Receive Diary Number (acknowledgment).",
          "Wait for 30-day objection period.",
          "Respond to objections (if any).",
          "Application proceeds to scrutiny.",
          "Receive Copyright Registration Certificate upon approval."
        ]},
        { title: "Post-Registration Tips", items: [
          "Use © symbol with year and author name.",
          "Maintain version history and metadata.",
          "Keep backups and receipts.",
          "Update records if assets are modified or expanded."
        ]}
      ]}
    ,
    {
      title: "Trademark Registration (Company Name)",
      groups: [
        { title: "Pre-Registration Preparation", items: [
          "Choose trademark type (Wordmark/Logo/Combination).",
          { text: "Ensure name/logo is unique (check IP India).", url: "https://ipindia.gov.in/" },
          { text: "Conduct trademark search to check availability.", url: "https://tmrsearch.ipindia.gov.in/estatus" },
          "Choose appropriate class under NICE classification."
        ]},
        { title: "Documents Required", items: [
          "Certificate of Incorporation (Company/LLP).",
          "Partnership Deed (Partnership Firms).",
          "PAN & Aadhaar of authorized signatory.",
          "Trademark logo/image (if applicable).",
          "Form-48 (authorization to trademark agent)."
        ]},
        { title: "Filing the Application", items: [
          { text: "Register on IP India Trademark Portal.", url: "https://ipindiaonline.gov.in/trademarkefiling/user/frmloginNew.aspx" },
          "Fill Form TM-A for registration.",
          "Upload documents and trademark image (if applicable).",
          "Pay fee: ₹4,500 (individual/startup/small) or ₹9,000 (others)."
        ]},
        { title: "Post-Filing Process", items: [
          "Receive acknowledgment with application number.",
          { text: "Monitor status via Trademark Status Tracker.", url: "https://tmrsearch.ipindia.gov.in/estatus" },
          "Respond to examination report/objections.",
          "Await publication in Trademark Journal.",
          "If no opposition within 4 months, proceed to registration."
        ]},
        { title: "Final Steps", items: [
          "Receive Trademark Registration Certificate.",
          "Use ® symbol once registered.",
          "Renew trademark every 10 years."
        ]}
      ]
    },
    {
      title: "License Agreement and EULA",
      groups: [
        { title: "Preparation", items: [
          "Identify software type (desktop/mobile/SaaS/embedded).",
          "Determine licensing model (proprietary/open-source/freemium/subscription).",
          "Define scope of use (personal/commercial/enterprise/educational).",
          "Decide negotiable vs standard click-wrap."
        ]},
        { title: "Key Clauses", items: [
          "License Grant (rights: install/use/modify).",
          "Restrictions (no reverse engineering/redistribution/resale).",
          "IP Rights (ownership of code/assets/trademarks).",
          "Payment Terms (fees/renewal/refund).",
          "Term & Termination (duration/conditions).",
          "Limitation of Liability.",
          "Indemnification.",
          "Confidentiality.",
          "Governing Law & Jurisdiction (India).",
          "Privacy & Data Use (collection/processing/consent).",
          "Update & Modification Policy."
        ]},
        { title: "Drafting & Review", items: [
          "Use vetted templates or consult counsel.",
          "Customize clauses for model and user base.",
          "Ensure readability; avoid heavy jargon.",
          "Translate for regional users if needed."
        ]},
        { title: "Implementation", items: [
          "Integrate acceptance into install/sign-up flow.",
          "Use click-wrap or scroll-wrap.",
          "Store acceptance logs.",
          "Display EULA on website/app."
        ]},
        { title: "Enforcement & Maintenance", items: [
          "Monitor compliance/misuse.",
          "Update agreements periodically.",
          "Respond to violations (C&D or legal).",
          "Maintain version history."
        ]}
      ]
    },
    {
      title: "IT Act 2000 Compliance",
      groups: [
        { title: "Data Protection & Privacy", items: [
          "Implement reasonable security practices (e.g., ISO/IEC 27001).",
          "Publish a Privacy Policy.",
          "Obtain user consent before collecting personal data.",
          "Encrypt sensitive data at rest and in transit.",
          "Limit data collection to necessary operations.",
          "Prepare for DPDP Act, 2023 compliance."
        ]},
        { title: "Cybersecurity Measures", items: [
          "Appoint Compliance & Grievance Officers (if applicable).",
          "Real-time monitoring for threats.",
          "Maintain logs/audit trails for at least 180 days.",
          { text: "Report incidents to CERT-In within 6 hours of detection.", url: "https://www.cert-in.org.in/s2cMainServlet?pageid=PUBWEL01" },
          "Periodic VAPT.",
          "Employee training on cybersecurity and data handling."
        ]},
        { title: "Legal & Technical Documentation", items: [
          "Draft Terms of Service and EULA.",
          "Use digital signatures (IT Act compliant).",
          "Maintain records of user agreements/consent logs.",
          "Ensure intermediary guidelines compliance (if platform)."
        ]},
        { title: "Regulatory & Reporting Obligations", items: [
          "Register with CERT-In if required.",
          "Respond to data requests per IT Act.",
          "Include data protection clauses in vendor contracts.",
          "Annual policy reviews and updates."
        ]},
        { title: "Business Continuity & Incident Response", items: [
          "Develop Incident Response Plan.",
          "Create Business Continuity Plan.",
          "Conduct mock drills/tabletop exercises."
        ]}
      ]
    },
    {
      title: "ASCI Compliance (Advertising)",
      groups: [
        { title: "General Advertising Guidelines", items: [
          { text: "Truthful, honest, non-misleading ads.", url: "https://www.ascionline.in/" },
          "Avoid exaggeration/false claims.",
          "No offensive/obscene/discriminatory content.",
          "Do not promote hazardous or unacceptable products.",
          "Maintain fairness; avoid disparaging competitors.",
          { text: "Comply with Consumer Protection Act, 2019.", url: "https://www.ascionline.in/" }
        ]},
        { title: "Influencer & Digital Content", items: [
          { text: "Disclose paid partnerships clearly (#Ad, #Sponsored, etc.).", url: "https://www.ascionline.in/" },
          "Place disclosures early (first lines; 3s on-screen in videos; start/end in lives).",
          "Avoid vague tags like #sp or #spon.",
          "Ensure disclosures consistent across platforms."
        ]},
        { title: "Legal & Ethical Practices", items: [
          "Avoid greenwashing without evidence.",
          "Do not promote illegal products/services.",
          "Endorser due diligence.",
          { text: "Use ASCI advisory for pre-launch reviews.", url: "https://www.ascionline.in/" },
          "Monitor compliance and respond to complaints."
        ]},
        { title: "Enforcement & Monitoring", items: [
          "Keep records of ad content and influencer contracts.",
          "Train teams and influencers.",
          { text: "Subscribe to ASCI updates and advisories.", url: "https://www.ascionline.in/" },
          "Respond to ASCI notices in time."
        ]}
      ]
    },
    {
      title: "RBI & FEMA (Foreign Investment)",
      groups: [
        { title: "Pre-Investment Preparation", items: [
          "Identify FDI route (Automatic/Approval via NSWS).",
          { text: "Verify sectoral caps and eligibility.", url: "https://www.nsws.gov.in/" },
          "Ensure compliance with DPIIT FDI Policy."
        ]},
        { title: "Documentation & KYC", items: [
          "Obtain KYC of foreign investor from AD Bank.",
          "Receive Foreign Inward Remittance Certificate (FIRC).",
          "Valuation certificate from Merchant Banker/CA (share pricing)."
        ]},
        { title: "Share Issuance & Reporting", items: [
          "Board resolution for share allotment.",
          "Allot shares within 60 days of funds.",
          "Refund if not allotted within next 15 days.",
          { text: "File Form FC-GPR within 30 days via SMF on FIRMS Portal.", url: "https://firms.rbi.org.in/" }
        ]},
        { title: "Annual & Statutory Filings", items: [
          { text: "File FLA Return by July 15 on FLAIR Portal.", url: "https://flair.rbi.org.in/" },
          "Update records under Companies Act, 2013.",
          "File forms with RoC (e.g., PAS-3)."
        ]},
        { title: "Tax & Financial Compliance", items: [
          "Withholding Tax (TDS) rules.",
          "Transfer Pricing for intercompany.",
          "Maintain audit trail (FIRC, KYC, valuation, resolutions, filings)."
        ]},
        { title: "Post-Investment Monitoring", items: [
          "Track changes in FDI policy and FEMA.",
          "Maintain documentation for audits.",
          "Respond promptly to RBI/Govt queries."
        ]}
      ]
    },
    {
      title: "Privacy Policy & Terms of Service",
      groups: [
        { title: "Preparation", items: [
          "Identify personal data collected (name, email, phone, IP, device, payments, cookies).",
          "Determine collection methods (forms, cookies, third-party tools).",
          "Define purposes (UX, analytics, marketing, transactions).",
          "List third parties (e.g., analytics, payment gateways)."
        ]},
        { title: "Drafting the Privacy Policy", items: [
          "Intro clause with company name and scope.",
          "State data collected, methods, purposes, storage/protection, sharing.",
          "User rights (access, correction, deletion).",
          "Cookie and tracking disclosures.",
          "Contact info for privacy queries.",
          "Add 'Last Updated' date and version.",
          "Ensure compliance with IT Act, DPDP Act; GDPR/CCPA if applicable."
        ]},
        { title: "Drafting the Terms of Service", items: [
          "Scope of services.",
          "User obligations and restrictions.",
          "IP rights.",
          "Payment terms (if any).",
          "Disclaimer of warranties; limitation of liability.",
          "Termination conditions.",
          "Governing law & jurisdiction (India).",
          "Support/legal contact details."
        ]},
        { title: "Implementation on Website/App", items: [
          "Create dedicated pages for Privacy Policy and Terms.",
          "Link in footer, signup/login, checkout, app listings.",
          "Use click-wrap/scroll-wrap mechanisms.",
          "Log and store consent records securely."
        ]},
        { title: "Maintenance", items: [
          "Review/update annually or when practices change.",
          "Notify users of significant changes (email/app notifications)."
        ]}
      ]
    }
  ]
};

/* ===== Persistence (localStorage) ===== */
const STORAGE_KEY = "biz-setup-progress-v1";
function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }catch(e){ return {}; }
}
function saveProgress(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

/* Progress state shape: { [sectionTitle]: { [groupTitle]: { [itemIndex]: true/false } } } */
let progress = loadProgress();

/* ===== Helpers ===== */
const el = sel => document.querySelector(sel);
const elAll = sel => document.querySelectorAll(sel);

function createItemNode(textOrObj){
  const span = document.createElement('span');
  span.className = 'text';
  if(typeof textOrObj === 'string'){
    span.textContent = textOrObj;
  } else if (textOrObj && typeof textOrObj === 'object'){
    const t = textOrObj.text || '';
    if(textOrObj.url){
      const a = document.createElement('a');
      a.href = textOrObj.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = t || textOrObj.url; span.appendChild(a);
    } else {
      span.textContent = t;
    }
  }
  return span;
}

/* ===== UI Builders ===== */
function buildOverview(){
  const acc = el('#overviewAccordion');
  const tpl = document.getElementById('accordionSectionTpl');
  Object.entries(DATA.overview).forEach(([sectionTitle, items]) => {
    const node = tpl.content.cloneNode(true);
    const toggle = node.querySelector('.accordion-toggle');
    const content = node.querySelector('.accordion-content');
    toggle.textContent = sectionTitle;
    const ul = document.createElement('ul');
    items.forEach(t => {
      const li = document.createElement('li');
      if(typeof t === 'object' && t.url){
        const a = document.createElement('a'); a.href = t.url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = t.text; li.appendChild(a);
      } else {
        li.textContent = typeof t === 'string' ? t : t.text;
      }
      ul.appendChild(li);
    });
    content.appendChild(ul);
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;
    });
    acc.appendChild(node);
  });
}

function buildTabs(){
  const tabsUl = el('#tabs');
  const tpl = document.getElementById('tabItemTpl');
  DATA.checklistSections.forEach((sec, idx) => {
    const node = tpl.content.cloneNode(true);
    const li = node.querySelector('li.tab');
    const btn = node.querySelector('button.tab-btn');
    const titleSpan = node.querySelector('.tab-title');
    const badge = node.querySelector('.tab-badge');
    titleSpan.textContent = sec.title;
    badge.textContent = calcSectionPct(sec.title) + '%';
    btn.addEventListener('click', () => selectTab(idx));
    tabsUl.appendChild(node);
  });
}

let currentIndex = null;
function selectTab(idx){
  currentIndex = idx;
  elAll('#tabs .tab').forEach((li, i) => li.classList.toggle('active', i===idx));
  const sec = DATA.checklistSections[idx];
  el('#currentTabTitle').textContent = sec.title;
  const pct = calcSectionPct(sec.title);
  el('#currentTabProgress .pct').textContent = pct + '%';
  el('#currentTabProgress .fill').style.width = pct + '%';
  renderChecklist(sec);
  updateOverallProgressBar(); // keep footer live on every tab
}

function renderChecklist(sec){
  const container = el('#checklistContainer');
  container.innerHTML = '';
  const groupTpl = document.getElementById('checklistGroupTpl');
  sec.groups.forEach(group => {
    const gnode = groupTpl.content.cloneNode(true);
    gnode.querySelector('.group-title').textContent = group.title;
    const ul = gnode.querySelector('.group-items');
    group.items.forEach((item, itemIdx) => {
      const li = document.createElement('li');
      li.className = 'item';
      const label = document.createElement('label');
      const cb = document.createElement('input'); cb.type = 'checkbox';
      cb.checked = getItemProgress(sec.title, group.title, itemIdx);
      cb.addEventListener('change', () => {
        setItemProgress(sec.title, group.title, itemIdx, cb.checked);
        updateAllProgressBadges();
        updateOverallProgressBar();
        const pct = calcSectionPct(sec.title);
        el('#currentTabProgress .pct').textContent = pct + '%';
        el('#currentTabProgress .fill').style.width = pct + '%';
      });
      label.appendChild(cb);
      label.appendChild(createItemNode(item));
      li.appendChild(label);
      ul.appendChild(li);
    });
    container.appendChild(gnode);
  });
}

/* ===== Progress Calculations ===== */
function getItemProgress(sectionTitle, groupTitle, itemIdx){
  return Boolean(progress?.[sectionTitle]?.[groupTitle]?.[itemIdx]);
}
function setItemProgress(sectionTitle, groupTitle, itemIdx, value){
  progress[sectionTitle] = progress[sectionTitle] || {};
  progress[sectionTitle][groupTitle] = progress[sectionTitle][groupTitle] || {};
  progress[sectionTitle][groupTitle][itemIdx] = value;
  saveProgress(progress);
}
function calcSectionPct(sectionTitle){
  const sec = DATA.checklistSections.find(s => s.title === sectionTitle);
  if(!sec) return 0;
  let total = 0, done = 0;
  sec.groups.forEach(g => {
    total += g.items.length;
    g.items.forEach((_, idx) => { if(getItemProgress(sectionTitle, g.title, idx)) done++; });
  });
  return total ? Math.round(done/total*100) : 0;
}
function calcOverallPct(){
  let total = 0, done = 0;
  DATA.checklistSections.forEach(sec => {
    sec.groups.forEach(g => {
      total += g.items.length;
      g.items.forEach((_, idx) => { if(getItemProgress(sec.title, g.title, idx)) done++; });
    });
  });
  return total ? Math.round(done/total*100) : 0;
}
function updateAllProgressBadges(){
  elAll('#tabs .tab').forEach((li, i) => {
    const sec = DATA.checklistSections[i];
    const badge = li.querySelector('.tab-badge');
    badge.textContent = calcSectionPct(sec.title) + '%';
  });
}
function updateOverallProgressBar(){
  const pct = calcOverallPct();
  el('#overallPct').textContent = pct + '%';
  el('#overallFill').style.width = pct + '%';
}

/* ===== Search on Tabs ===== */
const tabSearch = el('#tabSearch');
if(tabSearch){
  tabSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    elAll('#tabs .tab').forEach((li, i) => {
      const sec = DATA.checklistSections[i];
      const match = sec.title.toLowerCase().includes(q);
      li.style.display = match ? '' : 'none';
    });
  });
}

/* ===== Export / Import Progress ===== */
el('#resetProgress').addEventListener('click', () => {
  if(confirm('Reset all saved progress?')){ localStorage.removeItem(STORAGE_KEY); progress = {}; updateAllProgressBadges(); updateOverallProgressBar(); if(currentIndex!==null) selectTab(currentIndex); }
});

el('#exportProgress').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(progress, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'business-setup-progress.json'; a.click();
  URL.revokeObjectURL(url);
});

el('#importProgress').addEventListener('click', () => {
  el('#importFile').click();
});

el('#importFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if(typeof parsed === 'object'){ progress = parsed; saveProgress(progress); updateAllProgressBadges(); updateOverallProgressBar(); if(currentIndex!==null) selectTab(currentIndex); alert('Progress imported successfully.'); }
    } catch(err){ alert('Invalid JSON file.'); }
  };
  reader.readAsText(file);
});

/* ===== Feedback Button (mailto) ===== */
el('#feedbackBtn').addEventListener('click', () => {
  const overall = calcOverallPct();
  const subject = encodeURIComponent('Feedback: Business Entity Setup in India – Checklist');
  const body = encodeURIComponent(`Hi Amol,\n\nThanks for the interactive checklist. My current overall completion is ${overall}%.\n\nFeedback / Notes:\n- (enter your feedback here)\n\nRegards,\n`);
  window.location.href = `mailto:amol.more@hotmail.com?subject=${subject}&body=${body}`;
});

/* ===== Init ===== */
function init(){
  buildOverview();
  buildTabs();
  updateAllProgressBadges();
  updateOverallProgressBar();
  if(DATA.checklistSections.length > 0){ selectTab(0); }
}

document.addEventListener('DOMContentLoaded', init);
