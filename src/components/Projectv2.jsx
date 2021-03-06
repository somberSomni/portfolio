import React from 'react';
import styled from 'styled-components';
import ProjectMenu from './ProjectMenu.jsx';

const ProjectContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const Counter = styled.div`
    font-size: ${props => props.mobile ? 0.6 : 1}em;
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 95;
    color: white;
`;

export default function Project({ currentIndex, duration, headerImg, firstVisit, tagline, title, theme, type, websiteLink, isMobileFriendly, prevIndex, projects, mobile }) {
    return (
        <ProjectContainer>
            <Counter mobile={mobile}>
                <h1>{currentIndex + 1}.</h1>
            </Counter>
            {projects.map((proj, i) => i === prevIndex ? <ProjectMenu
                key={proj.title + i.toString()}
                mobile={mobile}
                {...proj}
                firstTime={firstVisit}
                theme={theme}
                old={true}
                duration={duration}
                menuShow={false} /> : null)}
            {!firstVisit ? projects.map((proj, i) => i === currentIndex ?
                <ProjectMenu
                    key={title + i.toString()}
                    mobile={mobile}
                    duration={duration}
                    headerImg={headerImg}
                    tagline={tagline}
                    theme={theme}
                    title={title}
                    type={type}
                    websiteLink={websiteLink}
                    primaryColor={theme[3]}
                    isMobileFriendly={isMobileFriendly}
                    old={false}
                    menuShow={true}
                /> : null) : null}
        </ProjectContainer>
    );
}

