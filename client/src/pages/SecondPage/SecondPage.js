import React, { Component } from 'react';
import { ShortenerService } from '../../services';

class SecondPage extends Component {
  state = {
    url_visitors: [],
    unique: '',
  };
  
  async componentWillMount() {
    const { code } = this.props.match.params;
    if (code) {
      const { url_visitors } = await ShortenerService.getVisitors(code);
      const unique = await ShortenerService.getUniqueVisitors(code);
      this.setState({ url_visitors, unique });
    }
  }
  
  render() {
    const { url_visitors, unique } = this.state;
    
    return (
      <div>
        statistics
        <div style={{ color: 'red' }}>
          Count unique visitors in last 14 days - {unique}
        </div>
        <table>
        <thead>
          <tr>
            <th>ip</th>
            <th>date</th>
          </tr>
        </thead>
          <tbody>
        {url_visitors && url_visitors.map((visitor, id) => {
          return (
            <tr key={id}>
              <td style={{ color: 'red' }}>{visitor.ip}</td>
              <td>{visitor.createdAt}</td>
            </tr>
          )
        })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SecondPage;
