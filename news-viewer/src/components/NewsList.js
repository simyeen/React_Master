import React from 'react';
import styled from 'styled-components';
import NewItems from './NewItems';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=87382549776b4e98962b103f32bc5e57`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewItems key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const query = category === 'all' ? '' : `&category=${category}`;
//       const response = await axios.get(
//         `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=87382549776b4e98962b103f32bc5e57`,
//       );
//       setArticles(response.data.articles);
//     } catch (error) {
//       console.log(error);
//     }
//     setLoading(false);
//   };
//   fetchData();
// }, [category]);
