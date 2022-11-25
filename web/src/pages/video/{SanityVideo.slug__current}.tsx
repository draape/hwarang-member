import React, { FC } from "react";
import { graphql } from "gatsby";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../../components/layout/layout";
import SanityImageBlock from "../../components/sanity-image-block/sanity-image-block";
import VimeoVideo from "../../components/vimeo-video/vimeo-video";
import { Container } from "../../components/container/container";
import { SanityGweBlock } from "../../components/sanity-gwe-block/sanity-gwe-block";
import { TechniqueList } from "../../components/technique-list/technique-list";

interface VideoProps {
  data: {
    video: {
      videoId: number;
      title: string;
      text: any | any[];
      techniques?: { name: string }[];
    };
  };
}

const Video: FC<VideoProps> = ({ data: { video } }) => (
  <Layout>
    <h1>{video.title}</h1>
    <VimeoVideo id={video.videoId} title={video.title} />
    <Container>
      <BlockContent
        blocks={video.text}
        serializers={{
          types: {
            extendedImage: SanityImageBlock,
            gwe: SanityGweBlock,
          },
        }}
      />
      {video.techniques && video.techniques.length > 0 && (
        <TechniqueList techniques={video.techniques} />
      )}
    </Container>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    video: sanityVideo(id: { eq: $id }) {
      videoId
      title
      slug {
        current
      }
      text: _rawText
      techniques {
        name
      }
    }
  }
`;

export default withAuthenticationRequired(Video);
