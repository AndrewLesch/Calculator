import React from 'react';

import { Container, Title } from './styled';

export default function NotFound() {
  return (
    <Container>
      <Title>
        Вы свернули куда-то не туда... Введите верный url или воспользуйтесь
        ссылками в header
      </Title>
    </Container>
  );
}
