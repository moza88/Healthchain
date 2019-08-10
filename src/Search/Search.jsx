import React, { Component } from 'react';
import { ReactiveBase, DataSearch, MultiDataList, ResultList, ReactiveList} from '@appbaseio/reactivesearch';



class Search extends Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="healthchain_2"
          credentials="LJIzJ97sA:199410b6-e0d9-4858-bb61-feb2557bfd94"
         >

        
        <div>
          <DataSearch
            componentId="mainSearch"
            dataField={["provider_name"]}
            categoryField="title"
            className="search-bar"
            queryFormat="and"
            placeholder="Search for providers..."
            iconPosition="left"
            autosuggest={false}
            filterLabel="search"
          />
        </div>
        <div className="filter-heading center">
            <h4>Language</h4>
            </div>
            <MultiDataList
              componentId="language-list"
              dataField={"original_language"}
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
                  "date-filter",
                  "RangeSlider",
                  "genres-list",
                  "revenue-list"
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
                    <ResultList.Content>
                      
                      <ResultList.Image src={item.poster_path}/>
                      <ResultList.Title>
                        <div
                          className="book-title"
                          dangerouslySetInnerHTML={{
                        __html: item.provider_name,
                        }}
                        />
                        </ResultList.Title>
                        <ResultList.Description>
                      <div>
                      {item.tagline}
                      </div>
                    </ResultList.Description>
                    </ResultList.Content>
                  </ResultList>
                ))}
              </ReactiveList.ResultListWrapper>
            )}
					/>

        </ReactiveBase>

      </div>

      
    );
  }
}
export default Search;