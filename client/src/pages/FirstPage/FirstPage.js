import React, { Component, Fragment } from 'react';
import { ShortenerService } from '../../services';
import config from '../../config/config';


class FirstPage extends Component {
  state = {
    error: '',
    url: {
      code: null,
      url: null,
      is_commercial: null,
      end_date: null,
    },
    readyLink: '',
    param: '',
    statLink: '',
    code: (this.props.match.params.code),
    invalidLink: '',
    image: '',
  };
  
  async componentWillMount() {
    const { code } = this.props.match.params;
    if (code) {
      const result = await ShortenerService.getUrl(code);
      
      if (result) {
        if (result.randomImage) {
          this.setState({ image: result.randomImage });
          setTimeout(() => window.location = result.url.url, 5000);
        } else {
          window.location = result.url.url
        }
      } else {
        this.setState({ invalidLink: 'Invalid link, but u can create a new one :(', code: false });
      }
    }
  }
  
  handleCheck() {
    const { url } = this.state;
    url.is_commercial = !url.is_commercial;
    this.setState({ url });
  }
  
  handleChange(e) {
    const { target: { value, name } } = e;
    const { url } = this.state;
    url[name] = value;
    this.setState({ url, error: '' });
  }
  
  async handleClick(e) {
    e.preventDefault();
    const { url } = this.state;
    const result = await ShortenerService.createUrl({ ...url });
    if (result) {
      const readyLink = `${document.location.origin}/${result.code}`;
      const statLink = `${document.location.origin}/s/${result.code}`;
      this.setState({ readyLink, statLink });
    } else {
      this.setState({ error: 'Short name is already use :('});
    }
  }
  
  render() {
    const {
      url : { url, code, is_commercial },
      readyLink,
      statLink,
      code: currentLink,
      error,
      invalidLink,
      image,
    } = this.state;
    
    return (
      <Fragment>
        {!currentLink &&
        <div>
          <br />
          {invalidLink && (<div style={{ color: 'red' }}>{invalidLink}</div>)}
          <form onSubmit={(e) => this.handleClick(e)}>
          <br/>
          <label htmlFor="url">Yr lnk 4 shrtning: https://...</label>
          <br />
          <input
            id="url"
            type="url"
            placeholder="https://google.com"
            pattern="https://.*"
            required
            name="url"
            value={url || ''}
            onChange={e => this.handleChange(e)}
          />
          <br/>
          <br/>
          <label htmlFor="code">U can chose shrt name 4 yr lnk or not</label>
            {error && (<div style={{ color: 'red' }}>{error}</div>)}
          <input
            id="code"
            type="text"
            placeholder="your short link or random"
            name="code"
            value={code || ''}
            onChange={e => this.handleChange(e)}
          />
          <br/>
          <br/>
          <label htmlFor="end_date">U can choose date 2 whch lnk will wrk or not</label>
          <br />
          <input name="end_date" type="date" onChange={e => this.handleChange(e)}/>
          <br />
          <br />
            Is commercial?
          <input type="checkbox" style={{ zoom: '3', width: '20px' }} checked={is_commercial} onChange={() => this.handleCheck()}/>
            <br />
            <br />
          <button type="submit">shrten</button>
          <br/>
          </form>
    
          <br/>
          {readyLink && <div>Your link - <i>{readyLink}</i></div>}
          {readyLink && <div>Your link for statistics - <i>{statLink}</i></div>}
        </div>
        }
        {currentLink &&
        <div>
          One second...
          {image && (<img src={config.IMAGES_URL + image} alt=""/>)}
        </div>}
      </Fragment>
      
      
    );
  }
}

export default FirstPage;
