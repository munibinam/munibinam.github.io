---
layout: single
permalink: /
title: "Munib Inam"
author_profile: true        # sidebar with photo & links
classes: wide               # full‑width content column
read_time: false
---

<!-- ========== PAGE‑LEVEL STYLES (quick, inline) ========= -->
<style>
/*****  COLOR PALETTE  *****/
:root {
  --deep-navy: #112F4A;
  --highlight: #005F99;
  --soft-gray: #F8F9FA;
  --card-shadow: rgba(0,0,0,0.08);
}

/*****  HERO  *****/
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 280px;   /* thin banner */
  color: #fff;
  text-align: center;
  background: url('/images/banner_cornfield_dawn.jpg') center/cover no-repeat;
}
.hero::before {                   /* gradient overlay */
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg,var(--deep-navy) 0%,rgba(17,47,74,.6) 60%);
  opacity: .75;
}
.hero > * { position: relative; z-index: 1; }
.hero h1 { font-size: clamp(1.9rem,4vw,2.6rem); font-weight:600; margin:0; }
.hero p  { font-size: clamp(1rem,1.3vw,1.15rem); margin:.8rem 0 1.2rem; max-width: 680px; }
.hero .btn {
  padding: .65rem 1.4rem;
  font-size: .9rem;
  font-weight: 500;
  border-radius: 4px;
  background: var(--highlight);
  color:#fff;text-decoration:none;
  transition: background .2s;
}
.hero .btn:hover { background:#0076c3; }

/*****  FEATURE CARDS  *****/
.cards {
  display: grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap: 1.2rem; margin: 2.4rem 0;
}
.card {
  background: #fff; border-radius: 6px; padding:1.4rem 1.25rem; border:1px solid #E0E0E0;
  box-shadow: 0 3px 10px var(--card-shadow); transition: box-shadow .25s,transform .25s;
}
.card:hover { box-shadow: 0 6px 18px rgba(0,0,0,.12); transform: translateY(-3px); }
.card h3 { margin:0 0 .4rem; font-size:1.1rem;color:var(--deep-navy); }
.card p  { margin:0 0 1rem; font-size:.9rem; }
.card a.btn-sm {
  display:inline-block; padding:.45rem .9rem; font-size:.8rem; border-radius:4px;
  background:var(--highlight); color:#fff;text-decoration:none;font-weight:500;
}

/*****  SECTION HEADINGS *****/
section h2 { color: var(--deep-navy); margin-top:2.6rem; font-size:1.4rem; }

/*****  TABLE WRAP  *****/
.table-wrapper { overflow-x:auto; }

@media (prefers-color-scheme: dark) {
  body { background:#0e1a2a; color:#e0e0e0; }
  .card { background:#1b2a3e; border-color:#253450; }
  .card h3 { color:#d4e1ff; }
  section h2 { color:#d4e1ff; }
}
</style>

<!-- ================= HERO ================= -->
<div class="hero">
  <h1>Economics of Climate Extremes & Water Systems</h1>
  <p>I use applied econometrics and high‑resolution climate data to quantify how heatwaves, heavy rainfall, and other extremes reshape U.S. agriculture and drinking‑water quality.</p>
  <a class="btn" href="/files/CV_Munib_Inam.pdf">Download CV ↗</a>
</div>

<!-- ================= FEATURE CARDS ================= -->
<div class="cards">
  <div class="card">
    <h3>Job‑Market Paper</h3>
    <p>Measuring Extreme Weather & U.S. Crop Yields</p>
    <a class="btn-sm" href="/files/JMP_Munib_Inam.pdf">PDF ↗</a>
  </div>
  <div class="card">
    <h3>Extreme Weather & Water Quality</h3>
    <p>Climate shocks and drinking‑water violations</p>
    <a class="btn-sm" href="/files/Water_Quality_Paper_Inam.pdf">PDF ↗</a>
  </div>
  <div class="card">
    <h3>Housing Patterns & Water Demand</h3>
    <p>Residential lot size and drought‑era water use</p>
    <a class="btn-sm" href="/files/Housing_Water_Demand_Inam.pdf">PDF ↗</a>
  </div>
</div>

<!-- ================= MAIN CONTENT ================= -->
<section>
<h2>Research Themes</h2>
<div class="table-wrapper">
<table>
<thead><tr><th>Theme</th><th>Key Question</th><th>Core Methods</th></tr></thead>
<tbody>
<tr><td><strong>Climate Metrics & Bias</strong></td><td>Do spatial interpolation metrics hide the true cost of extreme heat?</td><td>Station vs. grid comparisons, fixed‑effects yield models</td></tr>
<tr><td><strong>Water Quality Under Stress</strong></td><td>How do sub‑daily weather shocks trigger drinking‑water violations?</td><td>Rare‑events logit, hourly climate records</td></tr>
<tr><td><strong>Water Demand & Urban Form</strong></td><td>What role does housing lot size play in drought‑era consumption?</td><td>Panel regressions, utility micro‑data</td></tr>
</tbody>
</table>
</div>
</section>

<section>
<h2>Dissertation Chapters</h2>
<ol>
<li><strong>Measuring Extreme Weather and U.S. Crop Yields</strong> — <em>Under review</em></li>
<li><strong>Extreme Weather and Drinking‑Water Quality</strong> — <em>Working paper</em></li>
<li><strong>Housing Development Patterns and Residential Water Demand</strong> — <em>In preparation</em></li>
</ol>
</section>

<section>
<h2>Teaching & Mentoring</h2>
<ul>
<li><strong>Primary Instructor</strong> — International Agriculture, World Food Needs & U.S. Trade (AEC 309), 2024</li>
<li><strong>Teaching Assistant</strong> — Environmental & Resource Economics, Spring 2022</li>
</ul>
</section>

<section>
<h2>Academic Pathway</h2>
<ul>
<li><strong>Ph.D. Agricultural Economics</strong>, University of Kentucky (2020–2025 exp.)</li>
<li><strong>Visiting Scholar</strong>, University of California Riverside (2022)</li>
<li><strong>M.A. Economics</strong>, Vanderbilt University (2020)</li>
<li><strong>B.S. Economics</strong>, National University of Sciences & Technology (2017)</li>
</ul>
</section>

<section>
<h2>Selected Honors</h2>
<ul>
<li>1st Place, Job‑Market Paper Competition — Southern AEA (2025)</li>
<li>James S. & Rosemary Worley Research Award — Vanderbilt University (2020)</li>
</ul>
</section>

<section>
<h2>Technical Toolkit</h2>
<ul>
<li><strong>Econometrics:</strong> panel & spatial models, causal inference, diff‑in‑diff</li>
<li><strong>Programming:</strong> R (tidyverse, data.table, fixest), Python, Stata; HPC with SLURM</li>
<li><strong>Data:</strong> NOAA GHCN‑D, PRISM, USDA Quick Stats, EPA SDWIS, CDL rasters</li>
</ul>
</section>

<section>
<h2>Connect</h2>
<p>I welcome collaboration or policy‑focused discussion. Reach out via <a href="mailto:munib.inam@uky.edu">email</a> or <a href="https://linkedin.com/in/munib-inam" target="_blank" rel="noopener">LinkedIn ↗</a>.</p>
</section>

<p style="font-size:0.8rem;margin-top:3rem;">Last updated {{ "now" | date: "%B %Y" }}.</p>
