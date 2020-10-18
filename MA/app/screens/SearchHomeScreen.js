import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';



  


class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <View style={{marginTop: 10}}>
          <SearchBar
        platform={"android"}
        placeholder="Search Hospital..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{width:350, borderRadius:10,
          margin:10}}
      />
        </View>
        
      
      
    );
  }
}
export default Search;