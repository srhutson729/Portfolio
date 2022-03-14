import React, { Component } from 'react';
import './Home.css';
import './App.css';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="Scott2022.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Scott Hutson</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | SQL | Wordpress </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href={"https://www.linkedin.com/in/srhutson729"} rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href={"https://github.com/srhutson729"} rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href={"https://www.facebook.com/srhutson729"} rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;