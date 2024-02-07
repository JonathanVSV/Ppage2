---
layout: pages
permalink: /about/
title: "About"
author_profile: true
#tagline: "About"
header:
  overlay_image: /assets/images/ceiba.JPG
toc: true
gallery:
  - url: /assets/images/CuencaUsumacinta.jpg
    image_path: /assets/images/CuencaUsumacinta.jpg
    alt: "mosaico"
    title: "Cloudless MODIS composite (2015 - 2017) of the Usumacinta basin and surrounding areas. Figure was made in collaboration with C. Peralta-Carreta and can be seen in the Museo de Historia Natural, CDMX, Mexico."
  - url: /assets/images/ModelsvsRandom.png
    image_path: /assets/images/ModelsvsRandom.png
    alt: "models"
    title: "Goodness-of-fit of the best models (black points) and its corresponding maximum goodness-of-fit distribution expected at random (boxes) for each tropical dry forest attribute (structural and diversity). Models were constructed using GLCM texture metrics calculated from multispectral bands (MS) and panchromatic (Pan) as explanatory variables. Figure from Solórzano et al. (2017)."
  - url: /assets/images/FOTO_GLCMmodels.jpeg
    image_path: /assets/images/FOTO_GLCMmodels.jpeg
    alt: "models2"
    title: "Observed versus modeled values and its corresponding linear fit (dashed line) of the best model for each vegetation attribute (ln-transformed) of a Tropical Swamp Forest. Models were fitted using image GLCM texture metric as explanatory variables. Figure from Solórzano et al. (2018)."
  - url: /assets/images/RDA_DendrogramCometa.jpg
    image_path: /assets/images/RDA_DendrogramCometa.jpg
    alt: "rda"
    title: "RDA ordination showing the scores of the species abundance (gray letters), plots (black numbers) and environmental proxies (black letters) according to the RDA first two principal axes; although, the second axis was not significant. Environmental proxies included distance to water bodies and microtopography variables. Figure from Solórzano et al. (2020)."
  - url: /assets/images/Deforestation_GFCSerieINEGI.jpeg
    image_path: /assets/images/Deforestation_GFCSerieINEGI.jpeg
    alt: "defor"
    title: "Tree cover area lost between 2000 and 2016 according to the Global Forest Change data in the Usumacinta River basin. Data are grouped by land cover / land use (Serie II, INEGI 2001) and part of the basin (low, mid, high). Figure from Peralta-Carreta et al. (2019)."
  - url: /assets/images/LandsatMX.jpg
    image_path: /assets/images/LandsatMX.jpg
    alt: "landsatmx"
    title: "Number of available Landsat (4-8) images by path (upper border) and row (right border) of Mexico's surface between 1972 - 2017. Additionally, the percentage of images by cloud cover percentage is shown by the bar color. Figure from Solórzano et al. (2020)."
  - url: /assets/images/Mapa_ZE_Ayuquila.jpg
    image_path: /assets/images/Mapa_ZE_Ayuquila.jpg
    alt: "ayuquila"
    title: "Plots location where conserved and degraded tropical dry forest was sampled in the Ayuquila River basin. Figure from Gao et al. (2020)."
  - url: /assets/images/unetpred.jpg
    image_path: /assets/images/unetpred.jpg
    alt: "unetpred"
    title: "Land use land cover map obtained using Sentinel-1 and Sentinel-2 imagery and a U-net architecture. Figure from Solórzano et al. (2021)."
  - url: /assets/images/Mexico_hillshade_final.png
    image_path: /assets/images/Mexico_hillshade_final.png
    alt: "Mexico RGB hillshade"
    title: "RGB hillshade of Mexico."
  - url: /assets/images/Volcanos_all_final.png
    image_path: /assets/images/Volcanos_all_final.png
    alt: "volcanos 3d"
    title: "Mexico's highest peaks - 3D plot (missing the Nevado de Colima)."
---

I am a biologist interested in studying tropical forests using remote sensing. I obtained my Bachelor's and Master's degree in Biology, and a PhD in Geography by the Universidad Nacional Autónoma de México (UNAM). My research includes evaluating the use of remote sensing information to: model structural and diversity forest attributes, and monitor deforestation and forest degradation. Thus, I have experience in acquiring in-field forest data, visually interpreting images, working with different types of remote sensing information (e.g., multipectral, SAR and LiDAR point clouds), obtaining different remote sensing metrics (e.g., spectral indices, calculating GLCM texture, percentiles), as well as working with different modelling algorithms or techniques (e.g., linear / non-linear models, machine learning and deep learning algorthms).

I like to make most of my analyses in R or use other freely available tools such as QGIS and Google Earth Engine. I believe that using these tools helps in making analyses more transparent and reproducible.

I made a simple wordcloud plot of the most frequent terms in my publications to give a better idea of my research interests.

![wordlcloud]({{ site.url }}{{ site.baseurl }}/assets/images/wordcloud.png){:width="70%"}{: .align-center}

Word cloud analysis of my publications.
{: style="text-align: center;"}

# Figure gallery

Additionally, here are some figures of the work I have done:

{% include gallery caption="Figure gallery." %}