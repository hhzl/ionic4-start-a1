
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


Add about-page
     ionic generate page pages/about-page

home.page.html


Before
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Ionic 4 start a1
        </ion-title>
      </ion-toolbar>
    </ion-header>

After
    


    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="end">
            <span class="iconify" data-icon="ion:help-circle-outline" data-inline="false"></span>
          <button ion-button routerLink="/about-page" style="float: left; top: 10px; padding: 10px; width: 100%;"> 
            <ion-icon name="help-circle-outline" style="font-size: 25px;"></ion-icon>
          </button>
        </ion-buttons>
    
        <ion-title>Ionic 4 start a1</ion-title>
        </ion-toolbar>
    </ion-header>


about-page.page.html

Before
    <ion-header>
      <ion-toolbar>
        <ion-title>About ionic4-start-a1</ion-title>
      </ion-toolbar>
    </ion-header>

After
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>About ionic4-start-a1</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

home.page.html

Added attribute
    expand="block"
to the ion-buttons.
