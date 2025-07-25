permalink: / layout: single classes: wide author_profile: true header: overlay_color: "#0A2540" overlay_filter: 0.5 overlay_image: /images/hero_corn_field.jpg actions: - label: "<i class='fas fa-file-pdf'></i> Download CV" url: "/files/CV_Munib_Inam.pdf" - label: "<i class='fas fa-flask'></i> View Research" url: "#research"
<style>
/* --- General & Typography --- */
body {
font-family: 'Source Sans Pro', 'Roboto', sans-serif;
}

.page__content p, .page__content li, .page__content dl {
font-size: 1.05em;
}

h2, h3 {
font-weight: 600;
color: #0A2540; /* Deep Navy */
}

/* --- Hero Intro Section --- /
.hero-intro {
padding: 2em;
margin-top: -5em; / Pulls the section up over the hero image */
position: relative;
z-index: 10;
background: white;
border-radius: 12px;
box-shadow: 0 10px 40px rgba(0,0,0,0.1);
text-align: center;
}

.hero-intro h1 {
font-size: 2em;
color: #0A2540;
margin-top: 0;
}

.hero-intro .subtitle {
font-size: 1.2em;
color: #555;
margin-top: -1em;
margin-bottom: 1.5em;
}

/* --- General Section Styling --- */
.content-section {
padding: 2.5em 0;
border-bottom: 1px solid #e8e8e8;
}
.content-section:last-of-type {
border-bottom: none;
}

.section-header {
text-align: center;
margin-bottom: 2em;
}

.section-header h2 {
font-size: 1.8em;
}

/* --- Research Cards --- */
.research-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 2em;
}

.research-card {
background: #f8f9fa;
border-radius: 10px;
padding: 2em;
border: 1px solid #e8e8e8;
display: flex;
flex-direction: column;
transition: all 0.3s ease;
}

.research-card:hover {
transform: translateY(-5px);
box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.research-card h3 {
font-size: 1.2em;
color: #0A2540;
margin-top: 0;
}

.research-card p {
flex-grow: 1;
color: #555;
line-height: 1.6;
}

.research-card .btn {
margin-top: 1em;
background: #0A2540;
color: white;
border: none;
}
.research-card .btn:hover {
background: #2E7D32; /* UK Green on hover */
}

/* --- Background & Skills Section --- */
.background-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 3em;
}

.background-column h3 {
font-size: 1.3em;
border-bottom: 2px solid #e8f5e8;
padding-bottom: 0.5em;
margin-bottom: 1em;
}

.background-column ul {
list-style: none;
padding-left: 0;
}

.background-column li {
margin-bottom: 1em;
line-height: 1.6;
display: flex;
align-items: flex-start;
}

.background-column .fas {
color: #2E7D32; /* UK Green */
margin-right: 1em;
margin-top: 0.2em;
font-size: 0.9em;
}

/* --- Contact Section --- */
.contact-section {
background: #0A2540;
color: white;
text-align: center;
padding: 3em;
border-radius: 12px;
margin: 2em 0;
}

.contact-section h2, .contact-section h3 {
color: white;
}

.contact-section p {
max-width: 600px;
margin: 0 auto 1.5em;
opacity: 0.9;
}

.contact-section a {
color: white;
text-decoration: underline;
text-decoration-thickness: 1px;
}

</style>

<!-- A more descriptive intro section that sits over the hero image -->

<div class="hero-intro">
<h1>Munib Inam</h1>
<p class="subtitle">PhD Candidate, University of Kentucky</p>
<p>My research quantifies how climate extremes like heatwaves and heavy rainfall reshape U.S. agriculture and drinking-water systems. I bridge applied econometrics, climate science, and environmental policy to deliver actionable insights for a more resilient future.</p>
</div>

<!-- Research Section -->

<div id="research" class="content-section">
<div class="section-header">
<h2>Dissertation Research</h2>
</div>
<div class="research-grid">
<div class="research-card">
<h3>Measuring Extreme Weather & Its Effects on U.S. Crop Yields</h3>
<p>This paper demonstrates that common methods for measuring heat stress can systematically understate its true impact on corn yields, a finding with major implications for climate modeling and crop insurance.</p>
<a href="/files/JMP_Munib_Inam.pdf" class="btn btn--primary">Read Job Market Paper</a>
</div>
<div class="research-card">
<h3>Extreme Weather & Drinking Water Quality</h3>
<p>An analysis linking sub-daily climate shocks to Safe Drinking Water Act violations. This work identifies critical vulnerabilities in our water infrastructure and informs early-warning systems for utility providers.</p>
<a href="/files/Water_Quality_Paper_Inam.pdf" class="btn btn--primary">Read Working Paper</a>
</div>
<div class="research-card">
<h3>Housing Patterns & Water Demand</h3>
<p>An investigation into how residential lot sizes and urban expansion patterns in California influence water consumption, particularly during periods of severe drought.</p>
<a href="/files/Housing_Water_Demand_Inam.pdf" class="btn btn--primary">Read Working Paper</a>
</div>
</div>
</div>

<!-- Background & Skills Section -->

<div class="content-section">
<div class="section-header">
<h2>Background & Expertise</h2>
</div>
<div class="background-grid">
<div class="background-column">
<h3><i class="fas fa-graduation-cap"></i> Academic Pathway</h3>
<ul>
<li><i class="fas fa-chevron-right"></i><strong>Ph.D. Agricultural Economics</strong><br><em>University of Kentucky (2020–present)</em></li>
<li><i class="fas fa-chevron-right"></i><strong>Visiting Scholar</strong><br><em>University of California, Riverside (2022)</em></li>
<li><i class="fas fa-chevron-right"></i><strong>M.A. Economics</strong><br><em>Vanderbilt University (2020)</em></li>
<li><i class="fas fa-chevron-right"></i><strong>B.S. Economics</strong><br><em>National University of Sciences & Technology (2017)</em></li>
</ul>
</div>
<div class="background-column">
<h3><i class="fas fa-cogs"></i> Technical Skill Set</h3>
<ul>
<li><i class="fas fa-chevron-right"></i><strong>Econometrics:</strong> Panel & spatial methods, causal inference, difference-in-differences.</li>
<li><i class="fas fa-chevron-right"></i><strong>Programming:</strong> R (tidyverse, data.table, fixest), Python, Stata, and SLURM for HPC.</li>
<li><i class="fas fa-chevron-right"></i><strong>Data:</strong> Expertise in large-scale climate (NOAA, PRISM), agricultural (USDA), and environmental (EPA) datasets.</li>
</ul>
</div>
</div>
</div>

<!-- Contact Section -->

<div class="contact-section">
<h2>Get in Touch</h2>
<p>I welcome collaboration with fellow researchers and policy-focused discussions with practitioners. Please feel free to reach out.</p>
<p>
<a href="mailto:munib.inam@uky.edu">munib.inam@uky.edu</a> &nbsp;&middot;&nbsp;
<a href="https://linkedin.com/in/munib-inam">LinkedIn</a> &nbsp;&middot;&nbsp;
University of Kentucky
</p>
</div>
