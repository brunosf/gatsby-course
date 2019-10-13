import React from "react"

import { Home as IconHome } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as IconSearch } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as IconArrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as IconBulb } from "styled-icons/octicons/LightBulb"
import { Grid as IconGrid } from "styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <IconHome />
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <IconSearch />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <IconBulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <IconGrid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <IconArrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
