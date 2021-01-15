import React from "react"
import Layout from "../components/layout"

const Instructions = () => (
  <Layout>
    <body>
      <h2>Instructions</h2>
      <p>Authentication feature coming soon!</p>
      <p>To test this image system in development environment, download the frontend and backend code shown in the GitHub link below.</p>
      <p>Please note, the backend portion in my GitHub, some parts are allocated for my personal website johnnypark.ca, which are irrelavant to the imagesystem.</p>
      <p> All the API calls used for this imagesystem start with a path of johnnypark.ca/api/*</p>
      <p>Note: You may want to change the redirect links in 'main/views.py', as some of the GET API calls will redirect back to image.johnnypark.ca</p>
      <h2>Explanations</h2>
      <p>For backend, I decided to use django as my framework. <br></br>This is because:<br></br> 
        1. I already deployed my website running in django, so I am familiar with it <br></br><br></br>
        2. Due to its simplicity with python, it is a good framework to present a proof-of-concept.<br></br>
      </p>
      <p>For frontend, I used gatsby as my framework.<br></br>This is because:<br></br><br></br>
      1. I worked in such enviornments where the frontend and the backend was under one language (NodeJS+ExpressJS+plainJS and django). I wanted to try developing in mutliple languages and learn how to make 3rd party API calls.<br></br><br></br>
      2. I wanted to try out <a href="https://jamstack.org/">jamstack</a>, a new style of frontend development.
      I liked how the CDN manages the web deployment as soon as you push the code in your GitHub.<br></br><br></br>
      3. Intuitive design, as it only took a week to get used to.</p>
    </body>
    <br/><br/><a href="https://github.com/Johnnypark99/JP_Website">GitHub link (Backend)</a> 
          &emsp;<a href="https://github.com/Johnnypark99/gatsby-starter-default">GitHub link (Frontend)</a>
  </Layout>
)

export default Instructions
