import "./App.css";
import "./button.css";
import logo from "./assets/FullLogo_Transparent.png";

function MyHeader() {
  return (
    <header className="main-header">
      <div className="container-h">
        <img src={logo} alt="Logo" height="150px" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
            <button className="nav-button">
              <span>Resume</span>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section>
        <article>
          <div className="header-text">
            <h2>Responsive Design that adapts to you</h2>
            <p>
              Hi, I'm Vee. I build websites that are optimized for every
              platform and device.
            </p>
            <button className="nav-button2">About Me</button>
            <button className="nav-button3">Contact Me</button>
          </div>
        </article>
      </section>
      <section>
        <article>
          <h3>Let's build Something</h3>
          <p>
            Let me help you show your business off to the world!
            <br />
            Having an online presence is important and with a website you will
            be able to:
            <br />
            conduct business 24/7
            <br />
            promote new products and services
            <br />
            extend your reach; serve customers all over the world if you wish!{" "}
            <br />
            provide your customers with quick Information
            <br />
            level the playing ground; compete better with your competition
            <br />
            Already have a site and it just needs a bit of TLC? I can help with
            that too!
            <br />
            <button className="nav-button4">
              <span>Hire Me!</span>
            </button>
          </p>
        </article>
      </section>
      <section>
        <article>
          <h3>Tools</h3>
          <p>
            <i class="fa-brands fa-react fa-2x"></i>
            <i class="fa-brands fa-node fa-2x"></i>
            <i class="fa-solid fa-database fa-2x"></i>
            <i class="fa-brands fa-js fa-2x"></i>
            <i class="fa-brands fa-github fa-2x"></i>
            <i class="fa-brands fa-linux fa-2x"></i>
          </p>
        </article>
      </section>
      <section>
        <article>
          <h3>Services</h3>
          <aside>
            <p>
              Web Design
              <br />
              Web development support and maintenance
            </p>
          </aside>

          <button className="nav-button4">
            <span>Hire Me!</span>
          </button>
        </article>
      </section>
      <section>
        <article>
          <h3>Contact Information</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      </section>
      <section>
        <article>
          <h3>Social</h3>
          <p>
            <i class="fa-brands fa-linkedin fa-2x"></i>
            <i class="fa-brands fa-github fa-2x"></i>
            <i class="fa-brands fa-skype fa-2x"></i>
            <i class="fa-brands fa-slack fa-2x"></i>
          </p>
        </article>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <MyHeader />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
