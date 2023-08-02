/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { appTheme } from 'theme/appColor';
interface DropDownData {
  dropdowndata: {
    name: string;
    id: string | number;
  }[];
  handleSelectChange?: (itemName: string, id?: string | number) => void;
  handleSelectChangeClinic?: (itemName: string, id?: string | number) => void;
  handleApiSelect?: (payload: { name: string; id: string | number }) => void;
  placeholder?: string;
  hasPlaceholder?: boolean;
  isScrollable: boolean;
  hasBackground?: boolean;
  apiDefaultValue?: string | number;
  disbledStateSelect?: boolean;
  isClinical?: boolean;
  id?: string;
  selectOptionResetRef?: any;
  hasError?: boolean;
}
interface SelectedOptionInterface {
  selectedOptiontext?: string;
  hasPlaceholder?: boolean | undefined;
  isClinical?: boolean | undefined;
}
interface CustomDropDownInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: HTMLDivElement | any;
}
const CustomDropDown = styled.div<CustomDropDownInterface>`
  position: relative;
  font-family: 'General Sans', sans-serif;
`;
const CustomDropdownSelection = styled.div<SelectedOptionInterface>`
  background: ${(props) =>
    props.hasPlaceholder === false
      ? 'transperant'
      : props.hasPlaceholder === undefined && `${appTheme.COLORS.white}`};
  color: ${appTheme.COLORS.black1};
  &.bg_background {
    background-color: ${appTheme.COLORS.darkBlue} !important;
    color: ${appTheme.COLORS.white};
    width: 170px !important;
    padding-left: 30px !important;
    &.bg_background::after {
      content: url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.799805 0.933319L3.9998 4.13332L7.19981 0.933319' stroke='white' stroke-linecap='square'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 32px;
      top: 9px;
    }
  }
  border: ${(props) => {
    if (props.hasPlaceholder === false) {
      return 'none';
    }

    if (props.hasPlaceholder === undefined) {
      return `1px solid ${appTheme.COLORS.grey2}`;
    }
  }};
  border-radius: 10px;
  font-family: 'General Sans', sans-serif;
  font-style: normal;
  font-weight: ${(props) =>
    props.hasPlaceholder === false
      ? '500'
      : props.hasPlaceholder === undefined && '400'};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 0.8rem 0.25rem 0.8rem 1rem;
  cursor: pointer;
  position: relative;
  &:after {
    content: ${(props) =>
      props.hasPlaceholder === false
        ? `url("data:image/svg+xml,%3Csvg width='11' height='6' viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.6665 1L5.6665 5L9.6665 1' stroke='%230B0C7D' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");`
        : props.hasPlaceholder === undefined &&
          `url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.33334 1.4001L4.53334 4.6001L7.73334 1.4001' stroke='%23A6AFC2' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`};
    position: absolute;
    right: 15px;
    top: 12px;
  }
  ${({ isClinical }) =>
    isClinical &&
    `padding: 0.5rem 0 0.5rem 0.5rem;
    font-family: 'General Sans';
    font-style: normal;
    font-weight: 500;
    border-radius: 5px;
    font-size: 13.33px;
    line-height: 14px;
    letter-spacing: 0.02em;
    border: 1px solid #A6AFC2;
    color: #051438;
     &:after {
    content: url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.33437 1.4001L4.53437 4.6001L7.73437 1.4001' stroke='%23A6AFC2' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    position: absolute;
    right: 10px;
    top: 7px;
  }
  `}
`;
const ItemHolder = styled.div<{ isScrollable: boolean }>`
  background-color: ${appTheme.COLORS.white};
  position: absolute;
  z-index: 10000;
  top: 100%;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid ${appTheme.COLORS.grey2};
  ${({ isScrollable }) =>
    isScrollable &&
    `
    padding-bottom: 0;
    height: 150px;
    overflow: scroll;
    ::-webkit-scrollbar {
        width: 4px;
        height: 0px;
      }
  `}
`;
const DropDownItem = styled.div`
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-family: 'General Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 13.33px;
  line-height: 14px;
  color: ${appTheme.COLORS.black1};
  &:hover {
    background-color: ${appTheme.COLORS.grey};
    color: ${appTheme.COLORS.black1};
    font-family: 'General Sans', sans-serif;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
const DefaultSelection = styled.div`
  font-family: 'General Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${appTheme.COLORS.grey5};
  white-space: pre;
  &.blackFont {
    color: ${appTheme.COLORS.black1} !important;
  }
`;
const DropDownItemDisabled = styled.div`
  font-family: 'General Sans';
  font-style: normal;
  pointer-events: none;
  font-weight: 500;
  font-size: 13.33px;
  padding-top: 21px;
  padding-left: 16px;
  padding-bottom: 9px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: ${appTheme.COLORS.grey5};
`;
const CustomInputDropDown = ({
  dropdowndata,
  handleSelectChange,
  placeholder,
  isClinical,
  hasPlaceholder,
  apiDefaultValue,
  disbledStateSelect,
  handleApiSelect,
  hasBackground,
  id,
  handleSelectChangeClinic,
  isScrollable,
  selectOptionResetRef,
  hasError,
}: DropDownData) => {
  // reference/index to user selected element.
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(
    null
  );
  const [isDropDownVisible, setIsDrownVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resetSelection = () => {
    setSelectedItemIndex(null);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef?.current?.contains(event?.target as Node)
      ) {
        setIsDrownVisible(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  useEffect(() => {
    if (selectOptionResetRef) selectOptionResetRef.current = resetSelection;
  }, []);
  return (
    <>
      <CustomDropDown ref={wrapperRef}>
        <CustomDropdownSelection
          onClick={(e: React.MouseEvent) => {
            if (disbledStateSelect) {
              return;
            } else if (
              disbledStateSelect === undefined ||
              disbledStateSelect === false
            ) {
              setIsDrownVisible(!isDropDownVisible);
            }
          }}
          hasPlaceholder={hasPlaceholder}
          isClinical={isClinical}
          className={hasBackground ? 'bg_background' : undefined}
        >
          {hasPlaceholder === false ? (
            `${
              selectedItemIndex !== null
                ? dropdowndata[selectedItemIndex].name
                : dropdowndata[0].name
            }`
          ) : (
            <>
              {selectedItemIndex !== null ? (
                dropdowndata[selectedItemIndex].name
              ) : apiDefaultValue ? (
                <DefaultSelection
                  className={apiDefaultValue ? 'blackFont' : ''}
                >
                  {apiDefaultValue}
                </DefaultSelection>
              ) : (
                <DefaultSelection>{placeholder}</DefaultSelection>
              )}
            </>
          )}
        </CustomDropdownSelection>
        <>
          {isDropDownVisible && (
            <ItemHolder isScrollable={isScrollable}>
              {hasPlaceholder === undefined ? (
                <DropDownItemDisabled>{placeholder}</DropDownItemDisabled>
              ) : (
                hasPlaceholder === false && ''
              )}
              {dropdowndata.map((item, index) => {
                return (
                  <DropDownItem
                    key={item.id}
                    onClick={(e) => {
                      setSelectedItemIndex(index);
                      setIsDrownVisible(false);
                      handleSelectChange?.(item.name, item.id);
                      handleSelectChangeClinic?.(item.name, id);
                      handleApiSelect?.({ name: item.name, id: item.id });
                    }}
                  >
                    {item.name}
                  </DropDownItem>
                );
              })}
            </ItemHolder>
          )}
        </>
      </CustomDropDown>
    </>
  );
};

export default CustomInputDropDown;
