// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "./Interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#1b95ec"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Test front-end properly
            </Heading>
          </Slide>
          <Slide bgColor="white">
            <Heading size={1} fit textColor="primary">
              Why do we need this?
            </Heading>
            <List>
              <ListItem>Stable features</ListItem>
              <ListItem>Catch bugs earlier</ListItem>
              <ListItem>Easier to test rare features</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              First step
            </Heading>
            <CodePane lang="javascript">{`
              function add(a, b) {
                return a + b;
              }
              it('adds a and b', function() {
                cosnt sum = add(1, 2);
                expect(sum).toBe(3);
              });
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Pick up your stack
            </Heading>
            <List textColor="primary">
              <ListItem>Some test framework</ListItem>
              <ListItem>Any assertion library</ListItem>
              <ListItem><Link href="https://github.com/tmpvar/jsdom">JSDOM</Link> - browser-ish environment</ListItem>
              <ListItem><Link href="https://github.com/airbnb/enzyme">Enzyme</Link> - render React Component into JSDOM</ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Image src="https://facebook.github.io/jest/img/jest-outline.svg" height={200} />
            <Heading size={2} textColor="white">
              Jest
            </Heading>
            <Heading size={4} textColor="white">
              Batteries included
            </Heading>
            <List textColor="white">
              <ListItem>JSDOM as environment</ListItem>
              <ListItem>Code coverage</ListItem>
              <ListItem>Mock dependencies with <code>jest.mock()</code></ListItem>
              <ListItem>Interactive watch</ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} textColor="white">
              <code>npm test</code> and enjoy
            </Heading>
            <Image src={require('../assets/jest-passed.png')} />
          </Slide>
          <Slide bgColor="white">
            <Heading size={4} textColor="primary">
              Don't let your efforts go away,<br /> set up builds
            </Heading>
            <Image src={require('../assets/jenkins.png')} height={400} />
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Tests are code
            </Heading>
            <List textColor="primary">
              <ListItem>Care about test code quality as well as source code itself</ListItem>
              <ListItem>Give test a good name. (No "test 1"!)</ListItem>
              <ListItem>Write straightforward code, no if-s cycles</ListItem>
              <ListItem>Follow the pattern "setup-action-assertion"</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Write data-builders
            </Heading>
            <CodePane lang="javascript">{`
              function createTestUser(name, email, isActive = true) {
                retrun {
                  name, email,
                  status: isActive ? 'ACTIVE' : 'DISABLED'
                };
              }

              //then you can create test users easily
              const user = createTestUser('Bob Jack', 'bob.jack@web.de')
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Simplify and re-use assertions
            </Heading>
            <CodePane lang="javascript">{`
              //rather that doing this
              expect(Array.isArray(items)).toBe(true)
              expect(items.length).toBe(4)

              //you can create custom assertion
              expect(items).toHaveLength(4)
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Use Page Objects
            </Heading>
            <CodePane lang="javascript">{`
              //rather that doing this
              expect(component.find('.unread-count').text()).toBe('12')

              //create a wrapper with simple getter
              expect(page.unreadCount()).toHaveText('12')
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Page Objects: Implementation
            </Heading>
            <CodePane lang="javascript">{`
              function Page(component) {
                this.unreadCount = () => component.find('.unread-count')
              }

              const component = mount(<UserInfo user={user} />);
              const page = new Page(component);
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Don't do dummy tests
            </Heading>
            <CodePane lang="javascript">{`
              // don't test obvious things
              expect(collapsibleBlock.open).toBe(true);

              // test actual business value
              expect(collapsibleBlock.find('.content')).toExist();
            `}</CodePane>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
