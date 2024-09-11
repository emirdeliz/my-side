import {
  PaginationContainer,
  PaginationItem,
  PaginationItemsContainer,
} from './TablePagination.style';

import { useCallback, useEffect, useState } from 'react';
import { Title } from '@atoms';

type PageProps = {
  index: number | null;
  isSelected: boolean;
  isActive: boolean;
};

type TablePaginationProps = {
  page?: number;
  numOfPages: number;
  onChangePage: (pageNumber: number) => void;
};

export const TablePagination = ({
  page,
  numOfPages,
  onChangePage,
}: TablePaginationProps) => {
  const MAGIC_MINIMAL_INDEXES = 7;
  const [currentIndex, setCurrentIndex] = useState<number | undefined>((page || 0) > 1 ? page : 1);
  const [pages, setPages] = useState<PageProps[]>([]);
  const numOfPagesBase = numOfPages > 1 ? numOfPages : 1;

  const mapStructurePages = useCallback((): PageProps[] => {
    const pages = [];
    for (let index = 1; index <= numOfPagesBase; index++) {
      pages.push({
        index,
        isActive: false,
        isSelected: false,
      });
    }
    return pages;
  }, [numOfPagesBase]);

  const isInTheLastFiveCharacters = useCallback((pageIndex: number): boolean => {
    const startLastFiveIndexes = numOfPagesBase - 5;
    return pageIndex > startLastFiveIndexes;
  }, [numOfPagesBase]);

  const formatInitialPages = useCallback(() => {
    const pagesStructured = mapStructurePages();
    if (numOfPagesBase > MAGIC_MINIMAL_INDEXES && currentIndex) {
      if (isInTheFirstFiveCharacters(currentIndex)) {
        setPages(mountFirstFivePagesMode(pagesStructured));
      } else if (isInTheLastFiveCharacters(currentIndex)) {
        setPages(mountLastFivePagesMode(pagesStructured));
      } else {
        setPages(mountMiddleOfThePagesMode(currentIndex, pagesStructured));
      }
    } else {
      setPages(pagesStructured);
    }
  }, [numOfPagesBase, currentIndex, isInTheLastFiveCharacters, mapStructurePages]);

  useEffect(() => {
    formatInitialPages();
    setCurrentIndex((page || 0) > 1 ? page : 1);
  }, [currentIndex, numOfPagesBase, page, formatInitialPages]);

  const isInTheFirstFiveCharacters = (pageIndex: number): boolean => {
    return pageIndex < 5;
  };

  const mountFirstFivePagesMode = (pages: PageProps[]): PageProps[] => {
    const [page1, page2, page3, page4, page5] = pages;
    const [lastPage] = [...pages].reverse();
    const pagesToShow: PageProps[] = [];
    pagesToShow.push({ ...page1, isSelected: true });
    pagesToShow.push(page2);
    pagesToShow.push(page3);
    pagesToShow.push(page4);
    pagesToShow.push(page5);
    pagesToShow.push({
      index: null,
      isActive: false,
      isSelected: false,
    });
    pagesToShow.push({ ...lastPage, isSelected: true });
    return pagesToShow;
  };

  const mountLastFivePagesMode = (pages: PageProps[]): PageProps[] => {
    const [lp1, lp2, lp3, lp4, lp5] = [...pages].reverse();
    const [firstPage] = pages;
    const pagesToShow: PageProps[] = [];
    pagesToShow.push({ ...firstPage, isSelected: true });
    pagesToShow.push({
      index: null,
      isActive: false,
      isSelected: false,
    });
    pagesToShow.push(lp5);
    pagesToShow.push(lp4);
    pagesToShow.push(lp3);
    pagesToShow.push(lp2);
    pagesToShow.push({ ...lp1, isSelected: true });
    return pagesToShow;
  };

  const mountMiddleOfThePagesMode = (
    pageIndex: number,
    pages: PageProps[]
  ): PageProps[] => {
    const [firstPage] = pages;
    const [lastPage] = [...pages].reverse();
    const prevMiddlePage = pages.find((page) => page.index === pageIndex - 1);
    const middlePage = pages.find((page) => page.index === pageIndex);
    const nextMiddlePage = pages.find((page) => page.index === pageIndex + 1);
    const pagesToShow: PageProps[] = [];
    pagesToShow.push({ ...firstPage, isSelected: true });
    pagesToShow.push({
      index: null,
      isActive: false,
      isSelected: false,
    });
    pagesToShow.push(prevMiddlePage!);
    pagesToShow.push(middlePage!);
    pagesToShow.push(nextMiddlePage!);
    pagesToShow.push({
      index: null,
      isActive: false,
      isSelected: false,
    });
    pagesToShow.push({ ...lastPage, isSelected: true });
    return pagesToShow;
  };

  const selectPage = ({ index }: PageProps) => {
    if (index && index !== currentIndex) {
      setCurrentIndex(index);
      const newPages = pages.map((page) => ({
        ...page,
        isActive: page.index === index,
      }));
      setPages(newPages);
      onChangePage(index);
    }
  };

  return (
    <PaginationContainer>
      <PaginationItemsContainer>
        <Title n3>{'<<'}</Title>
        {pages.map((page, index) => (
          <PaginationItem
            key={index}
            selected={page.isSelected}
            isActive={page.index === currentIndex}
            onClick={() => selectPage(page)}
          >
            {page.index ? page.index : '...'}
          </PaginationItem>
        ))}
        <Title n3>{'>>'}</Title>
      </PaginationItemsContainer>
    </PaginationContainer>
  );
};
