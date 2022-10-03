import React, { useState } from "react";
import Stories from "react-insta-stories";
import { storiesData } from "../storiesData";

const StoryPreview = () => {
  const [currentId, setCurrentId] = useState<number>(0);
  const renderStories = () => {
    const stories = storiesData.userStories.map((story) => {
      if (story.type === "imageCaptionPost") {
        return {
          content: () => {
            return (
              <>
                <div
                  className="w-screen h-screen bg-cover bg-auto bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${story.backgroundImageUrl})`,
                  }}
                >
                  <div className="text-4xl mt-20 ml-20 ml-40-sm text-white font-bold">
                    <span className={`text-${story.captionColor}-500`}>
                      {story.caption}
                    </span>
                  </div>
                </div>
              </>
            );
          },
        };
      } else {
        return story;
      }
    });

    return stories;
  };

  return (
    <div>
      <Stories
        loop
        currentIndex={currentId}
        stories={renderStories()}
        onStoryEnd={() => {
          setCurrentId((currentId) => currentId + 1);
        }}
        onAllStoriesEnd={() => {
          setCurrentId((currentId) => 0);
        }}
        onStoryStart={() => {
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </div>
  );
};

export default StoryPreview;
