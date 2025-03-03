import styled from "styled-components";

export const NewsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const NewsListItem = styled.li`
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
`;
export const NewsBarrier = styled.div`
  height: 6px;
  border-radius: 40px;
  background: linear-gradient(
    to right,
    rgba(255, 99, 78, 1),
    rgba(255, 223, 72, 1)
  );
  margin-bottom: 14px;
`;
export const NewsAvatar = styled.img`
  border-radius: 20px;
  height: 252px;
  margin-bottom: 16px;
`;
export const NewsTitle = styled.h2`
  display: block;
  max-height: 66px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const NewsContent = styled.p`
  display: block;
  height: 140px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewsDate = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);
`;
export const NewsReadMore = styled.a`
  font-size: 500;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);
  &:hover {
    text-decoration: underline;
    color: rgba(245, 146, 86, 1);
  }
  &:focus {
    text-decoration: underline;
    color: rgba(245, 146, 86, 1);
  }
`;
