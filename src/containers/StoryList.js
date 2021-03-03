import React from 'react';
import StoryItem from '../components/StoryItem';

const StoryList = ({stories}) => {

  const storyNodes = stories.map((story, index) => {
    return <StoryItem key={story.id} index={index + 1} story={story}></StoryItem>
  })
  return(
    <div>
      {storyNodes}
    </div>
  )
}

export default StoryList;