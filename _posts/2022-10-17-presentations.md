---
title: "Presentations in R"
date: 2022-10-17T17:08:00-00:00
categories:
  - blog
tags:
  - post
  - r
  - xaringan
  - presentation
  - slides
  - powerpoint
layout: splash
---

# Presentations in R

Using the `xaringan` package, you can construct beautiful presentations using R. Essentially, the RMarkdown syntax is used to add text, tables and figures.

{% highlight r %}

# Title slide

---
title: "My presentation"
author: | 
    | Myself
    | Others
institute: "My Company"
date: "27/05/2022"
output:
  xaringan::moon_reader:
    css: [default, default-fonts, mystyle.css]
lib_dir: libs
nature:
  highlightStyle: github
highlightLines: true
countIncrementalSlides: false
---
  
```{r setup, include=FALSE}
library(tidyverse)
library(kableExtra)
```

<!--.header[Introducción]-->

# First slide

Text

```{r echo=F, out.width="50%", fig.align="center"}
knitr::include_graphics("img/rxar.png")
```

---
# Second slide

List:
  - 1.
  - 2. 
  - 3.
  - 4.

# Empty line
&nbsp;<br>

# Another image
```{r echo=F, out.width="10%", fig.align="center"}
knitr::include_graphics("img/xaringan.png")
```

---
# Third slide

.pull-left[
text at left
]

.pull-right[
text at right
]

---
# Fourth slide

A table.

```{r echo=F, out.width="100%"}

tab1 <- data.frame(a = 1:4,
                   b = 4:7,
                   c = 5:8,
                   d = 12:15)

knitr::kable(tab1, 
             escape = FALSE, 
             format = "html",
             table.attr = "style='width:100%;'",
             col.names = c("0", 
                           "1", 
                           "2", 
                           "3"),
             align = c("l", rep("r", 3))) |>
  kable_styling(bootstrap_options = c("striped"), 
                full_width = T,
                font_size = 14) |>
  kableExtra::row_spec(1, extra_css = "border-top: 1px solid")
```

---
background-image: url("img/r.png")
background-position: 50% 50%
background-size: cover
class: center, bottom, inverse

# ¡Thx!

## contact

{% endhighlight %}

The result

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/presentation.pdf){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/presentation.pdf ) Resulting slides.