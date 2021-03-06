import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { getDistinctCategories } from "../utils/get-distinct-categories";

import Layout from "../components/layout/layout";

interface VideoGalleryProps {
  data: {
    allSanityVideo: {
      videos: Array<{
        slug: { current: string };
        title: string;
        category: { title: string; slug: { current: string } };
        thumbnail: any;
      }>;
    };
  };
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  data: {
    allSanityVideo: { videos },
  },
}) => {
  const [category, setCategory] = useState("");
  const categories = getDistinctCategories(videos);
  return (
    <Layout>
      <h1>Videoer</h1>
      <ul>
        <li>
          <button onClick={() => setCategory("")}>Alle</button>
        </li>
        {categories.map((cat, i) => (
          <li key={i}>
            <button onClick={() => setCategory(cat.slug)}>{cat.title}</button>
          </li>
        ))}
      </ul>
      {videos.map((video, i) => {
        const image = getImage(video.thumbnail);
        return (
          (category === "" || category === video.category.slug.current) && (
            <div key={i}>
              <GatsbyImage image={image} alt={video.title} />
              <h2>
                <Link to={`/video/${video.slug.current}`}>{video.title}</Link>
              </h2>
              <span>{video.category.title}</span>
            </div>
          )
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityVideo {
      videos: nodes {
        slug {
          current
        }
        title
        category {
          title
          slug {
            current
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;

export default withAuthenticationRequired(VideoGallery);
