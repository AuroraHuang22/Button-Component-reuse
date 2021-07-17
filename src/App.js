import styled from "styled-components";
import Button from "./Components/Button";
import { CodeBlock, purebasic } from "react-code-blocks";
const Header = styled.header`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  background: linear-gradient(45deg, #d2f0f0, #f0e6b4);
  padding: 10px 30px;
`;
const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 30px 120px;

  section {
    border: 1px solid #f1f1f1;
    padding: 20px;
    margin: 10px 0px;
  }
`;
const Table = styled.div`
  table,
  th,
  td {
    border: 1px solid black;
    padding: 6px 18px;
  }
  table {
    border-collapse: collapse;
  }
`;
const Description = styled.span`
  line-height: 48px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
const CodeExample = styled.div`
  width: 70%;
`;
const Demo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
`;

function App() {
  const btnExample = {
    creation: `import Button from "./Components/Button";
  function App(){
       return 
        <Button />
      }`,
    default: `<Button />`,
    language: `<Button
    theme="green"
    icon="language"
    text="Languange"
    drop={true}
  />`,
    fullScreen: `<Button theme="cyan" icon="full-screen" text="Full Screen" />
<Button theme="disabled" icon="full-screen" text="Full Screen" />`,
    upload: `<Button
    theme="white"
    icon="upload"
    iconPosition="right"
    text="Upload"
  />
  <Button
    theme="outline"
    icon="next-grey"
    iconPosition="right"
    text="Next"
  />`,
    icon: ` <Button circle={true} />`,
    confirm: `<Button
    theme="green"
    icon="placeholder"
    iconPosition="right"
    text="confirm"
    width="min"
  />
  <Button
    theme="green"
    icon="placeholder"
    iconPosition="right"
    text="confirm"
    width="default"
  />
  <Button
    theme="green"
    icon="placeholder"
    iconPosition="right"
    text="confirm"
    width="max"
  />`,
  };
  return (
    <>
      <Header>
        <img
          src="./LikeCoin_PressKit_LikerLand_Dark.svg"
          alt="LikeCoin_PressKit_LikerLand"
        />
      </Header>
      <AppContainer>
        <h1>Button Component</h1>
        <div>
          <h2>Props</h2>
          <hr />
          <Table>
            <table>
              <tbody>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>theme</td>
                  <td>string</td>
                  <td>white</td>
                  <td>One of green, cyan, white, outline, disabled.</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>string</td>
                  <td>placeholder</td>
                  <td>
                    File name of icon. feel free to replace default icon by
                    using 'full-screen', 'upload', 'language', 'next-grey',
                    'next-cyan'.
                  </td>
                </tr>
                <tr>
                  <td>iconPosition</td>
                  <td>string</td>
                  <td>left</td>
                  <td>
                    One of left or right, if the drop is set to true, the
                    iconPosition will be set left automatic.
                  </td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>string</td>
                  <td>-</td>
                  <td>
                    Button's content. If you want to use the icon button, set
                    the text to the empty string.
                  </td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>string</td>
                  <td>default</td>
                  <td>Three type of width: min, default, max.</td>
                </tr>
                <tr>
                  <td>drop</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Show the drop icon or not.</td>
                </tr>
                <tr>
                  <td>circle</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Change the button to a circle style.</td>
                </tr>
              </tbody>
            </table>
          </Table>
        </div>
        <div>
          <h2>Creation</h2>
          <hr />
          <Description>{`Simply create a button by using <Button/> component.`}</Description>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.creation}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button />
            </Demo>
          </Container>
        </div>
        <div>
          <h2>Demo</h2>
          <hr />
        </div>
        <section>
          <h4>Default</h4>
          <span>{`By default, all buttons will inherit <Button> props.`}</span>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.default}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button />
            </Demo>
          </Container>
        </section>
        <section>
          <h4>Icon button</h4>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.icon}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button circle={true} />
            </Demo>
          </Container>
        </section>
        <section>
          <h4>Full Screen button</h4>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.fullScreen}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button theme="cyan" icon="full-screen" text="Full Screen" />
              <Button theme="disabled" icon="full-screen" text="Full Screen" />
            </Demo>
          </Container>
        </section>
        <section>
          <h4>Upload, Next button</h4>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.upload}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button
                theme="white"
                icon="upload"
                iconPosition="right"
                text="Upload"
              />
              <Button
                theme="outline"
                icon="next-grey"
                iconPosition="right"
                text="Next"
              />
            </Demo>
          </Container>
        </section>
        <section>
          <h4>Languange button</h4>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.language}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
              />
            </CodeExample>
            <Demo>
              <Button
                theme="green"
                icon="language"
                text="Languange"
                drop={true}
              />
            </Demo>
          </Container>
        </section>
        <section>
          <h4>Confirm button</h4>
          <Container>
            <CodeExample>
              <CodeBlock
                language="jsx"
                text={btnExample.confirm}
                showLineNumbers={true}
                theme={purebasic}
                wrapLines={true}
                highlight="6,13,20"
              />
            </CodeExample>
            <Demo>
              <Button
                theme="green"
                icon="next-cyan"
                iconPosition="right"
                text="confirm"
                width="min"
              />
              <Button
                theme="green"
                icon="next-cyan"
                iconPosition="right"
                text="confirm"
                width="default"
              />
              <Button
                theme="green"
                icon="next-cyan"
                iconPosition="right"
                text="confirm"
                width="max"
              />
            </Demo>
          </Container>
        </section>
      </AppContainer>
    </>
  );
}

export default App;
