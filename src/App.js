import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

// const HomePage = props => {
//   console.log(props);
//   return (
//   <div>
//     <button onClick={() => props.history.push('/topics')}> Topics </button> 
//     {/* 
//       This is equivalent to this but it gives us more dynamic access
//       <Link to='/topics'><button>Topics</button></Link>
//     */}
//     <h1> HOME PAGE </h1> 
//   </div>
// );
// };

// const TopicsList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1> TOPIC LIST PAGE </h1>
//       <Link to = {`${props.match.url}/13`}  > TO TOPIC 13 </Link>
//       <Link to = {`${props.match.url}/15`}  > TO TOPIC 15 </Link>
//       <Link to = {`${props.match.url}/17`}  > TO TOPIC 17 </Link>
//     </div>
//   );
// };

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1> TOPIC DETAIL PAGE: {props.match.params.topicId} </h1>
//     </div>
//   );
// };

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} /> 
        {/* <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
