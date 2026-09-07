import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { CardToolProps } from './index.types';

/**
 * CardTool Component (Molecule)
 *
 * A tool/utility card with an icon on top and a title + description pinned to
 * the bottom. Used in grid layouts for quick access to essential tools.
 * Source: mariner-edu molecules/CardTool (presentational port).
 *
 * @example
 * <CardTool iconName="ico-clock" title="Safety checklist" onPress={fn} />
 */
const CardTool = ({
  iconName,
  title,
  paragraph,
  onPress,
  iconSize = 'w-8 h-8',
  className = '',
}: CardToolProps) => {
  const content = (
    <Column
      className={`rounded-md p-md justify-between h-[144px] bg-material-surface-0 dark:bg-material-surface-80 border border-material-surface-20 dark:border-material-surface-60 ${className}`.trim()}
    >
      <Row className="items-center justify-start w-full">
        <Icon
          iconName={iconName}
          className={`${iconSize} text-material-surface-100 dark:text-material-surface-0`}
        />
      </Row>
      <Column className="flex-1 justify-end w-full">
        <TextStyled
          textStyle="heading6"
          className="text-material-surface-80 dark:text-material-surface-20"
          numberOfLines={2}
        >
          {title}
        </TextStyled>
        {paragraph && (
          <TextStyled
            textStyle="footnote"
            className="text-material-surface-80 dark:text-material-surface-20"
            numberOfLines={2}
          >
            {paragraph}
          </TextStyled>
        )}
      </Column>
    </Column>
  );

  return onPress ? (
    <PressableStyled onPress={onPress} className="w-full">
      {content}
    </PressableStyled>
  ) : (
    content
  );
};

export default CardTool;
