import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsBlogPost } from './interfaces'

import {} from './style'

class ProductPostTemplate extends React.Component<IPropsBlogPost, {}> {
  render() {
    const { content, title, next, excerption } = this.props.pageContext
    const { json } = content
    return (
      <WrapperLayout
        linkTo={next.url}
        linkText={next.title}
        title={title}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO
          title={`Newsroom - ${title}`}
          description={excerption.excerption}
        />
        <div style={{ paddingBottom: 32 }}>
          {documentToReactComponents(json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: node => (
                <img
                  src={node.data.target.fields.file['pl'].url}
                  alt={node.data.target.fields.title['pl']}
                />
              ),
            },
          })}
        </div>
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
