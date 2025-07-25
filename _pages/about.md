---
layout: single
permalink: /
title: "Munib Inam"
author_profile: true
classes: wide
read_time: false
---

<!-- ==============  GLOBAL STYLES  ============== -->
<style>
:root {
  --deep-navy: #102A43;
  --accent:    #0A7BD9;
  --surface:   #FFFFFF;
  --bg-light:  #F5F7FA;
  --text-main: #1F2933;
  --text-muted:#5F6C7B;
  --shadow:    0 3px 12px rgba(0,0,0,.08);
}
@media (prefers-color-scheme: dark) {
  :root {
    --surface:#17263C;
    --bg-light:#0D1928;
    --text-main:#D4E1F2;
    --text-muted:#91A1B4;
    --shadow:0 3px 12px rgba(0,0,0,.45);
  }
}

html,body{height:100%;margin:0;background:var(--bg-light);color:var(--text-main);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;}

/* Sticky footer layout */
body{display:flex;flex-direction:column;}
.main{flex:1 0 auto;}  /* wrapper */
.site-footer{flex-shrink:0;background:var(--deep-navy);color:#fff;text-align:center;padding:1.5rem 1rem;margin-top:3rem;font-size:.85rem}
.site-footer a{color:#8cd2ff;text-decoration:none}
.site-footer a:hover{text-decoration:underline}

/***** HERO *****/
.hero{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:260px;text-align:center;color:#fff;background:url('/images/banner_cornfield_dawn.jpg') center/cover no-repeat;margin-bottom:2rem;}
.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,var(--deep-navy) 0%,rgba(16,42,67,.55) 65%);} 
.hero>*{position:relative;z-index:1}
.hero h1{font-size:clamp(1.9rem,4vw,2.6rem);font-weight:600;margin:0 0 .8rem}
.hero p{font-size:clamp(1rem,1.2vw,1.15rem);max-width:680px;margin:0 0 1.25rem}
.btn-primary{display:inline-block;padding:.65rem 1.4rem;border-radius:4px;background:var(--accent);color:#fff;text-decoration:none;font-weight:500;font-size:.9rem;transition:background .2s ease}
.btn-primary:hover{background:#0d8eff}

/***** WRAPPER *****/
.wrapper{max-width:980px;margin:0 auto;padding:0 1rem}

/***** FEATURE CARDS *****/
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.2rem;margin:0 0 2.5rem}
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

/* Links color fix for dark mode */
@media (prefers-color-scheme: dark){
  a{color:#4dabff;}
  .card h3{color:#cfe0ff}
  .section h2{color:#cfe0ff}
}
</style>

<!-- ================= HERO ================= -->
<div class="hero">
  <h1>Economics of Climate Extremes &amp; Water Systems</h1>
  <p>Applied econometrics &amp; high‑resolution climate data to inform resilient agriculture and water policy.</p>
  <a class="btn-primary" href="/files/CV_Munib_Inam.pdf">Download CV ↗</a>
</div>

<div class="wrapper main">

<!-- FEATURE CARDS -->
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

<!-- MAIN SECTIONS -->

<div class="section">
<h2>Research Themes</h2>
<div class="table-wrapper">
<table>
<thead><tr><th>Theme</th><th>Key Question</th><th>Methods</th></tr></thead>
<tbody>
<tr><td><strong>Climate Metrics &amp; Bias</strong></td><td>Do interpolation choices hide the true cost of heat?</td><td>Station vs. grid comparison, FE yield models</td></tr>
<tr><td><strong>Water Quality Stress</strong></td><td>How do sub‑daily shocks trigger violations?</td><td>Rare‑events logit, hourly climate records</td></tr>
<tr><td><strong>Water Demand &amp; Urban Form</strong></td><td>How do lot sizes shape drought‑era use?</td><td>Panel regressions, utility micro‑data</td></tr>
</tbody>
</table>
</div>
</div>

<div class="section">
<h2>Dissertation Chapters</h2>
<ol>
<li><strong>Measuring Extreme Weather &amp; Crop Yields</strong> — <em>Under review</em></li>
<li><strong>Extreme Weather &amp; Drinking‑Water Quality</strong> — <em>Working paper</em></li>
<li><strong>Housing Patterns &amp; Water Demand</strong> — <em>In preparation</em></li>
</ol>
</div>

<div class="section">
<h2>Teaching &amp; Mentoring</h2>
<ul>
<li><strong>Instructor</strong> — International Agriculture &amp; World Food Needs (AEC 309), 2024</li>
<li><strong>TA</strong> — Environmental &amp; Resource Economics, 2022</li>
</ul>
</div>

<div class="section">
<h2>Academic Pathway</h2>
<ul>
<li><strong>Ph.D. Agricultural Economics</strong>, Univ. of Kentucky (2020–25 exp.)</li>
<li><strong>Visiting Scholar</strong>, UC Riverside (2022)</li>
<li><strong>M.A. Economics</strong>, Vanderbilt University (2020)</li>
<li><strong>B.S. Economics</strong>, NUST (2017)</li>
</ul>
</div>

<div class="section">
<h2>Honors</h2>
<ul>
<li>1st Place, Job‑Market Paper Competition — Southern AEA (2025)</li>
<li>James S. &amp; Rosemary Worley Research Award — Vanderbilt (2020)</li>
</ul>
</div>

<div class="section">
<h2>Technical Toolkit</h2>
<ul>
<li><strong>Econometrics:</strong> panel &amp; spatial models, causal inference</li>
<li><strong>Programming:</strong> R, Python, Stata; SLURM HPC</li>
<li><strong>Data:</strong> NOAA GHCN‑D, PRISM, USDA Quick Stats, EPA SDWIS</li>
</ul>
</div>

<div class="section">
<h2>Connect</h2>
<p>Reach out via <a href="mailto:munib.inam@uky.edu">email</a> or <a href="https
