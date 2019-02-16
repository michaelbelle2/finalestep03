import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul class="comment-section">

          <li class="comment user-comment">

            <div class="info">
              <a href="#">Anie Silverston</a>
              <span>4 hours ago</span>
            </div>

            <a class="avatar" href="#">
              <img src="https://api.adorable.io/avatars/285/avatar_user_1.png" width="35" alt="Profile Avatar" title="Anie Silverston" />
            </a>

            <p>Suspendisse gravida sem?</p>

          </li>

          <li class="comment author-comment">

            <div class="info">
              <a href="#">Jack Smith</a>
              <span>3 hours ago</span>
            </div>

            <a class="avatar" href="#">
              <img src="https://api.adorable.io/avatars/285/avatar_user_1.png" width="35" alt="Profile Avatar" title="Jack Smith" />
            </a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida sem sit amet molestie portitor.</p>

          </li>

          <li class="comment user-comment">

            <div class="info">
              <a href="#">Bradley Jones</a>
              <span>1 hour ago</span>
            </div>

            <a class="avatar" href="#">
              <img src="https://api.adorable.io/avatars/285/avatar_user_2.png" width="35" alt="Profile Avatar" title="Bradley Jones" />
            </a>

            <p>Suspendisse gravida sem sit amet molestie portitor?</p>

          </li>

          <li class="comment author-comment">

            <div class="info">
              <a href="#">Jack Smith</a>
              <span>1 hour ago</span>
            </div>

            <a class="avatar" href="#">
              <img src="https://api.adorable.io/avatars/285/avatar_user_3.png" width="35" alt="Profile Avatar" title="Jack Smith" />
            </a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisee gravida sem sit amet molestie porttitor.</p>

          </li>

          <li class="write-new">

            <form action="#" method="post">

              <textarea placeholder="Write your comment here" name="comment"></textarea>

              <div>
                <img src="https://api.adorable.io/avatars/285/avatar_user_4.png" width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                <button type="submit">Submit</button>
              </div>

            </form>

          </li>

        </ul>

        <footer>
          <a class="tz" href="http://tutorialzine.com/2015/11/using-flexbox-to-create-a-responsive-comment-section/">Using Flexbox to Create a Responsive Comment Section</a>
        </footer>
      </div>
    );
  }
}

export default App;
