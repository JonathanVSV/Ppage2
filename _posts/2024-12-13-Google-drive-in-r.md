---
title: "Google Drive in R"
date: 2024-12-13T10:10:00-00:00
categories:
  - blog
tags:
  - post
  - r
  - google drive
  - cloud storage
layout: splash
---

# I/O data in Google Drive in R

This post shows how to connect to your Google Drive API. A very good tutorial can be found here: [trackdown tutorial](https://claudiozandonella.github.io/trackdown/articles/oauth-client-configuration.html).

Here are the main steps

{% highlight r %}
library(googledriveR)
{% endhighlight %}

## Create project in Google Cloud 

Go to [Google Cloud Console](https://console.cloud.google.com/) and accept terms of use. Then, create a new project, specify name an accept. The tab opnening the projects is right next to Google Cloud logo.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCproject.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCproject.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Once created, open the project (using the same tab as previous step) and click on the three lines left of the Google Cloud logo, go to APIs & Services and Enabled APIs & services.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCapi.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCapi.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Next, go to enable apis and services.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCenable.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCenable.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Then search for google drive api and click on it. An enable button will appear, click on it to enable. Do the same for Google Docs API.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCGDapi.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCGDapi.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Once both APIS are enabled go back to the APIs & Services menu and click on OAuth consent screen. Then click on external option and create.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCconsent.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCconsent.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Then, you need to create an app name and associate an email with the app, as well as a developer contact. Next click on add or remove scopes. Activate “…/auth/userinfo.email”  “openid”, “…/auth/drive” and “…/auth/docs”. Finally, update, save changes and accept.

Back in the OAuth consent screen publish app and confirm.

The next step is go to the credentials menu and create a nuew OAuth 2.0 Client IDs. Go to create credentials, OAUth client ID, select application type = Desktop app and set the desired name. Next, the credential will be shown. Click on download json and save file in your local disk.

[![styled-image]({{ site.url }}{{ site.baseurl }}/assets/images/GCcredentials.png){: .align-center style="width: 60%;"}]({{ site.url }}{{ site.baseurl }}/assets/images/GCcredentials.png) Scatterplot.
{: style="text-align: center; font-size:0.75em;"}

Next, open RStudio locally, install "usethis" package and use `usethis::edit_r_environ()` to modify the environment, which will be run everytime R starts. In this file save the following: `GOOGLEDRIVE_PATH = {location}`, setting the location of your json secret instead of {location}.

After this step, save, restart R, and install "googledrive". And add the following to your script. First time you run the auth configure step, a window will popup asking for permission. Give permissions and you are ready to use Google Drive from R.

{% highlight r %}
library(googledrive)

drive_auth_configure(gargle::gargle_oauth_client_from_json(Sys.getenv("GOOGLEDRIVE_PATH")))
{% endhighlight %}