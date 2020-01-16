import React, { FC } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import Styled from './Author.styled';

interface IProps {
  name: string;
  slug: string;
  date?: string;
}

const Author: FC<IProps> = ({ name, slug, date }) => {
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Styled.Wrapper itemProp="author" itemScope itemType="http://schema.org/Person">
      <Link href={href} as={as}>
        <Styled.ImgLink>
          <Styled.Img src={`/avatars/${slug}.jpg`} alt={name} itemProp="image" />
        </Styled.ImgLink>
      </Link>
      <Styled.Content>
        <Link href={href} as={as}>
          <Styled.Name itemProp="url">
            <span itemProp="name">{name}</span>
          </Styled.Name>
        </Link>
        {date && (
          <Styled.Date dateTime={date}>
            {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
          </Styled.Date>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Author;