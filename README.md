# Mobile App for Experiences Platform

This is a React Native mobile app for the Experiences Platform. Follow the instructions below to set up the development environment and run the app on iOS and Android devices.

## Prerequisites

- Node.js
- Watchman
- Zulu JDK 11
- Android Studio

## Installation

1. Install dependencies.

```shell
brew install node
brew install watchman
brew tap homebrew/cask-versions
brew install --cask zulu11
```

2. Install Android Studio.

3. Configure environment variables. Add the following lines to ~/.zshrc:

```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

4. Initialize your React Native project using the latest version:

```shell
   npx react-native@latest init YourProjectName
```

5. Navigate to the android folder in your project and create or edit the local.properties file. Add the following line to point to your Android SDK:

```properties
sdk.dir = /Users/{username}/Library/Android/sdk
```

## Running the App

Start the React Native development server:

```shell
npx react-native start
```

In a separate terminal, run the app on an Android device or emulator:

```shell
npx react-native run-android
```

To run the app on an iOS device or simulator, navigate to the ios folder and install CocoaPods dependencies:

```shell
cd ios && pod install && cd ..
```

Run the app on an iOS device or simulator:

```shell
npx react-native run-ios
```

## Additional Resources

For more information on developing React Native apps, refer to the official documentation.
