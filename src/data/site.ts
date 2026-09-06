export const site = {
  name: 'Jia Wei (Javy)',
  shortName: 'Jia Wei',
  role: 'Research Assistant at Yale University',
  description:
    'Jia Wei (Javy) is a researcher working at the intersection of medical image analysis, healthcare AI, and foundation models.',
  email: 'jiawei.javy@gmail.com',
  github: 'https://github.com/VVJia',
  scholar: 'https://scholar.google.com/citations?user=jLLrtFQAAAAJ&hl',
  avatar: '/images/javy.jpg',
  university: 'Yale University',
  researchInterests: [
    'Large language models',
    'Multimodal foundation models',
    'Hyperbolic representation learning',
    'Medical image analysis',
    'AI for healthcare',
  ],
  intro: [
    'I recently completed a research assistantship at Yale University under the supervision of Prof. Xiaofeng Liu.',
    "I earned my bachelor's degree in Computer Science and Technology from Shenzhen Technology University, where I was supervised by Prof. Xiaomao Fan. I also collaborated with The First Affiliated Hospital, Sun Yat-sen University, on joint research projects.",
  ],
  news: [
    { date: '2025-12', text: 'Our paper was accepted by Medical Image Analysis.' },
    { date: '2025-05', text: 'Our paper was accepted for an oral presentation at CVPRW 2025.' },
    { date: '2024-11', text: 'Our paper was accepted by CHIP 2024.' },
    { date: '2024-10', text: 'Our paper was accepted by BIBM 2024.' },
  ],
  education: [
    {
      period: '2020.09–2024.06',
      title: 'Bachelor of Computer Science and Technology',
      place: 'Shenzhen Technology University (SZTU)',
    },
  ],
  internships: [
    {
      period: '2024.11–2026.07',
      title: 'BioMed Imaging Institute',
      place: 'Yale University, New Haven, USA',
    },
    {
      period: '2023.05–2024.10',
      title: 'Medical Data Artificial Intelligence Laboratory',
      place: 'Shenzhen Technology University, Shenzhen, China',
    },
  ],
  awards: [
    { date: '2024.01', text: 'Third Prize Scholarship, College of Big Data and Internet, SZTU' },
    { date: '2022.12', text: 'Third Prize Scholarship, College of Big Data and Internet, SZTU' },
    { date: '2020.10', text: 'Third Prize, Freshman Scholarship, SZTU' },
  ],
};

export const publications = [
  {
    id: 'mose',
    year: 2025,
    venue: 'CVPRW 2025 · Oral',
    title:
      'Mixture-of-Shape-Experts (MoSE): End-to-End Shape Dictionary Framework to Prompt SAM for Generalizable Medical Segmentation',
    authors: [
      'Jia Wei',
      'Xiaoqi Zhao',
      'Jonghye Woo',
      'Jinsong Ouyang',
      'Georges El Fakhri',
      'Qingyu Chen',
      'Xiaofeng Liu',
    ],
    image: '/images/mose.png',
    paper:
      'https://openaccess.thecvf.com/content/CVPR2025W/DG-EBF/html/Wei_Mixture-of-Shape-Experts_MoSE_End-to-End_Shape_Dictionary_Framework_to_Prompt_SAM_for_CVPRW_2025_paper.html',
    highlight:
      'Introduces a mixture-of-shape-experts framework that learns robust shape priors end to end and uses them to prompt SAM for better cross-domain medical segmentation.',
    bibtex: [
      '@inproceedings{wei2025mose,',
      '  title={Mixture-of-Shape-Experts (MoSE): End-to-End Shape Dictionary Framework to Prompt SAM for Generalizable Medical Segmentation},',
      '  author={Wei, Jia and Zhao, Xiaoqi and Woo, Jonghye and Ouyang, Jinsong and El Fakhri, Georges and Chen, Qingyu and Liu, Xiaofeng},',
      '  booktitle={CVPR Workshops},',
      '  year={2025}',
      '}',
    ].join('\n'),
  },
  {
    id: 'sam-swin',
    year: 2025,
    venue: 'Medical Image Analysis',
    title:
      'SAM-Swin: SAM-Driven Dual-Swin Transformers with Adaptive Lesion Enhancement for Laryngo-Pharyngeal Tumor Detection',
    authors: [
      'Jia Wei',
      'Yun Li',
      'Xiaomao Fan',
      'Wenjun Ma',
      'Meiyu Qiu',
      'Hongyu Chen',
      'Wenbin Lei',
    ],
    image: '/images/SAM_Swin.png',
    paper: 'https://www.sciencedirect.com/science/article/abs/pii/S1361841525004529',
    code: 'https://github.com/VVJia/SAM-Swin',
    highlight:
      'Combines SAM2-guided lesion segmentation, multi-scale lesion enhancement, and class-aware supervision to strengthen global–local tumor detection.',
    bibtex: [
      '@article{wei2025samswin,',
      '  title={SAM-Swin: SAM-Driven Dual-Swin Transformers with Adaptive Lesion Enhancement for Laryngo-Pharyngeal Tumor Detection},',
      '  author={Wei, Jia and Li, Yun and Fan, Xiaomao and Ma, Wenjun and Qiu, Meiyu and Chen, Hongyu and Lei, Wenbin},',
      '  journal={Medical Image Analysis},',
      '  year={2025}',
      '}',
    ].join('\n'),
  },
  {
    id: 'sam-fnet',
    year: 2024,
    venue: 'BIBM 2024',
    title: 'SAM-FNet: SAM-Guided Fusion Network for Laryngo-Pharyngeal Tumor Detection',
    authors: ['Jia Wei', 'Yun Li', 'Meiyu Qiu', 'Hongyu Chen', 'Xiaomao Fan', 'Wenbin Lei'],
    image: '/images/SAM-FNet.png',
    paper: 'https://ieeexplore.ieee.org/abstract/document/10822832',
    code: 'https://github.com/VVJia/SAM-FNet',
    highlight:
      'Uses SAM to localize lesions and a GAN-like feature optimization module to improve complementary global–local fusion across internal and external hospital datasets.',
    bibtex: [
      '@inproceedings{wei2024samfnet,',
      '  title={SAM-FNet: SAM-Guided Fusion Network for Laryngo-Pharyngeal Tumor Detection},',
      '  author={Wei, Jia and Li, Yun and Qiu, Meiyu and Chen, Hongyu and Fan, Xiaomao and Lei, Wenbin},',
      '  booktitle={IEEE International Conference on Bioinformatics and Biomedicine},',
      '  year={2024}',
      '}',
    ].join('\n'),
  },
].sort((a, b) => b.year - a.year);
