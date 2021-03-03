import React, {Fragment, useState} from 'react';
import StoryDetail from './StoryDetail';

const StoryItem = ({story, index}) => {

  const [showStoryDetail, setShowStoryDetail] = useState(false);

  const handleClick = () => {
    if(story.kids){
      setShowStoryDetail(!showStoryDetail);
    }
  }

  return (
    <>
    <div>
      <a href={story.url}><span>{index}:  </span>
      <span> {story.title} </span></a>
    </div>
    <div>
      <span>Points: {story.score}</span><span>  - Posted by {story.by}</span>
      <span onClick={handleClick}> {story.kids ? `-  ${story.descendants} comments` : null }</span>     
      {showStoryDetail ? <StoryDetail story={story} /> : null }
    </div>
    <br></br>
    </>
  )
}

export default StoryItem;
