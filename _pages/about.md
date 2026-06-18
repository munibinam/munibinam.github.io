---
permalink: /
title: ""
excerpt: "Postdoctoral Associate at the University of Florida"
author_profile: true
redirect_from:
  - /about/
  - /about.html
classes: wide
---

<style>
/* Modern, Minimalist Academic Design */

:root {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
  --text-color: #333;
  --light-bg: #f8f9fa;
  --border-color: #e1e4e8;
  --hover-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Removed hero section styles */

.focus-areas {
  text-align: center;
  padding: 2em 0;
  margin: 2em 0;
  background-color: var(--light-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
}

.focus-areas h2 {
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 1em;
  font-weight: 500;
}

.focus-fields {
  font-size: 1.05em;
  color: var(--text-color);
  font-weight: 400;
}

.chapter-section {
  background: white;
  padding: 1.8em;
  margin: 1.5em 0;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.2s ease;
}

/* Removed hover effects - using scroll animations instead */

.chapter-number {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.chapter-title {
  font-size: 1.2em;
  color: var(--primary-color);
  margin-bottom: 0.8em;
  font-weight: 500;
  line-height: 1.4;
}

.chapter-title a {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.chapter-title a:hover {
  color: var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.chapter-section p {
  color: #555;
  line-height: 1.6;
  font-size: 0.95em;
  margin-bottom: 1em;
}

.chapter-meta {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px solid var(--border-color);
}

.status-badge {
  display: inline-block;
  background-color: var(--light-bg);
  color: #666;
  padding: 0.3em 0.8em;
  font-size: 0.8em;
  font-weight: 500;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.chapter-link-small {
  display: inline-block;
  color: var(--accent-color);
  font-size: 0.8em;
  text-decoration: none;
  border-bottom: 1px solid rgba(52, 152, 219, 0.3);
}

.chapter-link-small:hover {
  border-bottom-color: var(--accent-color);
}

.background-section {
  background-color: white;
  padding: 2em;
  margin: 3em 0;
  border: 1px solid var(--border-color);
  border-radius: 16px;
}

.background-section h3 {
  color: var(--primary-color);
  font-size: 1.3em;
  margin-bottom: 1.5em;
  font-weight: 400;
}

.background-section ul {
  margin-bottom: 1.5em;
}

.background-section li {
  margin-bottom: 0.7em;
  line-height: 1.7;
  color: #555;
}

.background-section strong {
  color: var(--text-color);
}

.connect-section {
  background-color: var(--light-bg);
  padding: 1.5em 2em;
  text-align: left;
  margin: 2em 0;
  border: 1px solid var(--border-color);
  border-radius: 16px;
}

.connect-section h3 {
  color: var(--primary-color);
  font-size: 1.2em;
  margin-bottom: 0.8em;
  font-weight: 400;
}

.connect-section p {
  margin-bottom: 1em;
  line-height: 1.6;
  color: #555;
  font-size: 0.95em;
}

.connect-links {
  line-height: 1.7;
  font-size: 0.95em;
}

.connect-links a {
  color: var(--accent-color);
  text-decoration: none;
  border-bottom: 1px solid rgba(52, 152, 219, 0.3);
  transition: border-color 0.2s ease;
}

.connect-links a:hover {
  border-bottom-color: var(--accent-color);
}

/* Personal Interests Section */
.personal-intro {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 3em auto;
  padding: 0 1em;
  font-size: 1.05em;
  color: #666;
  line-height: 1.8;
}

.personal-section {
  background: white;
  padding: 2em;
  margin: 2em 0;
  border: 1px solid var(--border-color);
  border-radius: 16px;
}

.personal-section h3 {
  color: var(--primary-color);
  font-size: 1.3em;
  margin-bottom: 1em;
  font-weight: 400;
}

.personal-section .emoji {
  font-size: 1.2em;
  margin-right: 0.3em;
}

.personal-section p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5em;
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
  margin-top: 2em;
}

.photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

.photo-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.photo-caption {
  padding: 0.8em;
  background: white;
  text-align: center;
  color: #666;
  font-size: 0.9em;
  border-top: 1px solid var(--border-color);
}

.portfolio-link {
  display: inline-block;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05em;
  padding: 0.8em 1.5em;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.portfolio-link:hover {
  background: var(--accent-color);
  color: white;
}

@media (max-width: 768px) {
  .hero-section h1 { font-size: 1.8em; }
  .hero-section .subtitle { font-size: 1em; }
  .chapter-section { padding: 1.5em; }
  .background-section { padding: 1.5em; }

  .photo-gallery {
    grid-template-columns: 1fr;
  }

  .photo-item img {
    height: 250px;
  }

  .personal-section {
    padding: 1.5em;
  }
}
</style>

## About

I am an applied economist working in natural resource economics. My research uses econometric methods to study how natural resources—water, land, and agricultural systems—respond to economic and environmental pressures, with the goal of producing rigorous evidence that informs resource management and policy.

Through an interdisciplinary approach, my work connects economic science with environmental policy to develop tools that help communities and policymakers manage natural resources sustainably.

---

<div class="focus-areas">
  <h2>Research Fields</h2>
  <div class="focus-fields">
    Natural Resource Economics • Applied Econometrics • Agricultural Economics
  </div>
</div>

---

## Dissertation

My dissertation explores the implications of extreme weather events on natural resource outcomes:

<div class="chapter-section" id="dissertation-research">
  <div class="chapter-number">Chapter 1</div>
  <div class="chapter-title">
    <a href="/files/Job_market_paper_2025.pdf" target="_blank">Measuring Extreme Weather: Implications for Applied Economics Research</a>
  </div>

  <p>Many weather exposure measures are nonlinear transformations of interpolated station data. Because transformation and spatial interpolation do not commute, the order in which they are applied matters. Using weather from 1940 to 2024, we show that interpolating before transforming compresses the extreme-heat tail with cross-validated deviations exceeding 40 percent at 35\textdegree C. This compression propagates into yield-damage estimates primarily through measured inputs rather than estimated coefficients, and into downstream conclusions about crop insurance pricing, farmer adaptation and warming projections.</p>

  <div class="chapter-meta">
    <span class="status-badge">Under Review • Job Market Paper</span>
  </div>
</div>

<div class="chapter-section">
  <div class="chapter-number">Chapter 2</div>
  <div class="chapter-title">The Impact of Extreme Weather Events on Drinking Water Quality in the United States</div>

  <p>Daily weather aggregates can mask the temporal patterns that affect drinking water contamination. Using hourly weather data and water compliance samples from Kentucky community water systems (2005--2024), we show that disinfection byproduct concentrations respond most strongly to sustained heat, whereas microbial contamination responds most strongly to short-duration precipitation intensity. A shift from the 25th to 75th percentile of the 14-day temperature distribution raises trihalomethane concentrations by 42 percent, and each 5 mm per hour increase in peak hourly rainfall intensity raises total coliform detection by about 12 percent relative to baseline. Temperature effects on disinfection byproducts are about twice as large in communities with high poverty rates, and at high temperatures, the effects continue to rise in small systems but level off in larger systems. The findings suggest that both monitoring and adaptation policy may be more effective when aligned with the underlying contamination pathway.</p>

  <div class="chapter-meta">
    <span class="status-badge">Working Paper</span>
    <span class="chapter-link-small">Paper available upon request</span>
  </div>
</div>

<div class="chapter-section">
  <div class="chapter-number">Chapter 3</div>
  <div class="chapter-title">
  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5901666" target="_blank">Lot Size Composition and Welfare Effects of Water Conservation Mandates</a>
  </div>

  <p>We examine how lot size composition and housing wealth shape price elasticity, conservation under California’s 2015 drought mandate, and the resulting welfare costs. Using a panel of water agencies, we exploit within-agency temporal variation in housing characteristics. Agencies with more large-lot parcels are more price responsive, while wealthier agencies are less so. The mandate reduced consumption across all agency types, including those with near-zero price elasticity. Agencies with the least elastic demand bear the highest welfare cost per unit saved, though these estimates are imprecise near zero elasticity. The findings indicate that mandates reduce use even where prices do not, so the two instruments reach different groups rather than being interchangeable.</p>

  <div class="chapter-meta">
    <span class="status-badge">Working Paper</span>
    <span class="chapter-link-small">Under Review • Paper available upon request</span>
  </div>
</div>

---

<div class="background-section">
  <h3>Academic Background</h3>
  <ul>
    <li><strong>Postdoctoral Associate - Department of Food and Resource Economics </strong> — University of Florida</li>
    <li><strong>PhD - Department of Agricultural Economics</strong> — University of Kentucky</li>
    <li><strong>Visiting Researcher - Department of Public Policy </strong> — University of California, Riverside</li>
    <li><strong>Masters - Department of Economics in Economics</strong> — Vanderbilt University</li>
    <li><strong>Bachelors - Department of Economics</strong> — National University of Sciences and Technology</li>
  </ul>

  <h3>Technical Skills</h3>
  <ul>
    <li><strong>Econometric Methods:</strong> Panel data analysis, spatial econometrics, causal inference, difference-in-differences</li>
    <li><strong>Programming & Software:</strong> R, Python, Stata, ArcGIS, high-performance computing clusters</li>
    <li><strong>Data Management:</strong> Large-scale climate datasets (PRISM, NOAA), agricultural surveys (NASS), EPA environmental monitoring data</li>
  </ul>

</div>

---

## Beyond Research

<div class="personal-section">
  <h3>Running</h3>
  <p>When not working, I enjoy going out for a run or doing other physical activities like hiking, biking.</p>

  <div class="photo-gallery">
    <div class="photo-item">
      <img src="/images/personal/running_finish.jpg" alt="3rd Place Horse Capital Marathon" loading="lazy">
      <div class="photo-caption">3rd Place Horse Capital Marathon</div>
    </div>
    <div class="photo-item">
      <img src="/images/personal/running_gobbler_2024.jpg" alt="The Gobbler Half Marathon" loading="lazy">
      <div class="photo-caption">The Gobbler Half Marathon</div>
    </div>
    <div class="photo-item">
      <img src="/images/personal/running_marathon_2024.jpg" alt="Survive the Night Marathon Relay" loading="lazy">
      <div class="photo-caption">Survive the Night Marathon Relay</div>
    </div>
  </div>
</div>

<div class="personal-section">
  <h3>Photography</h3>
  <p>I am also a hobbyist photographer and like to travel and photograph different landscapes, wildlife and nature.</p>

  <div class="photo-gallery">
    <div class="photo-item">
      <img src="/images/personal/house_finch_2.JPG" alt="House Finch" loading="lazy">
      <div class="photo-caption">House Finch</div>
    </div>
    <div class="photo-item">
      <img src="/images/personal/white_sands.jpg" alt="White Sands National Park" loading="lazy">
      <div class="photo-caption">White Sands National Park</div>
    </div>
    <div class="photo-item">
      <img src="/images/personal/fall_colors.JPG" alt="Fall Colors" loading="lazy">
      <div class="photo-caption">Fall Colors</div>
    </div>
  </div>

  <p style="text-align: center; margin-top: 2em;">
    <a href="https://500px.com/p/min233" target="_blank" class="portfolio-link">Portfolio →</a>
  </p>
</div>

---

## Contact

<div class="connect-section">
  <h3>Let's Connect</h3>
  <p>Please reach out if you want to discuss research collaborations or just want to talk about anything.</p>
  
  <div class="connect-links">
    <strong>Email:</strong> <a href="mailto:inamm@ufl.edu">inamm@ufl.edu</a><br>
    <strong>Location:</strong> Immokalee, Florida<br>
    <strong>Center:</strong> <a href="https://swfrec.ifas.ufl.edu/" target="_blank">Southwest Florida Research and Education Center, University of Florida</a>
  </div>
</div>

---
