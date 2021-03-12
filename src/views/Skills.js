import React from 'react'
import Layout from '../Layout'
import { skillSet, skillSetTwo, webSkills, webSkillsTwo, database, databaseTwo } from '../json/skillSet'

const Skills = () => {
    return (
        <Layout>
            <main id="main">
                <section id="skills" className="skills">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>

                        <div className="row skills-content">
                            <h4 className="resume-title mb-4">Web Technologies</h4>
                            <div className="col-lg-6" data-aos="fade-up">
                                {
                                    webSkills.map((item, i) => {
                                        return (
                                            <div className="progress" key={'a' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                {
                                    webSkillsTwo.map((item, i) => {
                                        return (
                                            <div className="progress" key={'b' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="row skills-content mt-4">
                            <h4 className="resume-title mb-4">Frameworks/Libraries</h4>
                            <div className="col-lg-6" data-aos="fade-up">
                                {
                                    skillSet.map((item, i) => {
                                        return (
                                            <div className="progress" key={'c' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                {
                                    skillSetTwo.map((item, i) => {
                                        return (
                                            <div className="progress" key={'d' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="row skills-content mt-4 mb-5">
                            <h4 className="resume-title mb-4">Database</h4>
                            <div className="col-lg-6" data-aos="fade-up">
                                {
                                    database.map((item, i) => {
                                        return (
                                            <div className="progress" key={'e' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                {
                                    databaseTwo.map((item, i) => {
                                        return (
                                            <div className="progress" key={'f' + i}>
                                                <span className="skill">{item.name} <i className="val">{item.percent}%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" style={{ width: item.percent + "%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Skills
