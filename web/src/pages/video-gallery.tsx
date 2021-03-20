import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout/layout";

interface VideoGalleryProps {
  data: {
    allSanityVideo: {
      videos: Array<{ slug: { current: string }; title: string }>;
    };
  };
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  data: {
    allSanityVideo: { videos },
  },
}) => (
  <Layout>
    <h1>Videoer</h1>
    {videos.map((video, i) => (
      <div key={i}>
        <h2>
          <Link to={`/video/${video.slug.current}`}>{video.title}</Link>
        </h2>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allSanityVideo {
      videos: nodes {
        slug {
          current
        }
        title
      }
    }
  }
`;

export default VideoGallery;
