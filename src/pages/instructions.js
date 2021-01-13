import React from "react"
import Layout from "../components/layout"

const Instructions = () => (
  <Layout>
    <body>
      <h2>Instructions</h2>
      <p>Currently user can upload and download one file at a time. Mutli-upload/download feature and authentication feature coming soon!</p>
      <p>If you want to test this feature in development enviornment, download the frontend and the backend shown in the github link below.</p>
      <p>For the backend github link, one will notice that some of the parts are for the my personal website johnnypark.ca.</p>
      <p> All the API calls I use for this imagesystem start with a path of johnnypark.ca/api/*</p>
      <p>Note: You may want to change the redirect links in 'main/views.py', as some of the GET API calls will redirect back to specific links of image.johnnypark.ca</p>
      <h2>Explanations</h2>
      <p>For backend, I decided to use django as my backend framework. <br></br>This is because:<br></br> 
        1. I already deployed my website running in django, so I am familiar with it <br></br>
        2. It is a good framework to use for proof-of-concept, due to its simplicity of python<br></br>
      </p>
      <p>For frontend, I used gatsby as my front-end framework.</p>
      <p>One of the reason is that I worked in such enviornments where the frontend and the backend was under one language (NodeJS+ExpressJS+plainJS and django). I wanted to try making it with mutliple language and learn how to make 3rd party API calls.</p>
      <p>Another reason why I used gatsby is because I wanted to try out <a href="https://jamstack.org/">jamstack</a>, supposedly a new style of development for frontend.<br></br>
      I liked how the CDN manages the web deployment as soon as you push the code in your github, and its low difficulty (it only took a week to get used to it).</p>
    </body>
    <br/><br/><a href="https://github.com/Johnnypark99/JP_Website">Github link (Backend)</a> 
          &emsp;<a href="https://github.com/Johnnypark99/gatsby-starter-default">Github link (Frontend)</a>
  </Layout>
)

export default Instructions
