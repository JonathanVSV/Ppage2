---
title: "Making presentations in R"
date: 2022-02-10T10:10:30-04:00
categories:
  - blog
tags:
  - post
  - r
  - ppt
  - presentation
  - powerpoint
  - slides
layout: splash
---

# Making presentations in R

In this post I'll show you how to make presentations with R using `xaringan` in Rmarkdow. This might be a very easy way to mingle r code and images in slides. Also, you can easily change the theme by selecting different themes or customising it by using css.

The first thing is to open Rstudio and go to File -> New File -> Rmarkdown -> From Template -> Ninja presentation. 

A new Rmarkdown file will open with a YAML header indicating some important things as the title, author, date, outpu, highlight styles, etc. In this part, you can also call a custom css file to define further css classes or change some default ones (mystyle.css).

{% highlight yaml %}
---
title: "My title"
# subtitle: "Sub"
author: Myself
institute: "My home"
# date: "25/02/2022"
output:
  xaringan::moon_reader:
    css: [default, default-fonts, mystyle.css]
lib_dir: libs
nature:
  highlightStyle: github
highlightLines: true
countIncrementalSlides: false
---
{% endhighlight %}

After the YAML header you can start writing your own slides. Then you can write your slides with markdown syntax: 

## Slides

Add additional slide or incremental slides.

{% highlight md %}
--- to start a new slide
-- to show additional content in the same slide (previously hidden).
{% endhighlight %}

## Titles

Set titles.

{% highlight md %}
# Header 1
# Header 2
# Header 3
{% endhighlight %}

## Highlight

Highlight words in italic or bold font.

{% highlight md %}
_italic_, **bold**
{% endhighlight %}

## Lists

You can choose between three different types of lists: hyphens, numbered and bullets.

Hyphens
{% highlight md %}
- a
- b
{% endhighlight %}

Numbered
{% highlight md %}
1. a
2. b
{% endhighlight %}

Bullets
{% highlight md %}
* a
* b
{% endhighlight %}

## Add images

Although you can add images directly with markdown, I recommend using `knitr` to include images using r code. This way you can better control the size of the image (instead of using directly its size) and setting other options as its alignment.

{% highlight r %}
```{r echo=F, out.width="90%", fig.align="center"}
knitr::include_graphics("img/test.png")
```
{% endhighlight %}

## Two columns

There are two default styles to set the objects inside the slides in a two-column format: 

The first one puts your slides in two columns with each one expanding aprox. 50 % of the total width of the slide
{% highlight md %}
.pull-left[
  your content
]
.pull-right[
  your content
]
{% endhighlight %}

The second one puts your slides in two columns with the first expanding aprox. 25 % of the total width of the slide, and the second, 75 %.
{% highlight md %}
.left-column[
  your content
]
.right-column[
  your content
]
{% endhighlight %}

## Changing slide class

You can add special slides with a different theme than the default. One commonly used is the 'inverse' class, which is the theme used for the starting slide. Additionally, you can set other classes such as 'center' or 'bottom' or combine them to set the position of the text.

{% highlight md %}
class: center, bottom, inverse
{% endhighlight %}

## Background images

You can add images as background for certain slides by selecting the image and setting its position and size.

{% highlight md %}
background-image: url("img/end.png")
background-position: 50% 50%
background-size: cover
{% endhighlight %}

## Tables

You can use `kable` inside the `knitr` package to draw formatted tables.

{% highlight md %}
knitr::kable(tab1, 
             format = "html",
             table.attr = "style='width:80%;'") |>
  kable_styling(bootstrap_options = c("striped"), 
                full_width = T,
                font_size = 14) 
{% endhighlight %}

## Formulas

You can add formulas or use mathematica notation using `$$ $$` for equations or `$ $` for mathematical notations.

{% highlight md %}
$$OA = \displaystyle \frac {TP + TN} {TP + TN + FP + FN}$$
{% endhighlight %}

## Knit

Finally, when the document is ready, knit the document (string ball icon in Rstudio) to create the html file with the slides.