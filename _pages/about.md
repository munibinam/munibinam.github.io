---
layout: single
permalink: /
title: "Munib Inam"
author_profile: true        # sidebar with photo & links
classes: wide               # full‑width content column
read_time: false
---

<!-- =================  GLOBAL STYLES  ================= -->
<style>
:root {
  --deep-navy: #102A43;
  --accent:    #0066B8;
  --surface:   #FFFFFF;
  --bg-light:  #F6F7F9;
  --text-main: #1F2933;
  --text-muted:#555;
  --shadow:    0 3px 12px rgba(0,0,0,.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface:  #162334;
    --bg-light: #0E1A2A;
    --text-main:#DBE2EF;
    --text-muted:#9AA5B1;
    --shadow:    0 3px 12px rgba(0,0,0,.45);
  }
}

body { background: var(--bg-light); color: var(--text-main); }

/***** HERO *****/
.hero {
  position: relative; display:flex; flex-direction:column; justify-content:center; align-items:center;
  min-height: 280px; text-align:center; color:#fff;
  background:url('/images/banner_cornfield_dawn.jpg') center/cover no-repeat;
}
.hero::before { content:""; position:absolute; inset:0;
  background:linear-gradient(120deg,var(--deep-navy) 0%,rgba(16,42,67,.6) 70%);
}
.hero>*{position:relative;z-index:1}
.hero h1{font-size:clamp(1.9rem,4vw,2.6rem);font-weight:600;margin:0}
.hero p{font-size:clamp(1rem,1.2vw,1.15rem);margin:.9rem 0 1.3rem;max-width:680px}
.btn-primary{display:inline-block;padding:.65rem 1.4rem;border-radius:4px;background:var(--accent);color:#fff;text-decoration:none;font-weight:500;font-size:.9rem;transition:background .2s}
.btn-primary:hover{background:#0082e0}

/***** WRAPPER *****/
.wrapper{max-width:980px;margin:0 auto;padding:0 1rem}

/***** FEATURE CARDS *****/
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.2rem;margin:2.5rem 0}
.card{background:var(--surface);border-radius:6px;padding:1.4rem 1.25rem;box-shadow:var(--shadow);transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(0,0,0,.12)}
.card h3{margin:0 0 .4rem;font-size:1.1rem;color:var(--deep-navy)}
.card p{margin:0 0 1rem;font-size:.9rem;color:var(--text-muted)}
.btn-sm{display:inline-block;padding:.45rem .9rem;border-radius:4px;background:var(--accent);color:#fff;text-decoration:none;font-size:.8rem;font-weight:500}

/***** SECTIONS *****/
.section{background:var(--surface);border-radius:6px;margin:2.5rem 0;box-shadow:var(--shadow);padding:2rem}
.section h2{margin-top:0;color:var(--deep-navy);font-size:1.35rem}
.table-wrapper{overflow-x:auto}
.table-wrapper table{width:100%;border-collapse:collapse;font-size:.9rem}
.table-wrapper th,.table-wrapper td{padding:.65rem;border-bottom:1px solid #dfe2e5}
.table-wrapper th{background:var(--bg-light);text-align:left;color:var(--deep-navy);font-weight:600}

/***** FOOTER *****/
.site-footer{background:var(--deep-navy);color:#fff;text-align:center;padding:1.5rem 1rem;margin-top:3rem;font-size:.85rem}
.site-footer a{color:#8cd2ff;text-decoration:none}
.site-footer a:hover{text-decoration:underline}
</style>

<!-- ================= HERO ================= -->
<div class="hero">
  <h1>Economics of Climate Extremes &amp; Water Systems</h1>
  <p>I quantify how heatwaves, heavy rainfall, and other extremes reshape U.S. agriculture and drinking‑water quality.</p>
  <a class="btn-primary" href="/files/CV_Munib_Inam.pdf">Download CV ↗</a>
</div>

<div class="wrapper">

<!-- ========== FEATURE CARDS ========== -->
<div class="cards">
  <div class="card">
    <h3>Job‑Market Paper</h3>
    <p>Measuring Extreme Weather &amp; U.S. Crop Yields</p>
    <a class="btn-sm" href="/files/JMP_Munib_Inam.pdf">PDF ↗</a>
  </div>
  <div class="card">
    <h3>Extreme Weather &amp; Water Quality</h3>
    <p>Climate shocks and drinking‑water violations</p>
    <a class="btn-sm" href="/files/Water_Quality_Paper_Inam.pdf">PDF ↗</a>
  </div>
  <div class="card">
    <h3>Housing Patterns &amp; Water Demand</h3>
    <p>Residential lot size and drought‑era water use</p>
    <a class="btn-sm" href="/files/Housing_Water_Demand_Inam.pdf">PDF ↗</a>
  </div>
</div>

<!-- ========== MAIN CONTENT SECTIONS ========== -->

<div class="section">
<h2>Research Themes</h2>
<div class="table-wrapper">
<table>
<thead><tr><th>Theme</th><th>Key Question</th><th>Core Methods</th></tr></thead>
<tbody>
<tr><td><strong>Climate Metrics &amp; Bias</strong></td><td>Do spatial interpolation metrics hide the true cost of extreme heat?</td><td>Station vs. grid comparisons, fixed‑effects yield models</td></tr>
<tr><td><strong>Water Quality Under Stress</strong></td><td>How do sub‑daily weather shocks trigger drinking‑water violations?</td><td>Rare‑events logit, hourly climate records</td></tr>
<tr><td><strong>Water Demand &amp; Urban Form</strong></td><td>What role does housing lot size play in drought‑era consumption?</td><td>Panel regressions, utility micro‑data</td></tr>
</tbody>
</table>
</div>
</div>

<div class="section">
<h2>Dissertation Chapters</h2>
<ol>
<li><strong>Measuring Extreme Weather and U.S. Crop Yields</strong> — <em>Under review</em></li>
<li><strong>Extreme Weather and Drinking‑Water Quality</strong> — <em>Working paper</em></li>
<li><strong>Housing Development Patterns and Residential Water Demand</strong> — <em>In preparation</em></li>
</ol>
</div>

<div class="section">
<h2>Teaching &amp; Mentoring</h2>
<ul>
<li><strong>Primary Instructor</strong> — International Agriculture, World Food Needs &amp; U.S. Trade (AEC 309), 2024</li>
<li><strong>Teaching Assistant</strong> — Environmental &amp; Resource Economics, Spring 2022</li>
</ul>
</div>

<div class="section">
<h2>Academic Pathway</h2>
<ul>
<li><strong>Ph.D. Agricultural Economics</strong>, University of Kentucky (2020–2025 exp.)</li>
<li><strong>Visiting Scholar</strong>, University of California Riverside (2022)</li>
<li><strong>M.A. Economics</strong>, Vanderbilt University (2020)</li>
<li><strong>B.S. Economics</strong>, National University of Sciences &amp; Technology (2017)</li>
</ul>
</div>

<div class="section">
<h2>Selected Honors</h2>
<ul>
<li>1st Place, Job‑Market Paper Competition — Southern AEA (2025)</li>
<li>James S. &amp; Rosemary Worley Research Award — Vanderbilt University (2020)</li>
</ul>
</div>

<div class="section">
<h2>Technical Toolkit</h2>
<ul>
<li><strong>Econometrics:</strong> panel &amp; spatial models, causal inference, diff‑in‑diff</li>
<li><strong>Programming:</strong> R (tidyverse, data.table, fixest), Python, Stata; HPC with SLURM</li>
<li><strong>Data:</strong> NOAA GHCN‑D, PRISM, USDA Quick Stats, EPA SDWIS, CDL rasters</li>
</ul>
</div>

<div class="section">
<h2>Connect</h2>
<p>I welcome collaboration or policy‑focused discussion. Reach out via <a href="mailto:munib.inam@uky.edu">email</a> or <a href="https://linkedin.com/in/munib-inam" target="_blank" rel="noopener">LinkedIn ↗</a>.</p>
</div>

<p style="font-size:.8rem;color:var(--text-muted);text-align:center;margin-top:2rem;">Last updated {{ "now" | date: "%B %Y" }}.</p>

</div><!-- /.wrapper -->

<footer class="site-footer">
  © {{ "now" | date: "%Y" }} Munib Inam  |  <a href="/files/CV_Munib_Inam.pdf">Curriculum Vitae</a>
</footer>
