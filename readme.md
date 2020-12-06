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

## Conseil à appliquer

- Utiliser au maximum les fonctions pour les components. Si le components est simples, une classe ne sert à rien. En revanche si on une gestion de state, cycle de vie du components etc. 
- De meme pour les restes de l'applications, crée une classe est rarement nécessaire pour un projet JS (de gros projet JS se font entièrement avec des fonctions sans aucune logique objets)
- On utilise yarn et pas npm. C'est mieux pour ce projets : https://yarnpkg.com/
- Les appels API sont à faire dans le services 
- Pour le store : un dossier par module (state, reducer et action)
- Pour la documentation : On utilise la JS Doc : https://jsdoc.app/

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
