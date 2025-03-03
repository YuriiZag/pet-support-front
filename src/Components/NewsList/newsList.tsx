import { INews } from "../../interfaces/newsInterface";
import { DateContainer, NewsAvatar, NewsBarrier, NewsContent, NewsDate, NewsListContainer, NewsListItem, NewsReadMore, NewsTitle } from "./newsList.styled";

export const NewsList = ({ news }: {news: INews[]}) => {
  return (
    <NewsListContainer>
      {news.map((item) => (
        <NewsListItem key={item._id}>
          <NewsBarrier></NewsBarrier>
          <NewsAvatar src={item.avatar} alt="newsPicture"></NewsAvatar>
          <NewsTitle>{item.title}</NewsTitle>
          <NewsContent>{item.content}</NewsContent>
          <DateContainer>
            <NewsDate>{item.date}</NewsDate>
            <NewsReadMore href="/">read more</NewsReadMore>
          </DateContainer>
        </NewsListItem>
      ))}
    </NewsListContainer>
  );
};
