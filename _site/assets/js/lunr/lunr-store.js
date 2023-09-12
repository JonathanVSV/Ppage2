var store = [{
        "title": "Modelos Digitales de Elevación (DEM)",
        "excerpt":"4.DEM 4.DEM JVS 6/2/2020 Manejo de DEM DEM Primero cargar la imagen y calcular el NDVI library(raster) ## Loading required package: sp plot(dem) crs(dem) ## Coordinate Reference System: ## Deprecated Proj.4 representation: +proj=longlat +datum=WGS84 +no_defs ## WKT2 2019 representation: ## GEOGCRS[&quot;WGS 84 (with axis order normalized for visualization)&quot;, ## DATUM[&quot;World...","categories": ["blog"],
        "tags": ["post","r","spatial","DEM","raster"],
        "url": "/blog/DEM/",
        "teaser": null
      },{
        "title": "Clasificación supervisada",
        "excerpt":"Clasificacion Imágenes Clasificacion Imágenes Jonathan V. Solórzano 6/2/2020 1 Clasificación Supervisada Vamos a ver cómo realizar tres tipos de clasificación de imágenes utilizando los siguientes algoritmos: Máxima verosimilitud Árboles de decisión Random Forests Evaluación del modelo y precisión Estadísticas básicas del resultado 1.1 Tomar áreas de entrenamiento Para eso vamos...","categories": ["blog"],
        "tags": ["post","r","spatial","classification","raster"],
        "url": "/blog/clasificacion-supervisada/",
        "teaser": null
      },{
        "title": "Manejo de imágenes",
        "excerpt":"Manejo de imágenes en R Manejo de imágenes en R Jonathan V. Solórzano 10/02/2020 1 Manejo de rasters en R 1.1 Descargar imagen Para descargarla desde mi googleDrive vamos a utilizar los siguientes comandos library(raster) ## Loading required package: sp library(curl) #Ubicación para guardar la imagen descargada location &lt;- &quot;D:/Descargas/imagen1.tif&quot;...","categories": ["blog"],
        "tags": ["post","r","spatial","raster"],
        "url": "/blog/manejo-imagenes/",
        "teaser": null
      },{
        "title": "Calculating image texture in R",
        "excerpt":"Image texture in R In this post I will show you how to calculate image texture in R. These textures have been used to model diversity and structural attributes of different forests with intermediate to very high R^2 values. Image textures are metrics that summarise the pixel’s tone variability in...","categories": ["blog"],
        "tags": ["post","r","texture","glcm","foto"],
        "url": "/blog/calculating-image-texture/",
        "teaser": null
      },{
        "title": "Making animations in R",
        "excerpt":"Making animations in R This post will show you how to make animations in R. The first step is to load the required packages. tidyverse is a package that contains other packages useful to wrangle and clean data, as well as to make plots, such as dplyr, tidyr and ggplot2....","categories": ["blog"],
        "tags": ["post","r","maps","spatial","animation"],
        "url": "/blog/making-animations-in-r/",
        "teaser": null
      },{
        "title": "Making diagrams in R",
        "excerpt":"Diagrams in R In this post I will show you how to create simple diagrams in R that can be useful for creating flowcharts and figures using the packages DiagrammeR. So the first thing is to load DiagrammeR package. DiagrammeR package library(DiagrammeR) This packages works with essentially two types of...","categories": ["blog"],
        "tags": ["post","r","diagrams"],
        "url": "/blog/making-diagrams-in-r/",
        "teaser": null
      },{
        "title": "Making maps in R",
        "excerpt":"Making a map in R In this post I will show you how to make a map with a reference map of the location of the study site. To achieve the desired map you will need to load several packages. tmap is a package that lets you create plots from...","categories": ["blog"],
        "tags": ["post","r","maps","spatial"],
        "url": "/blog/making-maps-in-r/",
        "teaser": null
      },{
        "title": "Wordcloud in R",
        "excerpt":"Wordclouds in R Wordclouds are a great way of visualizing the most frequent terms in texts. Additionally, R provides some great tools to convert pdfs into text files and clean the texts, so non-informative terms are ignored (e.g., articles, prepositions, etc.). Converting data from pdf to text library(pdftools) library(wordcloud) library(tm)...","categories": ["blog"],
        "tags": ["post","r","wordcloud"],
        "url": "/blog/wordcloud-in-r/",
        "teaser": null
      },{
        "title": "Working with tidymodels and rasters in R",
        "excerpt":"Working with tidymodels and rasters Tidymodels is a package designed to make different types of models in a tidyverse-esque way. This package is particularly useful for implementing machine learning (ML) algorithms, as well as to divide your data into, training and test sets, etc. My particular personal interest was using...","categories": ["blog"],
        "tags": ["post","r","tidymodels","raster"],
        "url": "/blog/tidymodels-with-rasters/",
        "teaser": null
      },{
        "title": "Vectores Con Sf",
        "excerpt":"Vectores en R Vectores en R JSV 16/2/2022 Existen varios paquetes en R que permiten manejar datos espaciales, ya sea en formato de vector o raster. Algunos de ellos incluyen: sp, rgdal, rgeos, sf, stars, raster, terra. Sin embargo, en este curso nos enfocaremos en utilizar sf para el manejo...","categories": [],
        "tags": [],
        "url": "/vectores-con-sf/",
        "teaser": null
      },{
        "title": "Rasters Con Stars",
        "excerpt":"Rasters en R Rasters en R JSV 17/2/2022 Existen varios paquetes en R que permiten manejar datos espaciales, ya sea en formato de vector o raster. Algunos de ellos incluyen: sp, rgdal, rgeos, sf, stars, raster, terra. Sin embargo, en este curso nos enfocaremos en utilizar sf para el manejo...","categories": [],
        "tags": [],
        "url": "/rasters-con-stars/",
        "teaser": null
      },{
        "title": "Regular expressions in R",
        "excerpt":"Regular expressions in R Regular expressions in R are a very useful way to work with strings and patterns found in them. For this exercise we are going to use the stringr package. Regular expressions are expressions that describe patterns in strings. They are very useful to find general patterns...","categories": ["blog"],
        "tags": ["post","r","regular expressions","strings","characters"],
        "url": "/blog/regular-expressions/",
        "teaser": null
      },{
        "title": "Soundscape analysis in R",
        "excerpt":"Soundscape in R Introduction Soundscape can be defined as the collection of sounds that are recorded from a particular landscape. Soundscapes typically can have three main components: biophony, geophony and anthropohony. Depending on the type of landscape and weather conditions certain components can be the predominant ones. There are two...","categories": ["blog"],
        "tags": ["post","r","soundscape","sound ecology","passive acoustic monitoring"],
        "url": "/blog/soundscape-analysis/",
        "teaser": null
      },{
        "title": "Presentations in R",
        "excerpt":"Presentations in R Using the xaringan package, you can construct beautiful presentations using R. Essentially, the RMarkdown syntax is used to add text, tables and figures. Syntax summary --- to start a new slide -- to show additional content in the same slide (previously hidden). Titles Set titles. # Header...","categories": ["blog"],
        "tags": ["post","r","xaringan","presentation","slides","powerpoint"],
        "url": "/blog/presentations-in-r/",
        "teaser": null
      },{
        "title": "3D histograms in R",
        "excerpt":"3D histograms in R In this post I am going to show you how to construct a beautiful 3D histogram that can be a very nice way to show your frequency data. For this, I will use the ggridges package. ggridges The ggridges package has functions to construct 3d histograms....","categories": ["blog"],
        "tags": ["post","r","ggridges","3d histograms","pretty plots"],
        "url": "/blog/3D-histograms-in-r/",
        "teaser": null
      },{
        "title": "Exploratory data analysis in R",
        "excerpt":"Exploratory data analysis in R In this post we are going to use two packages designed to perform exploratory data analysis. This is usually the first thing to do with any data base or data frame, to get to know the data, its distribution and possible missing data. These two...","categories": ["blog"],
        "tags": ["post","r","exploratory data analysis","data description","data exploration","summary statistics"],
        "url": "/blog/exploratory-data-analysis-in-r/",
        "teaser": null
      },{
        "title": "Landscape metrics in R",
        "excerpt":"Landscape metrics in R Landscape metrics are frequently used in landscape ecology to asses the spatial structure of a landscape. Thus, these metrics usually summarise fragmentation and connectivity patterns. The usual inputs to calculate thees metrics is a classification which has the spatial structure of different land covers / land...","categories": ["blog"],
        "tags": ["post","r","landscape ecology","landscape metrics","patch metrics","fragmentation","connectivity","fragstats"],
        "url": "/blog/landscape-metrics-in-r/",
        "teaser": null
      },{
        "title": "Species occurrence data in r",
        "excerpt":"Species occurrence data The purpose of this post is to download data from GBIF to obtain occurrences registries of a particular species and then to transform that data into a geospatial object and obtain a map. The first step is to load the required packages. Rgbif is the package that...","categories": ["blog"],
        "tags": ["post","r","rgbif","gbif","biogeogrpahy","species occurrence"],
        "url": "/blog/species-occurrence-data-in-r/",
        "teaser": null
      },{
        "title": "3D maps in r",
        "excerpt":"3D maps in R The purpose of this post is to show how make a 3D map using rayshader. The idea is to use a DEM obtained from the SRTM mission (worldwide cover) or an available DEM from other National Institutions, such as Mexico’s National Institute of Statistics and Geography...","categories": ["blog"],
        "tags": ["post","r","rayshader","3d relief","3d dem","DEM","Relief"],
        "url": "/blog/3d-maps-in-r/",
        "teaser": null
      },{
        "title": "RGB Shaded relief maps in R",
        "excerpt":"RGB Shaded relief maps in R In this post I will show you how to make an RGB composite with shaded relief using rayshader, elevatr, maptiles,sf, terra and magick packages. First load the libraries we are going to use. library(elevatr) library(maptiles) library(sf) library(terra) library(rayshader) library(magick) Then, read the roi polygon...","categories": ["blog"],
        "tags": ["post","r","rayshader","terra","shaded relief","RGB shaded relief","DEM","Relief"],
        "url": "/blog/rgb-shaded-relief-maps-in-r/",
        "teaser": null
      },{
        "title": "Shaded relief maps in R",
        "excerpt":"Shaded relief maps in R This is a follow up of the series of experiments I have been working with rayshader. In this post, I will focus on making a shaded relief map using different colors to represent different altitudes. Also, in this post I will show you how to...","categories": ["blog"],
        "tags": ["post","r","rayshader","terra","shaded relief","RGB shaded relief","DEM","Relief"],
        "url": "/blog/shaded-relief-maps-in-r/",
        "teaser": null
      },{
        "title": "Volcanos 3d maps",
        "excerpt":"Volcanos 3d maps I have continued playing with rayshader, rayvista and magick packages to make beautiful 3d maps. This post shows the code used to make a 3d map with some of the highest peaks in Mexico, which all have a volcanic origin. Additionally, the area shown in the map...","categories": ["blog"],
        "tags": ["post","r","rayshader","rayvista","magick","terra","3d maps","RGB shaded relief","DEM","Relief"],
        "url": "/blog/Volcanos-rayshader/",
        "teaser": null
      },{
        "title": "Spotify API in R",
        "excerpt":"Spotify API in R This post will show you how to connect to the Spotify API using R and the spotifyR package. This API enables you to extract data for particular artists or songs from the Spotify database. The first step is registering in the Spotify Developer App: https://developer.spotify.com/. Once...","categories": ["blog"],
        "tags": ["post","r","spotify","music","API"],
        "url": "/blog/spotify-in-r/",
        "teaser": null
      },{
        "title": "Shiny App with spatial data",
        "excerpt":"Shiny App with spatial data This post will show you how to build a shiny app to visualize spatial data (mainly in raster and vector format). Remember that you can also build other types of shiny apps, but I decided to focus this post on spatial data. So the first...","categories": ["blog"],
        "tags": ["post","r","shiny","app","spatial","visualization","webapp"],
        "url": "/blog/shiny-app-spatial/",
        "teaser": null
      },{
        "title": "Web scraping with r",
        "excerpt":"Web scraping with R This post will show you how to get data from a webpage (also known as web scraping) with R and the rvest package. This analysis was performed to complement the data obtained from the spotify API. Since I could not obtain all the data I was...","categories": ["blog"],
        "tags": ["post","r","rvest","web scraping","website data extraction"],
        "url": "/blog/web-scraping-with-r/",
        "teaser": null
      },{
        "title": "Open Foris tools in r",
        "excerpt":"Open Foris tools in R In this post I will show you how to easily run two Open Foris tools in R to easily validate a map and obtain the area estimates corrected by the producer’s accuracies obtained in the confusion matrix. The repository of these tools can be found...","categories": ["blog"],
        "tags": ["post","r","Open Foris","map","accuracy assessment","area estimates","map verification","map validation","overall accuracy"],
        "url": "/blog/open-foris-tools/",
        "teaser": null
      },{
        "title": "Beautiful-plots(ggplot2)-in-r",
        "excerpt":"Beautiful plots in R using ggplot2 The purpose of this post is to show how to use the basic syntax of ggplot2, do some of the most common types of plots, as well as some customizations and facets. For this post we are going to use the iris dataset, as...","categories": ["blog"],
        "tags": ["post","r","ggplot2","plot","grammar of graphics","figures"],
        "url": "/blog/beautiful-plots(ggplot2)-in-r/",
        "teaser": null
      },{
        "title": "Working with LiDAR data in R",
        "excerpt":"Working with LiDAR data in R For this example we are going to use the lidR package. Additionally, we are going to load terra sf and dplyr. In this example, we will work with lascatalogs, which enables working with several las files at once. The first thing is to load...","categories": ["blog"],
        "tags": ["post","r","LiDAR","point cloud","raster","lidR"],
        "url": "/blog/working-with-lidar/",
        "teaser": null
      },{
        "title": "Rasters and vectors with terra",
        "excerpt":"Rasters and vectors with terra This post shows a simple example of how to work with rasters and vectors using the terra package. Terra replaces the older raster package, since terra is usually faster to use. library(tibble) library(terra) library(dplyr) Then create some objects to work with and plot them. im1...","categories": ["blog"],
        "tags": ["post","r","ggplot2","plot","grammar of graphics","figures"],
        "url": "/blog/rasters-and-vectors-with-terra/",
        "teaser": null
      },{
        "title": "AGB forest sampling calculations",
        "excerpt":"AGB forest sampling calculations This post shows an example of how to calculate some common plot-level variables from a forest sampling. library(BIOMASS) library(stringr) library(tidyverse) Read data # Field data with individual tree measures df &lt;- read.csv(\"D:/Drive/Jonathan_trabaggio/Doctorado/R/Ayuquila_Degradation/CleanData/df_all.csv\", na.strings = \"NA\") # Coordinates of each site. coords &lt;- read.csv(\"D:/Drive/Jonathan_trabaggio/Doctorado/R/Ayuquila_Degradation/Data/gpscoords.csv\") How the headers...","categories": ["blog"],
        "tags": ["post","r","BiOMASS","AGB","community attributes","plot-level calculations"],
        "url": "/blog/AGB-forest-sampling-calculations/",
        "teaser": null
      }]
