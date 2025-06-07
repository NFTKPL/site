---
title: Infoteka
layout: default
---

# Infoteka

Baza wiedzy o ludziach i wydarzeniach  

---

## Osoby

<ul>
  {% assign osoby = site.pages | where: "category", "osoby" | sort: "title" %}
  {% for strona in osoby %}
    <li><a href="{{ strona.url }}">{{ strona.title }}</a></li>
  {% endfor %}
</ul>

---

## Wydarzenia

<ul>
  {% assign wydarzenia = site.pages | where: "category", "wydarzenia" | sort: "title" %}
  {% for strona in wydarzenia %}
    <li><a href="{{ strona.url }}">{{ strona.title }}</a></li>
  {% endfor %}
</ul>
