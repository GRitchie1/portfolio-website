import React from 'react';
import styles from './Project.module.css';
import Button from '../Button/Button'

class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.url = props.url
      this.index = props.index
    }
    
    render() {
      var index = this.index
      return (
        <div className={styles.ProjectContainer}>
          <img className={styles.ProjectImg} src={this.img} alt={this.title}></img>
          <div className={styles.ProjectTextContainer}>
            <h3 className={styles.ProjectText}>{this.title}</h3>
            <p className={styles.ProjectText}>{this.content}</p>
            <Button link={this.url} text="Read More"/>
            <button onClick={()=>this.props.handler(index)}>open</button>
          </div>
        </div>
      );
    }
  }


  class OpenProject extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.url = props.url
    }
    
    render() {
      return (
        <div className={styles.OpenProjectContainer}>
          This is an open project
        </div>
      );
    }
  }


  export {Project, OpenProject}

