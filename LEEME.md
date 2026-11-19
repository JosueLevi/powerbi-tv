# Power BI en TV (carrusel de páginas)

Página web estática que muestra un informe de Power BI a pantalla completa y rota
sola entre sus páginas. No necesita servidor ni instalación: son dos archivos.

## 1. Consigue la URL del informe

Elige según quién pueda ver los datos:

| Opción | Dónde se saca | Inicio de sesión | Cuándo usarla |
|---|---|---|---|
| **Publicar en la web** | Archivo › Insertar informe › Publicar en la web | No | Datos que pueden ser **públicos** (cualquiera con el enlace los ve) |
| **Sitio web o portal** | Archivo › Insertar informe › Sitio web o portal | Sí, una vez, en el navegador de la TV | Datos internos; respeta permisos y RLS |

Pega la URL en `reportUrl` dentro de `config.js`.

## 2. Saca el `pageName` de cada página

Abre el informe en app.powerbi.com, ve a cada página y copia el último tramo de la URL:

```
https://app.powerbi.com/groups/…/reports/…/ReportSection1a2b3c4d5e
                                           └──── pageName ────┘
```

En informes recientes es un código hexadecimal sin «ReportSection»; cópialo igual.

```js
pages: [
  { pageName: "ReportSection1a2b3c4d5e", title: "Ventas",  seconds: 60 },
  { pageName: "9f8e7d6c5b4a",            title: "Stock",   seconds: 45 },
],
```

## 3. Ponlo en la TV

- **PC o mini-PC conectado por HDMI (lo más fiable):** abre Chrome o Edge en modo quiosco:
  ```
  msedge.exe --kiosk "file:///C:/ruta/powerbi-tv/index.html" --edge-kiosk-type=fullscreen
  ```
  Ponlo en el Inicio de Windows para que arranque solo.
- **Navegador de la propia Smart TV:** sube la carpeta a cualquier hosting estático
  (servidor interno, SharePoint, Azure Static Web Apps…) y abre esa URL.

### Publicarlo con GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. En el repositorio: **Settings › Pages › Build and deployment** › Source:
   *Deploy from a branch*, rama `main`, carpeta `/ (root)` › **Save**.
3. En uno o dos minutos la web queda en `https://<usuario>.github.io/<repositorio>/`.
   Abre esa dirección en la TV.

Cada cambio que subas a `main` se publica solo. La TV lo recoge en su próxima
recarga completa (`reloadEveryHours`, ahora 1 hora) o al recargarla a mano.

> Con el plan gratuito de GitHub el repositorio tiene que ser **público**, y
> `config.js` contiene el enlace del informe. La web publicada es accesible para
> cualquiera que conozca su dirección.

Si usas «Sitio web o portal», inicia sesión en app.powerbi.com una vez en ese
navegador. Si pide iniciar sesión en bucle, permite las cookies de terceros para
`app.powerbi.com` y `login.microsoftonline.com`.

## Controles (teclado o mando)

| Tecla | Acción |
|---|---|
| ← / → | Página anterior / siguiente |
| 1–9 | Ir a esa página |
| Espacio / Enter | Pausa / reanudar |
| R | Recargar la página actual |
| F (o clic) | Pantalla completa |
| H | Mostrar la ayuda |

## Cómo funciona

- Usa dos iframes: mientras uno se ve, el otro carga la siguiente página
  (`preloadSeconds` antes del cambio) y luego hace un fundido. Así no se ve el
  «cargando» de Power BI.
- Cada página se recarga cada vez que aparece, por lo que los datos se mantienen
  al día y se recupera sola de cortes de red.
- Cada `reloadEveryHours` horas recarga la web entera para liberar memoria y
  continúa en la misma página.
- Varias TVs con informes distintos: copia `config.js` como `config-almacen.js`
  y abre `index.html?config=config-almacen.js`.
