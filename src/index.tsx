import { Provider } from "react-redux";

import Widget from "./components/Widget";

import store from "./store";

import { AnyFunction } from "./utils/types";
import { ResizableProps } from "@types";

export type WidgetProps = {
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked?: AnyFunction;
  title?: string;
  titleAvatar?: string;
  subtitle?: string;
  primaryColor?: string;
  secondaryColor?: string;
  senderPlaceHolder?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  autofocus?: boolean;
  profileAvatar?: string;
  profileClientAvatar?: string;
  launcher?: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  disableRichTextInput?: boolean;
  chatId?: string;
  handleToggle?: AnyFunction;
  launcherOpenLabel?: string;
  launcherCloseLabel?: string;
  launcherCloseImg?: string;
  launcherOpenImg?: string;
  sendButtonAlt?: string;
  showTimeStamp?: boolean;
  imagePreview?: boolean;
  zoomStep?: number;
  emojis?: boolean;
  handleSubmit?: AnyFunction;
  showBadge?: boolean;
  resizable?: boolean;
  resizableProps?: ResizableProps;
};

type Props = WidgetProps & typeof defaultProps;

function ConnectedWidget({
  title,
  titleAvatar,
  subtitle,
  primaryColor,
  secondaryColor,
  senderPlaceHolder,
  showCloseButton,
  fullScreenMode,
  autofocus,
  profileAvatar,
  profileClientAvatar,
  launcher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  disableRichTextInput,
  chatId,
  handleToggle,
  launcherOpenLabel,
  launcherCloseLabel,
  launcherCloseImg,
  launcherOpenImg,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  handleSubmit,
  showBadge,
  resizable,
  resizableProps,
  emojis,
}: Props) {
  return (
    <Provider store={store}>
      <Widget
        title={title}
        titleAvatar={titleAvatar}
        subtitle={subtitle}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
        senderPlaceHolder={senderPlaceHolder}
        profileAvatar={profileAvatar}
        profileClientAvatar={profileClientAvatar}
        showCloseButton={showCloseButton}
        fullScreenMode={fullScreenMode}
        autofocus={autofocus}
        customLauncher={launcher}
        handleTextInputChange={handleTextInputChange}
        disableRichTextInput={disableRichTextInput}
        chatId={chatId}
        handleToggle={handleToggle}
        launcherOpenLabel={launcherOpenLabel}
        launcherCloseLabel={launcherCloseLabel}
        launcherCloseImg={launcherCloseImg}
        launcherOpenImg={launcherOpenImg}
        sendButtonAlt={sendButtonAlt}
        showTimeStamp={showTimeStamp}
        imagePreview={imagePreview}
        zoomStep={zoomStep}
        handleSubmit={handleSubmit}
        showBadge={showBadge}
        resizable={resizable}
        resizableProps={resizableProps}
        emojis={emojis}
      />
    </Provider>
  );
}

const defaultProps = {
  title: "Welcome",
  subtitle: "This is your chat subtitle",
  senderPlaceHolder: "Type a message...",
  showCloseButton: true,
  fullScreenMode: false,
  autofocus: true,
  chatId: "rcw-chat-container",
  launcherOpenLabel: "Open chat",
  launcherCloseLabel: "Close chat",
  launcherOpenImg: "",
  launcherCloseImg: "",
  sendButtonAlt: "Send",
  showTimeStamp: true,
  imagePreview: false,
  zoomStep: 80,
  showBadge: true,
};
ConnectedWidget.defaultProps = defaultProps;

export default ConnectedWidget;
