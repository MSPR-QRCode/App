# MSPR QR CODE APP

Projets pour l'application MSP QRCode en React-Native.
Faites bien attention, on utilise yarn et pas npm.

## Bibliothèque importante

| Librairie           | Version |                                    Description |
| ------------------- | :-----: | ---------------------------------------------: |
| React               | 16.13.1 | Bibliothèque JS qui permet de manipuler le DOM |
| React-Navite        | 0.63.3  |      Permets de crée les applications hybrides |
| React-Navite-Camera | 3.40.0  |                           Gestion de la caméra |
| dayjs               |  1.9.6  |                              Gestion des dates |
| redux               |  4.0.5  |                 Gestion du store(state global) |
| react-redux         |  7.2.2  |         Gestion de redux plus facile sur react |

## Installer le projet

```
yarn install
```

## Lancer le projet

Pour setup votre environnement avant de lancer, lisez bien la documentation :
https://reactnative.dev/docs/environment-setup

### Lancer le projet sous Android

```
yarn run android

ou

npx react-native run-android
```

### Lancer le projet sous IOS

```
yarn run ios

ou

npx react-native run-ios
```

## IOS

Pour les IOS, il faudra faire les manipulations nécessaires. En regardant les documentations approprié !

```
cd ios
npx pod-install ios
```
