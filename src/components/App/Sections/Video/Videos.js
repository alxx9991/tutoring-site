import React from "react"
import styled from "styled-components"
import Row from "../../../Layout/Row.js"
import { StaticImage } from "gatsby-plugin-image"

const VideosStyle = styled(Row)`
  grid-row: 2 / span 1;

  .video-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3rem;

    .video-thumbnail {
      max-width: 250px;
      margin-right: 10%;
      &:hover {
        transform: scale(1.05);
      }
    }

    h4 {
      min-width: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media ${props => props.theme.breakpoints.m} {
    .video-container {
      justify-content: flex-start;
    }
  }
`

const Videos = () => (
  <VideosStyle sd={2} ed={6} sm={2} em={6} sl={3} el={8}>
    <div className="video-container">
      <a className="video-thumbnail" href="https://youtu.be/O7YkCP2-WdQ">
        <StaticImage
          src="../../../../images/2u-thumbnail.png"
          alt="link to 2u video"
        />
      </a>
      <h4 className="text-main-accent">2U Yr11</h4>
    </div>
    <div className="video-container">
      <a className="video-thumbnail" href="https://youtu.be/B9mD7oJscmI">
        <StaticImage
          src="../../../../images/3u-thumbnail.png"
          alt="link to 3u video"
        />
      </a>
      <h4 className="text-main-accent">3U Yr12</h4>
    </div>
    <div className="video-container">
      <a className="video-thumbnail" href="https://youtu.be/WuOe897Xnxc">
        <StaticImage
          src="../../../../images/4u-thumbnail.png"
          alt="link to 4u video"
        />
      </a>
      <h4 className="text-main-accent">4U Yr12</h4>
    </div>
  </VideosStyle>
)

export default Videos
