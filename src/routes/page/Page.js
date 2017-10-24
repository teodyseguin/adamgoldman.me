// @flow

/* eslint-disable react/no-danger */

import React from 'react';

import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import FbPageBox from '../../components/FbPageBox';
import Ending from '../../components/Ending';
import BreadCrumbs from '../../components/BreadCrumbs';
import FbShareButton from '../../components/FbShareButton';

type Props = {
  title: string,
  tags: Array<string>,
  body: string,
  html: string,
  nick: string,
  ps?: string, // eslint-disable-line react/require-default-props
};

const Page = ({ title, tags, body, html, nick, ps }: Props) => (
  <Layout>
    <div className="main-layout post-page">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BreadCrumbs crumbs={[{ text: title }]} style={{ marginBottom: 10 }} />
        <FbShareButton />
      </div>
      <h1 className="main-title">{title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p className="post-tags">{tags.join(', ')}</p>
      </div>
      <Markdown className="post-text" source={body} />
      {html && (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
      <hr />
      <div style={{ marginBottom: 20 }}>
        <FbShareButton />
      </div>
      <Ending nick={nick} />
      {ps && (
        <Markdown
          className="post-text"
          containerProps={{
            style: { marginTop: 40 },
          }}
          source={ps}
        />
      )}
    </div>
  </Layout>
);

export default Page;