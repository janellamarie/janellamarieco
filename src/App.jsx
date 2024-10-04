import { useState } from 'react'
import './App.css'

function HomeScreen() {
  return (
    <div>
      <h1>Hi there! 👋🏻</h1>
    </div>
  )
}

// Navigation Bar
function NavigationBar() {
  {/* TODO: Add links */}
  return (
    <nav class="navbar navbar-expand-xxl navbar-dark pb-3 mb-3" style={{backgroundColor:"#37306B"}}>
      <div class="container-fluid">
        <ul class="navbar-nav nav nav-underline nav-fill">
          <li class="nav-item">
            <a class="nav-link active" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>
        </ul>
        <div>
          <a href="https://github.com/janellamarie" target="_blank" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/janella-marie-co/" target="_blank" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
          <a href="mailto:co.janellamarie@gmail.com" target="_blank" class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>  
  );
}

// Content: Home
function Home() {
  return(
    <div class="container text-center p-1">
      <div class="row align-items-center mb-3">
        <div class="col">
          <img src="src\assets\img\20230218_170648 icon.jpg" class="center-block rounded" width={150}/>
        </div>
      </div>
        <div class="row">
          <div class="col">
            <h2><b>I'm Janella Marie Co.</b></h2>
            <p>A full-stack software engineer currently based in Lutz, FL, USA. I graduated from University of South Florida with Bachelor's degree in Computer Science. I love building web experiences and I'm always eager to learn new things. </p>
          </div>
        </div>
      </div>
  )
}

function App() {
  return(
    <div>
      <NavigationBar />
      <div>
        {/* TODO: Add links */}
        <Home />
        {/* TODO: Add Experience */}
        {/* TODO: Add Education */}
        {/* TODO: Add Skills */}
      </div>
    </div>
  )
}

export default App
