import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <S.ProfileWrapper>
        <S.ProfileLink>
          <Avatar />
          <S.ProfileAuthor>{title}</S.ProfileAuthor>
          <S.ProfilePosition>{position}</S.ProfilePosition>
          <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileLink>
      </S.ProfileWrapper>
    )}
  ></StaticQuery>
)

export default Profile
