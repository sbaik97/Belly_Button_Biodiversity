# Belly_Button_Biodiversity
Data Visualization in JavaScript

## Background

Create an interactive data visualization for the web to build an interactive dashboard exploring the Belly Button Biodiversity Dataset using Plotly.js, a JavaScript data visualization library.
 

## Objectives

* Create basic plots with Plotly, including bar charts, line charts, and pie charts.
* Use D3.json() to fetch external data, such as CSV files and web APIs.
* Use functional programming in JavaScript to manipulate data, using map(), filter(), and sort() methods.
* Use event handlers in JavaScript to add interactivity to a data visualization.
* Deploy an interactive chart to GitHub Pages.



## Where does the data come from?

The data is provided by Monash University Data Analytics Bootcamp [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/).


## Results

* The final product can be found in the following webpage

https://sbaik97.github.io/Belly_Button_Biodiversity/

* Use the D3 library to read in `samples.json`.

### Step 2 - Horizontal Bar Chart

* Create a horizontal bar chart to display the top 10 bacterial species (OTUs), using JavaScript, Plotly, and D3.js.
* The horizontal bar chart will display the  sample_values as the values, the otu_ids as the labels, and the  otu_labels as the hover text for the bars on
the chart.

      * Code is written to create the arrays when a sample is selected from the dropdown menu
      * The x values are the sample_values in descending order.
      * The y values are the otu_ids in descending order.
      * The hover text is the otu_labels in descending order.
      * The top 10 sample_values are sorted in descending order.

![](/image/barchart.png)

### Step 3 - Bubble Chart

* Create a  bubble chart to display the otu_ids and sample_values 
* Create a  bubble chart to display the otu_ids and sample_values when an individual’s ID is selected from the dropdown menu webpage.

      * The otu_ids as the x-axis values.
      * The sample_values as the y-axis values.
      * The sample_values as the marker size.
      * The otu_ids as the marker colors.
      * The text for a bubble is shown when hovered over

![](image/bubblechart.png)

### Step 4 - Gauge Chart

* Create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart
* Update all of the plots any time that a new sample is selected

       * The type property is represnted as "indicator".
       * The mode property is represnted as "gauge+number".
       * The maximum range for the gauge is 10 and set different colors as string values in increments of 2.
       * The washing frequency is represented as black to a foating point number.
       
![](image/guage.png)

* The dataanlsysi is deployed to the website [GitHub Pages](https://sbaik97.github.io/Belly_Button_Biodiversity/).
* When the dashboard is frst opened in a browser, ID 940’s data is displayed in the dashboard, and all three charts are working according to the selection from the dropdown menu.


## Summary 

In this assignment, I've built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


