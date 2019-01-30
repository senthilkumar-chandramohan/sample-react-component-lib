import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../less/style.less';

export default class HomepageHero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            bgImage,
            title,
            para,
            cta,
            hatch,
            config
        } = this.props;

        return (
            <section
                className={`homepage-hero-container ${config.theme}`}
                style={{backgroundImage: `url(${bgImage})`}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1>{ title }</h1>
                            <p>{ para }</p>
                            <a
                                className="btn"
                                href={ cta.href }
                                target="_self"
                            >
                                { cta.text }
                            </a>
                            <p>{ hatch }</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

HomepageHero.defaultProps = {
    bgImage: 'https://snaporbital.com/wp-content/uploads/edd/2016/12/learndash-notes-background.jpg',
    title: 'Lorem ipsum dolor sit amet',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis lectus, vitae fermentum lacus. Nunc vel erat et est fringilla interdum at finibus neque.',
    cta: {
        href: '#',
        text: 'Lorem Ipsum'
    },
    hatch: 'Proin velit augue, luctus sit amet tristique a, pulvinar a sapien.',
    config: {
        theme: 'dark'
    }
};
