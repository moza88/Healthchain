import React, { Component } from 'react'


class LanguageSearch extends Component {
    render() {
        return (
          
        <div className="main-container">
        <ReactiveBase
            app="healthchain_3"
            credentials="JuOAL2wYp:bc7cc744-af01-4eb8-9c6d-b1243468ad57"
        >
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
            </ReactiveBase>
        </div>
        );
    }
}

export default LanguageSearch;