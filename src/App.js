import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { debounce, throttle } from 'lodash';
//components
import Home from './pages/Home.jsx';
import Code from './pages/Code.jsx';
import About from './pages/About.jsx';
import MainNav from './components/MainNav.jsx';
import NoPage from './pages/NoPage.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faBracketsCurly, faPencilAlt, faEnvelope, faHomeAlt, faLaptopCode, faTimes, faServer, faDatabase, faPlus, faBrain, faChartPie, faExclamationTriangle} from '@fortawesome/pro-regular-svg-icons'
import { faFilePdf, faChartScatter, faHorizontalRule, faProjectDiagram, faMobileAlt, faEnvelopeOpenText  } from '@fortawesome/pro-light-svg-icons';
import { faGithub, faVimeoV } from '@fortawesome/free-brands-svg-icons';

import './App.css';
library.add(
  faEnvelopeOpenText,
  faCaretUp,
  faExclamationTriangle,
  faCaretDown,
  faMobileAlt,
  faChevronDown,
  faChevronUp,
  faBracketsCurly,
  faPencilAlt,
  faEnvelope,
  faHomeAlt,
  faGithub,
  faVimeoV,
  faLaptopCode,
  faTimes,
  faServer,
  faDatabase,
  faProjectDiagram,
  faHorizontalRule,
  faChartScatter,
  faBrain,
  faChartPie,
  faPlus,
  faFilePdf);

function App({dResizeTracker, tScrollTracker}) {
  useEffect(() => {
    dResizeTracker();
    window.addEventListener('resize', dResizeTracker);
    window.addEventListener('scroll', tScrollTracker);
    return () => {
      window.removeEventListener('resize', dResizeTracker);
      window.removeEventListener('scroll', tScrollTracker);
    }
  }, [])
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/code' component={Code} />
          <Route exact path='/about' component={About} />
          <Route path='/' component={NoPage} />
        </Switch>
      </Router>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  function resizeTracker(e) {
    const { innerWidth } = e ? e.target : window
    dispatch({type: 'UPDATE_WIDTH', payload: innerWidth});
    if (innerWidth <= 700) {
      dispatch({ type: 'UPDATE_MOBILE', payload: true })
    } else {
      dispatch({ type: 'UPDATE_MOBILE', payload: false })
    }
  }
  function scrollTracker(e) {
    const { scrollY } = window;
    dispatch({type: 'UPDATE_SCROLL_Y', payload: scrollY});
  }
  const dResizeTracker = debounce(resizeTracker, 60);
  const tScrollTracker = throttle(scrollTracker, 100);
  return {
    dResizeTracker,
    tScrollTracker
  }
}
export default connect(null,mapDispatchToProps)(App);
