import Heading from "./components/heading/heading";
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello-world'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
