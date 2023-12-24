import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><h2>Navbar</h2></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#"><h3>Home</h3><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h3>TicTacToe</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h3>Todo_List</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"><h3>Another</h3></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
