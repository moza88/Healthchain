import React, { Component } from 'react'
import { ReactiveBase, DataSearch, MultiDataList, ResultList, ReactiveList} from '@appbaseio/reactivesearch';
import { Button, Accordian, Icon, List, Form} from 'semantic-ui-react'
import '../../container/App.css'; // Import regular stylesheet


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    let firstName = event.target.firstName;
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstName);
    event.preventDefault();
  }
  
  render() {
    const { values } = this.props;

    return (
      
        <ReactiveBase
          app="healthchain_3"
          credentials="JuOAL2wYp:bc7cc744-af01-4eb8-9c6d-b1243468ad57"
         >

        
        <div className="main-searchbar">
          <DataSearch
            componentId="mainSearch"
            dataField={["specialty"]}
            categoryField="title"
            className="search-bar"
            queryFormat="and"
            placeholder="Search for providers..."
            iconPosition="left"
            autosuggest={false}
            filterLabel="search"
          />
        </div>

        <div className="flex-container">

          <div className="sub-container">
            <MultiDataList
              componentId="language-list"
              dataField={"language"}
              className="language-filter"
              size={100}
              sortBy="asc"
              queryFormat="or"
              selectAllLabel="All Languages"
              showCheckbox={true}
              showSearch={true}
              placeholder="Search for a language"
              react={{
                and: [
                  "mainSearch",
                  "results",
                ]
              }}
              data={[
                {
                  label: "English",
                  value: "English"
                },
                {
                  label: "Chinese",
                  value: "Chinese"
                },
                {
                  label: "Turkish",
                  value: "Turkish"
                },
                {
                  label: "Swedish",
                  value: "Swedish"
                },
                {
                  label: "Russian",
                  value: "Russian"
                },
                {
                  label: "Portuguese",
                  value: "Portuguese"
                },
                {
                  label: "Korean",
                  value: "Korean"
                },
                {
                  label: "Japanese",
                  value: "Japanese"
                },
                {
                  label: "Italian",
                  value: "Italian"
                },
                {
                  label: "Hindi",
                  value: "Hindi"
                },
                {
                  label: "French",
                  value: "French"
                },
                {
                  label: "Finnish",
                  value: "Finnish"
                },
                {
                  label: "Spanish",
                  value: "Spanish"
                },
                {
                  label: "Deutsch",
                  value: "Deutsch"
                }
              ]}
              showFilter={true}
              filterLabel="Language"
              URLParams={false}
              innerClass={{
                label: "list-item",
                input: "list-input"
              }}
            />
          </div>
                    

          <div className="search-results">
            <ReactiveList
						componentId="result"
						title="Results"
						dataField="provider_name"
						from={0}
						size={5}
						pagination={true}
						react={{
							and: ["mainSearch", "language-list"]
						}}
						render={({data}) => (
              
              <ReactiveList.ResultListWrapper>
              {data.map(item=> (
                <ResultList key = {item._id}>
                    <ResultList.Image src={item.profile_pic}/>

                    <ResultList.Content>
                      <ResultList.Title>
                        <div
                          className="provider-title"
                          dangerouslySetInnerHTML={{
                        __html: item.name,
                        }}
                        />
                      </ResultList.Title>
                      <div>
                        <b>Specialty: </b>{item.specialty}
                      </div>

                      <ResultList.Description>
                        <div>
                        <b>Fee: </b>{item.fee}
                        </div>
                        <div>
                        <b>Phone: </b>{item.phone}
                        </div>
                        <div>
                        <b>Adderess: </b>{item.street_address} {item.street_address_2}
                        <div>{item.city}, {item.state} {item.zipcode}</div>  
                        </div>
                    </ResultList.Description>

                    </ResultList.Content>
                        <Button className="card-buttons">Add to Plan</Button>
                        <Button className="card-buttons">Book Appointment</Button>

                  </ResultList>
                ))}
              </ReactiveList.ResultListWrapper>
            )}
					/>
          </div>  

        </div>                  
        </ReactiveBase>
      
    );
  }
}
export default Search;