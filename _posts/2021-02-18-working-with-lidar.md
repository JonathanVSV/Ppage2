---
title: "Working with LiDAR data in R"
date: 2021-02-18T10:10:30-04:00
categories:
  - blog
tags:
  - post
  - r
  - LiDAR
  - point cloud
  - raster
layout: splash
---

# Working with LiDAR data in R

For this example we are going to use the `lidR` package. Additionally, we are going to load `raster` `rgdal` and `plyr`.
The first thing is to load the LiDAR data as a catalog and load a shapefile with the areas of interest (that can correspond to in-field measurements).

{% highlight r %}
library(lidR)
library(raster)
library(rgdal)
library (plyr)

# Load files
archivos<-list.files(".",
    pattern="*.las",
    full.names=T)
lidares<-catalog(archivos)

# Plot them to take a look
plot(lidares)

# Load shapefiles
ptos<-readOGR(paste0("shapes"),
              "buffer")

buff<-readOGR(paste0("shapes"),
              "buffer_50m")

{% endhighlight %}

Sometimes the CRS LiDAR data is lost when opening the file, so we can check the metadata of the image and set it accordingly. In this case, the target CRS was the same as the shapefile so let's assign the CRS that way.

{% highlight r %}
# Set CRS for LiDAR point cloud
crs(lidares)<-crs(ptos)
{% endhighlight %}

Clip the LiDAR data to the regions of interest.

{% highlight r %}
# Clip
clipeados<-lasclip(lidares,ptos)
clipeados2<-lasclip(lidares,buff)
plot(clipeados[[1]])
{% endhighlight %}

This LiDAR data was preclassified by the distributer, so we are using that classification values to determine vegetation points and ground points. Additionally, we will clip the LiDAR data by each in-field plot (ptos data).

{% highlight r %}
# Vegetación
Veg<-lapply(1:length(clipeados),
            function(i) lasfilter(clipeados[[i]],Classification == 1))
parcelas<-sapply(1:length(clipeados),function(i) as.character(ptos@data$Id_parcela[[i]]))

# Suelo
Suelo<-lapply(1:length(clipeados2),
              function(i) lasfilter(clipeados2[[i]],Classification == 2))
# If you need additional filtering, you might do it according to the z values.
# Suelo<-lapply(1:length(Suelo),
#              function(i) lasfilter(Suelo[[i]],Z >=90 & Z <=250))
# plot(Suelo[[60]])
{% endhighlight %}

The next step is creating a digital terrain model (DTM) using kriging from the ground data.

{% highlight r %}
DTM<-lapply(1:length(Suelo),
            function(i) grid_terrain(Suelo[[i]],res=1,
                                     algorithm=kriging(k=10),keep_lowest = FALSE))
plot(DTM[[60]])
DTM
plot(is.na(DTM[[1]]))
{% endhighlight %}

Then we can use the DTM to subtract those values to the vegetation points in order to get the vegetation height values.

{% highlight r %}
# Normalize point cloud
Veg_Norm<-lapply(1:length(Veg),
                 function(i) lasnormalize(Veg[[i]],DTM[[i]]))
{% endhighlight %}

The next step is to rasterize the normalized vegetation data to get a canopy height model (CHM).

{% highlight r %}
# Canopy height model
trees<-grid_canopy(Veg_Norm,res=0.5)
{% endhighlight %}

Additionlly, we can extract the point data, without making the rasterization and get height values according to different percentile values (z values).

{% highlight r %}
# Extract Metrics from Z
Veg_Z<-sapply(1:length(Veg_Norm),
              function(i) lasmetrics(Veg_Norm[[i]], .stdmetrics))
resuls_Z<-Veg_Z
metrics<-row.names(resuls_Z)
resuls_Z <- data.frame(matrix(unlist(resuls_Z), nrow=57, byrow=F),
                       stringsAsFactors=FALSE)
resuls_Z<-t(resuls_Z)
row.names(resuls_Z)<-parcelas
colnames(resuls_Z)<-metrics
resuls_Z<-resuls_Z[order(row.names(resuls_Z)),]

write.csv(resuls_Z,"/Users/ccgss/Drive2/Jonathan_DD/R/ChajulLidar/MetricsZ.csv",row.names = T)
{% endhighlight %}

Or make the same procedure for the intensity values.

{% highlight r %}
# Extract Metrics from I
Veg_I<-sapply(1:length(Veg),
              function(i) lasmetrics(Veg_Norm[[i]], .stdmetrics_i))
resuls_I<-Veg_I
metrics<-row.names(resuls_I)

resuls_I <- data.frame(matrix(unlist(resuls_I), nrow=12, byrow=F),
                       stringsAsFactors=FALSE)
resuls_I<-t(resuls_I)
row.names(resuls_I)<-parcelas
colnames(resuls_I)<-metrics
resuls_I<-resuls_I[order(row.names(resuls_I)),]

write.csv(resuls_I,"/Users/ccgss/Drive2/Jonathan_DD/R/ChajulLidar/MetricsI.csv",row.names = T)
{% endhighlight %}


Finally, we can try to detect individual crowns.

{% highlight r %}
# Individual crown detection
trees<-lapply(1:length(Veg),
                 function(i) lastrees(Veg_Norm[[i]],li2012(R = 3, speed_up = 5)))
{% endhighlight %}


