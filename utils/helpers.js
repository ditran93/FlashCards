import React, { Component } from 'react'
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

export function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

const NOTIFICATION_KEY = 'FlashCards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function objectToArray(obj, key='key') {
  if (!obj) {
    return [];
  }
  const arrayOfKeys = Object.keys(obj)
  return arrayOfKeys.map(key => (obj[key]))
}

function createNotification () {
  return {
    title: 'Study Time!',
    body: "👋 don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}