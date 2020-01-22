import React, { useState } from 'react';
import {
  Layout, Input,
  Typography,
  Skeleton,
  Pagination,
  Row,
} from 'antd';


import { getRepositories } from '../services/ApiServices';
import ListItem from './listItem';
import styles from '../styles/main';

const { Search } = Input;
const { Title } = Typography;

const { Content } = Layout;

export default function CustomContent() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState({ loading: false, completed: false });


  const onRepoSearch = async (q) => {
    setRepos([]);
    setStatus({ loading: true });
    try {
      const res = await getRepositories(page, 10, q);
      setRepos(res.data);
      setStatus({ loading: false, completed: true });
    } catch (error) {
      alert('Something went error, please try again');
      setStatus({ loading: false });
    }
  };

  const onPageChange = (pg) => {
    onRepoSearch(pg);
    setPage(page);
  };


  return (

    <Content>
      <div style={styles.content}>
        <Search
          placeholder="input search text"
          onSearch={(value) => onRepoSearch(value)}
        />
        {status.loading && <Skeleton active />}
        {status.completed && (
          <Title level={4} style={styles.h4}>
            {repos.total_count || 0}
            {' '}
            repository results
          </Title>
        )}
        {repos.items && repos.items.map((item, i) => (
          <ListItem item={item} key={i + 1} />

        ))}
      </div>
      {status.completed

        && (
          <Row type="flex" justify="center">
            <Pagination onChange={onPageChange} defaultCurrent={1} current={page} total={repos.total_count || 0} />
          </Row>
        )}

    </Content>
  );
}

CustomContent.propTypes = {};
