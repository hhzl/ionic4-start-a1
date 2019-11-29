
    ionic start ionic4-start-a1 blank --type=angular

    ionic generate page pages/choose-mode
    ionic generate page pages/learn-mode
    ionic generate page pages/practice-mode


Before

    <ion-header>
      <ion-toolbar>
        <ion-title>learn-mode</ion-title>
      </ion-toolbar>
    </ion-header>


After adding back button

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>learn-mode</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>



home.page.html


    <ion-button routerLink="/choose-mode" routerDirection="forward">choose mode</ion-button>
    <ion-button routerLink="/learn-mode" routerDirection="forward">learn mode</ion-button>
    <ion-button routerLink="/practice-mode" routerDirection="forward">practice mode</ion-button>


