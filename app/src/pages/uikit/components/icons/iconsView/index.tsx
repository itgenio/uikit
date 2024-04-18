import './style.less';

import React, { CSSProperties, Fragment, useCallback, useMemo, useState } from 'react';
import { Accordion, AccordionTitle } from '@itgenio/gkit/accordion';
import { TextField } from '@itgenio/gkit/textField';
import { Tooltip } from '@itgenio/gkit/tooltip';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { STEP, Slider } from '../../slider';

const DEFAULT_SIZE = 40;

type Props = { iconsSets: Function[][] };

export const IconsView = React.memo(({ iconsSets }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  const onClickMinus = useCallback(() => setCurrentSize(s => s - STEP), []);
  const onClickPlus = useCallback(() => setCurrentSize(s => s + STEP), []);
  const onChangeInput = useCallback(e => setCurrentSize(e.target.valueAsNumber), []);

  const filteredIconsSets = useMemo(() => {
    return iconsSets.map(set => set.filter(Icon => new RegExp(searchValue, 'gi').test(Icon.name)));
  }, [iconsSets, searchValue]);

  return (
    <div className="icons" style={{ ['--parent-icon-size' as string]: `${currentSize}px` }}>
      <div className="header">
        <div className="sizes">
          <span>Current size: {currentSize}</span>

          <Slider
            onClickMinus={onClickMinus}
            onClickPlus={onClickPlus}
            value={currentSize}
            onChangeInput={onChangeInput}
          />
        </div>
        <TextField
          className="search"
          value={searchValue}
          endAdornment={<DismissIcon onClick={() => setSearchValue('')} />}
          onChange={e => setSearchValue(e.target.value)}
          size="small"
        />
      </div>

      {filteredIconsSets.map((filteredIcons, index) => {
        return <MemoIcons key={index} icons={filteredIcons} number={index + 1} />;
      })}
    </div>
  );
});

IconsView.displayName = 'IconsView';

const MemoIcons = React.memo(({ icons, number }: { icons: Function[]; number: number }) => {
  if (icons.length === 0) return null;

  return (
    <Fragment>
      <Accordion
        content={
          <div className="board" style={{ '--icon-size': `var(--parent-icon-size)` } as CSSProperties}>
            {icons.map(Icon => {
              return (
                <Tooltip key={Icon.name} content={Icon.name}>
                  <Icon />
                </Tooltip>
              );
            })}
          </div>
        }
      >
        <AccordionTitle>
          Set {number}. {`[${icons[0].name[0]} - ${icons[icons.length - 1].name[0]}]`}
        </AccordionTitle>
      </Accordion>
    </Fragment>
  );
});

MemoIcons.displayName = 'MemoIcons';
