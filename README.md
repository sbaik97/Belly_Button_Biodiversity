# Belly_Button_Biodiversity
Data Visualization in JavaScript

## Background

Create an interactive data visualization for the web to build an interactive dashboard exploring the Belly Button Biodiversity Dataset using Plotly.js, a JavaScript data visualization library.
 

## Objectives

### Step 1 - Plotly.js

Use Plotly.js to build interactive charts for the dashboard

* Create a Pie Chart that uses data from the samples route (`/samples/<sample>`) to display the top 10 samples
    * Use `sample_values` as the values for the Pie Chart
    * Use `otu_ids` as the labels for the Pie Chart
    * Use `otu_labels` as the hovertext for the Pie Chart

![](Images/pie_chart.png)

* Create a Bubble Chart that uses data from the samples route (`/samples/<sample>`) to display each sample
    * Use `otu_ids` for the x values
    * Use `sample_values` for the y values
    * Use `sample_values` for the marker size
    * Use `otu_ids` for the marker colors
    * Use `otu_labels` for the text values

![](Images/bubble_chart.png)

* Display the sample metadata from the route `/metadata/<sample>`
    * Display each key/value pair from the metadata JSON object somewhere on the page

* Update all of the plots any time that a new sample is selected

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the Weekly Washing Frequency obtained from the route `/wfreq/<sample>`
    * Modify the example gauge code to account for values ranging from 0 - 9
    * Update the chart whenever a new sample is selected

![](Images/wash_frequency.png)






## Where does the data come from?

The data is provided by Monash University Data Analytics Bootcamp.

## What did I do?

In this assignment, I've built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in selected test ID.

3. Create a bubble chart that displays each sample.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Create the Gauge Chart to plot the weekly washing frequency of the individual.

6. Update all of the plots any time that a new sample is selected.

7. Deploy the app to [GitHub Pages](https://momcancode.github.io/plotly-challenge/).
