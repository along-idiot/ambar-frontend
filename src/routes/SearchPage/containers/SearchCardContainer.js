import { connect } from 'react-redux'

import {
  performSearchBySource,
  performSearchByPathToFile,
  performSearchByAuthor,
  performSearchByQuery,
  performSearchByTag,
  loadHighlight,
  toggleImagePreview,
  addTagToFile,
  removeTagFromFile,
  hideFile,
  showFile
} from '../modules/SearchCard'

import SearchCard from 'components/Search/components/SearchResultCard'

const mapDispatchToProps = {
  performSearchBySource,
  performSearchByPathToFile,
  performSearchByAuthor,
  performSearchByQuery,
  performSearchByTag,
  loadHighlight,
  toggleImagePreview,
  addTagToFile,
  removeTagFromFile,
  hideFile,
  showFile
}

const mapStateToProps = (state, ownProps) => {
  const hit = state['searchPage'].hits.get(ownProps.sha256)

  return ({ 
    hit: hit,
    showFilePreview: state['core'].showFilePreview,
    urls: state['core'].urls,
    allTags: state['searchPage'].tags
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCard)