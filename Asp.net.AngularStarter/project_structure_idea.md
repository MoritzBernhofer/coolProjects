# project structure

`./backend/`
  - `/App.Api/`
    - Program.cs
    - `/Api/`
      - MapApis.cs 
      - `/SomethingApi/`
        - MapSomethingApi.cs
        - GetSomething.cs <br>
      - ...
    - `/App.Data/`
      - `/Migrations/..`
      - `/Models/`
        - Something.cs
        - ...
      - DataContext.cs
    - `/App.Logic/`
      - Service1.cs
    - `/App.Logic.Tests/`
      - SomethingTest.cs



`./frontend/`
  - `/src/`
    - `/app/`
      - `/component1/`
        - component1.component.ts
        - component1.component.css
        - component1.component.html
      - `/componentX/`
        - componentX.component.ts
        - componentX.component.css
        - componentX.component.html
      - app.component.ts
      - app.component.css
      - app.component.html **//important**
      - app.config.ts **//important**
      - app.routes.ts **//important**
      - service.ts
    - main.ts
    - index.html
    - styles.css
  - `/public/`
  - `/.vscode/`
  - `.gitignore`
  - `angular.json`
  - `package.json`
  - `tsconfig.json`
  - `package-lock.json`
  - `tsconfig.app.json`
  - `tsconfig.spec.json`

```shell
ng generate component component-name
```

```shell
ng generate service service-name
```

