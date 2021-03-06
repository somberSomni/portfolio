import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//imgs
import reactLogo from '../imgs/brands/react-logo.png'
const BioContainer = styled.div`
    color: white;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: ${props => props.primaryColor || 'yellow'}
`;
const Avatar = styled.div`
    margin-top: 20px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 4px solid white;
`;
const Desc = styled.p`
    width: ${props => props.mobile ? '80vw' : '50vw'};
    padding: 0px 20px;
    text-align: justify;
    &:first-letter {
        color: ${props => props.secondaryColor || 'red'}
        font-size: 2em;
    }
`;
const EndFooter = styled.div`
    width: 100%;
    flex-direction: row;

`;
const FooterMessage = styled.h3`

`;
const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Bio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
`;

const ReactLogoStyle = {
    fontFamily: 'Archivo Black, sans-serif', 
    color: '#00B9CA', 
    textTransform: 'uppercase'
};

function BioFooter({ description, src, theme, mobile }) {
    
    return (
        <BioContainer
            mobile={mobile}
            primaryColor={theme[3]}>
            
            <Bio mobile={mobile}>
                <Avatar
                    secondaryColor={theme[1]}>
                    <img
                        alt="Somber Somni avatar"
                        src={src}
                        height={250}
                        style={{ transform: 'translate(-20px, 0px)' }} />
                </Avatar>

                <Desc
                    secondaryColor={theme[1]}
                    mobile={mobile}>{description}</Desc>

            </Bio>
            <Footer>
                <FooterMessage>This site was made using <span style={ReactLogoStyle}>
                    <div><p>React</p><img src={reactLogo} style={{height:50}} alt="react logo"/></div>
                    </span> and <span role="img" aria-label="coffee">☕</span></FooterMessage>
                <EndFooter>
                    <p>Somber Somni <span role="img" aria-label="copyright">©️</span> 2019</p>
                </EndFooter>
            </Footer>
        </BioContainer>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(BioFooter);