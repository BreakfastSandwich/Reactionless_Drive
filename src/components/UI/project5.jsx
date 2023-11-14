import ProjectCSS from './project.module.css'

export default function Project5() {
    return (
        <div className={ProjectCSS.card}>
        <div className={ProjectCSS.header}></div>
        <div className={ProjectCSS.images}></div>
        <div className={ProjectCSS.about}></div>
        <a href="" className={ProjectCSS.gitHubBtn}></a>
        <a href="" className={ProjectCSS.deployedBtn}></a>
      </div>
    );
  }