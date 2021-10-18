# Nigeria-RI-VPDS-Data-Triangulation-Dashboard-Dhis2-app
This is the code to the Dhis2 app to the Nigeria Routine Immunization And Vaccine Preventable Diseases-Surveillance-Data-Triangulation-Dashboard on the Dhis2 app hub.

Based on the description on Dhis2 App hub 

## Description
The Nigeria Routine Immunization (RI) & Vaccine Preventable Diseases Surveillance (VPDs) Data Triangulation Dashboard visualizes selected indicators across RI & VPDs programme.


The dashboard developed on R Shiny technology will be integrated with the country's DHIS2 national instance, Surveillance Outbreak Response Management and Analysis System (SORMAS), and the Multi-Source Data Analytics and Triangulation (MSDAT) Platform.


The dashboard provides access to timely information required for decision making at the national and sub-national levels.

## Process of development of the Dhis2 app
First, the dashboard was built using R shiny and hosted on the shinyapps.io servers the Rstudio hosting services, then the app url was used to integrate into the 3 platforms using an iframe.

In this dhis2 in the App.js file in the DTNigeria/src/ directory starting from line 14. it shows how the iframe was used which connects to the dashboard on shinyapps.io servers 

