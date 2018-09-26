import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';


/*const work = <div>
<Hello firstname="Boris" lastname="Doe" />
<Hello firstname="Paul" lastname="Doe" />
</div> ;*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
