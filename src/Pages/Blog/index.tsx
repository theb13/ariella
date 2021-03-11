import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';
import PostCard from '../../Components/PostCard';
import { Post, Posts } from '../../helpers/types';
import { getPosts } from '../../Services/api';
import { Row } from '../../styles';

import { Container } from './styles';

const Blog: React.FC = () => {
  const resumeDescription = (text: string) => {
    return text.slice(0, 200) + '...';
  };
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    getPosts(offset)
      .then((values: any) => {
        let data=values.concat(posts)
        setPosts( data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [offset])

  function renderPosts() {
    if(posts.length<1)
      return null;
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
      <Row flexWrap justifyContent='space-around'>
        {renderPosts()}
      </Row>
      {
        posts.length > 0
          ?
          (<Row className='borderTop' alignItems='center' justifyContent='center'>
            <Button variant="outlined" color="primary"
              onClick={() => (setOffset(offset + 1))}
            >
              Ver mais...
            </Button>
          </Row>
          )
          :
          null
      }

    </Container>
  );
};

export default Blog;
