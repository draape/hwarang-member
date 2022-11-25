import React, { useState } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { getDistinctCategories } from "../../utils/get-distinct-categories";

import Layout from "../../components/layout/layout";
import { FacetList } from "../../components/facet-list/facet-list";
import { Card } from "../../components/card/card";
import { Grid } from "../../components/grid/grid";

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
  const [category, setCategory] = useState<string | null>(null);
  const categories = getDistinctCategories(videos);

  const onSelect = (value: string | null) => setCategory(value);

  return (
    <Layout>
      <h1>Videoer</h1>
      <FacetList categories={categories} onSelect={onSelect} />
      <Grid>
        {videos.map((video) => {
          const image = getImage(video.thumbnail);
          return (
            (category === null || category === video.category.slug.current) && (
              <Card
                key={video.slug.current}
                title={video.title}
                subtitle={video.category.title}
                link={`/video/${video.slug.current}`}
                image={image}
                imageAlt={video.title}
              />
            )
          );
        })}
      </Grid>
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
