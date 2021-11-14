import React from 'react';
import axios from 'axios';

class MSBI extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}

render() {
    return (
        <div style={{width: "500px"}}>
            <iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=345798fa-dd70-474f-922d-c6aec36e2806&autoAuth=true&ctid=81ff3db8-7a0b-4bf4-a982-a6de26cbcace&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWNlbnRyYWwtYi1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    );
}
}

export default MSBI;