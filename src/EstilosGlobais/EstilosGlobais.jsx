import { createGlobalStyle } from 'styled-components'

import GothamBlack from './fontes/Gotham-Black.otf'
import GothamLight from './fontes/Gotham-Light.otf'
import GothamThin from './fontes/Gotham-Thin.otf'

const EstilosGlobais = createGlobalStyle`
    @font-face {
        font-family: 'GothamBlack';
        src: url(${GothamBlack});
    }
    @font-face {
        font-family: 'GothamLight';
        src: url(${GothamLight});
    }
    @font-face {
        font-family: 'GothamThin';
        src: url(${GothamThin});
    }
    body { 
        margin: 0;
        min-height: 100vh;
        background: linear-gradient(to right, #171717 60%, grey 40%);
    }
`

export default EstilosGlobais