import { useEffect, useState } from "react";
import { getNews } from "../../api/newAPI";
import { NewsList } from "../../Components/NewsList/newsList";
import { NewsContainer, NewsHeading } from "./newsPage.styled";
import { NewsSearchBar } from "../../Components/NewsSearchBar/NewsSearchBar";
import { useSearchParams } from "react-router-dom";
import { INews } from "../../interfaces/newsInterface";
import { ErrorFiller } from "../../Components/Error/error";
import axios, { AxiosError } from "axios";

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [newsList, setNewsList] = useState<INews[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchNews = async () => {
    try {
      const response = await getNews();
      const filteredNews = response.data.news.sort(
        (firstItem: INews, nextItem: INews) =>
          nextItem.date.localeCompare(firstItem.date)
      );
      setNewsList(filteredNews);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error)
      }
      return null
    }
  };

  useEffect(() => {
    if (
      searchParams.get("title") === null ||
      searchParams.get("title") === ""
    ) {
      fetchNews();
    }
  }, [searchParams]);

  useEffect(() => {
    const title = searchParams.get("title");
    if (newsList.length > 0 && title !== null) {
      const filtredList = newsList.filter((item) =>
        item.title.toLowerCase().includes(title)
      );
      setNewsList(filtredList);
    }
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <NewsContainer>
      <NewsHeading>News</NewsHeading>
      <NewsSearchBar setSearchParams={setSearchParams}></NewsSearchBar>
      {error ? (
        <ErrorFiller></ErrorFiller>
      ) : (
        <NewsList news={newsList}></NewsList>
      )}
    </NewsContainer>
  );
};

export default NewsPage;
