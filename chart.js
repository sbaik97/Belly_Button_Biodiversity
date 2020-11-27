function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    console.log(result);
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var sampleData = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaArray = data.metadata.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
    var samplevalues= sampleArray[0];
    console.log(samplevalues);
    // 2. Create a variable that holds the first sample in the metadata array.
    var metavalues= metaArray[0];
    console.log(metavalues);
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
	  all_otu_ids = samplevalues.otu_ids;
		all_otu_labels = samplevalues.otu_labels;
    all_sample_values = samplevalues.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var wfreq_sample = metavalues.wfreq;

    // Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last. 
    var yticks = all_otu_ids.slice(0, 10).map(outId => `OTU ${outId}`).reverse();
    var xticks = all_sample_values.slice(0, 10).reverse();
    var otu_labels = all_otu_labels.slice(0, 10).reverse();

    // Create the trace for the bar chart. 
    var barData = [{
			x: xticks,
			y: yticks,
			text: otu_labels,
			type: "bar",
			orientation: "h"
		}];
    // Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
			xaxis: { title: "Sample Value"},
			yaxis: { title: "OTU ID"},
			autosize: false,
			width: 600,
			height: 600
     
    };

    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    
    
    // Create the trace for the bubble chart.
    var bubbleData = [{
			x: all_otu_ids,
			y: all_sample_values,
			text: all_otu_labels,
			mode: 'markers',
			marker: {
				color: all_otu_ids,
        size: all_sample_values,
        colorscale: "Earth"
			}
   
    }];

    // Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures per sample',
			xaxis: { title: "OTU ID"},
      yaxis: { title: "Sample Value"},
      hovermode: "closests", 
      showlegend: false,
          
    };

    // D2: 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    
   
    // 4. Create the trace for the gauge chart.
		var gaugeData = [
			{
				domain: { x: [0, 1], y: [0, 1] },
				value: wfreq_sample,
				title: {text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week'},
				type: "indicator",
				mode: "gauge+number",
				gauge: {
          axis: { range: [null, 10] },
          bar: { color: "black" },
					steps: [
						{ range: [0, 2], color: '#FD3216' },
						{ range: [2, 4], color: '#FF9616' },
						{ range: [4, 6], color: '#F6F926' },
						{ range: [6, 8], color: '#EEFFA7' },
						{ range: [8, 10], color: '#479B55' },
					],
				}
			}
		];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 600, height: 450, margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
}
