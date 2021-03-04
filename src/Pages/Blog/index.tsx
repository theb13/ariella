import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';
import PostCard from '../../Components/PostCard';
import { Post, Posts } from '../../helpers/types';
import { getPosts } from '../../Services/api';
import {  Row} from '../../styles';

import { Container } from './styles';

const Blog: React.FC = () => {
  const resumeDescription = (text: string) => {
    return text.slice(0, 200) + '...';
  };
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((values: any) => {
        setPosts(values);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    getPosts()
  }, [])

  function renderPosts() {

    return posts.map((post: Post, index) => {
      return (
        <PostCard key={post.date + post.id}
          title={post.title.rendered}
          img='http'
          text={resumeDescription(post.content.rendered)}
        />
      )
    })
  }


  return (
    <Container>
      <h1>Blog</h1>
      <Loader loading={loading} />
      <Row flexWrap={'wrap'} justifyContent='space-around'>
        {renderPosts()}
      </Row>
    </Container>
  );
};

export default Blog;
