import React, {Components} from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Segment } from 'semantic-ui-react'
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
       <Grid columns='equal' divided inverted padded>
    <Grid.Row color='blue' textAlign='center'>
      <Grid.Column>
        <Segment color='blue' inverted>
          <div>
            <row><b>About</b></row>
          </div>
          <div>
            <row>Blog</row>
          </div>
          <div>
            <row>Careers</row>
          </div>
          <div>
            <row>Contact Us</row>
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='blue' inverted>
        <div>
              <b><row>Portals</row></b>
            </div>
            <div>
              <row>For Doctors</row>
            </div>
            <div>
              <row>For Pharmacists</row>
            </div>
            <div>
              <row>For Patients</row>
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='blue' inverted>
        <div>
              <b><row>More</row></b>
            </div>
            <div>
              <row>Privacy Policy</row>
            </div>
            <div>
              <row>Terms & Conditions</row>
            </div>
            <div>
              <row>Help</row>
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </Wrapper>
  );
}

export default Footer;