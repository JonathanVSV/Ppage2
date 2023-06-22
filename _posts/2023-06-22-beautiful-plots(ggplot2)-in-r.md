---
title: "Beautiful-plots(ggplot2)-in-r"
date: 2023-06-22T12:35:00-00:00
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

# Beautiful plots in R using ggplot2

The purpose of this post is to show how to use the basic syntax of ggplot2, do some of the most common types of plots, as well as some customizations and facets. For this post we are going to use the iris dataset, as well as the skimr and cowplot packages. The first step consists of loading the desired packages, as well as the data and skimming over it. The first section will show some basic plots, while the next ones will show how to customize certain elements of the plots, like color, fill, facets and theme.

{% highlight r %}
library(ggplot2)
library(skimr)
library(cowplot)

data(iris)
skim(iris)
{% endhighlight %}

Then we can start building our different plots.

# Basic plots

## Scatterplot

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, y = Sepal.Width)) +
  geom_point()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/scatter.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/scatter.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

## Line plot

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, y = Sepal.Width)) +
  geom_line()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/line.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/line.png) Line plot
{: style="text-align: center; font-size:0.75em;"}

## Bar plot

{% highlight r %}
iris |>
  ggplot(aes(x = Species)) +
  geom_bar()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/bar.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/bar.png) Bar plot.
{: style="text-align: center; font-size:0.75em;"}

## Column plot

{% highlight r %}
iris |>
  group_by(Species) |>
  summarise(meanSL = mean(Sepal.Length)) |>
  ggplot(aes(x = Species,
             y = meanSL)) +
  geom_col()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/col.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/col.png) Column plot.
{: style="text-align: center; font-size:0.75em;"}

## Box plot

{% highlight r %}
iris |>
  ggplot(aes(x = Species,
             y = Sepal.Length)) +
  geom_boxplot()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/box.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/box.png) Boxplot.
{: style="text-align: center; font-size:0.75em;"}

## Histogram plot

{% highlight r %}
iris |>
ggplot(aes(x = Sepal.Length)) +
  geom_histogram()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/hist.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/hist.png) Histogram plot.
{: style="text-align: center; font-size:0.75em;"}

# Adding colors

## Color

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/color.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/color.png) Scatterplot with colors by factor.
{: style="text-align: center; font-size:0.75em;"}

## Fill

{% highlight r %}
iris |>
  ggplot(aes(x = Species,
             fill = Species)) +
  geom_bar()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/fill.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/fill.png) Barplot with fill by factor.
{: style="text-align: center; font-size:0.75em;"}

## Customized colors

### Manual colors 

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  scale_colour_manual(values = c("forestgreen", "royalblue", "firebrick2"))
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/manualcol.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/manualcol.png) Scatterplot with manual colors by factor.
{: style="text-align: center; font-size:0.75em;"}

### Rcolorbrewer

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  scale_colour_brewer(palette = "RdYlBu")
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/colorbrewer.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/colorbrewer.png) Scatterplots with colors set by RColorbrewer.
{: style="text-align: center; font-size:0.75em;"}

# Axes

## Axes

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  scale_y_continuous(breaks = seq(2, 4.5, 0.25),
                     limits = c(2, 4.5)) +
  scale_x_continuous(breaks = seq(4, 8, 0.5),
                     limits = c(4, 8))
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/axes.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/axes.png) Scatterplot with customized axes.
{: style="text-align: center; font-size:0.75em;"}

## Axes labels

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  labs(x = "Sepal length (cm)", 
       y = "Sepal width (cm)")
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/axeslab.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/axeslab.png) Scatterplot with customized axes labels.
{: style="text-align: center; font-size:0.75em;"}

# Facets

## Facet grid

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  facet_grid(~ Species)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/facetgrid.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/facetgrid.png) Scatterplot with facets set as a grid.
{: style="text-align: center; font-size:0.75em;"}

## Facet wrap

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  facet_grid(~ Species)
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/facetwrap.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/facetwrap.png) Scatterplot with facets set as a wrap (multiple factors will be accumulated by each panel).
{: style="text-align: center; font-size:0.75em;"}

# Theme

## Personalized theme

{% highlight r %}
my_theme <- theme_bw() + 
  theme(plot.title=element_text(size=18,hjust = 0.5),
        text=element_text(size=24,colour="black"),
        axis.text.x = element_text(size=18,
                                   colour="black",
                                   angle = 90, 
                                   hjust = 1,
                                   vjust = 0.5),
        axis.text.y = element_text(size=18,
                                   colour="black",
                                   angle = 0, 
                                   vjust = 0.5,
                                   hjust = 1),
        axis.title = element_text(size=18,
                                  colour="black",
                                  face = "bold"), 
        axis.line = element_line(colour = "black"),
        legend.title = element_text(size=18),
        legend.text = element_text(size=18),
        axis.line.x =element_line(colour="black"),
        axis.line.y =element_line(colour="black"),
        panel.grid.major=element_blank(),
        panel.grid.minor=element_blank(),
        panel.border=element_blank(),
        panel.background=element_blank(),
        strip.background =element_rect(fill="gray90",
                                       colour = "black"),
        strip.text = element_text(size=18,
                                  colour="black",
                                  face = "bold"),
        plot.margin = unit(c(0.01,0.01,0.01,0.01), "cm"))

iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  facet_wrap(~ Species) + 
  my_theme
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/mytheme.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/mytheme.png) Scatterplot with facet wrap where several theme elements have been customized according to personal criteria.
{: style="text-align: center; font-size:0.75em;"}

## Cowplot theme

{% highlight r %}
iris |>
  ggplot(aes(x = Sepal.Length, 
             y = Sepal.Width,
             col = Species)) +
  geom_point() +
  facet_wrap(~ Species) + 
  theme_cowplot()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/cowplottheme.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/cowplottheme.png) Scatterplot with facet wrap where several theme elements have been customized according to the cowplot theme.
{: style="text-align: center; font-size:0.75em;"}