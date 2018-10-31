import { Link } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';


const Home = () => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Semantic-UI + ReactPWA"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <a
          href="https://github.com/Atyantik/example-pawjs-semantic-ui"
          className="ui animated fade button primary huge"
        >
          <div className="visible content">
            View source code
          </div>
          <div className="hidden content">
            Click here
          </div>
        </a>
      </Container>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              ReactPWA
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Unleash your creativity and explore the infinite possibilities. #ReactPWA
            </p>
            <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
            <div id="codefund_ad" />
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src="http://react.semantic-ui.com/images/wireframe/white-image.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button as="a" size="huge" href="https://www.reactpwa.com">Visit Site</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-7586505628408924"
              data-ad-slot="5652642939"
              data-ad-format="auto"
            />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              I shouldn&#39;t have gone with their competitor.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="http://react.semantic-ui.com/images/avatar/large/nan.jpg" />
              <b>Nan</b>
              Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work,
          we have learned how to master the art of doing nothing by providing
          massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <Link to="/">Case Studies</Link>
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content,
          but it&#39;s really true. It took years of gene splicing and combinatory DNA research,
          but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I&#39;m Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                ReactPWA - PawJS - Semantic-UI
              </Header>
              <p>
                This is an example of implementation of Semantic-UI with ReactPWA.
                Help us grow further visit&nbsp;
                <a href="https://opencollective.com/react-pwa" target="_blank" rel="noreferrer nofollow noopener">OpenCollective</a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default Home;
