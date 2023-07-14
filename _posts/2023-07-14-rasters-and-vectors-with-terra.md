---
title: "Rasters and vectors with terra"
date: 2023-07-14T16:35:00-00:00
categories:
  - blog
tags:
  - post
  - r
  - ggplot2
  - plot
  - grammar of graphics
  - figures
layout: splash
---

# Rasters and vectors with terra

This post shows a simple example of how to work with rasters and vectors using the terra package. Terra replaces the older raster package, since terra is usually faster to use.

{% highlight r %}
library(tibble)
library(terra)
library(dplyr)
{% endhighlight %}

Then create some objects to work with and plot them.

{% highlight r %}
im1 <- rast(matrix(1:9, nrow = 3),
            crs = "EPSG:4326",
            extent = c(-103,-100,19,22))

pts1 <- vect(data.frame(lon = c(-102.5, -102.5, -100.5, -100.5),
                        lat = c(19.5, 21.5, 21.5, 19.5)),
             geom = c("lon", "lat"), 
             crs = "EPSG:4326")

poly1 <- vect("POLYGON ((-102.5 19.5, -102.5 21.5, -100.5 21.5, -100.5 19.5, -102.5 19.5))",
             crs = "EPSG:4326")

plot(im1)
plot(pts1, add = T)
plot(poly1, add = T)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra1.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra1.png) Data.
{: style="text-align: center; font-size:0.75em;"}

# Vector operations

## Buffer

{% highlight r %}
poly2 <- buffer(poly1, width = 10000, capstyle = "square")
plot(poly2)
plot(poly1, add = T)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra2.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra2.png) Buffer.
{: style="text-align: center; font-size:0.75em;"}

## Intersection

{% highlight r %}
poly3 <- intersect(poly2, poly1)
plot(poly3[[1]])
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra3.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra3.png) Intersection.
{: style="text-align: center; font-size:0.75em;"}

# Raster operations

## Mask values

{% highlight r %}
im2 <- im1
im2[im2>=5] <- NA
plot(im2)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra4.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra4.png) Masked raster.
{: style="text-align: center; font-size:0.75em;"}

## Operations over all cells

{% highlight r %}
# Stack same image
im3 <- c(im1, im1)

im4 <- app(im3, fun = "sum")
plot(im4)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra5.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra5.png) Sum of both bands.
{: style="text-align: center; font-size:0.75em;"}

## Global operations

{% highlight r %}
global(im1, fun = "mean")
      mean
lyr.1    5
{% endhighlight %}

## Focal operations

{% highlight r %}
im5 <- focal(im1, w = 3, fun = "max")
plot(im5)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra6.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra6.png) Focal max.
{: style="text-align: center; font-size:0.75em;"}

# Raster vector operations

## Crop

{% highlight r %}
im1_c <- crop(im1, poly1)
plot(im1_c)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra7.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra7.png) Cropped images.
{: style="text-align: center; font-size:0.75em;"}

## Mask

{% highlight r %}
im2_c <- mask(im1, poly1)
plot(im2_c)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/terra8.png){: .align-center style="width: 30%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/terra8.png) Masked image (seems nothing happened due to overlap between raster and polygon).
{: style="text-align: center; font-size:0.75em;"}

## Extract values

### Manual colors 

{% highlight r %}
expts <- extract(im1, pts1)

# Get x and y coordinates and value
geom(pts1) |>
  as_tibble() |>
  select(x, y) |>
  mutate(value = expts|>pull(lyr.1))

# A tibble: 4 × 3
      x     y value
  <dbl> <dbl> <int>
1 -102.  19.5     3
2 -102.  21.5     1
3 -100.  21.5     7
4 -100.  19.5     9
{% endhighlight %}
