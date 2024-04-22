# Sage [React] Chat Widget
[![circle-ci](https://img.shields.io/circleci/project/github/Wolox/react-chat-widget.svg)](https://circleci.com/gh/Wolox/react-chat-widget)
[![npm](https://img.shields.io/npm/v/react-chat-widget.svg)](https://www.npmjs.com/package/@ryaneewx/react-chat-widget)

Forked from [@ryaneewx/react-chat-widget](https://github.com/ryaneewx/react-chat-widget), original source code from [@Wolox/react-chat-widget](https://github.com/Wolox/react-chat-widget).

## Build Flow:
- Make any local changes (Make sure to test locally with `npm run start`)
- Do a version bump accordingly
- Generate the build files using `npm run build`
- Then push all the files into the repo
- Create a release with the version tag
- Use the new version tagged release as the package source 
```

  npm install https://github.com/ihassan-noon/sage-chat-widget/releases/tag/v[version]#:~:text=Source%20code,(zip)
  yarn add https://github.com/ihassan-noon/sage-chat-widget/releases/tag/v[version]#:~:text=Source%20code,(zip)

```


## Changelog (v3.4.0)

- Enhanced Input Focus: We've improved the input box's behavior to ensure that it regains focus effectively after toggling the `disabledInput` prop. This enhancement offers a smoother and more intuitive user interaction.

- Input Box Resizing: Made adjustments to the input box to prevent it from unintentionally expanding the chat window's width. This tweak ensures that the chat window maintains a consistent size for a better user experience.

- Emoji Picker Dimension Control: To prevent UI glitches, we've introduced constraints to ensure that the emoji picker doesn't expand beyond the chat window's dimensions, keeping the interface clean and user-friendly.

- Plain Text Input Enhancement: We've provided an option to force plain text inputs in the chat box, ensuring that only plain text is accepted, and styled texts are avoided.

- Plain Text Input Feature Toggle: Added the `disableRichTextInput` prop for better customization. This will be defaulted to `false` to maximize backwards compatibility. You may pass this prop as `true` to use the in-built function.

- Advice to Users: As with any update, we recommend testing these changes in a staging environment before implementing them in production. Given the refined IDs and class names, ensure any custom styles or scripts you've previously applied remain compatible. Your feedback is invaluable, so please share any thoughts or issues you might encounter.

## Changelog (v3.3.0)

- ResizableProps Interface: We've introduced the ResizableProps interface, allowing users to easily adjust the widget dimensions. By supplying heightOffset and widthOffset, you can now control the maximum height and width of the widget, offering a better fit for various interfaces.

- Enhanced Emoji Picker: To provide a better experience, we've transitioned from emoji-mart to emoji-picker-react. This ensures enhanced support and eliminates build type errors previously encountered. Alongside this, we've added .rcw-picker-icon for more personalized emoji picker stylings.

- Refined IDs and Class Names: In our commitment to reducing conflicts and promoting ease of use, we've renamed the messages ID to rcw-messages. We've also added a class to the subtitle, .rcw-subtitle, making it simpler for users to apply custom styles.

- Versatile x-resizer: The x-resizer has been revamped, now supporting both vertical and diagonal resizing. This change enhances the user interaction and provides more flexibility in adapting to different UI scenarios.

- Advice to Users: As with any update, we recommend testing these changes in a staging environment before implementing them in production. Given the refined IDs and class names, ensure any custom styles or scripts you've previously applied remain compatible. Your feedback is invaluable, so please share any thoughts or issues you might encounter.

## Features

- Plain text message UI
- Snippet style for links (only as responses for now)
- Fully customizable
- Easy to use

![demonstration](./assets/chat-demonstration.gif)

## Installation

#### npm
```bash
npm install --save react-chat-widget
```

#### yarn
```bash
yarn add react-chat-widget
```

## Usage

1- Add the Widget component to your root component

```js
import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
```

2- The only required prop you need to use is the `handleNewUserMessage`, which will receive the input from the user.

```js
import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;
```

3- Import the methods for you to add messages in the Widget. (See [messages](#messages))

```js
import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message through the backend API
    addResponseMessage(response);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;
```

4- Customize the widget to match your app design! You can add both props to manage the title of the widget and the avatar it will use. Of course, feel free to change the styles the widget will have in the CSS

```js
import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';

function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message through the backend API
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
}

export default App;

```

## API

#### Props

|prop|type|required|default value|description|
|---|--- |---     |---          |---        |
|**handleNewUserMessage**|(...args: any[]) => any|YES| |Function to handle the user input, will receive the full text message when submitted|
|**title**|string|NO|'Welcome'|Title of the widget|
|**subtitle**|string|NO|'This is your chat subtitle'|Subtitle of the widget|
|**senderPlaceHolder**|string|NO|'Type a message...'|The placeholder of the message input|
|**profileAvatar**|string|NO| |The profile image that will be set on the responses|
|**profileClientAvatar**|string|NO| |The profile image that will be set on the client messages|
|**titleAvatar**|string|NO| |The picture image that will be shown next to the chat title|
|**showCloseButton**|boolean|NO|false|Show or hide the close button in full screen mode|
|**fullScreenMode**|boolean|NO|false|Allow the use of full screen in full desktop mode|
|**autofocus**|boolean|NO|true|Autofocus or not the user input|
|**launcher**|(handleToggle) => ElementType|NO||Custom Launcher component to use instead of the default|
|**handleQuickButtonClicked**|(...args: any[]) => any|NO||Function to handle the user clicking a quick button, will receive the 'value' when clicked.|
|**showTimeStamp**|boolean|NO|true|Show time stamp on messages|
|**chatId**|string|NO|'rcw-chat-container'|Chat container id for a11y|
|**handleToggle**|(...args: any[]) => any|NO|'rcw-chat-container'|Function to handle when the widget is toggled, will receive the toggle status|
|**launcherOpenLabel**|string|NO|'Open chat'|Alt value for the launcher when closed|
|**launcherCloseLabel**|string|NO|'Close chat'|Alt value for the launcher when open|
|**launcherOpenImg**|string|NO|''|local or remote image url, if not provided it will show default image|
|**launcherCloseImg**|string|NO|''|local or remote image url, if not provided it will show default image|
|**sendButtonAlt**|string|NO|'Send'|Send button alt for a11y purposes|
|**handleTextInputChange**|(event) => any|NO| |Prop that triggers on input change|
|**disableRichTextInput**|boolean|NO|false|Prop that overrides handleTextInputChange with a simple function that strips rich text and formatted text from the user's inputs, especially from the clipboard.
|**handleSubmit**|(event) => any|NO| |Prop that triggers when a message is submitted, used for custom validation|
|**resizable**|boolean|NO|false|Prop that allows to resize the widget by dragging it's left border|
|**resizableProps**|object|NO|{heightOffset:105, widthOffset:35}|Prop that lets you set the maximum height and width if resizable==true. This is done by subtracting the supplied offset from the window's height and width.
|**emojis**|boolean|NO|false|enable emoji picker|
|**showBadge**|boolean|NO|true|Prop that allows to show or hide the unread message badge|

#### Styles

To change the styles of the widget, simply override the CSS classes wrapped within the containers and add your own styles to them! All classes are prefixed with rcw- to avoid overriding your other classes in case you are not using them. 

For example, to override a class, you can do the following:

```css
.rcw-conversation-container > .rcw-header {
  background-color: red;
}

.rcw-message > .rcw-response {
  background-color: black;
  color: white;
}
```

That way, you can keep the JS clean and keep the styles within the CSS.

#### Messages

As of v3.0, messages now have an optional ID that can be added on creation. If you want to add new messages, you can use the following methods:

- **addResponseMessage**
  - params:
    - text: string (supports markdown)
    - id: string (optional)
  - Method to add a new message written as a response to a user input.

- **addUserMessage**
  - params: 
    - text: string (supports markdown)
    - id: string (optional)
  - This method will add a new message written as a user. Keep in mind it will not trigger the prop handleNewUserMessage()

- **addLinkSnippet**
  - params:
    - link
  - Method to add a link snippet. You need to provide this method with a link object, which must be in the shape of:
    ```js
    {
      title: 'My awesome link',
      link: 'https://github.com/Wolox/react-chat-widget',
      target: '_blank'
    }
    ```
  - By default, `target` value is `_blank` which will open the link in a new window.

- **renderCustomComponent**
  - params: 
    - component: Component to be render,
    - props: props the component needs,
    - showAvatar: boolean, default value: false; the component will be rendered with the avatar like the messages
  - Method to render a custom component inside the messages container. With this method, you can add whatever component you need the widget to have.

- **setQuickButtons**
  - params:
    - buttons: An array of objects with the keys `label` and `value`

**Markdown is supported for both the responses and user messages.**

#### Widget behavior

You can also control certain actions of the widget:

- **toggleWidget**
  - params: No params expected
  - This method is to toggle the widget at will without the need to trigger the click event on the launcher

- **toggleInputDisabled**
  - params: No params expected
  - Method to toggle the availability of the message input for the user to write on

- **toggleMsgLoader**
  - Toggles the message loader that shows as a "typing..." style.

- **deleteMessages***
  - params:
    - count: messages to delete counting from last to first
    - id: message id to delete
  - Delete messages that either have an id you previously set with the `addResponseMessage` or delete based on position or both of them. For example `deleteMessages(2, 'myId')` will delete the message that has the id `myId` and the previous message.

- **markAllAsRead**
  - Marks all response messages as read. The user messages doesn't have the read/unread property.

- **setBadgeCount**
  - params:
    - count: number
  - As of v3.0, the `badge` prop is being changed to be managed from within the Widget. This method is manually set the badge number.

#### Widget components

##### Custom Launcher

You can use a custom component for the Launcher if you need one that's not the default, simply use the **launcher** prop:

```js
import React from 'react';
import { Widget } from 'react-chat-widget';

...

function MyApp() {
  const getCustomLauncher = (handleToggle) =>
    <button onClick={handleToggle}>This is my launcher component!</button>

  return (
    <Widget
      ...
      launcher={handleToggle => getCustomLauncher(handleToggle)}
    />
  )
}
```

`getCustomLauncher()` is a method that will return the `Launcher` component as seen in the example. By default, the function passed by that prop, will receive the `handleToggle` parameter which is the method that will toggle the widget.

## About

This is a personal fork to maintain compatibility with React 18 and beyond.

This project was originally authored by [Martín Callegari](https://github.com/mcallegari10) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)
