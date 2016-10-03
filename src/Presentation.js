// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={createTheme({ primary: "#1b95ec" })}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              My story of testing
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
              Trap of easy tests
            </Heading>
            <CodePane>{`
              src/
              ├── actions.......(0%)
              ├── components....(0%)
              ├── middleware....(0%)
              ├── reducers.....(10%)
              ├── utils.......(100%)
              test/
              ├── reducers
              │   └── applicants.spec.js
              └── utils
                  ├── collectionUtils.spec.js
                  └── stringUtils.spec.js
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Image src={require('../assets/react.svg')} height={300} />
            <Heading size={2} textColor="primary">
              Testing React components
            </Heading>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Enzyme
            </Heading>
            <Text textColor="primary">react-addons-test-utils with better API</Text>
            <CodePane lang="javascript">{`
              import {shallow} from 'enzyme'

              const component = shallow(<MySlides activeSlide={3} />)
              component.find('.slide').eq(3).prop('active') // true
            `}</CodePane>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              JSDOM
            </Heading>
            <Heading size={4} textColor="primary">
              Tiny browser-ish environment for&nbsp;Node
            </Heading>
          </Slide>
          <Slide bgColor="primary">
            <Image src="https://facebook.github.io/jest/img/jest-outline.svg" height={200} />
            <Heading size={2} textColor="white">
              Jest
            </Heading>
            <List textColor="white">
              <ListItem>JSDOM as environment</ListItem>
              <ListItem>Code coverage</ListItem>
              <ListItem>Mock dependencies with <code>jest.mock()</code></ListItem>
              <ListItem>Interactive watch</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              <code>npm test</code> and enjoy
            </Heading>
            <Image src={require('../assets/jest-passed.png')} />
          </Slide>
          <Slide bgColor="white">
            <Heading size={2} textColor="primary">
              Tests are code
            </Heading>
            <List>
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
          <Slide bgColor="white">
            <Heading size={1} textColor="primary">
              Live coding
            </Heading>
          </Slide>
          <Slide bgColor="white">
            <Heading size={1} textColor="primary" margin={20}>
              Thank you!
            </Heading>
            <Layout>
              <Fill>
                <Link textColor="secondary">
                  @boriscoder
                </Link>
                <br/>
                <Link size={4} textColor="secondary">
                  github.com/just-boris
                </Link>
              </Fill>
              <Fill>
                <Link size={4} textColor="secondary">
                  just-boris@hotmail.com
                </Link>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
