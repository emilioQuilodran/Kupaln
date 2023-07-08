import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('G-WJ5BM2BHKS')
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
  
export const logEvent = ({ category, action, label, value }) => {
    ReactGA.event({ category, action, label, value });
};