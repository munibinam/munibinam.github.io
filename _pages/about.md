---
permalink: /
title: ""
excerpt: "PhD Candidate at the University of Kentucky"
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

I am an applied economist working on the economic impacts of extreme weather events. My research addresses methodological challenges in measuring extremes, with the goal of providing more accurate estimates to inform resilience strategies.

Through an interdisciplinary approach, my work helps connect economic science with environmental policy to develop tools that help communities and policymakers build resilience against increasing climate variability.

---

<div class="focus-areas">
  <h2>Research Fields</h2>
  <div class="focus-fields">
    Applied Econometrics • Environmental & Resource Economics • Agricultural & Production Economics
  </div>
</div>

---

## Dissertation

My dissertation explores the implications of extreme weather events on various applied economics outcomes:

<div class="chapter-section" id="dissertation-research">
  <div class="chapter-number">Chapter 1</div>
  <div class="chapter-title">
    <a href="/files/Job_market_paper_2025.pdf" target="_blank">Measuring Extreme Weather: Implications for Applied Economics Research</a>
  </div>

  <p>Gridded weather data relies on daily temperature and precipitation measures from sparsely distributed weather stations, which is interpolated across space to generate accurate weather measures in levels.</p>

  <p><strong>The Issue.</strong> Order of operation for spatial interpolation and transformation to an extreme weather measure matters. Post-transformation to extreme weather metrics following spatial interpolation of weather station data is the 'Conventional Approach' we see in thousands of published papers using the gridded weather data. Pre-transformation to extreme weather metrics prior to spatial interpolation is the 'New Approach' we propose.</p>

  <p><strong>Case study.</strong> Using exposure hours in extreme temperature bins, following Schlenker and Roberts (2009), and extreme moisture conditions using the SPI-index, we show significant differences in extreme weather metrics depending on which approach is used. We find that the New Approach we propose does a much better job at recovering ground truth, especially at the tails where, arguably, scientists are most interested in for measuring weather extremes. Finally, we show that our proposed New Approach generates differences in U.S. Corn Yield Response Function.</p>

  <div class="chapter-meta">
    <span class="status-badge">Under Review • Job Market Paper</span>
  </div>
</div>

<div class="chapter-section">
  <div class="chapter-number">Chapter 2</div>
  <div class="chapter-title">The Impact of Extreme Weather Events on Drinking Water Quality in the United States</div>

  <p>Using compliance data from water systems linked to sub-daily weather observations, I examine how temperature, precipitation, and soil moisture affect microbial and chemical contamination. Extreme heat increases disinfection byproducts and coliform detection, whereas precipitation intensity drives microbial risk. Antecedent soil moisture strongly mediates impacts; wet conditions reduce contamination while dry soils amplify subsequent risks. Small systems show higher weather sensitivity compared to large systems for microbial outcomes, indicating disparate climate vulnerabilities. The findings highlight that weather already degrades water quality, with impacts concentrated in resource-limited systems serving rural communities, requiring targeted adaptation as extremes intensify.</p>

  <div class="chapter-meta">
    <span class="status-badge">Working Paper</span>
    <span class="chapter-link-small">Paper available upon request</span>
  </div>
</div>

<div class="chapter-section">
  <div class="chapter-number">Chapter 3</div>
  <div class="chapter-title">Lot Size Composition and the Welfare Effects of Water Conservation Mandates</div>

  <p>Residential water demand varies with the built environment, yet conservation policies often apply uniform requirements regardless of local housing characteristics. We examine how lot size composition and wealth shape price responsiveness, conservation under drought, and the resulting welfare effects. Using a panel of California water agencies, we exploit within-agency variation in housing characteristics to identify heterogeneous effects. Large-lot agencies are more price responsive than small-lot agencies, whereas lower-wealth agencies are more responsive than higher-wealth agencies. The mandate induced significant conservation across all agencies, including those with near-zero price elasticity, suggesting mandates operate through behavioral channels that prices cannot reach. Conservation persisted after the mandate lifted, but large-lot communities maintained more of their reductions, consistent with structural changes to outdoor landscaping. Welfare costs fall disproportionately on small-lot and higher-wealth agencies, where consumption is dominated by essential indoor uses. The findings suggest that uniform percentage mandates impose the highest welfare burden per gallon saved on communities with the least discretionary demand.</p>

  <div class="chapter-meta">
    <span class="status-badge">Working Paper</span>
    <span class="chapter-link-small">Under Review • Paper available upon request</span>
  </div>
</div>

---

<div class="background-section">
  <h3>Academic Background</h3>
  <ul>
    <li><strong>PhD in Agricultural Economics</strong> (Expected: 2026) — University of Kentucky</li>
    <li><strong>Visiting Graduate Student</strong> — University of California, Riverside</li>
    <li><strong>M.A. in Economics</strong> — Vanderbilt University</li>
    <li><strong>B.S. in Economics</strong> — National University of Sciences and Technology</li>
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
  <p>Running has been a constant companion throughout my academic life. Whether it's marathon finish lines or trail runs through new landscapes, each mile has taught me resilience and the value of steady progress toward big goals.</p>

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
  <p>I like photography and have tried to maintain that interest alongside my research as much as possible.</p>

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
    <a href="https://500px.com/p/min233" target="_blank" class="portfolio-link">My Photography Portfolio →</a>
  </p>
</div>

---

## Contact

<div class="connect-section">
  <h3>Let's Connect</h3>
  <p>Please connect if you want to discuss research collaborations or want to just reach out about anything.</p>
  
  <div class="connect-links">
    <strong>Email:</strong> <a href="mailto:munib.inam@uky.edu">munib.inam@uky.edu</a><br>
    <strong>Office:</strong> 339 Charles E. Barnhart Building, University of Kentucky<br>
    <strong>Address:</strong> 1398 Nicholasville Road, Lexington, KY 40546<br>
    <strong>Department:</strong> <a href="https://agecon.ca.uky.edu/" target="_blank">Agricultural Economics, University of Kentucky</a>
  </div>
</div>

---
