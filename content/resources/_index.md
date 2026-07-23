+++
title = "Resources"
description = "General resources for PCB design and manufacturing"
template = "section.html"
+++

Specific tutorial resources are available on their respective **tutorial series** pages.

---

## PCB Design Software

{{ table(rows=[
  ["[EasyEDA](https://easyeda.com/)", "100% Free - recommended"]
]) }}

## Components Search

{{ table(rows=[
  ["[JLCPCB Parts](https://jlcpcb.com/parts)", "Full Database of assembly-ready components"],
  ["[LCSC](https://www.lcsc.com/)", "Same as JLCPCB parts, but with better search features"]
]) }}

---

## My favorite creators

<div class="channel-cards">

<a href="https://www.youtube.com/@ELECTRONOOBS" class="channel-card" target="_blank" rel="noopener">
  <img src="/channels/electronoobs.jpg" alt="Electronoobs" class="channel-avatar">
  <div class="channel-info">
    <h3 class="channel-name">Electronoobs</h3>
    <p class="channel-desc">Easy to understand beginner tutorials</p>
  </div>
</a>

<a href="https://www.youtube.com/@RobertFeranec" class="channel-card" target="_blank" rel="noopener">
  <img src="/channels/robert-feranec.jpg" alt="Robert Feranec" class="channel-avatar">
  <div class="channel-info">
    <h3 class="channel-name">Robert Feranec</h3>
    <p class="channel-desc">Advanced PCB tutorials and interviews with industry experts</p>
  </div>
</a>

<a href="https://www.youtube.com/@PhilsLab" class="channel-card" target="_blank" rel="noopener">
  <img src="/channels/phils-lab.jpg" alt="Phil's Lab" class="channel-avatar">
  <div class="channel-info">
    <h3 class="channel-name">Phil's Lab</h3>
    <p class="channel-desc">Advanced PCB tutorials and embedded systems</p>
  </div>
</a>

<a href="https://www.youtube.com/@greatscottlab" class="channel-card" target="_blank" rel="noopener">
  <img src="/channels/greatscott.jpg" alt="GreatScott!" class="channel-avatar">
  <div class="channel-info">
    <h3 class="channel-name">GreatScott!</h3>
    <p class="channel-desc">Electronics explained and beginner-friendly projects</p>
  </div>
</a>

</div>

<style>
.channel-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--fg-muted-1);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
}

.channel-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.channel-info {
  min-width: 0;
}

.channel-name {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--fg-color);
}

.channel-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--secondary-fg-color);
  line-height: 1.4;
}

/* Dark mode specific styling */
[data-theme="dark"] .channel-card {
  background-color: var(--fg-muted-2);
  border-color: var(--fg-muted-3);
}

[data-theme="dark"] .channel-card:hover {
  border-color: var(--accent-color);
}

@media (max-width: 600px) {
  .channel-cards {
    grid-template-columns: 1fr;
  }
}
</style>
