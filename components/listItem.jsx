
import { Row, Col } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main';

const ListItem = ({ item }) => (
  <div>
    <hr />

    <Row style={styles.divider}>
      <Col span={16}>
        <h3 style={styles.listItem}>{item.full_name}</h3>
        {' '}

        <p>{item.description}</p>


        <p>
          Updated on
          {' '}
          {new Date(item.updated_at).toLocaleDateString()}
        </p>

      </Col>
      <Col span={4}>
        <p>
          {' '}
          ◆
          {' '}
          {item.language}

        </p>
      </Col>
      <Col span={4}>
        <p>
          {' '}
          ★
          {' '}
          {item.stargazers_count}
        </p>
      </Col>

    </Row>
  </div>
);

ListItem.defaultProps = {
  item: {},
};
ListItem.propTypes = {
  item: PropTypes.shape({
    full_name: PropTypes.string,
  }),
};
export default ListItem;
