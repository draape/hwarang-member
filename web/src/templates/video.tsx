import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";

import SanityImageBlock from "../components/sanity-image-block/sanity-image-block";
import VimeoVideo from "../components/vimeo-video/vimeo-video";

interface VideoProps {
  data: {
    video: {
      videoId: number;
      title: string;
      text: any | any[];
    };
  };
}

const Video: React.FC<VideoProps> = ({ data: { video } }) => {
  return (
    <main>
      <h1>{video.title}</h1>
      <VimeoVideo id={video.videoId} title={video.title} />
      <BlockContent
        blocks={video.text}
        serializers={{
          types: {
            extendedImage: SanityImageBlock,
          },
        }}
      />
    </main>
  );
};

export const query = graphql`
  query Video($slug: String) {
    video: sanityVideo(slug: { current: { eq: $slug } }) {
      videoId
      title
      slug {
        current
      }
      text: _rawText
    }
  }
`;

export default Video;
