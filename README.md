# Air Quality Monitoring System

## Description

This project is a web application for monitoring air quality using real-time data from a specified location. It provides functionality to retrieve air quality data for a given latitude and longitude using an external API. The project includes services to fetch air quality data and store it in a database, as well as a cron job to periodically update the air quality information.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/MohamedGouda/air-quality-monitoring.git
2. Navigate to the project directory
   ```bash
   cd air-quality-monitoring
3. Install dependencies using npm
   ``bash
   npm install
4. Run the Project
   ```bash
   npm run start
5. open postman and run the below URL to get the air quality data for any coordinates you have ( longtitude and latitude ) for example here i'm using ( 90 , 180 ) in the same  order
   ```bash
   GET   http://localhost:7777/api/air-quality?long=90&lat=180
