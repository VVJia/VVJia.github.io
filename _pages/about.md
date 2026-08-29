---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I recently completed a research assistantship at Yale University under the supervision of [Prof. Xiaofeng Liu](https://medicine.yale.edu/profile/xiaofeng-liu/).

I earned my bachelor's degree in Computer Science and Technology from [Shenzhen Technology University](https://www.sztu.edu.cn/), where I was supervised by [Prof. Xiaomao Fan](https://scholar.google.com/citations?user=zDwIj2wAAAAJ&hl). I also collaborated with [The First Affiliated Hospital, Sun Yat-sen University](https://www.fahsysu.org.cn/home) on joint research projects.

# Research Interests

My research interests include:
- Medical image analysis
- AI for healthcare
- Foundation models

I am interested in translating advances in AI into clinically useful tools that improve patient care. The tumor diagnosis system demonstrated below reflects this focus. Viewer discretion is advised because the demo contains medical imagery.

# News

- *2025.12*: Our paper was accepted by Medical Image Analysis.
- *2025.05*: Our paper was accepted for an oral presentation at CVPRW 2025.
- *2024.11*: Our paper was accepted by CHIP 2024.
- *2024.10*: Our paper was accepted by BIBM 2024.

# Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW 2025 Oral</div><img src='images/mose.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Mixture-of-Shape-Experts (MoSE): End-to-End Shape Dictionary Framework to Prompt SAM for Generalizable Medical Segmentation](https://openaccess.thecvf.com/content/CVPR2025W/DG-EBF/html/Wei_Mixture-of-Shape-Experts_MoSE_End-to-End_Shape_Dictionary_Framework_to_Prompt_SAM_for_CVPRW_2025_paper.html)

**Jia Wei**, Xiaoqi Zhao, Jonghye Woo, Jinsong Ouyang, Georges El Fakhri, Qingyu Chen, and Xiaofeng Liu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedIA</div><img src='images/SAM_Swin.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SAM-Swin: Sam-Driven Dual-Swin Transformers with Adaptive Lesion Enhancement for Laryngo-Pharyngeal Tumor Detection](https://www.sciencedirect.com/science/article/abs/pii/S1361841525004529)

**Jia Wei**, Yun Li, Xiaomao Fan, Wenjun Ma, Meiyu Qiu, Hongyu Chen, and Wenbin Lei

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2024</div><img src='images/SAM-FNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SAM-FNet: SAM-Guided Fusion Network for Laryngo-Pharyngeal Tumor Detection](https://ieeexplore.ieee.org/abstract/document/10822832)

**Jia Wei**, Yun Li, Meiyu Qiu, Hongyu Chen, Xiaomao Fan, and Wenbin Lei

</div>
</div>

# Project Demo: AI-Powered Tumor Diagnosis System

<div class="research-demo">
<div class="warning-banner">
    <strong>Viewer discretion advised:</strong>
    This demonstration contains medical images of tumors that some viewers may find distressing.
  </div>
  
  <video controls poster="images/demo_thumbnail.png" width="100%">
    <source src="images/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
  <div class="tech-details">
    <p><strong>Technical details:</strong></p>
    <ul>
      <li>Developed in collaboration with The First Affiliated Hospital, Sun Yat-sen University</li>
      <li>Uses <a href="https://github.com/ultralytics/ultralytics" target="_blank">YOLOv8x-seg</a> for instance segmentation of laryngo-pharyngeal tumors</li>
      <li>Integrates image and video processing with real-time inference</li>
    </ul>
  </div>
</div>

# Education

- *2020.09–2024.06*, Bachelor of Computer Science and Technology, Shenzhen Technology University (SZTU)

# Internships

- *2024.11–2026.07*, BioMed Imaging Institute, Yale University, New Haven, USA
- *2023.05–2024.10*, Medical Data Artificial Intelligence Laboratory, SZTU, Shenzhen, China

# Honors and Awards

- *2024.01*: Third Prize Scholarship, College of Big Data and Internet, SZTU
- *2022.12*: Third Prize Scholarship, College of Big Data and Internet, SZTU
- *2020.10*: Third Prize, Freshman Scholarship, SZTU
