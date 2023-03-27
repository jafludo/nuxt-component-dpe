# Nuxt Component DPE


## How to use :

### 1. Install package
```
npm install nuxt-component-dpe
```

### 2. Import package

```
import dpe from 'nuxt-component-dpe';
```

```
export default {
  components: {dpe}
}
```

### 3. Init component in Nuxt with values

- With Export Mode (PNG):
```
<dpe valueDPE="0" :style="'width:25%;'" exportMode="active"/>
```

- Without Export Mode (PNG):
```
<dpe valueDPE="0" :style="'width:25%;'"/>
```

### 4. Result

With Export Mode (PNG)           |  Without Export Mode (PNG)
:-------------------------:|:-------------------------:
![](assets/dpe_with_export.PNG)  |  ![](assets/dpe_without_export.PNG)


### 5. Compatibility 

![](assets/Nuxtjs_logo.png)


