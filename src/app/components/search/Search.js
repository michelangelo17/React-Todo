import React from 'react'
import { TextInput, FlexContainer } from '../../emotionalThings/EmoTools'

const Search = props => (
  <FlexContainer jcc>
    <TextInput
      onChange={props.handleSearch}
      value={props.state.searchString}
      type='text'
      name='searchText'
      placeholder='find an item'
      m='30px 0 15px 0'
    />
  </FlexContainer>
)

export default Search
