---
title: "Exploratory data analysis in R"
date: 2023-01-13T12:57:00-00:00
categories:
  - blog
tags:
  - post
  - r
  - exploratory data analysis
  - data description
  - data exploration
  - summary statistics
layout: splash
---

# Exploratory data analysis in R

In this post we are going to use two packages designed to perform exploratory data analysis. This is usually the first thing to do with any data base or data frame, to get to know the data, its distribution and possible missing data. These two packages are `skimr` and `dataxray`.

## Data

For this example, we are going to use `flights` dataset.

{% highlight r %}
library(tidyverse)
library(skimr)
library(nycflights13)
# devtools::install_github("agstn/dataxray")
library(dataxray)

# Get flights data
data(flights)
{% endhighlight %}

## skimr

Skimr is a package designed to skim over the data and get a basic description of the data. The information included in this disciption includes:

1. Number of rows and columns.
2. Number of variables by type (character, numeric, date).
3. Number and percentage of missing values.
4. Number of unique values (character) or mean, sd and quartiles (numeric).
5. Histograms.

{% highlight r %}
# General skim
flights |>
  skim()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/skim.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/skim.png) Example of skim results.
{: style="text-align: center; font-size:0.75em;"}

You can also use traditional dplyr syntax to select only particular variables or non missing rows.

{% highlight r %}
# Select non na entries
flights |>
  skim() |>
  select(-n_missing)

# Skim particular variables
flights |>
  skim(air_time)
{% endhighlight %}

## dataxray

Dataxray is a package that performs a similar exploratory data analysis to `skimr`, but its main advantage is that it has an interactive interface and has a fancier design. Nonetheless, it shows almost the same information as `skimr`; however it takes more time to show the results.

{% highlight r %}
flights |>
  # Just to accelerate creation of xray
  slice(1:50000) |>
  make_xray() |>
  view_xray()
{% endhighlight %}

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/dataxray.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/dataxray.png) Example of dataxray interface.
{: style="text-align: center; font-size:0.75em;"}
