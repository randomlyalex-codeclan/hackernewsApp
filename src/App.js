
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import StoryList from './containers/StoryList'

function App() {

  const [stories, setStories] = useState([]);

  // set a variable to a empty array
  let storyIds = [];


  // first fetch gets us the id numbers that we are going to use in the second fetch
  const getStories = () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then((data) => storyIds = data)
    .then(() => concatPromiseStories());   
    // console.log(storyIds)
  }


  // this is our second fetch using the array of ids made above to map a new array of fetches 
  const concatPromiseStories = () => {
    const promises = storyIds.map(storyId => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      .then(res => res.json())
    })
    // console.log(promises);
      Promise.all(promises)
      .then(data => {
        const allStories = data.reduce((fetchedStories, storyToAdd) => {
          return fetchedStories.concat(storyToAdd)
        },[])
        // console.log(allStories);
        setStories(allStories);
      })
    }

  useEffect(() => {
    getStories()
  }, [])

  return (
    <div className="App">
      <Header/>
      <StoryList/>
    </div>
    
  );
}

export default App;
