# Nuxt Component DPE

## How to use :

### 1. Install package

```js
npm install nuxt-component-dpe
```

### 2. Import package

```js
import { dpe, ges } from 'nuxt-component-dpe';
```

```js
export default {
  components: { dpe, ges }
}
```

### 3. Init component in Nuxt with values

- With Export Mode (PNG):
```js
<dpe value=100 type="logement" :style="'width:25%;'" exportMode="active"/>
```

```js
<ges value=20 type="logement" :style="'width:25%;'" exportMode="active"/>
```

- Without Export Mode (PNG):
```js
<dpe value=100 type="logement" :style="'width:25%;'"/>
```

```js
<dpe value=20 type="logement" :style="'width:25%;'"/>
```

With Export Mode (PNG)           |  Without Export Mode (PNG)
:-------------------------:|:-------------------------:
![](assets/dpe_with_export.PNG)  |  ![](assets/dpe_without_export.PNG)
With Custom CSS         |  Without Custom CSS
![](assets/custom_dpe_background_tertiaire.PNG)  |  ![](assets/nocustom_dpe_background_logement.PNG)

### 4. Parameters type :

```js
<dpe value=150 type="logement" :style="'width:25%;background: white;border: 1px solid;padding: 8px;'" exportMode="active"/>
````

```js
Valeurs possibles :
1. logement
2. tertiaire
3. public
4. bureaux
5. OccContinue
```

DPE          |  GES
:-------------------------:|:-------------------------:
logement|logement
![](assets/custom_dpe_background_logement.PNG)  |  ![](assets/custom_ges_background_logement.PNG)
tertiaire|tertiaire
![](assets/custom_dpe_background_tertiaire.PNG)  |  ![](assets/custom_ges_background_tertiaire.PNG)
public|public
![](assets/custom_dpe_background_public.PNG)  |  ![](assets/custom_ges_background_public.PNG)
bureaux|bureaux
![](assets/custom_dpe_background_bureaux.PNG)  |  ![](assets/custom_ges_background_bureaux.PNG)
OccContinue|OccContinue
![](assets/custom_dpe_background_occcontinue.PNG)  |  ![](assets/custom_ges_background_occcontinue.PNG)

### 5. Compatibility 

![](assets/Nuxtjs_logo.png)
