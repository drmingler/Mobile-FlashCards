
// formatCard returns all the data needed by the quiz component in an easy to use format
import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "MobileFlash:notification";

export function formatCard(decks, title) {
  const card = decks[title].questions;
  const totalCardsInDeck = card.length;
  return {
    card,
    totalCardsInDeck
  };
}

export function calcPercentageScore(totalCardsInDeck, score) {
  return ((score / totalCardsInDeck) * 100).toFixed();
}


// Clear all previous notifications
export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
      Notifications.cancelAllScheduledNotificationsAsync
  );
}


// Create a reminder to notify users to take a quiz
export function createReminder() {
  return {
    title: "Take a quiz today",
    body: "👋 don't forget to take a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

// Set notifications
export async function setLocalNotification() {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const getNotificationData = JSON.parse(data);
  if (getNotificationData === null) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === "granted") {
      await Notifications.cancelAllScheduledNotificationsAsync();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(18);
      tomorrow.setMinutes(0);
       await Notifications.scheduleLocalNotificationAsync(createReminder(), {
        time: tomorrow,
        repeat: "day"
      });
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
}
