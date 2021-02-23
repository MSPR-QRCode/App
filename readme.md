# MSPR QR CODE APP

Projets pour l'application MSP QRCode en React-Native.
Faites bien attention, on utilise yarn et pas npm.

## Bibliothèque importante

| Librairie                    | Version |                                     Description |
| ---------------------------- | :-----: | ----------------------------------------------: |
| React                        | 16.13.1 |  Bibliothèque JS qui permet de manipuler le DOM |
| React-Navite                 | 0.63.3  |       Permets de crée les applications hybrides |
| React-Navite-Camera          | 3.40.0  |                            Gestion de la caméra |
| prop-types                   | 15.7.2  | Permets d'avoir une meilleurs gestion des props |
| react-native-vector-icons    |  7.1.0  |                           Icon de l'application |
| dayjs                        |  1.9.6  |                               Gestion des dates |
| redux                        |  4.0.5  |                  Gestion du store(state global) |
| react-redux                  |  7.2.2  |          Gestion de redux plus facile sur react |
| redux-persist                | 5.10.0  |         Permet de sauvegarder le state de redux |
| jest                         | 25.5.4  |                   bibliothèque de test unitaire |
| chail                        |  4.2.0  |           rend plus expressif les test unitaire |
| testing-library/react-native |  7.1.0  |     simplifie les test unitaire en react native |
| detox                        | 18.2.2  |                        bibliothèque de test E2E |
| jsdoc                        | 5.10.0  |              Permet l'écriture de documentation |
| better-docs                  |  2.3.2  |                 Ajout de fonctionnalité à jsdoc |

## Architecture du projet

- ./animations : Component d'animation
- ./components : Ensemble des component de l'application
- ./pages : Ensemble des pages de l'application
- ./navigations: Permet de gérer la navigation
- ./services : Fonctions qui sont utilisées à différents endroits de l'application. C'est ici que sont gérer les calls API.
- ./stores/actions : Ensemble des actions du store Redux
- ./stores/actionsTypes: Ensemble des types d'actions du store Redux (constante de type string)
- ./stores/reducers : Ensemble des reducers du store Redux
- ./styles : Styles partagés par différents Components.

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
